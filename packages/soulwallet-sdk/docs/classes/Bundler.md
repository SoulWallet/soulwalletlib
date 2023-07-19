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

• **new Bundler**(`bundler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundler` | `string` \| `JsonRpcProvider` |

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:11](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L11)

## Properties

### bundler

• `Private` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:9](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L9)

## Methods

### eth\_chainId

▸ **eth_chainId**(): `Promise`<[`ResultWithErrors`](ResultWithErrors.md)<`number`, `string`\>\>

#### Returns

`Promise`<[`ResultWithErrors`](ResultWithErrors.md)<`number`, `string`\>\>

#### Implementation of

IBundler.eth\_chainId

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:124](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L124)

___

### eth\_estimateUserOperationGas

▸ **eth_estimateUserOperationGas**(`entryPoint`, `userOp`): `Promise`<[`ResultWithErrors`](ResultWithErrors.md)<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`ResultWithErrors`](ResultWithErrors.md)<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:39](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L39)

___

### eth\_getUserOperationByHash

▸ **eth_getUserOperationByHash**(`userOpHash`): `Promise`<[`ResultWithErrors`](ResultWithErrors.md)<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`<[`ResultWithErrors`](ResultWithErrors.md)<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `string`\>\>

#### Implementation of

IBundler.eth\_getUserOperationByHash

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:64](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L64)

___

### eth\_getUserOperationReceipt

▸ **eth_getUserOperationReceipt**(`userOpHash`): `Promise`<[`ResultWithErrors`](ResultWithErrors.md)<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`<[`ResultWithErrors`](ResultWithErrors.md)<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `string`\>\>

#### Implementation of

IBundler.eth\_getUserOperationReceipt

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:83](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L83)

___

### eth\_sendUserOperation

▸ **eth_sendUserOperation**(`entryPoint`, `userOp`): `Promise`<[`ResultWithErrors`](ResultWithErrors.md)<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`ResultWithErrors`](ResultWithErrors.md)<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_sendUserOperation

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:19](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L19)

___

### eth\_supportedEntryPoints

▸ **eth_supportedEntryPoints**(): `Promise`<[`ResultWithErrors`](ResultWithErrors.md)<`string`[], `string`\>\>

#### Returns

`Promise`<[`ResultWithErrors`](ResultWithErrors.md)<`string`[], `string`\>\>

#### Implementation of

IBundler.eth\_supportedEntryPoints

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:102](https://github.com/jayden-sudo/soulwalletlib/blob/9df1426/packages/soulwallet-sdk/src/bundler.ts#L102)
