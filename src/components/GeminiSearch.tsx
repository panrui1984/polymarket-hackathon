'use client';

import React, { useState } from 'react';
import { Sparkles, Send, Loader2, BrainCircuit } from 'lucide-react';

export default function GeminiSearch() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer('抱歉，Gemini 暂时无法处理您的请求。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mb-10 w-full max-w-4xl">
      <div className="group relative">
        {/* 渐变边框效果 */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>

        <form
          onSubmit={handleSearch}
          className="relative flex items-center overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <div className="pl-5 text-indigo-500">
            <BrainCircuit size={24} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Gemini: Who is shorting the Fed market? / Show me whale trades in Bitcoin..."
            className="w-full p-5 font-medium text-slate-700 outline-none placeholder:text-slate-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="mr-3 rounded-xl bg-indigo-600 p-3 text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Send size={20} />
            )}
          </button>
        </form>
      </div>

      {/* AI 回答展示区 */}
      {(answer || loading) && (
        <div className="animate-in fade-in slide-in-from-top-4 mt-4 rounded-2xl border border-indigo-100 bg-white/80 p-6 shadow-lg backdrop-blur-md duration-500">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-indigo-100 p-1.5">
              <Sparkles size={16} className="text-indigo-600" />
            </div>
            <span className="text-xs font-black tracking-widest text-indigo-600 uppercase">
              Gemini Intelligence
            </span>
          </div>

          {loading ? (
            <div className="flex gap-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-400"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-.3s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-.5s]"></div>
            </div>
          ) : (
            <p className="text-sm leading-relaxed font-medium text-slate-700">
              {answer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
