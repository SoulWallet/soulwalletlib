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
- [\_onChainConfig](SoulWallet.md#_onchainconfig)
- [bundler](SoulWallet.md#bundler-1)
- [defalutCallbackHandlerAddress](SoulWallet.md#defalutcallbackhandleraddress)
- [defaultValidator](SoulWallet.md#defaultvalidator)
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
- [getEIP1271TypedData](SoulWallet.md#geteip1271typeddata)
- [getEntryPointContract](SoulWallet.md#getentrypointcontract)
- [getNonce](SoulWallet.md#getnonce)
- [getOnChainConfig](SoulWallet.md#getonchainconfig)
- [guardHookList](SoulWallet.md#guardhooklist)
- [initializeData](SoulWallet.md#initializedata)
- [packRawHash](SoulWallet.md#packrawhash)
- [packUserOpEOASignature](SoulWallet.md#packuseropeoasignature)
- [packUserOpHash](SoulWallet.md#packuserophash)
- [packUserOpP256Signature](SoulWallet.md#packuseropp256signature)
- [packUserOpRS256Signature](SoulWallet.md#packuseroprs256signature)
- [preFund](SoulWallet.md#prefund)
- [prePackUserOpSignature](SoulWallet.md#prepackuseropsignature)
- [sendUserOperation](SoulWallet.md#senduseroperation)
- [userOpHash](SoulWallet.md#userophash)
- [walletDeployed](SoulWallet.md#walletdeployed)

## Constructors

### constructor

• **new SoulWallet**(`_provider`, `_bundler`, `_soulWalletFactoryAddress`, `_defaultValidator`, `_defalutCallbackHandlerAddress`, `_keyStoreModuleAddress`, `_securityControlModuleAddress`): [`SoulWallet`](SoulWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_provider` | `string` \| `JsonRpcProvider` |
| `_bundler` | `string` \| `JsonRpcProvider` |
| `_soulWalletFactoryAddress` | `string` |
| `_defaultValidator` | `string` |
| `_defalutCallbackHandlerAddress` | `string` |
| `_keyStoreModuleAddress` | `string` |
| `_securityControlModuleAddress` | `string` |

#### Returns

[`SoulWallet`](SoulWallet.md)

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:48](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L48)

## Properties

### Bundler

• `Readonly` **Bundler**: [`Bundler`](Bundler.md)

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:43](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L43)

___

### \_entryPointContract

• `Private` **\_entryPointContract**: `undefined` \| `Contract`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:176](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L176)

___

### \_onChainConfig

• `Private` **\_onChainConfig**: `undefined` \| `onChainConfig` = `undefined`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:45](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L45)

___

### bundler

• `Readonly` **bundler**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:34](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L34)

___

### defalutCallbackHandlerAddress

• `Readonly` **defalutCallbackHandlerAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:36](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L36)

___

### defaultValidator

• `Readonly` **defaultValidator**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:39](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L39)

___

### keyStoreModuleAddress

• `Readonly` **keyStoreModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:37](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L37)

___

### preVerificationGasDeploy

• `Readonly` **preVerificationGasDeploy**: `number` = `10000000`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:41](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L41)

___

### provider

• `Readonly` **provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:33](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L33)

___

### securityControlModuleAddress

• `Readonly` **securityControlModuleAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:38](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L38)

___

### soulWalletFactoryAddress

• `Readonly` **soulWalletFactoryAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:35](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L35)

## Methods

### calcWalletAddress

▸ **calcWalletAddress**(`index`, `initialKeys`, `initialGuardianHash`, `initialGuardianSafePeriod?`, `chainId?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

get wallet address by index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | readable index |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | initial keys |
| `initialGuardianHash` | `string` | initial guardian hash |
| `initialGuardianSafePeriod?` | `number` | initial guardian safe period |
| `chainId?` | `string` \| `number` | number or hex string(must start with 0x) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Implementation of

ISoulWallet.calcWalletAddress

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:253](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L253)

___

### createUnsignedDeployWalletUserOp

▸ **createUnsignedDeployWalletUserOp**(`index`, `initialKeys`, `initialGuardianHash`, `callData?`, `initialGuardianSafePeriod?`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | `undefined` |
| `initialGuardianHash` | `string` | `undefined` |
| `callData` | `string` | `"0x"` |
| `initialGuardianSafePeriod?` | `number` | `undefined` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Implementation of

ISoulWallet.createUnsignedDeployWalletUserOp

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:325](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L325)

___

### entryPoint

▸ **entryPoint**(): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.entryPoint

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:189](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L189)

___

### estimateUserOperationGas

▸ **estimateUserOperationGas**(`validatorAddress`, `userOp`, `signkeyType?`, `semiValidGuardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validatorAddress` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `signkeyType?` | [`SignkeyType`](../enums/SignkeyType.md) |
| `semiValidGuardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

ISoulWallet.estimateUserOperationGas

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:540](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L540)

___

### fromTransaction

▸ **fromTransaction**(`maxFeePerGas`, `maxPriorityFeePerGas`, `from`, `txs`, `nonce?`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFeePerGas` | `string` |
| `maxPriorityFeePerGas` | `string` |
| `from` | `string` |
| `txs` | [`Transaction`](../interfaces/Transaction.md)[] |
| `nonce?` | `Object` |
| `nonce.nonceKey?` | `string` |
| `nonce.nonceValue?` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Implementation of

ISoulWallet.fromTransaction

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:703](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L703)

___

### getEIP1271TypedData

▸ **getEIP1271TypedData**(`walletAddr`, `message`): `Promise`\<[`Result`](../modules.md#result)\<\{ `domain`: `TypedDataDomain` ; `typedMessage`: `string` ; `types`: `Record`\<`string`, `TypedDataField`[]\> ; `value`: `Record`\<`string`, `any`\>  }, `Error`\>\>

get TypedData from EIP1271.

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |
| `message` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `domain`: `TypedDataDomain` ; `typedMessage`: `string` ; `types`: `Record`\<`string`, `TypedDataField`[]\> ; `value`: `Record`\<`string`, `any`\>  }, `Error`\>\>

{Promise<Result<{
        domain: TypedDataDomain,
        types: Record<string, Array<TypedDataField>>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: Record<string, any>,
        typedMessage: string
    }, Error>>}

**`Abstract`**

**`Memberof`**

ISoulWallet

#### Implementation of

ISoulWallet.getEIP1271TypedData

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:849](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L849)

___

### getEntryPointContract

▸ **getEntryPointContract**(): `Promise`\<[`Result`](../modules.md#result)\<`Contract`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`Contract`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:178](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L178)

___

### getNonce

▸ **getNonce**(`walletAddr`, `key?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |
| `key?` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.getNonce

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:646](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L646)

___

### getOnChainConfig

▸ **getOnChainConfig**(): `Promise`\<[`Result`](../modules.md#result)\<`onChainConfig`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`onChainConfig`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:85](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L85)

___

### guardHookList

▸ **guardHookList**(`walletAddress`): `Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:411](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L411)

___

### initializeData

▸ **initializeData**(`initialKeys`, `initialGuardianHash`, `initialGuardianSafePeriod?`, `securityControlModuleDelay?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | `undefined` |
| `initialGuardianHash` | `string` | `undefined` |
| `initialGuardianSafePeriod` | `number` | `L1KeyStore.defalutInitialGuardianSafePeriod` |
| `securityControlModuleDelay` | `number` | `L1KeyStore.defalutInitialGuardianSafePeriod` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:197](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L197)

___

### packRawHash

▸ **packRawHash**(`hash`, `validAfter?`, `validUntil?`): `Promise`\<[`Result`](../modules.md#result)\<\{ `packedHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `packedHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:397](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L397)

___

### packUserOpEOASignature

▸ **packUserOpEOASignature**(`validatorAddress`, `signature`, `validationData`, `guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack userOp signature (EOA)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validatorAddress` | `string` | validator contract address |
| `signature` | `string` | EOA signature |
| `validationData` | `string` | validation data |
| `guardHookInputData?` | `GuardHookInputData` |  |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:456](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L456)

___

### packUserOpHash

▸ **packUserOpHash**(`userOp`, `validAfter?`, `validUntil?`): `Promise`\<[`Result`](../modules.md#result)\<\{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Implementation of

ISoulWallet.packUserOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:385](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L385)

___

### packUserOpP256Signature

▸ **packUserOpP256Signature**(`validatorAddress`, `signatureData`, `validationData`, `guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack userOp signature (P256)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validatorAddress` | `string` | validator contract address |
| `signatureData` | `Object` | signature data, messageHash is userOp hash(packed userOp hash) |
| `signatureData.authenticatorData` | `string` | - |
| `signatureData.clientDataSuffix` | `string` | - |
| `signatureData.messageHash` | `string` | - |
| `signatureData.publicKey` | `string` \| [`ECCPoint`](../interfaces/ECCPoint.md) | - |
| `signatureData.r` | `string` | - |
| `signatureData.s` | `string` | - |
| `validationData` | `string` | validation data |
| `guardHookInputData?` | `GuardHookInputData` |  |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:485](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L485)

___

### packUserOpRS256Signature

▸ **packUserOpRS256Signature**(`validatorAddress`, `signatureData`, `validationData`, `guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack userOp signature (RS256)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validatorAddress` | `string` | validator contract address |
| `signatureData` | `Object` |  |
| `signatureData.authenticatorData` | `string` | - |
| `signatureData.clientDataSuffix` | `string` | - |
| `signatureData.messageHash` | `string` | - |
| `signatureData.publicKey` | [`RSAPublicKey`](../interfaces/RSAPublicKey.md) | - |
| `signatureData.signature` | `string` | - |
| `validationData` | `string` |  |
| `guardHookInputData?` | `GuardHookInputData` |  |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:521](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L521)

___

### preFund

▸ **preFund**(`userOp`): `Promise`\<[`Result`](../modules.md#result)\<\{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Implementation of

ISoulWallet.preFund

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:277](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L277)

___

### prePackUserOpSignature

▸ **prePackUserOpSignature**(`guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`undefined` \| `HookInputData`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`undefined` \| `HookInputData`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:428](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L428)

___

### sendUserOperation

▸ **sendUserOperation**(`userOp`): `Promise`\<[`Result`](../modules.md#result)\<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

ISoulWallet.sendUserOperation

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:624](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L624)

___

### userOpHash

▸ **userOpHash**(`userOp`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.userOpHash

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:376](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L376)

___

### walletDeployed

▸ **walletDeployed**(`walletAddress`): `Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

#### Defined in

[packages/soulwallet-sdk/src/soulWallet.ts:675](https://github.com/SoulWallet/soulwalletlib/blob/32f4da1/packages/soulwallet-sdk/src/soulWallet.ts#L675)
