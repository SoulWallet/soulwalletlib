import { BigNumber, ethers } from 'ethers';
import { NumberLike } from '../../../defines/numberLike';
import { UserOperation } from '../../../entity/userOperation';
import { IGasPrice } from '../IgasPrice';
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
     * @return {*}  {Promise<IGasPrice>}
     * @memberof Arbitrum
     */
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation, basefee: BigNumber | NumberLike, entryPointAddress: string, estimateGasHelper: string, from: string | undefined): Promise<IGasPrice>;
}
