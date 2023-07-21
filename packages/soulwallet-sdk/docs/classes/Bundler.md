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

[packages/soulwallet-sdk/src/bundler.ts:11](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L11)

## Properties

### bundler

• `Private` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:9](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L9)

## Methods

### eth\_chainId

▸ **eth_chainId**(): `Promise`<[`Result`](../modules.md#result)<`number`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`number`, `Error`\>\>

#### Implementation of

IBundler.eth\_chainId

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:140](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L140)

___

### eth\_estimateUserOperationGas

▸ **eth_estimateUserOperationGas**(`entryPoint`, `userOp`): `Promise`<[`Result`](../modules.md#result)<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:43](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L43)

___

### eth\_getUserOperationByHash

▸ **eth_getUserOperationByHash**(`userOpHash`): `Promise`<[`Result`](../modules.md#result)<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `Error`\>\>

#### Implementation of

IBundler.eth\_getUserOperationByHash

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:72](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L72)

___

### eth\_getUserOperationReceipt

▸ **eth_getUserOperationReceipt**(`userOpHash`): `Promise`<[`Result`](../modules.md#result)<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `Error`\>\>

#### Implementation of

IBundler.eth\_getUserOperationReceipt

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:93](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L93)

___

### eth\_sendUserOperation

▸ **eth_sendUserOperation**(`entryPoint`, `userOp`): `Promise`<[`Result`](../modules.md#result)<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_sendUserOperation

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:19](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L19)

___

### eth\_supportedEntryPoints

▸ **eth_supportedEntryPoints**(): `Promise`<[`Result`](../modules.md#result)<`string`[], `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`[], `Error`\>\>

#### Implementation of

IBundler.eth\_supportedEntryPoints

#### Defined in

[packages/soulwallet-sdk/src/bundler.ts:114](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/bundler.ts#L114)
