// worker/index.ts
import { prisma } from '../lib/prisma';
import { startIndexer } from './market-trades-indexer';
import { syncMarkets } from './market-syncer';
import { runGeminiSentinel } from './gemini-sentinel';

async function startWorker() {
  console.log('⚙️ Starting Worker Process...');

  // 捕获全局未处理的错误
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });

  try {
    // 1. 市场同步任务
    // console.log("📅 Scheduling Market Syncer...");
    // const runSync = async () => {
    //     try {
    //         await syncMarkets();
    //     } catch (e) {
    //         console.error("❌ Market Sync Task Failed:", e);
    //     }
    // };

    // await runSync(); // 初始同步
    // setInterval(runSync, 1000 * 60 * 10); // 每10分钟

    // ---------------------------------------------------------
    // 2. 启动 Gemini AI 智能分析任务 (每 15 分钟运行一次)
    // ---------------------------------------------------------
    console.log('🌟 Scheduling Gemini Sentinel AI Analyst...');
    const runAITask = async () => {
      try {
        console.log('🤖 AI Sentinel: Checking for markets to analyze...');
        await runGeminiSentinel();
      } catch (e) {
        console.error('❌ Gemini Sentinel Task Failed:', e);
      }
    };
    // 延迟 30 秒启动 AI，确保 Market 和 Trade 已经抓取了一部分数据
    setTimeout(async () => {
      await runAITask();
      setInterval(runAITask, 1000 * 60 * 15); // 每 15 分钟分析一次
    }, 30000);
    // 2. 交易索引任务 (死循环)
    // console.log("🚀 Starting Trade Indexer Loop...");
    // await startIndexer();
  } catch (err) {
    console.error('❌ Worker Crashed:', err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

startWorker();
