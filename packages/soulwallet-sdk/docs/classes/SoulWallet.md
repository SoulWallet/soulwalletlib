[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / SoulWallet

# Class: SoulWallet

## Hierarchy

- `ISoulWallet`

  ↳ **`SoulWallet`**

## Table of contents

### Constructors

- [constructor](SoulWallet.md#constructor)

### Properties

- [Bundler](SoulWallet.md#bundler)
- [\_entryPointContract](SoulWallet.md#_entrypointcontract)
- [bundler](SoulWallet.md#bundler-1)
- [days](SoulWallet.md#days)
- [defalutCallbackHandlerAddress](SoulWallet.md#defalutcallbackhandleraddress)
- [defalutInitialGuardianSafePeriod](SoulWallet.md#defalutinitialguardiansafeperiod)
- [keyStoreModuleAddress](SoulWallet.md#keystoremoduleaddress)
- [preVerificationGasDeploy](SoulWallet.md#preverificationgasdeploy)
- [provider](SoulWallet.md#provider)
- [securityControlModuleAddress](SoulWallet.md#securitycontrolmoduleaddress)
- [soulWalletFactoryAddress](SoulWallet.md#soulwalletfactoryaddress)

### Methods

- [calcWalletAddress](SoulWallet.md#calcwalletaddress)
- [createUnsignedDeployWalletUserOp](SoulWallet.md#createunsigneddeploywalletuserop)
- [entryPoint](SoulWallet.md#entrypoint)
- [estimateUserOperationGas](SoulWallet.md#estimateuseroperationgas)
- [fromTransaction](SoulWallet.md#fromtransaction)
- [getEntryPointContract](SoulWallet.md#getentrypointcontract)
- [getNonce](SoulWallet.md#getnonce)
- [getOnChainConfig](SoulWallet.md#getonchainconfig)
- [guardHookList](SoulWallet.md#guardhooklist)
- [initializeData](SoulWallet.md#initializedata)
- [packUserOpHash](SoulWallet.md#packuserophash)
- [packUserOpSignature](SoulWallet.md#packuseropsignature)
- [preFund](SoulWallet.md#prefund)
- [sendUserOperation](SoulWallet.md#senduseroperation)
- [userOpHash](SoulWallet.md#userophash)
- [walletDeployed](SoulWallet.md#walletdeployed)

## Constructors

### constructor

• **new SoulWallet**(`_provider`, `_bundler`, `_soulWalletFactoryAddress`, `_defalutCallbackHandlerAddress`, `_keyStoreModuleAddress`, `_securityControlModuleAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_provider` | `string` |
| `_bundler` | `string` |
| `_soulWalletFactoryAddress` | `string` |
| `_defalutCallbackHandlerAddress` | `string` |
| `_keyStoreModuleAddress` | `string` |
| `_securityControlModuleAddress` | `string` |

#### Overrides

ISoulWallet.constructor

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:37](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L37)

## Properties

### Bundler

• `Readonly` **Bundler**: [`Bundler`](Bundler.md)

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:34](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L34)

___

### \_entryPointContract

• `Private` **\_entryPointContract**: `undefined` \| `Contract`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:121](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L121)

___

### bundler

• `Readonly` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:26](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L26)

___

### days

• `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:22](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L22)

___

### defalutCallbackHandlerAddress

• `Readonly` **defalutCallbackHandlerAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:28](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L28)

___

### defalutInitialGuardianSafePeriod

• `Readonly` **defalutInitialGuardianSafePeriod**: `number`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:23](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L23)

___

### keyStoreModuleAddress

• `Readonly` **keyStoreModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:29](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L29)

___

### preVerificationGasDeploy

• `Readonly` **preVerificationGasDeploy**: `number` = `10000000`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:32](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L32)

___

### provider

• `Readonly` **provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:25](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L25)

___

### securityControlModuleAddress

• `Readonly` **securityControlModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:30](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L30)

___

### soulWalletFactoryAddress

• `Readonly` **soulWalletFactoryAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:27](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L27)

## Methods

### calcWalletAddress

▸ **calcWalletAddress**(`index`, `initialKey`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `initialKey` | `string` |
| `initialGuardianHash` | `string` |
| `initialGuardianSafePeriod?` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Overrides

ISoulWallet.calcWalletAddress

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:181](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L181)

___

### createUnsignedDeployWalletUserOp

▸ **createUnsignedDeployWalletUserOp**(`index`, `initialKey`, `initialGuardianHash`, `callData?`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `initialKey` | `string` | `undefined` |
| `initialGuardianHash` | `string` | `undefined` |
| `callData` | `string` | `"0x"` |
| `initialGuardianSafePeriod?` | `number` | `undefined` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `any`\>\>

#### Overrides

ISoulWallet.createUnsignedDeployWalletUserOp

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:268](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L268)

___

### entryPoint

▸ **entryPoint**(): `Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Overrides

ISoulWallet.entryPoint

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:134](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L134)

___

### estimateUserOperationGas

▸ **estimateUserOperationGas**(`userOp`): `Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Overrides

ISoulWallet.estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:370](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L370)

___

### fromTransaction

▸ **fromTransaction**(`maxFeePerGas`, `maxPriorityFeePerGas`, `from`, `txs`, `nonceKey?`): `Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFeePerGas` | `string` |
| `maxPriorityFeePerGas` | `string` |
| `from` | `string` |
| `txs` | [`Transaction`](../interfaces/Transaction.md)[] |
| `nonceKey?` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `any`\>\>

#### Overrides

ISoulWallet.fromTransaction

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:478](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L478)

___

### getEntryPointContract

▸ `Private` **getEntryPointContract**(): `Promise`<[`Result`](../modules.md#result)<`Contract`, `string`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`Contract`, `string`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:123](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L123)

___

### getNonce

▸ **getNonce**(`walletAddr`, `key?`): `Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |
| `key?` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Overrides

ISoulWallet.getNonce

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:435](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L435)

___

### getOnChainConfig

▸ **getOnChainConfig**(): `Promise`<[`Result`](../modules.md#result)<`onChainConfig`, `string`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`onChainConfig`, `string`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:65](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L65)

___

### guardHookList

▸ `Private` **guardHookList**(`walletAddress`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:349](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L349)

___

### initializeData

▸ **initializeData**(`initialKey`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialKey` | `string` |
| `initialGuardianHash` | `string` |
| `initialGuardianSafePeriod` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:142](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L142)

___

### packUserOpHash

▸ **packUserOpHash**(`userOp`, `validAfter?`, `validUntil?`): `Promise`<[`Result`](../modules.md#result)<{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `any`\>\>

#### Overrides

ISoulWallet.packUserOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:337](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L337)

___

### packUserOpSignature

▸ **packUserOpSignature**(`signature`, `validationData`, `guardHookInputData?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `validationData` | `string` |
| `guardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`<`string`\>

#### Overrides

ISoulWallet.packUserOpSignature

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:356](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L356)

___

### preFund

▸ **preFund**(`userOp`): `Promise`<[`Result`](../modules.md#result)<{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `any`\>\>

#### Overrides

ISoulWallet.preFund

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:202](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L202)

___

### sendUserOperation

▸ **sendUserOperation**(`userOp`): `Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Overrides

ISoulWallet.sendUserOperation

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:415](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L415)

___

### userOpHash

▸ **userOpHash**(`userOp`): `Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Overrides

ISoulWallet.userOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:328](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L328)

___

### walletDeployed

▸ `Private` **walletDeployed**(`walletAddress`): `Promise`<[`Result`](../modules.md#result)<`boolean`, `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`boolean`, `string`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:456](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/soulWallet.ts#L456)
