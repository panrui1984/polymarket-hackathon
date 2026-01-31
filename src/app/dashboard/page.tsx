import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import {
  Search,
  RefreshCcw,
  Filter,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Activity,
  TrendingUp,
  BarChart3,
  Sparkles,
  BrainCircuit,
  LogOut,
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader'; // 引入新组件
import GeminiSearch from '@/components/GeminiSearch'; // 导入新组件
// --- 辅助工具函数 ---
const formatCurrency = (val: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  }).format(val);

function generatePageRange(current: number, total: number) {
  const range: (number | string)[] = [];
  const delta = 2;
  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }
  return range;
}

// --- 数据获取逻辑 ---
async function getDashboardData(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;

  const [markets, totalCount, activeCount] = await Promise.all([
    prisma.market.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { trades: true } },
        intelligence: true,
      },
    }),
    prisma.market.count(),
    prisma.market.count({ where: { status: 'active' } }),
  ]);

  const totalPages = Math.ceil(totalCount / pageSize);
  return { markets, totalCount, activeCount, totalPages };
}

// --- 主页面组件 ---
export default async function DashboardPage(props: {
  searchParams: Promise<{ page?: string; pageSize?: string }>;
}) {
  // Next.js 15 必须使用 await 处理 searchParams
  const searchParams = await props.searchParams;
  const currentPage = Math.max(1, parseInt(searchParams.page || '1'));
  const pageSize = Math.max(10, parseInt(searchParams.pageSize || '20'));

  const { markets, totalCount, activeCount, totalPages } =
    await getDashboardData(currentPage, pageSize);

  const startRange = (currentPage - 1) * pageSize + 1;
  const endRange = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6 text-slate-900 lg:p-10">
      {/* 1. Header & Live Indicator */}
      <DashboardHeader />
      <GeminiSearch />
      {/* 2. Stat Cards */}
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Total Markets"
          value={totalCount.toLocaleString()}
          icon={<BarChart3 className="text-indigo-500" />}
          color="bg-indigo-50"
        />
        <StatCard
          title="Active Markets"
          value={activeCount.toLocaleString()}
          icon={<Activity className="text-emerald-500" />}
          color="bg-emerald-50"
        />
        <StatCard
          title="24h Volume"
          value="$158.33M"
          icon={<TrendingUp className="text-purple-500" />}
          color="bg-purple-50"
        />
      </div>

      {/* 3. Search & Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="relative min-w-[300px] flex-1">
          <Search
            className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-300"
            size={18}
          />
          <input
            placeholder="Search markets by title or condition ID..."
            className="w-full rounded-xl border-none bg-slate-50 py-3 pr-4 pl-12 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <FilterBox label="AI Insight Status" value="All Analyzed" />
        <FilterBox label="Market Type" value="All Types" />
      </div>

      {/* 4. Main Table */}
      <div className="mb-6 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-50 bg-slate-50/30 px-8 py-4">
          <span className="text-sm font-bold text-slate-400">
            Showing{' '}
            <span className="text-indigo-600">
              {startRange}-{endRange}
            </span>{' '}
            of {totalCount}
          </span>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            Sort by: <span className="text-slate-900">Creation Date</span>
            <ChevronRight size={14} className="rotate-90" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-50 text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase">
                <th className="px-10 py-5">Market & AI Insight</th>
                <th className="px-6 py-5">Outcomes</th>
                <th className="px-6 py-5">Liquidity</th>
                <th className="px-6 py-5">End Date</th>
                <th className="px-6 py-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {markets.map((m) => (
                <tr
                  key={m.id}
                  className="group transition-colors hover:bg-slate-50/50"
                >
                  <td className="max-w-xl px-10 py-8">
                    <div className="flex items-start gap-4">
                      {/* Market Icon */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xl shadow-inner">
                        {m.title?.includes('Bitcoin')
                          ? '₿'
                          : m.title?.includes('Fed')
                            ? '🏛️'
                            : '🗳️'}
                      </div>

                      {/* Title & AI Intelligence Container */}
                      <div className="flex flex-col">
                        <Link href={`/dashboard/markets/${m.slug}`}>
                          <span className="cursor-pointer text-[15px] leading-snug font-extrabold text-slate-800 transition-colors group-hover:text-[#6366f1]">
                            {m.title || m.slug}
                          </span>
                        </Link>

                        {/* --- 🌟 Gemini AI 诊断框 --- */}
                        {m.intelligence && (
                          <div className="mt-3 flex items-start gap-2 rounded-xl border border-blue-100/30 bg-gradient-to-br from-blue-500/[0.03] to-purple-500/[0.03] p-3">
                            <div className="flex-shrink-0 rounded-md bg-indigo-600 p-1">
                              <Sparkles size={10} className="text-white" />
                            </div>
                            <div>
                              <p className="text-[11px] leading-relaxed text-slate-600">
                                <span className="font-black text-indigo-600">
                                  AI 诊断:{' '}
                                </span>
                                {m.intelligence.narrative}
                              </p>
                              <div className="mt-1.5 flex gap-3">
                                <span className="text-[10px] font-bold text-slate-400">
                                  AI 胜率:{' '}
                                  {Math.round(
                                    (m.intelligence.aiProbability || 0) * 100
                                  )}
                                  %
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">
                                  风险指数: {m.intelligence.riskScore}/100
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Outcomes Cell */}
                  <td className="px-6 py-8">
                    <div className="space-y-1.5 text-[12px] font-black">
                      <div className="flex w-32 justify-between rounded-lg border border-slate-100 bg-slate-50/50 p-2">
                        <span className="text-slate-400">YES</span>
                        <span className="text-emerald-500">50¢</span>
                      </div>
                      <div className="flex w-32 justify-between rounded-lg border border-slate-100 bg-slate-50/50 p-2">
                        <span className="text-slate-400">NO</span>
                        <span className="text-rose-500">50¢</span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-8">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-black text-slate-700">
                        $2.58M
                      </span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase">
                        Liquidity
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-8 text-[12px] font-bold text-slate-400">
                    {m.resolvedAt
                      ? m.resolvedAt.toLocaleDateString()
                      : '1/28/2026'}
                  </td>

                  <td className="px-6 py-8 text-center">
                    <span
                      className={`rounded-xl border px-4 py-2 text-[10px] font-black tracking-widest uppercase ${
                        m.status === 'active'
                          ? 'border-emerald-100 bg-emerald-50 text-emerald-500'
                          : 'border-slate-200 bg-slate-100 text-slate-400'
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5. Pagination Footer */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-50 bg-slate-50/20 px-10 py-8 sm:flex-row">
          <div className="text-sm font-black text-slate-400">
            PAGE <span className="text-slate-900">{currentPage}</span> /{' '}
            {totalPages}
          </div>

          <div className="flex items-center gap-1">
            <PaginationLink
              href={`?page=1&pageSize=${pageSize}`}
              disabled={currentPage <= 1}
              icon={<ChevronsLeft size={20} />}
            />
            <PaginationLink
              href={`?page=${currentPage - 1}&pageSize=${pageSize}`}
              disabled={currentPage <= 1}
              icon={<ChevronLeft size={20} />}
            />

            <div className="mx-4 flex items-center gap-1.5">
              {generatePageRange(currentPage, totalPages).map((p, idx) =>
                typeof p === 'number' ? (
                  <Link
                    key={idx}
                    href={`?page=${p}&pageSize=${pageSize}`}
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl text-xs font-black transition-all ${
                      currentPage === p
                        ? 'scale-110 bg-[#6366f1] text-white shadow-xl shadow-indigo-200'
                        : 'border border-transparent text-slate-400 hover:border-slate-100 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    {p}
                  </Link>
                ) : (
                  <span key={idx} className="px-2 font-bold text-slate-300">
                    ...
                  </span>
                )
              )}
            </div>

            <PaginationLink
              href={`?page=${currentPage + 1}&pageSize=${pageSize}`}
              disabled={currentPage >= totalPages}
              icon={<ChevronRight size={20} />}
            />
            <PaginationLink
              href={`?page=${totalPages}&pageSize=${pageSize}`}
              disabled={currentPage >= totalPages}
              icon={<ChevronsRight size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 封装 UI 子组件 ---

function StatCard({ title, value, icon, color }: any) {
  return (
    <div className="flex items-center justify-between rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:translate-y-[-4px]">
      <div>
        <p className="mb-2 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
          {title}
        </p>
        <h3 className="text-4xl font-black tracking-tighter text-slate-800">
          {value}
        </h3>
      </div>
      <div
        className={`h-16 w-16 ${color} flex items-center justify-center rounded-[1.25rem] shadow-inner`}
      >
        {icon}
      </div>
    </div>
  );
}

function FilterBox({ label, value }: any) {
  return (
    <div className="flex flex-col">
      <span className="mb-2 ml-1 text-[10px] font-black tracking-widest text-slate-400 uppercase">
        {label}
      </span>
      <div className="flex min-w-[180px] cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3 text-xs font-bold text-slate-600 transition-all hover:bg-slate-100">
        {value}
        <ChevronRight size={14} className="rotate-90 text-slate-300" />
      </div>
    </div>
  );
}

function PaginationLink({
  href,
  disabled,
  icon,
}: {
  href: string;
  disabled: boolean;
  icon: React.ReactNode;
}) {
  return disabled ? (
    <div className="flex h-10 w-10 cursor-not-allowed items-center justify-center text-slate-100">
      {icon}
    </div>
  ) : (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-2xl border border-transparent text-slate-400 transition-all hover:border-slate-100 hover:bg-white hover:text-[#6366f1] hover:shadow-md"
    >
      {icon}
    </Link>
  );
}
