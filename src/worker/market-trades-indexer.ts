// src/worker/market-trades-indexer.ts
import {
  createPublicClient,
  http,
  decodeEventLog,
  parseAbi,
  parseAbiItem,
} from 'viem';
import { polygon } from 'viem/chains';
import { Prisma } from '~/generated/prisma/client';
import prisma from '../lib/prisma';
import { CONFIG, ALL_EVENTS_ABI } from '../config';

import { handleOrderFilled } from './handler/order_filled_handler';
import { handlePositionSplit } from './handler/position_split_handler';
import { handleRedemption } from './handler/redemption_handler';
import { handleConditionPreparation } from './handler/condition_preparation_handler';
import { handlePositionActivity } from './handler/position_merge_handler';
import { profileTrader } from '@/services/ai-trader-profiler';

const client = createPublicClient({
  chain: polygon,
  transport: http(CONFIG.RPC_URL, {
    retryCount: 5,
    retryDelay: 2000,
    timeout: 60000,
  }),
});

// 解析主 ABI 和 备用 ABI
const mainAbi = parseAbi(ALL_EVENTS_ABI);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tokenMarketCache = new Map<
  string,
  { marketId: number; outcome: 'YES' | 'NO' }
>();

export async function startIndexer() {
  console.log('🚀 Starting Multi-Event Trade Indexer (Multi-ABI Support)...');

  while (true) {
    try {
      const state = await prisma.syncState.upsert({
        where: { key: 'trade_indexer' },
        create: { key: 'trade_indexer', lastBlock: BigInt(CONFIG.START_BLOCK) },
        update: {},
      });

      const currentChainBlock = await client.getBlockNumber();
      const fromBlock = state.lastBlock + 1n;
      const safeHead = currentChainBlock - BigInt(CONFIG.REORG_DELAY);

      if (fromBlock > safeHead) {
        console.log(`💤 Fully synced at ${safeHead}. Waiting...`);
        await sleep(5000);
        continue;
      }

      const targetEndBlock = fromBlock + BigInt(CONFIG.BATCH_SIZE) - 1n;
      const toBlock = targetEndBlock > safeHead ? safeHead : targetEndBlock;

      const rawLogs = await client.getLogs({
        address: [
          CONFIG.CTF,
          ...CONFIG.EXCHANGE_ADDRESSES,
          CONFIG.NEG_RISK_ADAPTER,
        ] as `0x${string}`[],
        fromBlock,
        toBlock,
      });

      if (rawLogs.length === 0) {
        await prisma.syncState.update({
          where: { key: 'trade_indexer' },
          data: { lastBlock: toBlock },
        });
        continue;
      }

      const uniqueBlockNumbers = [
        ...new Set(rawLogs.map((l) => l.blockNumber)),
      ].filter((b): b is bigint => b !== null);
      const blockTimeMap = new Map<string, Date>();

      await Promise.all(
        uniqueBlockNumbers.map(async (bn) => {
          try {
            const block = await client.getBlock({ blockNumber: bn });
            blockTimeMap.set(
              bn.toString(),
              new Date(Number(block.timestamp) * 1000)
            );
          } catch (e) {
            blockTimeMap.set(bn.toString(), new Date());
          }
        })
      );

      const tradesToInsert: Prisma.TradeCreateManyInput[] = [];

      for (const rawLog of rawLogs) {
        const timestamp =
          blockTimeMap.get(rawLog.blockNumber!.toString()) || new Date();
        let decoded: any;

        try {
          // 1. 优先尝试主 ABI 解析 (NegRisk 规格)
          decoded = decodeEventLog({
            abi: mainAbi,
            data: rawLog.data,
            topics: rawLog.topics,
          });
        } catch (err) {
          continue;
        }

        const fullLog = { ...rawLog, ...decoded };
        console.log(fullLog.eventName);
        switch (fullLog.eventName) {
          case 'OrderFilled':
            const tradeData = await handleOrderFilled(
              fullLog,
              timestamp,
              tokenMarketCache
            );
            if (tradeData) tradesToInsert.push(tradeData);
            break;
          case 'PositionSplit':
            await handlePositionSplit(fullLog, timestamp);
            break;
          case 'PositionsMerge':
            await handlePositionActivity(fullLog, timestamp);
            break;
          case 'PayoutRedemption':
            await handleRedemption(fullLog, timestamp);
            break;
          case 'ConditionPreparation':
            await handleConditionPreparation(fullLog, timestamp);
            break;
          case 'OrdersMatched':
          default:
            // 忽略不需要入库的事件
            break;
        }
      }

      // 5. 数据库事务：批量写入交易并更新同步高度
      await prisma.$transaction(
        async (tx) => {
          if (tradesToInsert.length > 0) {
            await tx.trade.createMany({
              data: tradesToInsert,
              skipDuplicates: true,
            });
            console.log(`✅ Indexed ${tradesToInsert.length} trades.`);

            // 🚀 创新逻辑：检测巨鲸并触发异步 AI 画像
            for (const trade of tradesToInsert) {
              // 阈值：单笔成交大于等于 5000 USDC
              if (Number(trade.size) >= 5000) {
                console.log(
                  `🎯 Whale detected: ${trade.taker}. Calling Gemini Profiler...`
                );

                // 异步调用，不阻塞数据库事务和索引器主流程
                profileTrader(trade.taker).catch((err) =>
                  console.error(
                    `❌ AI Profiling failed for ${trade.taker}:`,
                    err.message
                  )
                );
              }
            }
          }

          await tx.syncState.update({
            where: { key: 'trade_indexer' },
            data: { lastBlock: toBlock },
          });
        },
        { timeout: 45000 }
      );
    } catch (error: any) {
      console.error('❌ Indexer critical error:', error.message);
      await sleep(error.message.includes('429') ? 15000 : 5000);
    }
  }
}
