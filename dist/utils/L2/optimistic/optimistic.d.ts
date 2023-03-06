import { ethers } from 'ethers';
import { UserOperation } from '../../../entity/userOperation';
import { IGasPrice } from '../IgasPrice';
export declare class Optimistic {
    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {UserOperation} op
     * @return {*}  {Promise<IGasPrice>}
     * @memberof Optimistic
     */
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation): Promise<IGasPrice>;
}
