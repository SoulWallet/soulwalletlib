[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / L1KeyStore

# Class: L1KeyStore

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:24](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L24)

## Properties

### L1KeyStoreContract

• `Readonly` **L1KeyStoreContract**: `Contract`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:15](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L15)

___

### L1KeyStoreContractAddress

• `Readonly` **L1KeyStoreContractAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:13](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L13)

___

### L1Provider

• `Readonly` **L1Provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:14](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L14)

___

### days

▪ `Static` `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:11](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L11)

## Methods

### getKey

▸ **getKey**(`slot`): `Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `any`\>\>

#### Overrides

IL1KeyStore.getKey

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:126](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L126)

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:90](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L90)

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:58](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L58)

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:47](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-sdk/src/L1KeyStore.ts#L47)
