import { BigNumber, ethers } from 'ethers';
import { NumberLike } from '../../../defines/numberLike';
import { UserOperation } from '../../../entity/userOperation';
import { IUserOperation } from '../../../interface/IUserOperation';
export declare class Arbitrum {
    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {UserOperation} op
     * @param {(BigNumber | NumberLike)} basefee
     * @param {string} entryPointAddress
     * @return {*}  {Promise<number>}
     * @memberof Arbitrum
     */
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation, basefee: BigNumber | NumberLike, entryPointAddress: string, from: string | undefined): Promise<number>;
    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {IUserOperation} op
     * @param {(BigNumber | NumberLike)} basefee
     * @param {string} entryPointAddress
     * @param {(string | undefined)} from
     * @return {*}  {Promise<number>}
     * @memberof Arbitrum
     */
    static L1GasLimit(l2Provider: ethers.providers.BaseProvider, op: IUserOperation): Promise<number>;
}
