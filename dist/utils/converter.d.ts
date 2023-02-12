import { UserOperation } from "../entity/userOperation";
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
    fromTransaction(transcations: ITransaction[], nonce?: NumberLike, maxFeePerGas?: NumberLike, maxPriorityFeePerGas?: NumberLike, paymasterAndData?: string): Promise<UserOperation | null>;
}
