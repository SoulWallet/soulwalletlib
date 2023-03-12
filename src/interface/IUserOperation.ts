import { NumberLike } from "../defines/numberLike";

/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-10 16:33:17
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-10 16:33:18
 */
export interface IUserOperation {
    sender: string;
    nonce: NumberLike;
    initCode: string;
    callData: string;
    callGasLimit: NumberLike;
    verificationGasLimit: NumberLike;
    preVerificationGas: NumberLike;
    maxFeePerGas: NumberLike;
    maxPriorityFeePerGas: NumberLike;
    paymasterAndData: string;
    signature: string;
}