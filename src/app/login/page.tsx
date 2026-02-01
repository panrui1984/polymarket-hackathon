'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, BarChart3, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/');
      router.refresh();
    } else {
      setError('Invalid credentials. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] text-white">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md p-8">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20">
            <BarChart3 size={28} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Polymarket Data Dashboard 
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
           
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Username
            </label>
            <div className="relative">
              <User
                className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-2.5 pr-4 pl-10 text-zinc-200 transition-all focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
                placeholder="admin"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-2.5 pr-4 pl-10 text-zinc-200 transition-all focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && <p className="text-xs text-red-400 italic">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 font-semibold text-black transition-colors hover:bg-zinc-200 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-xs tracking-widest text-zinc-500 uppercase">
          Secured Access
        </p>
      </div>
    </div>
  );
}
