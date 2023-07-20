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
- [paymasterAndData](UserOpReceipt.md#paymasteranddata)
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

[packages/soulwallet-sdk/src/interface/IBundler.ts:61](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L61)

___

### actualGasUsed

• **actualGasUsed**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:62](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L62)

___

### callData

• **callData**: `BytesLike`

#### Inherited from

UserOperation.callData

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:9

___

### callGasLimit

• **callGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.callGasLimit

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:10

___

### entryPoint

• **entryPoint**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:57](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L57)

___

### initCode

• **initCode**: `BytesLike`

#### Inherited from

UserOperation.initCode

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:8

___

### logs

• **logs**: `Log`[]

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:65](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L65)

___

### maxFeePerGas

• **maxFeePerGas**: `BigNumberish`

#### Inherited from

UserOperation.maxFeePerGas

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:13

___

### maxPriorityFeePerGas

• **maxPriorityFeePerGas**: `BigNumberish`

#### Inherited from

UserOperation.maxPriorityFeePerGas

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:14

___

### nonce

• **nonce**: `string`

#### Overrides

UserOperation.nonce

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:59](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L59)

___

### paymaster

• **paymaster**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:60](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L60)

___

### paymasterAndData

• **paymasterAndData**: `BytesLike`

#### Inherited from

UserOperation.paymasterAndData

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:15

___

### preVerificationGas

• **preVerificationGas**: `BigNumberish`

#### Inherited from

UserOperation.preVerificationGas

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:12

___

### reason

• **reason**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:64](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L64)

___

### receipt

• **receipt**: `TransactionReceipt`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:66](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L66)

___

### sender

• **sender**: `string`

#### Overrides

UserOperation.sender

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:58](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L58)

___

### signature

• **signature**: `BytesLike`

#### Inherited from

UserOperation.signature

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:16

___

### success

• **success**: `boolean`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:63](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L63)

___

### userOpHash

• **userOpHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:56](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/interface/IBundler.ts#L56)

___

### verificationGasLimit

• **verificationGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.verificationGasLimit

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:11
