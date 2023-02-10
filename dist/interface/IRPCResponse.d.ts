export interface IRPCError {
    code: number;
    message: string;
}
export interface IRPCResponse<T> {
    jsonrpc: string;
    id: number;
    result: T;
    error: IRPCError;
}
