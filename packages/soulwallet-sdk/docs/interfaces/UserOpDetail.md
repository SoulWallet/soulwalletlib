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
- [paymaster](UserOpDetail.md#paymaster)
- [paymasterData](UserOpDetail.md#paymasterdata)
- [paymasterPostOpGasLimit](UserOpDetail.md#paymasterpostopgaslimit)
- [paymasterVerificationGasLimit](UserOpDetail.md#paymasterverificationgaslimit)
- [preVerificationGas](UserOpDetail.md#preverificationgas)
- [sender](UserOpDetail.md#sender)
- [signature](UserOpDetail.md#signature)
- [transactionHash](UserOpDetail.md#transactionhash)
- [verificationGasLimit](UserOpDetail.md#verificationgaslimit)

## Properties

### blockHash

• **blockHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:31](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L31)

___

### blockNumber

• **blockNumber**: `number`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:30](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L30)

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

[packages/soulwallet-sdk/src/interface/IBundler.ts:29](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L29)

___

### initCode

• **initCode**: `string`

#### Inherited from

UserOperation.initCode

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:11](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L11)

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

• **nonce**: `BigNumberish`

#### Inherited from

UserOperation.nonce

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:10](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L10)

___

### paymaster

• **paymaster**: `string`

#### Inherited from

UserOperation.paymaster

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:18](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L18)

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

### sender

• **sender**: `string`

#### Inherited from

UserOperation.sender

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:9](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L9)

___

### signature

• **signature**: `string`

#### Inherited from

UserOperation.signature

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:22](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L22)

___

### transactionHash

• **transactionHash**: `string`

#### Defined in

[packages/soulwallet-sdk/src/interface/IBundler.ts:32](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/IBundler.ts#L32)

___

### verificationGasLimit

• **verificationGasLimit**: `BigNumberish`

#### Inherited from

UserOperation.verificationGasLimit

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:14](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/interface/UserOperation.ts#L14)
