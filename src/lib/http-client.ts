import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';

/**
 * 通用 HTTP 客户端配置接口
 */
interface HttpClientConfig extends AxiosRequestConfig {
  retryConfig?: IAxiosRetryConfig;
}

export class HttpClient {
  private instance: AxiosInstance;

  constructor(config: HttpClientConfig = {}) {
    this.instance = axios.create({
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    const defaultRetryConfig: IAxiosRetryConfig = {
      retries: 3,
      retryDelay: (retryCount: number) => {
        console.log(`⚠️ Request failed, retrying... (${retryCount})`);
        return retryCount * 1000;
      },
      retryCondition: (error: AxiosError) => {
        return (
          axiosRetry.isNetworkOrIdempotentRequestError(error) ||
          error.response?.status === 429
        );
      },
    };

    axiosRetry(this.instance, config.retryConfig || defaultRetryConfig);

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => {
        this.handleError(error);
        return Promise.reject(error);
      }
    );
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      console.error(
        `❌ HTTP Error [${error.response.status}] ${error.config?.url}:`,
        JSON.stringify(error.response.data).substring(0, 200)
      );
    } else if (error.request) {
      // 请求发出但无响应
      console.error(`❌ HTTP No Response ${error.config?.url}:`, error.message);
    } else {
      console.error(`❌ HTTP Setup Error:`, error.message);
    }
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get<any, T>(url, config);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post<any, T>(url, data, config);
  }
}
