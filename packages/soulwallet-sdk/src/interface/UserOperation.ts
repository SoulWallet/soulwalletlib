export type Numeric = number | bigint;
export type BigNumberish = string | Numeric;
export type Address = string;
export type HexString = string;
export type Bytes32 = HexString;


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
    paymaster: Address;
    paymasterVerificationGasLimit: BigNumberish;
    paymasterPostOpGasLimit: BigNumberish;
    paymasterData: HexString;
    signature: HexString;
};

export type PackedUserOperation = {
    sender: Address;
    nonce: BigNumberish;
    initCode: HexString;
    callData: HexString;
    accountGasLimits: Bytes32;
    preVerificationGas: BigNumberish;
    gasFees: Bytes32;
    paymasterAndData: HexString;
    signature: HexString;
};