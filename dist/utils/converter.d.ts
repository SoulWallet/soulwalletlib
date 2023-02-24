import { UserOperation } from "../entity/userOperation";
import { ethers } from "ethers";
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
    from: string;
    data: string;
    to: string;
    value: string;
}
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
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @param {string} entryPointAddress the entry point address
     * @param {ITransaction[]} transcations the transcations
     * @param {NumberLike} nonce the nonce
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string?} paymasterAndData the paymaster and data
     * @returns {Promise<UserOperation | null>} the userOperation
     */
    fromTransaction(etherProvider: ethers.providers.BaseProvider, entryPointAddress: string, transcations: ITransaction[], nonce: NumberLike, maxFeePerGas: NumberLike, maxPriorityFeePerGas: NumberLike, paymasterAndData?: string): Promise<UserOperation | null>;
}
