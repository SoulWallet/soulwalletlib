[@soulwallet/sdk](../README.md) / [Modules](../modules.md) / L1KeyStore

# Class: L1KeyStore

L1KeyStore

**`Export`**

**`Implements`**

## Implements

- `IL1KeyStore`

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
- [getKeyStoreInfo](L1KeyStore.md#getkeystoreinfo)
- [getSetGuardianSigHash](L1KeyStore.md#getsetguardiansighash)
- [getSetKeySigHash](L1KeyStore.md#getsetkeysighash)
- [getTypedData](L1KeyStore.md#gettypeddata)
- [addressToBytes32](L1KeyStore.md#addresstobytes32)
- [bytes32ToAddress](L1KeyStore.md#bytes32toaddress)
- [calcGuardianHash](L1KeyStore.md#calcguardianhash)
- [getGuardianBytes](L1KeyStore.md#getguardianbytes)
- [getSigHash](L1KeyStore.md#getsighash)
- [getSlot](L1KeyStore.md#getslot)
- [getTypedData](L1KeyStore.md#gettypeddata-1)
- [guardianSafePeriodGuard](L1KeyStore.md#guardiansafeperiodguard)
- [packGuardianSignature](L1KeyStore.md#packguardiansignature)

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

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:31](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L31)

## Properties

### L1KeyStoreContract

• `Readonly` **L1KeyStoreContract**: `Contract`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:22](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L22)

___

### L1KeyStoreContractAddress

• `Readonly` **L1KeyStoreContractAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:20](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L20)

___

### L1Provider

• `Readonly` **L1Provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:21](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L21)

___

### days

▪ `Static` `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:18](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L18)

## Methods

### getKey

▸ **getKey**(`slot`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

get the key stored in the slot

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>} bytes32 key

#### Implementation of

IL1KeyStore.getKey

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:296](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L296)

___

### getKeyStoreInfo

▸ **getKeyStoreInfo**(`slot`): `Promise`<[`Result`](../modules.md#result)<[`KeyStoreInfo`](../interfaces/KeyStoreInfo.md), `Error`\>\>

get slot info

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`KeyStoreInfo`](../interfaces/KeyStoreInfo.md), `Error`\>\>

{(Promise<Result<KeyStoreInfo, Error>>)}

#### Implementation of

IL1KeyStore.getKeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:325](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L325)

___

### getSetGuardianSigHash

▸ **getSetGuardianSigHash**(`slot`, `guardianHash`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

get sign hash of the setGuardian

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 slot |
| `guardianHash` | `string` | bytes32 guardianHash |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:415](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L415)

___

### getSetKeySigHash

▸ **getSetKeySigHash**(`slot`, `bytes32Key`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

get sign hash of the setKey

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 slot |
| `bytes32Key` | `string` | the new key |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:397](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L397)

___

### getTypedData

▸ **getTypedData**(`type`, `slot`, `data?`): `Promise`<[`Result`](../modules.md#result)<{ `domain`: `TypedDataDomain` ; `typedMessage`: `string` ; `types`: `Record`<`string`, `TypedDataField`[]\> ; `value`: `Record`<`string`, `any`\>  }, `Error`\>\>

Get EIP-712 typed data for a specific slot

**`Abstract`**

**`Memberof`**

IL1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`KeyStoreTypedDataType`](../enums/KeyStoreTypedDataType.md) | Interact Type |
| `slot` | `string` | slot |
| `data?` | `string` | Interact Arg (Hex string): TYPE_HASH_SET_KEY: "newSigner":"bytes32". TYPE_HASH_SET_GUARDIAN: "newGuardianHash":"bytes32". TYPE_HASH_SET_GUARDIAN_SAFE_PERIOD: "newGuardianSafePeriod":"uint64". TYPE_HASH_CANCEL_SET_GUARDIAN: no need. TYPE_HASH_CANCEL_SET_GUARDIAN_SAFE_PERIOD: no need. TYPE_HASH_SOCIAL_RECOVERY: "newSigner":"bytes32". |

#### Returns

`Promise`<[`Result`](../modules.md#result)<{ `domain`: `TypedDataDomain` ; `typedMessage`: `string` ; `types`: `Record`<`string`, `TypedDataField`[]\> ; `value`: `Record`<`string`, `any`\>  }, `Error`\>\>

{Promise<Result<{
        domain: TypedDataDomain,
        types: Record<string, Array<TypedDataField>>,
        value: Record<string, any>,
        typedMessage: string
    }, Error>>}

#### Implementation of

IL1KeyStore.getTypedData

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:616](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L616)

___

### addressToBytes32

▸ `Static` **addressToBytes32**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:56](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L56)

___

### bytes32ToAddress

▸ `Static` **bytes32ToAddress**(`bytes32`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes32` | `string` |

#### Returns

`string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:52](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L52)

___

### calcGuardianHash

▸ `Static` **calcGuardianHash**(`guardians`, `threshold`, `salt?`): `string`

calculate the guardian hash

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:159](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L159)

___

### getGuardianBytes

▸ `Static` **getGuardianBytes**(`guardians`, `threshold`, `salt?`): `string`

pack guardian info into bytes

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:111](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L111)

___

### getSigHash

▸ `Static` **getSigHash**(`L1KeyStoreContractAddress`, `slot`, `nonce`, `data`): `string`

calc sig hash

**`Static`**

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `L1KeyStoreContractAddress` | `string` | L1KeyStore contract address |
| `slot` | `string` | bytes32 slot |
| `nonce` | `number` | uint256 nonce |
| `data` | `string` | bytes32 data ( padded to bytes32 owner address \| guardian Hash ) |

#### Returns

`string`

{string}

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:379](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L379)

___

### getSlot

▸ `Static` **getSlot**(`initialKey`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `string`

calculate the slot

**`Static`**

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialKey` | `string` | bytes32 |
| `initialGuardianHash` | `string` | bytes32 |
| `initialGuardianSafePeriod?` | `number` | - |

#### Returns

`string`

{string} bytes32

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:81](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L81)

___

### getTypedData

▸ `Static` **getTypedData**(`type`, `chainId`, `keyStoreContract`, `slot`, `nonce`, `data?`): `Object`

Get EIP-712 typed data for a specific slot

**`Static`**

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`KeyStoreTypedDataType`](../enums/KeyStoreTypedDataType.md) | Interact Type |
| `chainId` | `number` | chainId |
| `keyStoreContract` | `string` | keyStoreContract address |
| `slot` | `string` | bytes32 slot |
| `nonce` | `number` | uint256 nonce |
| `data?` | `string` | Interact Arg (Hex string): TYPE_HASH_SET_KEY: "newSigner":"bytes32". TYPE_HASH_SET_GUARDIAN: "newGuardianHash":"bytes32". TYPE_HASH_SET_GUARDIAN_SAFE_PERIOD: "newGuardianSafePeriod":"uint64". TYPE_HASH_CANCEL_SET_GUARDIAN: no need. TYPE_HASH_CANCEL_SET_GUARDIAN_SAFE_PERIOD: no need. TYPE_HASH_SOCIAL_RECOVERY: "newSigner":"bytes32". |

#### Returns

`Object`

{{
        domain: TypedDataDomain,
        types: Record<string, Array<TypedDataField>>,
        value: Record<string, any>,
        typedMessage: string
    }}

| Name | Type |
| :------ | :------ |
| `domain` | `TypedDataDomain` |
| `typedMessage` | `string` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `any`\> |

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:457](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L457)

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

[packages/soulwallet-sdk/src/L1KeyStore.ts:61](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L61)

___

### packGuardianSignature

▸ `Static` **packGuardianSignature**(`guardianSignature`): `string`

pack guardian signatures into `guardianSignature` bytes

**`Static`**

**`Memberof`**

L1KeyStore

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardianSignature` | [`GuardianSignature`](../interfaces/GuardianSignature.md)[] |

#### Returns

`string`

{string}

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:177](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-sdk/src/L1KeyStore.ts#L177)
