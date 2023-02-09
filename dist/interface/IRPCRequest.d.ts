export interface IRPCRequest<T> {
    jsonrpc: string;
    id: number;
    method: string;
    params: T;
}
