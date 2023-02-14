/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-13 23:27:04
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-13 23:27:06
 */

export interface IApproveToken {
    token: string;
    spender: string;
    value?: string;
}