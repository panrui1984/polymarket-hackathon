import prisma from '@/lib/prisma';
import { Prisma } from '~/generated/prisma/client';
import { formatUnits } from 'viem';

export async function handlePositionActivity(log: any, timestamp: Date) {
  const { stakeholder, conditionId, amount } = log.args;
  const type = log.eventName === 'PositionSplit' ? 'SPLIT' : 'MERGE';

  const market = await prisma.market.findUnique({
    where: { conditionId: conditionId },
  });
  if (!market) return;

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
      type: type,
      amount: new Prisma.Decimal(formatUnits(amount, 6)),
      timestamp: timestamp,
    },
    update: {},
  });
}
