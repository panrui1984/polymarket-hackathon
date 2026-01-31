// src/types/gamma.ts

// 基础的市场结构
export interface GammaMarket {
  clobTokenIds: any;
  id: string;
  conditionId: string;
  questionID: string;
  slug: string;
  question: string; // 市场标题
  image?: string;
  active: boolean;
  closed: boolean;
  endDate: string; // ISO String
  liquidity: string;
  volume: string;

  // 嵌套结构也要定义清楚
  rewards?: {
    rates?: Array<{ asset_address: string; rewards_daily: number }>;
  };
}

// 查询参数类型
export interface GammaQueryParams {
  limit?: number;
  offset?: number;
  active?: boolean;
  closed?: boolean;
  slug?: string;
  order?: 'volume24hr' | 'liquidity' | 'created_at';
}
