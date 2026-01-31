import prisma from '@/lib/prisma';
import { CONFIG } from '@/config';
export async function handleConditionPreparation(log: any, timestamp: Date) {
  const { conditionId, oracle, questionId, outcomeSlotCount } = log.args;

  // 如果数据库里还没这个市场，就先占个位，后续由 market-syncer 补全 slug/title
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
