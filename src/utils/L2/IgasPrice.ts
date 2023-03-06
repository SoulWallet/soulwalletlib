import { NumberLike } from "../../defines/numberLike";

/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-05 14:47:26
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-05 14:50:01
 */
export interface IGasPrice {
    maxFeePerGas: NumberLike;
    maxPriorityFeePerGas: NumberLike;
}