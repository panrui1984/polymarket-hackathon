import { HttpClient } from '../lib/http-client';
import { GammaMarket, GammaQueryParams } from '@/types/gamma';
import { CONFIG } from '../config';

class GammaService extends HttpClient {
  constructor() {
    super({
      baseURL: CONFIG.GAMMA_API || 'https://gamma-api.polymarket.com',
      headers: {
        'User-Agent': 'polymarket-hackathon-Bot/1.0',
      },
    });
  }

  /**
   * 获取市场列表
   *
   * @param params 查询参数 (分页、筛选状态等)
   * @returns GammaMarket 数组
   */
  async getMarkets(params: GammaQueryParams = {}): Promise<GammaMarket[]> {

    const defaultParams = {
      limit: 100,
      offset: 0,
      closed: false,
    };

    const requestParams = { ...defaultParams, ...params };

    const cleanParams: any = {};
    for (const key in requestParams) {
      const value = requestParams[key as keyof typeof requestParams];
      if (value !== undefined && value !== null && value !== '') {
        cleanParams[key] = value;
      }
    }
    delete cleanParams.active;

    try {
      return await this.get<GammaMarket[]>('/markets', { params: cleanParams });
    } catch (error) {
      console.error(`❌ Gamma API Error params:`, cleanParams);
      throw error;
    }
  }
}

export const gammaService = new GammaService();
