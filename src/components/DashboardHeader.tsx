'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCcw, LogOut, BrainCircuit, Activity } from 'lucide-react';

export default function DashboardHeader() {
  const router = useRouter();
  const [isAlive, setIsAlive] = useState(false);

  // 定时检查后台任务状态
  useEffect(() => {
    const checkStatus = async () => {
      try {
        // const res = await fetch('/api/health');
        // const data = await res.json();
        setIsAlive(true); //mock
      } catch (err) {
        setIsAlive(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 10000); // 每10秒检查一次
    return () => clearInterval(interval);
  }, []);

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
          <BrainCircuit size={32} className={isAlive ? "animate-pulse" : ""} />
          Polymarket Hackathon
        </h1>
        <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
          AI-Powered Market Intelligence
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className={`flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-black shadow-sm transition-all duration-500 ${
          isAlive 
            ? "border-emerald-100 bg-emerald-50 text-emerald-600" 
            : "border-slate-200 bg-slate-50 text-slate-400"
        }`}>
          <div className="relative flex h-2 w-2">
            {isAlive && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            )}
            <span className={`relative inline-flex h-2 w-2 rounded-full ${isAlive ? "bg-emerald-500" : "bg-slate-300"}`}></span>
          </div>
          <span className="tracking-widest uppercase">
            {isAlive ? "后台任务 Active" : "后台任务 Offline"}
          </span>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
        >
          <RefreshCcw size={16} />
          刷新
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl border border-rose-100 bg-rose-50 px-5 py-2.5 text-sm font-bold text-rose-600 shadow-sm transition-all hover:bg-rose-100 active:scale-95"
        >
          <LogOut size={16} />
          退出
        </button>
      </div>
    </div>
  );
}