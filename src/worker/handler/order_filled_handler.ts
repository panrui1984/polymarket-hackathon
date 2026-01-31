import { formatUnits } from 'viem';
import { Prisma } from '~/generated/prisma/client';
import prisma from '../../lib/prisma';

/**
 * 解析 OrderFilled 日志并返回待插入的 Trade 数据
 */
export async function handleOrderFilled(
  log: any,
  timestamp: Date,
  cache: Map<string, { marketId: number; outcome: 'YES' | 'NO' }>
): Promise<Prisma.TradeCreateManyInput | null> {
  const { transactionHash, logIndex, args } = log;
  if (!args || !transactionHash) return null;

  const {
    makerAssetId,
    takerAssetId,
    makerAmountFilled,
    takerAmountFilled,
    maker,
    taker,
  } = args as any;

  let side: 'BUY' | 'SELL';
  let tokenId: string;
  let usdcRawAmount: bigint;
  let tokenRawAmount: bigint;

  // 逻辑判定：0 代表 USDC (稳定币)
  if (makerAssetId === 0n) {
    side = 'BUY';
    tokenId = takerAssetId.toString();
    usdcRawAmount = makerAmountFilled;
    tokenRawAmount = takerAmountFilled;
  } else if (takerAssetId === 0n) {
    side = 'SELL';
    tokenId = makerAssetId.toString();
    usdcRawAmount = takerAmountFilled;
    tokenRawAmount = makerAmountFilled;
  } else {
    return null; // 忽略非 USDC 交易
  }
  console.log('解析  ');
  console.log(
    makerAssetId,
    takerAssetId,
    makerAmountFilled,
    takerAmountFilled,
    maker,
    taker
  );
  // 获取市场信息
  let marketInfo = cache.get(tokenId);
  console.log(marketInfo);
  if (!marketInfo) {
    const market = await prisma.market.findFirst({
      where: { OR: [{ yesTokenId: tokenId }, { noTokenId: tokenId }] },
      select: { id: true, yesTokenId: true },
    });

    if (market) {
      marketInfo = {
        marketId: market.id,
        outcome: tokenId === market.yesTokenId ? 'YES' : 'NO',
      };
      cache.set(tokenId, marketInfo);
    } else {
      console.warn(
        `⚠️ Market not found for tokenId: ${tokenId} in tx ${transactionHash}`
      );
      return null;
    }
  }

  // 计算数值
  const sizeVal = Number(formatUnits(tokenRawAmount, 6));
  const usdcVal = Number(formatUnits(usdcRawAmount, 6));
  if (sizeVal === 0) return null;
  const priceVal = usdcVal / sizeVal;

  // 返回 Trade 数据对象（不在此处执行写入，以便主循环批量处理）
  return {
    txHash: transactionHash,
    logIndex: Number(logIndex),
    marketId: marketInfo.marketId,
    tokenId: tokenId,
    outcome: marketInfo.outcome,
    side: side,
    price: new Prisma.Decimal(priceVal.toFixed(6)),
    size: new Prisma.Decimal(sizeVal.toFixed(6)),
    maker: maker,
    taker: taker,
    timestamp: timestamp,
  };
}
