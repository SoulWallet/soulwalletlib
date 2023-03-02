/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:44:34
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 10:48:58
 */

import { NumberLike } from "../defines/numberLike";

/**
 * transcation interface
 * @interface ITransaction
 * @property {string} from the from address
 * @property {string} data the data
 * @property {string} to the to address
 * @property {string} value the value
 */
export interface ITransaction {
    from?: string;
    data: string;
    to: string;
    value?: NumberLike;
    gasLimit?: NumberLike,
}
