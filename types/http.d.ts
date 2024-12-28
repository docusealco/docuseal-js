export interface HttpConfig {
    key: string;
    url: string;
    openTimeout: number;
}
export declare class DocusealApiError extends Error {
    constructor(message: string);
}
export declare class Http {
    private config;
    constructor(config: HttpConfig);
    get<T>(path: string, params?: Record<string, any>): Promise<T>;
    post<T>(path: string, data?: any): Promise<T>;
    put<T>(path: string, data?: any): Promise<T>;
    delete<T>(path: string, params?: Record<string, any>): Promise<T>;
    private request;
}
