/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 15:49:42
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:15:08
 */

/**
 * transaction info
 * @class TransactionInfo
 * @property {string?} from the from address
 * @property {string?} to the to address
 * @property {string?} data the data
 */
export class TransactionInfo {
    from?: string;
    to?: string;
    data?: string;
}