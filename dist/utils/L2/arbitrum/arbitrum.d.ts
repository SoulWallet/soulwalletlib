import { BigNumber, ethers } from 'ethers';
import { NumberLike } from '../../../defines/numberLike';
import { UserOperation } from '../../../entity/userOperation';
export declare class Arbitrum {
    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {UserOperation} op
     * @param {(BigNumber | NumberLike)} basefee
     * @param {string} entryPointAddress
     * @param {string} estimateGasHelper
     * @return {*}  {Promise<string>}
     * @memberof Arbitrum
     */
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation, basefee: BigNumber | NumberLike, entryPointAddress: string, estimateGasHelper: string): Promise<string>;
}
