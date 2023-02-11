export declare class HttpRequest {
    static get(url: string, timeout?: number): Promise<any>;
    static post(url: string, data: any, timeout?: number): Promise<any>;
}
