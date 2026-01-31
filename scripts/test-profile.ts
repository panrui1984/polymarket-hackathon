import { profileTrader } from '../src/services/ai-trader-profiler';
import "dotenv/config";

async function test() {
  const testAddress = "0x4bFb41d5B3570DeFd03C39a9A4D8dE6Bd8B8982E"; 
  console.log(`🧪 Testing AI Profiler for ${testAddress}...`);
  await profileTrader(testAddress);
  console.log("✅ Done! Check your trader_profiles table in DB.");
}

test();