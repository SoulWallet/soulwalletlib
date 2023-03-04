import { ethers } from 'ethers';
import { UserOperation } from '../../../entity/userOperation';
export declare class Optimistic {
    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {UserOperation} op
     * @return {*}  {Promise<string>}
     * @memberof Optimistic
     */
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation): Promise<string>;
}
