[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / L1KeyStore

# Class: L1KeyStore

L1KeyStore

**`Export`**

## Hierarchy

- `IL1KeyStore`

  ↳ **`L1KeyStore`**

## Table of contents

### Constructors

- [constructor](L1KeyStore.md#constructor)

### Properties

- [L1KeyStoreContract](L1KeyStore.md#l1keystorecontract)
- [L1KeyStoreContractAddress](L1KeyStore.md#l1keystorecontractaddress)
- [L1Provider](L1KeyStore.md#l1provider)
- [days](L1KeyStore.md#days)

### Methods

- [getKey](L1KeyStore.md#getkey)
- [calcGuardianHash](L1KeyStore.md#calcguardianhash)
- [getSlot](L1KeyStore.md#getslot)
- [guardianSafePeriodGuard](L1KeyStore.md#guardiansafeperiodguard)

## Constructors

### constructor

• **new L1KeyStore**(`_L1Provider`, `_L1KeyStoreContractAddress`)

Creates an instance of IL1KeyStore.

**`Memberof`**

IL1KeyStore

#### Parameters

| Name | Type |
| :------ | :------ |
| `_L1Provider` | `string` \| `JsonRpcProvider` |
| `_L1KeyStoreContractAddress` | `string` |

#### Overrides

IL1KeyStore.constructor

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:30](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L30)

## Properties

### L1KeyStoreContract

• `Readonly` **L1KeyStoreContract**: `Contract`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:21](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L21)

___

### L1KeyStoreContractAddress

• `Readonly` **L1KeyStoreContractAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:19](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L19)

___

### L1Provider

• `Readonly` **L1Provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:20](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L20)

___

### days

▪ `Static` `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:17](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L17)

## Methods

### getKey

▸ **getKey**(`slot`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Overrides

IL1KeyStore.getKey

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:132](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L132)

___

### calcGuardianHash

▸ `Static` **calcGuardianHash**(`guardians`, `threshold`, `salt?`): `string`

**`Abstract`**

**`Memberof`**

IL1KeyStore

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guardians` | `string`[] | `undefined` | EOA/Smart contract address array (auto sort) |
| `threshold` | `number` | `undefined` |  |
| `salt` | `string` | `ethers.ZeroHash` | hex string (bytes32),default is 0 |

#### Returns

`string`

{string} keccak256 hash of the guardian set

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:96](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L96)

___

### getSlot

▸ `Static` **getSlot**(`initialKey`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialKey` | `string` |
| `initialGuardianHash` | `string` |
| `initialGuardianSafePeriod` | `number` |

#### Returns

`string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:64](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L64)

___

### guardianSafePeriodGuard

▸ `Static` `Private` **guardianSafePeriodGuard**(`guardianSafePeriod`): [`Result`](../modules.md#result)<``true``, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardianSafePeriod` | `number` |

#### Returns

[`Result`](../modules.md#result)<``true``, `string`\>

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:53](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/L1KeyStore.ts#L53)
