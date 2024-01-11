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
- [defalutInitialGuardianSafePeriod](L1KeyStore.md#defalutinitialguardiansafeperiod)
- [guardianSafePeriodMax](L1KeyStore.md#guardiansafeperiodmax)
- [guardianSafePeriodMin](L1KeyStore.md#guardiansafeperiodmin)

### Methods

- [getKey](L1KeyStore.md#getkey)
- [getKeyStoreInfo](L1KeyStore.md#getkeystoreinfo)
- [getSetGuardianSigHash](L1KeyStore.md#getsetguardiansighash)
- [getSetKeySigHash](L1KeyStore.md#getsetkeysighash)
- [getTypedData](L1KeyStore.md#gettypeddata)
- [packKeystoreEOASignature](L1KeyStore.md#packkeystoreeoasignature)
- [packKeystoreP256Signature](L1KeyStore.md#packkeystorep256signature)
- [packKeystoreRS256Signature](L1KeyStore.md#packkeystorers256signature)
- [addressToBytes32](L1KeyStore.md#addresstobytes32)
- [bytes32ToAddress](L1KeyStore.md#bytes32toaddress)
- [calcGuardianHash](L1KeyStore.md#calcguardianhash)
- [getGuardianBytes](L1KeyStore.md#getguardianbytes)
- [getKeyHash](L1KeyStore.md#getkeyhash)
- [getSigHash](L1KeyStore.md#getsighash)
- [getSlot](L1KeyStore.md#getslot)
- [getTypedData](L1KeyStore.md#gettypeddata-1)
- [guardianSafePeriodGuard](L1KeyStore.md#guardiansafeperiodguard)
- [initialKeysToAddress](L1KeyStore.md#initialkeystoaddress)
- [packGuardianSignature](L1KeyStore.md#packguardiansignature)

## Constructors

### constructor

• **new L1KeyStore**(`_L1Provider`, `_L1KeyStoreContractAddress`): [`L1KeyStore`](L1KeyStore.md)

Creates an instance of IL1KeyStore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_L1Provider` | `string` \| `JsonRpcProvider` |
| `_L1KeyStoreContractAddress` | `string` |

#### Returns

[`L1KeyStore`](L1KeyStore.md)

**`Memberof`**

IL1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:36](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L36)

## Properties

### L1KeyStoreContract

• `Readonly` **L1KeyStoreContract**: `Contract`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:27](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L27)

___

### L1KeyStoreContractAddress

• `Readonly` **L1KeyStoreContractAddress**: `string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:25](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L25)

___

### L1Provider

• `Readonly` **L1Provider**: `JsonRpcProvider`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:26](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L26)

___

### days

▪ `Static` `Readonly` **days**: ``86400``

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:20](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L20)

___

### defalutInitialGuardianSafePeriod

▪ `Static` `Readonly` **defalutInitialGuardianSafePeriod**: `number`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:21](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L21)

___

### guardianSafePeriodMax

▪ `Static` `Readonly` **guardianSafePeriodMax**: `number`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:23](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L23)

___

### guardianSafePeriodMin

▪ `Static` `Readonly` **guardianSafePeriodMin**: ``0``

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:22](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L22)

## Methods

### getKey

▸ **getKey**(`slot`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

get the key stored in the slot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>} bytes32 key

**`Memberof`**

L1KeyStore

#### Implementation of

IL1KeyStore.getKey

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:348](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L348)

___

### getKeyStoreInfo

▸ **getKeyStoreInfo**(`slot`): `Promise`\<[`Result`](../modules.md#result)\<[`KeyStoreInfo`](../interfaces/KeyStoreInfo.md), `Error`\>\>

get slot info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`KeyStoreInfo`](../interfaces/KeyStoreInfo.md), `Error`\>\>

{(Promise<Result<KeyStoreInfo, Error>>)}

**`Memberof`**

L1KeyStore

#### Implementation of

IL1KeyStore.getKeyStoreInfo

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:377](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L377)

___

### getSetGuardianSigHash

▸ **getSetGuardianSigHash**(`slot`, `guardianHash`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

get sign hash of the setGuardian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 slot |
| `guardianHash` | `string` | bytes32 guardianHash |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:467](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L467)

___

### getSetKeySigHash

▸ **getSetKeySigHash**(`slot`, `bytes32Key`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

get sign hash of the setKey

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `string` | bytes32 slot |
| `bytes32Key` | `string` | the new key |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:449](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L449)

___

### getTypedData

▸ **getTypedData**(`type`, `slot`, `data?`): `Promise`\<[`Result`](../modules.md#result)\<\{ `domain`: `TypedDataDomain` ; `message`: `Record`\<`string`, `any`\> ; `primaryType`: `string` ; `typedMessage`: `string` ; `types`: `Record`\<`string`, `TypedDataField`[]\>  }, `Error`\>\>

Get EIP-712 typed data for a specific slot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`KeyStoreTypedDataType`](../enums/KeyStoreTypedDataType.md) | Interact Type |
| `slot` | `string` | slot |
| `data?` | `string` | Interact Arg (Hex string): TYPE_HASH_SET_KEY: "newSigner":"bytes32". TYPE_HASH_SET_GUARDIAN: "newGuardianHash":"bytes32". TYPE_HASH_SET_GUARDIAN_SAFE_PERIOD: "newGuardianSafePeriod":"uint64". TYPE_HASH_CANCEL_SET_GUARDIAN: no need. TYPE_HASH_CANCEL_SET_GUARDIAN_SAFE_PERIOD: no need. TYPE_HASH_SOCIAL_RECOVERY: "newSigner":"bytes32". |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `domain`: `TypedDataDomain` ; `message`: `Record`\<`string`, `any`\> ; `primaryType`: `string` ; `typedMessage`: `string` ; `types`: `Record`\<`string`, `TypedDataField`[]\>  }, `Error`\>\>

{Promise<Result<{
        domain: TypedDataDomain,
        types: Record<string, Array<TypedDataField>>,
        value: Record<string, any>,
        typedMessage: string
    }, Error>>}

**`Abstract`**

**`Memberof`**

IL1KeyStore

#### Implementation of

IL1KeyStore.getTypedData

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:680](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L680)

___

### packKeystoreEOASignature

▸ **packKeystoreEOASignature**(`signature`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack Keystore signature (EOA)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | EOA signature |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:738](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L738)

___

### packKeystoreP256Signature

▸ **packKeystoreP256Signature**(`signatureData`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack Keystore signature (P256)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signatureData` | `Object` | signature data, messageHash is userOp hash(packed userOp hash) |
| `signatureData.authenticatorData` | `string` | - |
| `signatureData.clientDataSuffix` | `string` | - |
| `signatureData.messageHash` | `string` | - |
| `signatureData.publicKey` | `string` \| [`ECCPoint`](../interfaces/ECCPoint.md) | - |
| `signatureData.r` | `string` | - |
| `signatureData.s` | `string` | - |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:759](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L759)

___

### packKeystoreRS256Signature

▸ **packKeystoreRS256Signature**(`signatureData`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack Keystore signature (RS256)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatureData` | `Object` |
| `signatureData.authenticatorData` | `string` |
| `signatureData.clientDataSuffix` | `string` |
| `signatureData.messageHash` | `string` |
| `signatureData.publicKey` | [`RSAPublicKey`](../interfaces/RSAPublicKey.md) |
| `signatureData.signature` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:788](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L788)

___

### addressToBytes32

▸ **addressToBytes32**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:61](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L61)

___

### bytes32ToAddress

▸ **bytes32ToAddress**(`bytes32`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes32` | `string` |

#### Returns

`string`

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:57](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L57)

___

### calcGuardianHash

▸ **calcGuardianHash**(`guardians`, `threshold`, `salt?`): `string`

calculate the guardian hash

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guardians` | `string`[] | `undefined` | EOA/Smart contract address array (auto sort) |
| `threshold` | `number` | `undefined` |  |
| `salt` | `string` | `ethers.ZeroHash` | hex string (bytes32),default is 0 |

#### Returns

`string`

{string} keccak256 hash of the guardian set

**`Abstract`**

**`Memberof`**

IL1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:212](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L212)

___

### getGuardianBytes

▸ **getGuardianBytes**(`guardians`, `threshold`, `salt?`): `string`

pack guardian info into bytes

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guardians` | `string`[] | `undefined` | EOA/Smart contract address array (auto sort) |
| `threshold` | `number` | `undefined` |  |
| `salt` | `string` | `ethers.ZeroHash` | hex string (bytes32),default is 0 |

#### Returns

`string`

{string} keccak256 hash of the guardian set

**`Memberof`**

IL1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:164](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L164)

___

### getKeyHash

▸ **getKeyHash**(`keys`): `string`

calculate the key hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `string`[] | result of initialKeysToAddress |

#### Returns

`string`

{string} bytes32

**`Static`**

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:117](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L117)

___

### getSigHash

▸ **getSigHash**(`L1KeyStoreContractAddress`, `slot`, `nonce`, `data`): `string`

calc sig hash

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

**`Static`**

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:431](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L431)

___

### getSlot

▸ **getSlot**(`initialKeyHash`, `initialGuardianHash`, `initialGuardianSafePeriod?`): `string`

calculate the slot

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialKeyHash` | `string` | `undefined` | bytes32 |
| `initialGuardianHash` | `string` | `undefined` | bytes32 |
| `initialGuardianSafePeriod?` | `number` | `L1KeyStore.defalutInitialGuardianSafePeriod` |  |

#### Returns

`string`

{string} bytes32

**`Static`**

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:134](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L134)

___

### getTypedData

▸ **getTypedData**(`type`, `chainId`, `keyStoreContract`, `slot`, `nonce`, `data?`): `Object`

Get EIP-712 typed data for a specific slot

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
| `message` | `Record`\<`string`, `any`\> |
| `primaryType` | `string` |
| `typedMessage` | `string` |
| `types` | `Record`\<`string`, `TypedDataField`[]\> |

**`Static`**

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:509](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L509)

___

### guardianSafePeriodGuard

▸ **guardianSafePeriodGuard**(`guardianSafePeriod`): [`Result`](../modules.md#result)\<``true``, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardianSafePeriod` | `number` |

#### Returns

[`Result`](../modules.md#result)\<``true``, `string`\>

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:66](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L66)

___

### initialKeysToAddress

▸ **initialKeysToAddress**(`initialKeys`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] |

#### Returns

`string`[]

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:76](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L76)

___

### packGuardianSignature

▸ **packGuardianSignature**(`guardianSignature`): `string`

pack guardian signatures into `guardianSignature` bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardianSignature` | [`GuardianSignature`](../interfaces/GuardianSignature.md)[] |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

L1KeyStore

#### Defined in

[packages/soulwallet-sdk/src/L1KeyStore.ts:230](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-sdk/src/L1KeyStore.ts#L230)
