[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Guardian

# Class: Guardian

[<internal>](../modules/internal_.md).Guardian

guardian class

## Table of contents

### Constructors

- [constructor](internal_.Guardian.md#constructor)

### Properties

- [\_singletonFactory](internal_.Guardian.md#_singletonfactory)

### Methods

- [\_guardian](internal_.Guardian.md#_guardian)
- [calculateGuardianAndInitCode](internal_.Guardian.md#calculateguardianandinitcode)
- [getGuardian](internal_.Guardian.md#getguardian)
- [getGuardianCode](internal_.Guardian.md#getguardiancode)
- [getInitializeData](internal_.Guardian.md#getinitializedata)
- [getPackedInitCode](internal_.Guardian.md#getpackedinitcode)
- [guardianSign](internal_.Guardian.md#guardiansign)
- [packGuardiansSign](internal_.Guardian.md#packguardianssign)
- [packGuardiansSignByInitCode](internal_.Guardian.md#packguardianssignbyinitcode)
- [setGuardian](internal_.Guardian.md#setguardian)
- [transferOwner](internal_.Guardian.md#transferowner)
- [walletContract](internal_.Guardian.md#walletcontract)

## Constructors

### constructor

• **new Guardian**(`singletonFactory`)

Creates an instance of Guardian.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `singletonFactory` | `string` | singleton factory address |

#### Defined in

[src/utils/guardians.ts:35](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L35)

## Properties

### \_singletonFactory

• `Private` **\_singletonFactory**: `string`

#### Defined in

[src/utils/guardians.ts:27](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L27)

## Methods

### \_guardian

▸ `Private` **_guardian**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAndData`, `maxFeePerGas`, `maxPriorityFeePerGas`, `callData`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) |
| `walletAddress` | `string` |
| `nonce` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `entryPointAddress` | `string` |
| `paymasterAndData` | `string` |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) |
| `callData` | `string` |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

#### Defined in

[src/utils/guardians.ts:205](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L205)

___

### calculateGuardianAndInitCode

▸ **calculateGuardianAndInitCode**(`guardianLogicAddress`, `guardians`, `threshold`, `salt`): `Object`

calculate Guardian address and deploy code (initCode)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guardianLogicAddress` | `string` | guardian logic contract address |
| `guardians` | `string`[] | guardian addresses |
| `threshold` | `number` | threshold |
| `salt` | `string` | salt |

#### Returns

`Object`

address is the guardian contract address,initCode is the deploy code

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `initCode` | `string` |

#### Defined in

[src/utils/guardians.ts:144](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L144)

___

### getGuardian

▸ **getGuardian**(`etherProvider`, `walletAddress`, `now?`): `Promise`<``null`` \| { `currentGuardian`: `string` ; `guardianDelay`: `number` ; `nextGuardian`: `string` ; `nextGuardianActivateTime`: `any` = activateTime }\>

get guardian info

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | `undefined` |  |
| `walletAddress` | `string` | `undefined` | wallet address |
| `now?` | `number` | `0` | current timestamp ( 0: use current timestamp, >0:unix timestamp ) |

#### Returns

`Promise`<``null`` \| { `currentGuardian`: `string` ; `guardianDelay`: `number` ; `nextGuardian`: `string` ; `nextGuardianActivateTime`: `any` = activateTime }\>

(currentGuardian, guardianDelay)

#### Defined in

[src/utils/guardians.ts:171](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L171)

___

### getGuardianCode

▸ `Private` **getGuardianCode**(`guardianLogicAddress`, `guardians`, `threshold`, `guardianProxyConfig?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardianLogicAddress` | `string` |
| `guardians` | `string`[] |
| `threshold` | `number` |
| `guardianProxyConfig?` | `Object` |
| `guardianProxyConfig.bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } |
| `guardianProxyConfig.contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |

#### Returns

`string`

#### Defined in

[src/utils/guardians.ts:60](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L60)

___

### getInitializeData

▸ `Private` **getInitializeData**(`guardians`, `threshold`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardians` | `string`[] |
| `threshold` | `number` |

#### Returns

`string`

#### Defined in

[src/utils/guardians.ts:39](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L39)

___

### getPackedInitCode

▸ `Private` **getPackedInitCode**(`create2Factory`, `initCode`, `salt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `create2Factory` | `string` |
| `initCode` | `string` |
| `salt` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/guardians.ts:76](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L76)

___

### guardianSign

▸ **guardianSign**(`signature`): `string`

pack guardian signature

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`guardianSignature`](../interfaces/internal_.guardianSignature.md)[] |

#### Returns

`string`

packed signature

#### Defined in

[src/utils/guardians.ts:283](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L283)

___

### packGuardiansSign

▸ **packGuardiansSign**(`deadline`, `signature`, `guardianLogicAddress`, `guardians`, `threshold`, `salt`, `guardianAddress?`): `string`

sign a user operation with guardian signatures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deadline` | `number` | deadline (block time) |
| `signature` | [`guardianSignature`](../interfaces/internal_.guardianSignature.md)[] | - |
| `guardianLogicAddress` | `string` | guardian logic contract address |
| `guardians` | `string`[] | guardian addresses |
| `threshold` | `number` | threshold |
| `salt` | `string` | salt |
| `guardianAddress?` | `string` | guardian contract address,if provided will check if equal to the calculated guardian address |

#### Returns

`string`

signature

#### Defined in

[src/utils/guardians.ts:94](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L94)

___

### packGuardiansSignByInitCode

▸ **packGuardiansSignByInitCode**(`guardianAddress`, `signature`, `deadline?`, `initCode?`): `string`

sign a user operation with guardian signatures

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guardianAddress` | `string` | `undefined` | guardian contract address |
| `signature` | [`guardianSignature`](../interfaces/internal_.guardianSignature.md)[] | `undefined` | - |
| `deadline?` | `number` | `0` | deadline (block time), default 0 |
| `initCode?` | `string` | `'0x'` | intiCode must given when the guardian contract is not deployed |

#### Returns

`string`

signature

#### Defined in

[src/utils/guardians.ts:118](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L118)

___

### setGuardian

▸ **setGuardian**(`etherProvider`, `walletAddress`, `guardian`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

set guardian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) |  |
| `walletAddress` | `string` | wallet address |
| `guardian` | `string` | new guardian address |
| `nonce` | [`NumberLike`](../modules/internal_.md#numberlike) | nonce |
| `entryPointAddress` | `string` | entry point address |
| `paymasterAddress` | `string` | paymaster address |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | max fee per gas |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | max priority fee per gas |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

userOperation

#### Defined in

[src/utils/guardians.ts:237](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L237)

___

### transferOwner

▸ **transferOwner**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `newOwner`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

transfer owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) |  |
| `walletAddress` | `string` | wallet address |
| `nonce` | [`NumberLike`](../modules/internal_.md#numberlike) | nonce |
| `entryPointAddress` | `string` | entry point address |
| `paymasterAddress` | `string` | paymaster address |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | max fee per gas |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | max priority fee per gas |
| `newOwner` | `string` | new owner address |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

userOperation

#### Defined in

[src/utils/guardians.ts:260](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L260)

___

### walletContract

▸ `Private` **walletContract**(`etherProvider`, `walletAddress`): [`Contract`](internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) |
| `walletAddress` | `string` |

#### Returns

[`Contract`](internal_.Contract.md)

#### Defined in

[src/utils/guardians.ts:160](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/guardians.ts#L160)
