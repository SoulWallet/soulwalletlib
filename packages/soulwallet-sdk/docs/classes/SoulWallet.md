[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / SoulWallet

# Class: SoulWallet

main class of the SDK.

**`Export`**

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

[packages/soulwallet-sdk/src/soulWallet.ts:44](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L44)

## Properties

### Bundler

• `Readonly` **Bundler**: [`Bundler`](Bundler.md)

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:41](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L41)

___

### \_entryPointContract

• `Private` **\_entryPointContract**: `undefined` \| `Contract`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:139](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L139)

___

### bundler

• `Readonly` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:33](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L33)

___

### days

• `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:29](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L29)

___

### defalutCallbackHandlerAddress

• `Readonly` **defalutCallbackHandlerAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:35](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L35)

___

### defalutInitialGuardianSafePeriod

• `Readonly` **defalutInitialGuardianSafePeriod**: `number`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:30](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L30)

___

### keyStoreModuleAddress

• `Readonly` **keyStoreModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:36](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L36)

___

### preVerificationGasDeploy

• `Readonly` **preVerificationGasDeploy**: `number` = `10000000`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:39](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L39)

___

### provider

• `Readonly` **provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:32](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L32)

___

### securityControlModuleAddress

• `Readonly` **securityControlModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:37](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L37)

___

### soulWalletFactoryAddress

• `Readonly` **soulWalletFactoryAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:34](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L34)

## Methods

### calcWalletAddress

▸ **calcWalletAddress**(`index`, `initialKey`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `initialKey` | `string` |
| `initialGuardianHash` | `string` |
| `initialGuardianSafePeriod?` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Overrides

ISoulWallet.calcWalletAddress

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:199](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L199)

___

### createUnsignedDeployWalletUserOp

▸ **createUnsignedDeployWalletUserOp**(`index`, `initialKey`, `initialGuardianHash`, `callData?`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `initialKey` | `string` | `undefined` |
| `initialGuardianHash` | `string` | `undefined` |
| `callData` | `string` | `"0x"` |
| `initialGuardianSafePeriod?` | `number` | `undefined` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `Error`\>\>

#### Overrides

ISoulWallet.createUnsignedDeployWalletUserOp

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:291](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L291)

___

### entryPoint

▸ **entryPoint**(): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Overrides

ISoulWallet.entryPoint

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:152](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L152)

___

### estimateUserOperationGas

▸ **estimateUserOperationGas**(`userOp`, `semiValidGuardHookInputData?`): `Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |
| `semiValidGuardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Overrides

ISoulWallet.estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:411](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L411)

___

### fromTransaction

▸ **fromTransaction**(`maxFeePerGas`, `maxPriorityFeePerGas`, `from`, `txs`, `nonceKey?`): `Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFeePerGas` | `string` |
| `maxPriorityFeePerGas` | `string` |
| `from` | `string` |
| `txs` | [`Transaction`](../interfaces/Transaction.md)[] |
| `nonceKey?` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`NotPromise`<`UserOperationStruct`\>, `Error`\>\>

#### Overrides

ISoulWallet.fromTransaction

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:549](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L549)

___

### getEntryPointContract

▸ `Private` **getEntryPointContract**(): `Promise`<[`Result`](../modules.md#result)<`Contract`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`Contract`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:141](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L141)

___

### getNonce

▸ **getNonce**(`walletAddr`, `key?`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |
| `key?` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Overrides

ISoulWallet.getNonce

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:492](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L492)

___

### getOnChainConfig

▸ **getOnChainConfig**(): `Promise`<[`Result`](../modules.md#result)<`onChainConfig`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`onChainConfig`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:72](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L72)

___

### guardHookList

▸ `Private` **guardHookList**(`walletAddress`): `Promise`<[`Result`](../modules.md#result)<`string`[], `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`[], `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:374](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L374)

___

### initializeData

▸ **initializeData**(`initialKey`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialKey` | `string` |
| `initialGuardianHash` | `string` |
| `initialGuardianSafePeriod` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:160](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L160)

___

### packUserOpHash

▸ **packUserOpHash**(`userOp`, `validAfter?`, `validUntil?`): `Promise`<[`Result`](../modules.md#result)<{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Overrides

ISoulWallet.packUserOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:362](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L362)

___

### packUserOpSignature

▸ **packUserOpSignature**(`signature`, `validationData`, `guardHookInputData?`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `validationData` | `string` |
| `guardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Overrides

ISoulWallet.packUserOpSignature

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:391](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L391)

___

### preFund

▸ **preFund**(`userOp`): `Promise`<[`Result`](../modules.md#result)<{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Overrides

ISoulWallet.preFund

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:220](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L220)

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

[packages/soulwallet-sdk/src/soulWallet.ts:470](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L470)

___

### userOpHash

▸ **userOpHash**(`userOp`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | `NotPromise`<`UserOperationStruct`\> |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Overrides

ISoulWallet.userOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:353](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L353)

___

### walletDeployed

▸ `Private` **walletDeployed**(`walletAddress`): `Promise`<[`Result`](../modules.md#result)<`boolean`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`boolean`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:521](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/soulWallet.ts#L521)
