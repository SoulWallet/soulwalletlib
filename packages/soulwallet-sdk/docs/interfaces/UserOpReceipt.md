[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / UserOpReceipt

# Interface: UserOpReceipt

**`Export`**

UserOpReceipt

## Hierarchy

- [`UserOperation`](../modules.md#useroperation)

  ↳ **`UserOpReceipt`**

## Table of contents

### Properties

- [actualGasCost](UserOpReceipt.md#actualgascost)
- [actualGasUsed](UserOpReceipt.md#actualgasused)
- [callData](UserOpReceipt.md#calldata)
- [callGasLimit](UserOpReceipt.md#callgaslimit)
- [entryPoint](UserOpReceipt.md#entrypoint)
- [initCode](UserOpReceipt.md#initcode)
- [logs](UserOpReceipt.md#logs)
- [maxFeePerGas](UserOpReceipt.md#maxfeepergas)
- [maxPriorityFeePerGas](UserOpReceipt.md#maxpriorityfeepergas)
- [nonce](UserOpReceipt.md#nonce)
- [paymaster](UserOpReceipt.md#paymaster)
- [paymasterData](UserOpReceipt.md#paymasterdata)
- [paymasterPostOpGasLimit](UserOpReceipt.md#paymasterpostopgaslimit)
- [paymasterVerificationGasLimit](UserOpReceipt.md#paymasterverificationgaslimit)
- [preVerificationGas](UserOpReceipt.md#preverificationgas)
- [reason](UserOpReceipt.md#reason)
- [receipt](UserOpReceipt.md#receipt)
- [sender](UserOpReceipt.md#sender)
- [signature](UserOpReceipt.md#signature)
- [success](UserOpReceipt.md#success)
- [userOpHash](UserOpReceipt.md#userophash)
- [verificationGasLimit](UserOpReceipt.md#verificationgaslimit)

## Properties

### actualGasCost

• **actualGasCost**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:61](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L61)

___

### actualGasUsed

• **actualGasUsed**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:62](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L62)

___

### callData

• **callData**: `string`

#### Inherited from

UserOperation.callData

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:12](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L12)

___

### callGasLimit

• **callGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.callGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:13](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L13)

___

### entryPoint

• **entryPoint**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:57](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L57)

___

### initCode

• **initCode**: `string`

#### Inherited from

UserOperation.initCode

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:11](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L11)

___

### logs

• **logs**: `Log`[]

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:65](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L65)

___

### maxFeePerGas

• **maxFeePerGas**: `BigNumberish`

#### Inherited from

UserOperation.maxFeePerGas

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:16](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L16)

___

### maxPriorityFeePerGas

• **maxPriorityFeePerGas**: `BigNumberish`

#### Inherited from

UserOperation.maxPriorityFeePerGas

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:17](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L17)

___

### nonce

• **nonce**: `string`

#### Overrides

UserOperation.nonce

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:59](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L59)

___

### paymaster

• **paymaster**: `string`

#### Overrides

UserOperation.paymaster

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:60](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L60)

___

### paymasterData

• **paymasterData**: `string`

#### Inherited from

UserOperation.paymasterData

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:21](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L21)

___

### paymasterPostOpGasLimit

• **paymasterPostOpGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.paymasterPostOpGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:20](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L20)

___

### paymasterVerificationGasLimit

• **paymasterVerificationGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.paymasterVerificationGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:19](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L19)

___

### preVerificationGas

• **preVerificationGas**: `BigNumberish`

#### Inherited from

UserOperation.preVerificationGas

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:15](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L15)

___

### reason

• **reason**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:64](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L64)

___

### receipt

• **receipt**: `TransactionReceipt`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:66](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L66)

___

### sender

• **sender**: `string`

#### Overrides

UserOperation.sender

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:58](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L58)

___

### signature

• **signature**: `string`

#### Inherited from

UserOperation.signature

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:22](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L22)

___

### success

• **success**: `boolean`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:63](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L63)

___

### userOpHash

• **userOpHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:56](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L56)

___

### verificationGasLimit

• **verificationGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.verificationGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:14](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L14)
