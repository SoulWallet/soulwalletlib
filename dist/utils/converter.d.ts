import { UserOperation } from "../entity/userOperation";
import { ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
export interface ITransaction {
    data: string;
    from: string;
    gas: string;
    to: string;
    value: string;
}
export declare class Converter {
    constructor();
    fromTransaction(etherProvider: ethers.providers.BaseProvider, entryPointAddress: string, transcations: ITransaction[], nonce?: number, maxFeePerGas?: NumberLike, maxPriorityFeePerGas?: NumberLike, paymasterAndData?: string): Promise<UserOperation | null>;
}
