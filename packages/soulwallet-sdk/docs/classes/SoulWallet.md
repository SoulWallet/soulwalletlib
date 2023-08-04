[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / SoulWallet

# Class: SoulWallet

main class of the SDK.

**`Export`**

**`Implements`**

## Implements

- `ISoulWallet`

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
| `_provider` | `string` \| `JsonRpcProvider` |
| `_bundler` | `string` \| `JsonRpcProvider` |
| `_soulWalletFactoryAddress` | `string` |
| `_defalutCallbackHandlerAddress` | `string` |
| `_keyStoreModuleAddress` | `string` |
| `_securityControlModuleAddress` | `string` |

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:45](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L45)

## Properties

### Bundler

• `Readonly` **Bundler**: [`Bundler`](Bundler.md)

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:42](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L42)

___

### \_entryPointContract

• `Private` **\_entryPointContract**: `undefined` \| `Contract`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:147](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L147)

___

### bundler

• `Readonly` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:34](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L34)

___

### days

• `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:30](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L30)

___

### defalutCallbackHandlerAddress

• `Readonly` **defalutCallbackHandlerAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:36](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L36)

___

### defalutInitialGuardianSafePeriod

• `Readonly` **defalutInitialGuardianSafePeriod**: `number`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:31](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L31)

___

### keyStoreModuleAddress

• `Readonly` **keyStoreModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:37](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L37)

___

### preVerificationGasDeploy

• `Readonly` **preVerificationGasDeploy**: `number` = `10000000`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:40](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L40)

___

### provider

• `Readonly` **provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:33](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L33)

___

### securityControlModuleAddress

• `Readonly` **securityControlModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:38](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L38)

___

### soulWalletFactoryAddress

• `Readonly` **soulWalletFactoryAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:35](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L35)

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

#### Implementation of

ISoulWallet.calcWalletAddress

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:207](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L207)

___

### createUnsignedDeployWalletUserOp

▸ **createUnsignedDeployWalletUserOp**(`index`, `initialKey`, `initialGuardianHash`, `callData?`, `initialGuardianSafePeriod?`): `Promise`<[`Result`](../modules.md#result)<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `initialKey` | `string` | `undefined` |
| `initialGuardianHash` | `string` | `undefined` |
| `callData` | `string` | `"0x"` |
| `initialGuardianSafePeriod?` | `number` | `undefined` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Implementation of

ISoulWallet.createUnsignedDeployWalletUserOp

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:299](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L299)

___

### entryPoint

▸ **entryPoint**(): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.entryPoint

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:160](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L160)

___

### estimateUserOperationGas

▸ **estimateUserOperationGas**(`userOp`, `semiValidGuardHookInputData?`): `Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `semiValidGuardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

ISoulWallet.estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:419](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L419)

___

### fromTransaction

▸ **fromTransaction**(`maxFeePerGas`, `maxPriorityFeePerGas`, `from`, `txs`, `nonceKey?`): `Promise`<[`Result`](../modules.md#result)<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFeePerGas` | `string` |
| `maxPriorityFeePerGas` | `string` |
| `from` | `string` |
| `txs` | [`Transaction`](../interfaces/Transaction.md)[] |
| `nonceKey?` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Implementation of

ISoulWallet.fromTransaction

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:557](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L557)

___

### getEntryPointContract

▸ `Private` **getEntryPointContract**(): `Promise`<[`Result`](../modules.md#result)<`Contract`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`Contract`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:149](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L149)

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

#### Implementation of

ISoulWallet.getNonce

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:500](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L500)

___

### getOnChainConfig

▸ **getOnChainConfig**(): `Promise`<[`Result`](../modules.md#result)<`onChainConfig`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`onChainConfig`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:80](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L80)

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

[packages/soulwallet-sdk/src/soulWallet.ts:382](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L382)

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

[packages/soulwallet-sdk/src/soulWallet.ts:168](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L168)

___

### packUserOpHash

▸ **packUserOpHash**(`userOp`, `validAfter?`, `validUntil?`): `Promise`<[`Result`](../modules.md#result)<{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Implementation of

ISoulWallet.packUserOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:370](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L370)

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

#### Implementation of

ISoulWallet.packUserOpSignature

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:399](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L399)

___

### preFund

▸ **preFund**(`userOp`): `Promise`<[`Result`](../modules.md#result)<{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Implementation of

ISoulWallet.preFund

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:228](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L228)

___

### sendUserOperation

▸ **sendUserOperation**(`userOp`): `Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`<[`Result`](../modules.md#result)<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

ISoulWallet.sendUserOperation

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:478](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L478)

___

### userOpHash

▸ **userOpHash**(`userOp`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.userOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:361](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L361)

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

[packages/soulwallet-sdk/src/soulWallet.ts:529](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/soulWallet.ts#L529)
