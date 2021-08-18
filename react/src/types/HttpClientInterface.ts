export interface HttpClientInterface {
    get<T = any, R = any>(url: string, config?: any): Promise<R>;
}