/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-06 15:51:17
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-10 16:19:37
 */

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
