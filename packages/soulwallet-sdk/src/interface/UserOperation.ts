export type Numeric = number | bigint;
export type BigNumberish = string | Numeric;
export type Address = string;
export type HexString = string;

export type UserOperation = {
    sender: Address;
    nonce: BigNumberish;
    initCode: HexString;
    callData: HexString;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: HexString;
    signature: HexString;
};