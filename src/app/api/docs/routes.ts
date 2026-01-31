// src/app/api/docs/route.ts
import { NextResponse } from 'next/server';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'polymarket-hackathon API',
      version: '1.0.0',
    },
    servers: [{ url: '/' }],
  },
  apis: ['./src/app/api/**/*.ts', './app/api/**/*.ts'],
};

export async function GET() {
  try {
    const spec = swaggerJsdoc(options);
    return NextResponse.json(spec);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate docs' },
      { status: 500 }
    );
  }
}
