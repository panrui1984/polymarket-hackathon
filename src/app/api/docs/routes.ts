import { NextResponse } from 'next/server';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Polymarket Indexer API', version: '1.0.0' },
    // ✅ 这里的 servers 定义必须匹配你的 API 前缀
    servers: [{ url: '/' }], 
  },
  // ✅ 关键：确保扫描路径匹配你的实际项目结构（是否有 src）
  apis: ['./src/app/api/**/*.ts', './app/api/**/*.ts'], 
};

export async function GET() {
  const spec = swaggerJsdoc(options);
  return NextResponse.json(spec);
}