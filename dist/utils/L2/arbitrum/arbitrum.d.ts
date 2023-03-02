import { ethers } from 'ethers';
import { UserOperation } from '../../../entity/userOperation';
export declare class Arbitrum {
    static calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation): Promise<void>;
}
