import { Prisma } from '~/generated/prisma/client';
import { formatUnits } from 'viem';
import prisma from '@/lib/prisma';
export async function handlePositionSplit(log: any, timestamp: Date) {
  const { stakeholder, conditionId, amount } = log.args;

  // 1. 查找对应的市场
  const market = await prisma.market.findUnique({
    where: { conditionId: conditionId },
    select: { id: true },
  });

  if (!market) {
    // 如果找不到市场，说明该 Condition 可能还未被我们的 Syncer 录入
    console.warn(`[Split] Market not found for conditionId: ${conditionId}`);
    return;
  }

  // 2. 写入数据库
  try {
    await prisma.positionActivity.upsert({
      where: {
        txHash_logIndex: {
          txHash: log.transactionHash,
          logIndex: Number(log.logIndex),
        },
      },
      create: {
        txHash: log.transactionHash,
        logIndex: Number(log.logIndex),
        marketId: market.id,
        user: stakeholder,
        type: 'SPLIT',
        amount: new Prisma.Decimal(formatUnits(amount, 6)),
        timestamp: timestamp,
      },
      update: {}, 
    });

    console.log(
      `💎 Position Split: ${stakeholder} deposited ${formatUnits(amount, 6)} USDC into Market #${market.id}`
    );
  } catch (err) {
    console.error('Error saving PositionSplit:', err);
  }
}
