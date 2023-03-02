import { ethers } from 'ethers';
import { UserOperation } from '../../../entity/userOperation';
export declare class Optimistic {
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation): Promise<string>;
}
