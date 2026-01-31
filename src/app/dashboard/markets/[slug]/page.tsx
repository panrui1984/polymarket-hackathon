import React from 'react';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  History,
  Sparkles,
  User,
  Info,
  ShieldCheck,
  TrendingUp,
  Activity,
  ShieldAlert,
  Zap,
  BarChart3,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

// --- 模拟画像数据 (逻辑兼容) ---
const MOCK_PROFILES: Record<string, any> = {
  '0x6356FB47642a028BC09dF92023C35a21a0b41885': {
    tags: ['Whale', 'Early Bird', 'Smart Money'],
    aiPersona: '该用户通常在预测结果明朗前 48 小时重仓介入，历史胜率极高。',
  },
};

// --- 子组件：AI 交易者标签 ---
async function TraderBadges({ address }: { address: string }) {
  let profile = await prisma.traderProfile.findUnique({ where: { address } });
  if (!profile && MOCK_PROFILES[address]) profile = MOCK_PROFILES[address];

  if (!profile)
    return <span className="text-[10px] text-slate-300 italic">Retail</span>;

  return (
    <div className="mt-1 flex gap-1.5">
      {profile.tags.map((tag: string) => (
        <span
          key={tag}
          className="rounded-md border border-indigo-100 bg-indigo-50 px-1.5 py-0.5 text-[9px] font-black text-indigo-600 uppercase"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// --- 数据聚合函数 ---
async function getMarketAnalytics(slug: string) {
  const market = await prisma.market.findUnique({
    where: { slug },
    include: {
      intelligence: true,
      trades: { orderBy: { timestamp: 'desc' }, take: 100 },
    },
  });

  if (!market) return null;

  // 计算 24h 统计数据
  const last24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const trades24h = market.trades.filter(
    (t) => new Date(t.timestamp) >= last24h
  );

  const volume24h = trades24h.reduce((acc, t) => acc + Number(t.size), 0);
  const buyTrades = trades24h.filter((t) => t.side === 'BUY').length;
  const buyRatio = trades24h.length > 0 ? buyTrades / trades24h.length : 0.5;

  // 识别大额交易 (Whale Trades)
  const whaleTrades = market.trades
    .filter((t) => Number(t.size) >= 5000)
    .slice(0, 5);

  return {
    market,
    volume24h,
    buyRatio,
    totalTrades24h: trades24h.length,
    whaleTrades,
  };
}

export default async function MarketDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getMarketAnalytics(slug);

  if (!data) notFound();

  const { market, volume24h, buyRatio, totalTrades24h, whaleTrades } = data;
  const lastPrice = market.trades[0]?.price || 0.5;

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6 font-sans text-slate-900 lg:p-10">
      {/* 顶部导航 */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="group flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 transition-all hover:text-[#6366f1]"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />{' '}
          BACK TO TERMINAL
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
            Market Status:
          </span>
          <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600 uppercase">
            {market.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* 左侧栏 (8 columns): 核心看板 */}
        <div className="space-y-8 lg:col-span-8">
          {/* 1. 市场标题与 AI 概览 */}
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="relative z-10">
              <h1 className="mb-6 pr-20 text-3xl leading-tight font-black text-slate-800">
                {market.title}
              </h1>

              {market.intelligence && (
                <div className="rounded-[2rem] bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white shadow-2xl shadow-indigo-200">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles
                      size={20}
                      className="animate-pulse text-indigo-300"
                    />
                    <span className="text-[10px] font-black tracking-[0.2em] text-indigo-200 uppercase">
                      Gemini 2.0 Intelligence Narrative
                    </span>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed font-medium italic opacity-90">
                    "{market.intelligence.narrative}"
                  </p>
                  <div className="grid grid-cols-3 gap-8 border-t border-indigo-400/30 pt-6">
                    <InsightStat
                      label="AI Prob"
                      value={`${Math.round((market.intelligence.aiProbability || 0) * 100)}%`}
                    />
                    <InsightStat
                      label="Risk Score"
                      value={`${market.intelligence.riskScore}/100`}
                    />
                    <InsightStat
                      label="Sentiment"
                      value={market.intelligence.sentiment || 'Neutral'}
                    />
                  </div>
                </div>
              )}
            </div>
            <BarChart3 className="absolute -top-10 -right-10 -z-0 h-64 w-64 text-slate-50" />
          </div>

          {/* 2. 深度分析：情绪仪表盘 + 巨鲸哨兵 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* 情绪盘 */}
            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xs font-black tracking-widest text-slate-400 uppercase">
                  <Activity size={16} className="text-[#6366f1]" /> Market
                  Sentiment
                </h3>
                <Zap size={16} className="text-amber-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black text-slate-800">
                    {Math.round(buyRatio * 100)}%{' '}
                    <span className="text-xs text-slate-300 uppercase">
                      Bullish
                    </span>
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {totalTrades24h} Trades / 24h
                  </span>
                </div>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full bg-[#6366f1] transition-all duration-1000"
                    style={{ width: `${buyRatio * 100}%` }}
                  />
                  <div
                    className="h-full bg-rose-400 transition-all duration-1000"
                    style={{ width: `${(1 - buyRatio) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] leading-relaxed font-medium text-slate-400">
                  当前成交中买入订单占比显著。Gemini 认为市场处于{' '}
                  <span className="font-bold text-indigo-600">
                    {buyRatio > 0.6 ? '强力看涨' : '高频震荡'}
                  </span>{' '}
                  阶段。
                </p>
              </div>
            </div>

            {/* 巨鲸监测 */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-200">
              <h3 className="mb-6 flex items-center gap-2 text-xs font-black tracking-widest text-slate-500 uppercase">
                <ShieldAlert size={16} className="text-amber-400" /> Whale
                Activity Monitor
              </h3>
              <div className="relative z-10 space-y-3">
                {whaleTrades.length > 0 ? (
                  whaleTrades.map((wt, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 animate-ping rounded-full bg-amber-400" />
                        <span className="font-mono text-[11px] text-slate-300">
                          {wt.taker.slice(0, 10)}...
                        </span>
                      </div>
                      <span className="text-[11px] font-black text-amber-400">
                        +${Number(wt.size).toLocaleString()}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="py-4 text-center text-xs font-bold text-slate-500">
                    No whale trades detected in current batch
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. 实时交易流水（集成 AI画像） */}
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-50 bg-slate-50/30 px-8 py-6">
              <h3 className="flex items-center gap-2 text-sm font-black tracking-widest text-slate-800 uppercase">
                <History size={18} className="text-indigo-500" /> Live On-chain
                Feed
              </h3>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-white text-[10px] font-black text-slate-400 uppercase">
                  <th className="px-8 py-4">Time</th>
                  <th className="px-6 py-4">Action</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Value</th>
                  <th className="px-6 py-4">Trader Intelligence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {market.trades.map((t) => (
                  <tr
                    key={t.txHash + t.logIndex}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-8 py-6 text-xs font-bold text-slate-400">
                      {new Date(t.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={`rounded-md border px-2 py-1 text-[10px] font-black ${t.side === 'BUY' ? 'border-emerald-100 bg-emerald-50 text-emerald-600' : 'border-rose-100 bg-rose-50 text-rose-600'}`}
                      >
                        {t.side}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm font-black text-slate-700">
                      {(Number(t.price) * 100).toFixed(1)}¢
                    </td>
                    <td className="px-6 py-6 text-sm font-black text-slate-700">
                      ${Number(t.size).toLocaleString()}
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[11px] font-black text-slate-400">
                          {t.taker.slice(0, 6)}...{t.taker.slice(-4)}
                        </span>
                        <TraderBadges address={t.taker} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧栏 (4 columns): 合约详情与操作 */}
        <div className="space-y-6 lg:col-span-4">
          {/* 实时报价卡片 */}
          <div className="rounded-[3rem] bg-[#6366f1] p-10 text-white shadow-2xl shadow-indigo-200">
            <p className="mb-2 text-[10px] font-black tracking-[0.2em] text-indigo-200 uppercase">
              Live Market Probability
            </p>
            <h2 className="mb-6 text-6xl font-black tracking-tighter">
              {(Number(lastPrice) * 100).toFixed(1)}%
            </h2>
            <div className="mb-8 space-y-4">
              <div className="flex justify-between border-b border-indigo-400/30 pb-2 text-xs font-bold">
                <span className="text-indigo-100 opacity-70">24h Volume</span>
                <span>${volume24h.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-indigo-400/30 pb-2 text-xs font-bold">
                <span className="text-indigo-100 opacity-70">
                  Liquidity (EST)
                </span>
                <span>$2.58M</span>
              </div>
            </div>
            <Link
              href={`https://polymarket.com/event/${market.slug}`}
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-sm font-black text-[#6366f1] shadow-xl transition-all hover:bg-indigo-50"
            >
              TRADE ON POLYMARKET <ExternalLink size={14} />
            </Link>
          </div>

          {/* 合约规范 */}
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="mb-6 flex items-center gap-2 text-xs font-black tracking-widest text-slate-400 uppercase">
              <ShieldCheck size={16} className="text-emerald-500" /> Contract
              Specs
            </h3>
            <div className="space-y-5">
              <SpecRow label="Condition ID" value={market.conditionId} isMono />
              <SpecRow label="Oracle Address" value={market.oracle} isMono />
              <SpecRow label="Collateral" value="USDC.e (Polygon)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 封装 UI 子组件 ---
function InsightStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="mb-1 text-[9px] font-black tracking-widest text-indigo-300 uppercase">
        {label}
      </span>
      <span className="text-sm font-black text-white">{value}</span>
    </div>
  );
}

function SpecRow({
  label,
  value,
  isMono = false,
}: {
  label: string;
  value: string;
  isMono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[9px] font-black tracking-widest text-slate-300 uppercase">
        {label}
      </span>
      <span
        className={`text-[10px] leading-relaxed font-bold break-all text-slate-600 ${isMono ? 'rounded-lg border border-slate-100 bg-slate-50 p-2 font-mono' : ''}`}
      >
        {value}
      </span>
    </div>
  );
}
