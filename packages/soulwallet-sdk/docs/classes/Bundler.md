[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / Bundler

# Class: Bundler

## Implements

- `IBundler`

## Table of contents

### Constructors

- [constructor](Bundler.md#constructor)

### Properties

- [bundler](Bundler.md#bundler)

### Methods

- [eth\_chainId](Bundler.md#eth_chainid)
- [eth\_estimateUserOperationGas](Bundler.md#eth_estimateuseroperationgas)
- [eth\_getUserOperationByHash](Bundler.md#eth_getuseroperationbyhash)
- [eth\_getUserOperationReceipt](Bundler.md#eth_getuseroperationreceipt)
- [eth\_sendUserOperation](Bundler.md#eth_senduseroperation)
- [eth\_supportedEntryPoints](Bundler.md#eth_supportedentrypoints)

## Constructors

### constructor

• **new Bundler**(`bundler`): [`Bundler`](Bundler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundler` | `string` \| `JsonRpcProvider` |

#### Returns

[`Bundler`](Bundler.md)

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:11](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L11)

## Properties

### bundler

• `Private` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:9](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L9)

## Methods

### eth\_chainId

▸ **eth_chainId**(): `Promise`\<[`Result`](../modules.md#result)\<`number`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`number`, `Error`\>\>

#### Implementation of

IBundler.eth\_chainId

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:144](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L144)

___

### eth\_estimateUserOperationGas

▸ **eth_estimateUserOperationGas**(`entryPoint`, `userOp`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:46](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L46)

___

### eth\_getUserOperationByHash

▸ **eth_getUserOperationByHash**(`userOpHash`): `Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `Error`\>\>

#### Implementation of

IBundler.eth\_getUserOperationByHash

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:76](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L76)

___

### eth\_getUserOperationReceipt

▸ **eth_getUserOperationReceipt**(`userOpHash`): `Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `Error`\>\>

#### Implementation of

IBundler.eth\_getUserOperationReceipt

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:97](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L97)

___

### eth\_sendUserOperation

▸ **eth_sendUserOperation**(`entryPoint`, `userOp`): `Promise`\<[`Result`](../modules.md#result)\<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_sendUserOperation

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:21](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L21)

___

### eth\_supportedEntryPoints

▸ **eth_supportedEntryPoints**(): `Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Implementation of

IBundler.eth\_supportedEntryPoints

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:118](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/bundler.ts#L118)
