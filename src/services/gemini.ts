import { GoogleGenerativeAI, SchemaType, Schema } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

const analysisSchema: Schema = {
  type: SchemaType.OBJECT,
  description: 'Market intelligence output',
  properties: {
    narrative: {
      type: SchemaType.STRING,
      description: "A summary of the market's current state",
    },
    aiProbability: {
      type: SchemaType.NUMBER,
      description: 'AI predicted probability (0-1)',
    },
    riskScore: {
      type: SchemaType.NUMBER,
      description: 'Risk score from 1-100',
    },
    sentiment: {
      type: SchemaType.STRING,
      description: 'Sentiment: Bullish/Bearish/Neutral',
    },
  },
  required: ['narrative', 'aiProbability', 'riskScore'],
};

export async function generateMarketInsight(
  marketTitle: string,
  trades: any[]
) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: analysisSchema,
    },
  });

  const prompt = `
    你是一个资深的预测市场分析师。分析以下 Polymarket 市场：
    标题: "${marketTitle}"
    最近 10 笔成交: ${JSON.stringify(trades)}
    
    请结合市场标题和成交动向（买卖方向、价格波动），给出一个专业的 JSON 深度分析。
  `;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}
