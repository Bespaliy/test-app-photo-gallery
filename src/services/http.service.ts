import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
type IConfig = { url: string } & AxiosRequestConfig;

class HttpService {
  private baseUrl: string;
  private client_id: string;
  private fetchingService = axios;

  constructor(baseUrl: string, client_id: string) {
    this.baseUrl = baseUrl;
    this.client_id = client_id;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}/?${this.client_id}`;
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: IConfig) {
    return configWithoutDataAndUrl;
  }

  private setHeaders(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
      };
    }
  }

  protected get(config: IConfig) {
    this.setHeaders(config);
    const { url } = config;
    const fullUrl = this.getFullApiUrl(url);
    const options = this.extractUrlAndDataFromConfig(config);
    return this.fetchingService.get(fullUrl, options);
  }

  protected getAll(config: IConfig) {
    this.setHeaders(config);
    const { url } = config;
    const fullUrl = this.getFullApiUrl(url);
    const options = this.extractUrlAndDataFromConfig(config);
    return this.fetchingService.get(fullUrl, options);
  }

  protected put(config: IConfig) {
    this.setHeaders(config);
    const { url, data } = config;
    const fullUrl = this.getFullApiUrl(url);
    const options = this.extractUrlAndDataFromConfig(config);
    return this.fetchingService.put(fullUrl, data, options);
  }

  protected post(config: IConfig) {
    this.setHeaders(config);
    const { url, data } = config;
    const fullUrl = this.getFullApiUrl(url);
    const options = this.extractUrlAndDataFromConfig(config);
    return this.fetchingService.post(fullUrl, data, options);
  }

  protected delete(config: IConfig) {
    this.setHeaders(config);
    const { url } = config;
    const fullUrl = this.getFullApiUrl(url);
    const options = this.extractUrlAndDataFromConfig(config);
    return this.fetchingService.delete(fullUrl, options);
  }
};

export default HttpService;
