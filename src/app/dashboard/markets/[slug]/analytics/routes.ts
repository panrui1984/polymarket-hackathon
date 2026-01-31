import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  req: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const market = await prisma.market.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (!market)
    return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // 1. 获取过去 24 小时的所有成交
  const last24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const trades = await prisma.trade.findMany({
    where: { marketId: market.id, timestamp: { gte: last24h } },
    orderBy: { timestamp: 'asc' },
  });

  // 2. 聚合走势数据 (按小时分组)
  const hourlyStats = trades.reduce((acc: any, trade) => {
    const hour =
      new Date(trade.timestamp).toISOString().substring(0, 13) + ':00';
    if (!acc[hour]) {
      acc[hour] = {
        time: hour,
        price: Number(trade.price),
        volume: 0,
        buys: 0,
        sells: 0,
      };
    }
    acc[hour].price = Number(trade.price); // 以每小时最后一笔成交作为价格点
    acc[hour].volume += Number(trade.size);
    trade.side === 'BUY' ? acc[hour].buys++ : acc[hour].sells++;
    return acc;
  }, {});

  return NextResponse.json({
    history: Object.values(hourlyStats),
    sentiment: {
      buyRatio:
        trades.filter((t) => t.side === 'BUY').length / (trades.length || 1),
      totalTrades: trades.length,
    },
  });
}
