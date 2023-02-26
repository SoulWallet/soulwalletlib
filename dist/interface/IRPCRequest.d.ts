/**
 * RPC Request
 *
 * @export
 * @interface IRPCRequest
 * @template T
 */
export interface IRPCRequest<T> {
    jsonrpc: string;
    id: number;
    method: string;
    params: T;
}
