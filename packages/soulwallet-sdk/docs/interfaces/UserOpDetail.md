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

[packages/soulwallet-sdk/src/interface/IBundler.ts:31](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IBundler.ts#L31)

___

### blockNumber

• **blockNumber**: `number`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:30](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IBundler.ts#L30)

___

### callData

• **callData**: `string`

#### Inherited from

UserOperation.callData

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:10](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L10)

___

### callGasLimit

• **callGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.callGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:11](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L11)

___

### entryPoint

• **entryPoint**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:29](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IBundler.ts#L29)

___

### initCode

• **initCode**: `string`

#### Inherited from

UserOperation.initCode

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:9](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L9)

___

### maxFeePerGas

• **maxFeePerGas**: `BigNumberish`

#### Inherited from

UserOperation.maxFeePerGas

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:14](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L14)

___

### maxPriorityFeePerGas

• **maxPriorityFeePerGas**: `BigNumberish`

#### Inherited from

UserOperation.maxPriorityFeePerGas

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:15](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L15)

___

### nonce

• **nonce**: `BigNumberish`

#### Inherited from

UserOperation.nonce

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:8](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L8)

___

### paymasterAndData

• **paymasterAndData**: `string`

#### Inherited from

UserOperation.paymasterAndData

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:16](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L16)

___

### preVerificationGas

• **preVerificationGas**: `BigNumberish`

#### Inherited from

UserOperation.preVerificationGas

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:13](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L13)

___

### sender

• **sender**: `string`

#### Inherited from

UserOperation.sender

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:7](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L7)

___

### signature

• **signature**: `string`

#### Inherited from

UserOperation.signature

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:17](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L17)

___

### transactionHash

• **transactionHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:32](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/IBundler.ts#L32)

___

### verificationGasLimit

• **verificationGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.verificationGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:12](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-sdk/src/interface/UserOperation.ts#L12)
