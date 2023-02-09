/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-06 15:51:17
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-06 16:27:21
 */

export interface IRPCResponse<T> {
    jsonrpc: string;
    id: number;
    result: T;
}
