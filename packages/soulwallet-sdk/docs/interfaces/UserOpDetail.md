[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / UserOpDetail

# Interface: UserOpDetail

**`Export`**

UserOpDetail

## Hierarchy

- [`UserOperation`](../modules.md#useroperation)

  ↳ **`UserOpDetail`**

## Table of contents

### Properties

- [blockHash](UserOpDetail.md#blockhash)
- [blockNumber](UserOpDetail.md#blocknumber)
- [callData](UserOpDetail.md#calldata)
- [callGasLimit](UserOpDetail.md#callgaslimit)
- [entryPoint](UserOpDetail.md#entrypoint)
- [initCode](UserOpDetail.md#initcode)
- [maxFeePerGas](UserOpDetail.md#maxfeepergas)
- [maxPriorityFeePerGas](UserOpDetail.md#maxpriorityfeepergas)
- [nonce](UserOpDetail.md#nonce)
- [paymasterAndData](UserOpDetail.md#paymasteranddata)
- [preVerificationGas](UserOpDetail.md#preverificationgas)
- [sender](UserOpDetail.md#sender)
- [signature](UserOpDetail.md#signature)
- [transactionHash](UserOpDetail.md#transactionhash)
- [verificationGasLimit](UserOpDetail.md#verificationgaslimit)

## Properties

### blockHash

• **blockHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:31](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/interface/IBundler.ts#L31)

___

### blockNumber

• **blockNumber**: `number`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:30](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/interface/IBundler.ts#L30)

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

[packages/soulwallet-sdk/src/interface/IBundler.ts:29](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/interface/IBundler.ts#L29)

___

### initCode

• **initCode**: `BytesLike`

#### Inherited from

UserOperation.initCode

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:8

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

• **nonce**: `BigNumberish`

#### Inherited from

UserOperation.nonce

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:7

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

### sender

• **sender**: `string`

#### Inherited from

UserOperation.sender

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:6

___

### signature

• **signature**: `BytesLike`

#### Inherited from

UserOperation.signature

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:16

___

### transactionHash

• **transactionHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:32](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/interface/IBundler.ts#L32)

___

### verificationGasLimit

• **verificationGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.verificationGasLimit

#### Defined in

node_modules/.pnpm/@account-abstraction+contracts@0.6.0/node_modules/@account-abstraction/contracts/dist/types/EntryPoint.d.ts:11
