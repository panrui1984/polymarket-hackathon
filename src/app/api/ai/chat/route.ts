import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import prisma from '@/lib/prisma';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { message } = await req.json();

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    tools: [
      {
        functionDeclarations: [
          {
            name: 'query_trades',
            description: '查询特定方向的大额交易记录',
            parameters: {
              type: SchemaType.OBJECT,
              properties: {
                side: { type: SchemaType.STRING, description: 'BUY or SELL' },
                minUsdc: { type: SchemaType.NUMBER, description: '最小金额' },
              },
              required: ['side', 'minUsdc'],
            },
          },
        ],
      },
    ],
  });

  const chat = model.startChat();
  const result = await chat.sendMessage(message);

  // 处理函数调用逻辑（参考之前的详细步骤）...
  return NextResponse.json({ answer: result.response.text() });
}
