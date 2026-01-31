import prisma from '../lib/prisma';
import { generateMarketInsight } from '@/services/gemini';

export async function runGeminiSentinel() {
  console.log('🌟 Gemini Sentinel: Scanning for markets needing analysis...');

  const marketsToAnalyze = await prisma.market.findMany({
    where: {
      status: 'active',
      intelligence: null, // 只分析还没分析过的
      trades: { some: {} }, // 且至少有一笔交易
    },
    include: {
      trades: { take: 10, orderBy: { timestamp: 'desc' } },
    },
    take: 5,
  });

  for (const market of marketsToAnalyze) {
    try {
      const insight = await generateMarketInsight(
        market.title || '',
        market.trades
      );

      await prisma.marketIntelligence.create({
        data: {
          marketId: market.id,
          narrative: insight.narrative,
          aiProbability: insight.aiProbability,
          riskScore: insight.riskScore,
          sentiment: insight.sentiment,
        },
      });
      console.log(`✨ AI Intelligence attached to: ${market.title}`);
    } catch (e) {
      console.error(`❌ Gemini failed for market ${market.id}:`, e);
    }
  }
}
