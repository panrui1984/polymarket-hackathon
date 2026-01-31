'use client'; // 只有这个小组件是客户端组件

import React from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCcw, LogOut, BrainCircuit } from 'lucide-react';

export default function DashboardHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', { method: 'POST' });
    if (res.ok) {
      router.push('/login');
      router.refresh();
    }
  };

  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="flex items-center gap-3 text-3xl font-black tracking-tight text-[#6366f1]">
          <BrainCircuit size={32} />
          Polymarket hackathon
        </h1>
        <p className="mt-1 text-sm font-medium tracking-widest text-slate-400 uppercase"></p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600 shadow-sm sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          NODE LIVE
        </div>

        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition-all hover:bg-slate-50"
        >
          <RefreshCcw size={16} />
          Refresh
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl border border-rose-100 bg-rose-50 px-5 py-2.5 text-sm font-bold text-rose-600 shadow-sm shadow-rose-100 transition-all hover:bg-rose-100"
        >
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </div>
  );
}
