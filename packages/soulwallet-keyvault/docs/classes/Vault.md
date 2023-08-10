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
- [\_DECRYPT\_KEY\_HASH](Vault.md#_decrypt_key_hash)
- [\_EventEmitter](Vault.md#_eventemitter)
- [\_KEY\_HASH](Vault.md#_key_hash)
- [\_account](Vault.md#_account)
- [\_storage](Vault.md#_storage)

### Methods

- [\_deriveKey](Vault.md#_derivekey)
- [\_isInitialized](Vault.md#_isinitialized)
- [\_loadDecryptKeyHash](Vault.md#_loaddecryptkeyhash)
- [\_loadSigner](Vault.md#_loadsigner)
- [\_rawSign](Vault.md#_rawsign)
- [\_saveDecryptKeyHash](Vault.md#_savedecryptkeyhash)
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

## Constructors

### constructor

• **new Vault**()

#### Defined in

[soulwallet-keyvault/src/vault.ts:46](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L46)

## Properties

### \_AES\_256\_GCM

• `Private` **\_AES\_256\_GCM**: `undefined` \| `AES_256_GCM`

#### Defined in

[soulwallet-keyvault/src/vault.ts:37](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L37)

___

### \_DECRYPT\_KEY\_HASH

• `Private` `Readonly` **\_DECRYPT\_KEY\_HASH**: ``"@DECRYPT_KEY_HASH"``

#### Defined in

[soulwallet-keyvault/src/vault.ts:42](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L42)

___

### \_EventEmitter

• `Private` **\_EventEmitter**: `Emitter`<[`VaultEvents`](../modules.md#vaultevents)\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:44](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L44)

___

### \_KEY\_HASH

• `Private` **\_KEY\_HASH**: `undefined` \| `string`

#### Defined in

[soulwallet-keyvault/src/vault.ts:38](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L38)

___

### \_account

• `Private` **\_account**: `Map`<`string`, `ECDSA`\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:40](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L40)

___

### \_storage

• `Private` **\_storage**: `Storage`

#### Defined in

[soulwallet-keyvault/src/vault.ts:36](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L36)

## Methods

### \_deriveKey

▸ `Private` **_deriveKey**(`password`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:84](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L84)

___

### \_isInitialized

▸ `Private` **_isInitialized**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:202](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L202)

___

### \_loadDecryptKeyHash

▸ `Private` **_loadDecryptKeyHash**(): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:150](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L150)

___

### \_loadSigner

▸ `Private` **_loadSigner**(`address`): `Promise`<[`Result`](../modules.md#result)<`ECDSA`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`ECDSA`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:409](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L409)

___

### \_rawSign

▸ `Private` **_rawSign**(`address`, `message`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `message` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:457](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L457)

___

### \_saveDecryptKeyHash

▸ `Private` **_saveDecryptKeyHash**(`keyHash`): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyHash` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:160](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L160)

___

### changePassword

▸ **changePassword**(`oldPassword`, `newPassword`): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

not implemented

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

#### Implementation of

IVault.changePassword

#### Defined in

[soulwallet-keyvault/src/vault.ts:293](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L293)

___

### createSigner

▸ **createSigner**(): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

create a signer

**`Memberof`**

Vault

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Implementation of

IVault.createSigner

#### Defined in

[soulwallet-keyvault/src/vault.ts:357](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L357)

___

### destroy

▸ `Private` **destroy**(): `Promise`<`void`\>

for security reason, allways call this method after use

**`Memberof`**

Vault

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[soulwallet-keyvault/src/vault.ts:188](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L188)

___

### emit

▸ `Private` **emit**<`Key`\>(`eventName`, `payload`): `void`

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

[soulwallet-keyvault/src/vault.ts:77](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L77)

___

### export

▸ **export**(`password`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

not implemented

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Implementation of

IVault.export

#### Defined in

[soulwallet-keyvault/src/vault.ts:307](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L307)

___

### importSigner

▸ **importSigner**(`privateKey`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

import signer from privateKey

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Implementation of

IVault.importSigner

#### Defined in

[soulwallet-keyvault/src/vault.ts:331](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L331)

___

### init

▸ **init**(`password`, `enforce?`): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

initialize vault

**`Memberof`**

Vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` |  |
| `enforce?` | `boolean` | if true, delete all data and re-initialize |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

#### Implementation of

IVault.init

#### Defined in

[soulwallet-keyvault/src/vault.ts:106](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L106)

___

### isInitialized

▸ **isInitialized**(): `Promise`<[`Result`](../modules.md#result)<`boolean`, `Error`\>\>

check if vault is initialized

**`Memberof`**

Vault

#### Returns

`Promise`<[`Result`](../modules.md#result)<`boolean`, `Error`\>\>

{Promise<Result<boolean, Error>>}

#### Implementation of

IVault.isInitialized

#### Defined in

[soulwallet-keyvault/src/vault.ts:174](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L174)

___

### isLocked

▸ **isLocked**(): `Promise`<[`Result`](../modules.md#result)<`boolean`, `Error`\>\>

check if vault is locked

**`Memberof`**

Vault

#### Returns

`Promise`<[`Result`](../modules.md#result)<`boolean`, `Error`\>\>

{Promise<Result<boolean, Error>>}

#### Implementation of

IVault.isLocked

#### Defined in

[soulwallet-keyvault/src/vault.ts:281](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L281)

___

### listSigners

▸ **listSigners**(): `Promise`<[`Result`](../modules.md#result)<`string`[], `Error`\>\>

list all signers

**`Memberof`**

Vault

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`[], `Error`\>\>

{Promise<Result<string[], Error>>}

#### Implementation of

IVault.listSigners

#### Defined in

[soulwallet-keyvault/src/vault.ts:395](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L395)

___

### lock

▸ **lock**(): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

lock keyVault

**`Memberof`**

Vault

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

#### Implementation of

IVault.lock

#### Defined in

[soulwallet-keyvault/src/vault.ts:255](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L255)

___

### off

▸ **off**<`Key`\>(`eventName`, `handler?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Key` |
| `handler?` | (`arg`: [`VaultEvents`](../modules.md#vaultevents)[`Key`]) => `any` |

#### Returns

`void`

#### Defined in

[soulwallet-keyvault/src/vault.ts:69](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L69)

___

### on

▸ **on**<`Key`\>(`eventName`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Key` |
| `handler` | (`arg`: [`VaultEvents`](../modules.md#vaultevents)[`Key`]) => `any` |

#### Returns

`void`

#### Defined in

[soulwallet-keyvault/src/vault.ts:61](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L61)

___

### personalSign

▸ **personalSign**(`address`, `message`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

sign a message (personalSign)

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `message` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Implementation of

IVault.personalSign

#### Defined in

[soulwallet-keyvault/src/vault.ts:441](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L441)

___

### rawSign

▸ **rawSign**(`address`, `message`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

sign a message (rawSign)

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `message` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Implementation of

IVault.rawSign

#### Defined in

[soulwallet-keyvault/src/vault.ts:474](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L474)

___

### removeSigner

▸ **removeSigner**(`address`): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

delete a signer

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

#### Implementation of

IVault.removeSigner

#### Defined in

[soulwallet-keyvault/src/vault.ts:369](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L369)

___

### restore

▸ **restore**(`exportData`, `password`): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

not implemented

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `exportData` | `string` |
| `password` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

#### Implementation of

IVault.restore

#### Defined in

[soulwallet-keyvault/src/vault.ts:146](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L146)

___

### typedDataSign

▸ **typedDataSign**(`address`, `domain`, `types`, `value`, `provider?`): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

sign typedData message (EIP712)

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `domain` | `TypedDataDomain` |
| `types` | `Record`<`string`, `TypedDataField`[]\> |
| `value` | `Record`<`string`, `any`\> |
| `provider?` | `string` \| `JsonRpcProvider` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

#### Implementation of

IVault.typedDataSign

#### Defined in

[soulwallet-keyvault/src/vault.ts:497](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L497)

___

### unlock

▸ **unlock**(`password`): `Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

unlock keyVault

**`Memberof`**

Vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

#### Implementation of

IVault.unlock

#### Defined in

[soulwallet-keyvault/src/vault.ts:217](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L217)

___

### \_hash

▸ `Static` `Private` **_hash**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[soulwallet-keyvault/src/vault.ts:93](https://github.com/SoulWallet/soulwalletlib/blob/2de4184/packages/soulwallet-keyvault/src/vault.ts#L93)
