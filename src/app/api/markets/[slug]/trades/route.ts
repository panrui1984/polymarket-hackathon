import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * @openapi
 * /markets/{slug}/trades:
 *   get:
 *     summary: 分页查询市场的历史交易记录
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 100
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: 交易列表
 */
export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const { searchParams } = new URL(request.url);

  const limit = parseInt(searchParams.get('limit') || '100');
  const offset = parseInt(searchParams.get('offset') || '0');

  // 1. 先通过 slug 找到 marketId
  const market = await prisma.market.findUnique({
    where: { slug: params.slug },
    select: { id: true },
  });

  if (!market) {
    return NextResponse.json({ error: 'Market not found' }, { status: 404 });
  }

  // 2. 查询该市场下的交易记录
  const trades = await prisma.trade.findMany({
    where: { marketId: market.id },
    take: limit,
    skip: offset,
    orderBy: { timestamp: 'desc' },
  });

  return NextResponse.json(trades);
}
