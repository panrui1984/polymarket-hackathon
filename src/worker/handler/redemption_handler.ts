import { Prisma } from '~/generated/prisma/client';
import { formatUnits } from 'viem';
import prisma from '@/lib/prisma';
export async function handleRedemption(log: any, timestamp: Date) {
  const { redeemer, conditionId, payout } = log.args;
  const market = await prisma.market.findUnique({
    where: { conditionId: conditionId },
  });
  if (!market) return;

  await prisma.redemption.create({
    data: {
      txHash: log.transactionHash,
      logIndex: Number(log.logIndex),
      marketId: market.id,
      user: redeemer,
      payout: new Prisma.Decimal(formatUnits(payout, 6)),
      timestamp: timestamp,
    },
  });
}
