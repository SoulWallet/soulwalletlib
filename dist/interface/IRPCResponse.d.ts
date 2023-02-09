export interface IRPCResponse<T> {
    jsonrpc: string;
    id: number;
    result: T;
}
