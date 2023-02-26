/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-06 16:03:40
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 23:45:40
 */


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
