/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-13 23:27:04
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 23:46:20
 */

/**
 * token approve data interface
 *
 * @export 
 * @interface IApproveToken
 * @property {string} token the token address
 * @property {string} spender the spender address
 * @property {string?} value the approve value
 */
export interface IApproveToken {
    token: string;
    spender: string;
    value?: string;
}