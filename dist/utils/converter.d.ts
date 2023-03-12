import { UserOperation } from "../entity/userOperation";
import { NumberLike } from "../defines/numberLike";
import { ITransaction } from "../interface/ITransaction";
/**
 * converter class
 * @class Converter
 */
export declare class Converter {
    /**
     * @constructor
     */
    constructor();
    /**
     * convert transcations to userOperation
     * @param {ITransaction[]} transcations the transcations
     * @param {NumberLike} nonce the nonce
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string?} paymasterAndData the paymaster and data
     * @returns {UserOperation} the userOperation
     */
    fromTransaction(transcations: ITransaction[], nonce: NumberLike, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, paymasterAndData?: string): UserOperation;
}
