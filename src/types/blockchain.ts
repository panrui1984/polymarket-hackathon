// src/types/blockchain.ts

export type Address = `0x${string}`; // 使用 viem 的强类型风格

// 解码后的 OrderFilled 事件结构
export interface DecodedTradeLog {
  txHash: string;
  logIndex: number;
  blockNumber: bigint;
  maker: Address;
  taker: Address;
  makerAssetId: bigint;
  takerAssetId: bigint;
  makerAmount: bigint;
  takerAmount: bigint;
}

// 业务层处理后的交易结构 (准备入库前的中间态)
export interface ProcessedTrade {
  txHash: string;
  logIndex: number;
  marketId: number;
  outcome: 'YES' | 'NO';
  side: 'BUY' | 'SELL';
  price: number;
  size: number;
  timestamp: Date;
}
