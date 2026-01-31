import { GoogleGenerativeAI, SchemaType, Schema } from '@google/generative-ai';
import prisma from '@/lib/prisma';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

const profileSchema: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    tags: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
    aiPersona: { type: SchemaType.STRING },
    tradingStyle: { type: SchemaType.STRING },
  },
  required: ['tags', 'aiPersona'],
};

export async function profileTrader(address: string) {
  // 1. 获取该地址最近 20 笔交易作为分析素材
  const trades = await prisma.trade.findMany({
    where: { taker: address },
    take: 20,
    orderBy: { timestamp: 'desc' },
    include: { market: true },
  });

  if (trades.length < 3) return; // 数据太少不画像

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: profileSchema,
    },
  });

  const prompt = `
    分析以下 Polymarket 交易者的行为数据：
    地址: ${address}
    交易历史: ${JSON.stringify(
      trades.map((t) => ({
        market: t.market.title,
        side: t.side,
        amount: t.size,
        outcome: t.outcome,
      }))
    )}

    请根据其进入市场的时机、成交规模和市场类型，生成一个专业的画像。
    如果是早期进入，标记为 "Early Bird"；如果单笔金额大，标记为 "Whale"；如果有对冲行为，标记为 "Hedger"。
  `;

  const result = await model.generateContent(prompt);
  const profile = JSON.parse(result.response.text());

  // 2. 存入数据库
  await prisma.traderProfile.upsert({
    where: { address },
    create: {
      address,
      tags: profile.tags,
      aiPersona: profile.aiPersona,
      totalVolume: trades.reduce((acc, t) => acc + Number(t.size), 0),
    },
    update: {
      tags: profile.tags,
      aiPersona: profile.aiPersona,
    },
  });
}
