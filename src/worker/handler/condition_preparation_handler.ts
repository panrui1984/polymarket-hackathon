import prisma from '@/lib/prisma';
import { CONFIG } from '@/config';
export async function handleConditionPreparation(log: any, timestamp: Date) {
  const { conditionId, oracle, questionId, outcomeSlotCount } = log.args;

  await prisma.market.upsert({
    where: { conditionId: conditionId },
    create: {
      conditionId,
      questionId,
      oracle,
      outcomeCount: Number(outcomeSlotCount),
      status: 'active',
      createdAt: timestamp,
      collateralToken: CONFIG.USDC_ADDRESS, // 默认 USDC.e
      yesTokenId: 'pending_' + conditionId,
      noTokenId: 'pending_' + conditionId,
    },
    update: {},
  });
}
