[@soulwallet/keyvault](../README.md) / [Modules](../modules.md) / Vault

# Class: Vault

Vault

**`Export`**

**`Implements`**

## Implements

- `IVault`

## Table of contents

### Constructors

- [constructor](Vault.md#constructor)

### Properties

- [\_AES\_256\_GCM](Vault.md#_aes_256_gcm)
- [\_EventEmitter](Vault.md#_eventemitter)
- [\_KeyVaultDataCache](Vault.md#_keyvaultdatacache)
- [\_account](Vault.md#_account)
- [\_lockTime](Vault.md#_locktime)
- [\_storage](Vault.md#_storage)
- [\_timeout](Vault.md#_timeout)
- [\_timeoutDuration](Vault.md#_timeoutduration)

### Methods

- [\_clearTimeout](Vault.md#_cleartimeout)
- [\_deriveKey](Vault.md#_derivekey)
- [\_isInitialized](Vault.md#_isinitialized)
- [\_loadData](Vault.md#_loaddata)
- [\_loadSigner](Vault.md#_loadsigner)
- [\_rawSign](Vault.md#_rawsign)
- [\_saveData](Vault.md#_savedata)
- [\_touchTimeout](Vault.md#_touchtimeout)
- [changePassword](Vault.md#changepassword)
- [createSigner](Vault.md#createsigner)
- [destroy](Vault.md#destroy)
- [emit](Vault.md#emit)
- [export](Vault.md#export)
- [importSigner](Vault.md#importsigner)
- [init](Vault.md#init)
- [isInitialized](Vault.md#isinitialized)
- [isLocked](Vault.md#islocked)
- [listSigners](Vault.md#listsigners)
- [lock](Vault.md#lock)
- [off](Vault.md#off)
- [on](Vault.md#on)
- [personalSign](Vault.md#personalsign)
- [rawSign](Vault.md#rawsign)
- [removeSigner](Vault.md#removesigner)
- [restore](Vault.md#restore)
- [typedDataSign](Vault.md#typeddatasign)
- [unlock](Vault.md#unlock)
- [\_hash](Vault.md#_hash)
- [remove](Vault.md#remove)
- [rename](Vault.md#rename)

## Constructors

### constructor

• **new Vault**(`tag`): [`Vault`](Vault.md)

Creates an instance of Vault.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | tag for keyVault |

#### Returns

[`Vault`](Vault.md)

**`Memberof`**

Vault

#### Defined in

[soulwallet-keyvault/src/vault.ts:59](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L59)

## Properties

### \_AES\_256\_GCM

• `Private` **\_AES\_256\_GCM**: `undefined` \| `AES_256_GCM`

#### Defined in

[soulwallet-keyvault/src/vault.ts:42](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L42)

___

### \_EventEmitter

• `Private` **\_EventEmitter**: `Emitter`\<[`VaultEvents`](../modules.md#vaultevents)\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:48](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L48)

___

### \_KeyVaultDataCache

• `Private` **\_KeyVaultDataCache**: `undefined` \| `KeyVaultStorageStructure` = `undefined`

#### Defined in

[soulwallet-keyvault/src/vault.ts:44](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L44)

___

### \_account

• `Private` **\_account**: `Map`\<`string`, `ECDSA`\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:46](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L46)

___

### \_lockTime

• `Private` **\_lockTime**: `number` = `0`

#### Defined in

[soulwallet-keyvault/src/vault.ts:52](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L52)

___

### \_storage

• `Private` **\_storage**: `Storage`

#### Defined in

[soulwallet-keyvault/src/vault.ts:41](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L41)

___

### \_timeout

• `Private` **\_timeout**: `undefined` \| `Timeout`

#### Defined in

[soulwallet-keyvault/src/vault.ts:50](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L50)

___

### \_timeoutDuration

• `Private` `Readonly` **\_timeoutDuration**: `number`

#### Defined in

[soulwallet-keyvault/src/vault.ts:51](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L51)

## Methods

### \_clearTimeout

▸ **_clearTimeout**(): `void`

#### Returns

`void`

#### Defined in

[soulwallet-keyvault/src/vault.ts:182](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L182)

___

### \_deriveKey

▸ **_deriveKey**(`password`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:221](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L221)

___

### \_isInitialized

▸ **_isInitialized**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:334](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L334)

___

### \_loadData

▸ **_loadData**(): `Promise`\<[`Result`](../modules.md#result)\<`KeyVaultStorageStructure`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`KeyVaultStorageStructure`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:189](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L189)

___

### \_loadSigner

▸ **_loadSigner**(`address`): `Promise`\<[`Result`](../modules.md#result)\<`ECDSA`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`ECDSA`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:554](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L554)

___

### \_rawSign

▸ **_rawSign**(`address`, `message`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `message` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:602](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L602)

___

### \_saveData

▸ **_saveData**(`keyVaultStorageStructure`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyVaultStorageStructure` | `KeyVaultStorageStructure` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:212](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L212)

___

### \_touchTimeout

▸ **_touchTimeout**(`createTimer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `createTimer` | `boolean` |

#### Returns

`void`

#### Defined in

[soulwallet-keyvault/src/vault.ts:171](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L171)

___

### changePassword

▸ **changePassword**(`oldPassword`, `newPassword`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

not implemented

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.changePassword

#### Defined in

[soulwallet-keyvault/src/vault.ts:430](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L430)

___

### createSigner

▸ **createSigner**(): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

create a signer

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.createSigner

#### Defined in

[soulwallet-keyvault/src/vault.ts:493](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L493)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

for security reason, allways call this method after use

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Memberof`**

Vault

#### Defined in

[soulwallet-keyvault/src/vault.ts:319](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L319)

___

### emit

▸ **emit**\<`Key`\>(`eventName`, `payload`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Key` |
| `payload` | [`VaultEvents`](../modules.md#vaultevents)[`Key`] |

#### Returns

`void`

#### Defined in

[soulwallet-keyvault/src/vault.ts:158](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L158)

___

### export

▸ **export**(`password`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

not implemented

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.export

#### Defined in

[soulwallet-keyvault/src/vault.ts:445](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L445)

___

### importSigner

▸ **importSigner**(`privateKey`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

import signer from privateKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.importSigner

#### Defined in

[soulwallet-keyvault/src/vault.ts:459](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L459)

___

### init

▸ **init**(`password`, `enforce?`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

initialize vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` |  |
| `enforce?` | `boolean` | if true, delete all data and re-initialize |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.init

#### Defined in

[soulwallet-keyvault/src/vault.ts:243](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L243)

___

### isInitialized

▸ **isInitialized**(): `Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

check if vault is initialized

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

{Promise<Result<boolean, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.isInitialized

#### Defined in

[soulwallet-keyvault/src/vault.ts:302](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L302)

___

### isLocked

▸ **isLocked**(): `Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

check if vault is locked

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

{Promise<Result<boolean, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.isLocked

#### Defined in

[soulwallet-keyvault/src/vault.ts:416](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L416)

___

### listSigners

▸ **listSigners**(): `Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

list all signers

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

{Promise<Result<string[], Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.listSigners

#### Defined in

[soulwallet-keyvault/src/vault.ts:540](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L540)

___

### lock

▸ **lock**(): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

lock keyVault

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.lock

#### Defined in

[soulwallet-keyvault/src/vault.ts:393](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L393)

___

### off

▸ **off**\<`Key`\>(`eventName`, `handler?`): `void`

remove event listener

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) | extends keyof VaultEvents |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Key` | event name |
| `handler?` | (`arg`: [`VaultEvents`](../modules.md#vaultevents)[`Key`]) => `unknown` | event handler |

#### Returns

`void`

**`Memberof`**

Vault

#### Defined in

[soulwallet-keyvault/src/vault.ts:150](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L150)

___

### on

▸ **on**\<`Key`\>(`eventName`, `handler`): `void`

add event listener

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) | extends keyof VaultEvents |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Key` | event name |
| `handler` | (`arg`: [`VaultEvents`](../modules.md#vaultevents)[`Key`]) => `unknown` | event handler |

#### Returns

`void`

**`Memberof`**

Vault

#### Defined in

[soulwallet-keyvault/src/vault.ts:134](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L134)

___

### personalSign

▸ **personalSign**(`address`, `message`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

sign a message (personalSign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `message` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.personalSign

#### Defined in

[soulwallet-keyvault/src/vault.ts:586](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L586)

___

### rawSign

▸ **rawSign**(`address`, `message`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

sign a message (rawSign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `message` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.rawSign

#### Defined in

[soulwallet-keyvault/src/vault.ts:619](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L619)

___

### removeSigner

▸ **removeSigner**(`address`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

delete a signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.removeSigner

#### Defined in

[soulwallet-keyvault/src/vault.ts:505](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L505)

___

### restore

▸ **restore**(`exportData`, `password`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

not implemented

#### Parameters

| Name | Type |
| :------ | :------ |
| `exportData` | `string` |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.restore

#### Defined in

[soulwallet-keyvault/src/vault.ts:290](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L290)

___

### typedDataSign

▸ **typedDataSign**(`address`, `domain`, `types`, `value`, `provider?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

sign typedData message (EIP712)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`\<`string`, `TypedDataField`[]\> |
| `value` | `Record`\<`string`, `any`\> |
| `provider?` | `string` \| `JsonRpcProvider` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.typedDataSign

#### Defined in

[soulwallet-keyvault/src/vault.ts:643](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L643)

___

### unlock

▸ **unlock**(`password`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

unlock keyVault

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.unlock

#### Defined in

[soulwallet-keyvault/src/vault.ts:349](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L349)

___

### \_hash

▸ **_hash**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[soulwallet-keyvault/src/vault.ts:230](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L230)

___

### remove

▸ **remove**(`tag`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

destroy vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | tag for keyVault |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Static`**

**`Memberof`**

Vault

#### Defined in

[soulwallet-keyvault/src/vault.ts:83](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L83)

___

### rename

▸ **rename**(`oldTag`, `newTag`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

rename vault, must lock first

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldTag` | `string` | old tag |
| `newTag` | `string` | new tag |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Static`**

**`Memberof`**

Vault

#### Defined in

[soulwallet-keyvault/src/vault.ts:97](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-keyvault/src/vault.ts#L97)
