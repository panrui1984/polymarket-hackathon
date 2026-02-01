import { gammaService } from '@/services/gammas';
import { calTokenId } from '../utils';
import { CONFIG } from '../config';
import prisma from '../lib/prisma';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function syncMarkets() {
  console.log('🌍 Starting Market Discovery (Full Sync)...');
  const BATCH_SIZE = 100; 
  let offset = 0;
  let totalSynced = 0;
  let isScanning = true;
  try {
    while (isScanning) {
      const markets = await gammaService.getMarkets({
        limit: BATCH_SIZE,
        offset: offset,
        closed: false,
      });

      if (!markets || markets.length === 0) {
        console.log('🏁 No more markets found. Stopping.');
        break;
      }

      console.log(
        `📡 Fetching page: Offset ${offset} -> Got ${markets.length} markets`
      );

      // 2. 处理当前页数据
      for (const m of markets) {
        try {
          const { yesTokenId, noTokenId } = calTokenId(
            m.conditionId as `0x${string}`
          );

          let apiTokenIds: string[] = [];
          if (Array.isArray(m.clobTokenIds)) {
            apiTokenIds = m.clobTokenIds;
          } else if (typeof m.clobTokenIds === 'string') {
            try {
              apiTokenIds = JSON.parse(m.clobTokenIds);
            } catch {}
          }

          const hasYes = apiTokenIds.includes(yesTokenId);
          const hasNo = apiTokenIds.includes(noTokenId);

          // if (!hasYes || !hasNo) {
          //   // 校验失败，跳过
          //   continue;
          // }

          await prisma.market.upsert({
            where: { conditionId: m.conditionId },
            create: {
              slug: m.slug,
              conditionId: m.conditionId,
              questionId: (m as any).questionID || (m as any).questionId,
              oracle:
                CONFIG.UMA_ORACLE_ADDRESS ||
                '0x0000000000000000000000000000000000000000',
              outcomeCount: 2,
              enableNegRisk: (m as any).negRisk || false,
              //   yesTokenId: yesTokenId,
              //  noTokenId: noTokenId,
              yesTokenId: apiTokenIds[0],
              noTokenId: apiTokenIds[1],
              collateralToken: CONFIG.USDC_ADDRESS,
              title: m.question,
              status: m.active ? 'active' : m.closed ? 'resolved' : 'paused',
              createdAt: (m as any).createdAt
                ? new Date((m as any).createdAt)
                : new Date(),
              resolvedAt: m.closed && m.endDate ? new Date(m.endDate) : null,
            },
            update: {
              status: m.active ? 'active' : m.closed ? 'resolved' : 'paused',
              resolvedAt:
                m.closed && m.endDate ? new Date(m.endDate) : undefined,
              title: m.question,
              slug: m.slug,
            },
          });

          totalSynced++;
        } catch (innerError) {
          console.warn(`⚠️ Skipped market ${m.slug} due to error:`, innerError);
        }
      }

      if (markets.length < BATCH_SIZE) {
        isScanning = false;
        console.log(`✅ Reached end of list. Total synced: ${totalSynced}`);
      } else {
        offset += BATCH_SIZE;
        // 避免触发 429 Rate Limit
        await sleep(200);
      }
    }

    console.log('✨ Full Market Sync Completed.');
  } catch (e) {
    console.error('❌ Market Sync Failed in Main Loop:', e);
  }
}
