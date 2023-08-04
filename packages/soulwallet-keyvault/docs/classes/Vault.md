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
- [unlock](Vault.md#unlock)
- [\_hash](Vault.md#_hash)

## Constructors

### constructor

• **new Vault**()

#### Defined in

[soulwallet-keyvault/src/vault.ts:45](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L45)

## Properties

### \_AES\_256\_GCM

• `Private` **\_AES\_256\_GCM**: `undefined` \| `AES_256_GCM`

#### Defined in

[soulwallet-keyvault/src/vault.ts:36](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L36)

___

### \_DECRYPT\_KEY\_HASH

• `Private` `Readonly` **\_DECRYPT\_KEY\_HASH**: ``"@DECRYPT_KEY_HASH"``

#### Defined in

[soulwallet-keyvault/src/vault.ts:41](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L41)

___

### \_EventEmitter

• `Private` **\_EventEmitter**: `Emitter`<[`VaultEvents`](../modules.md#vaultevents)\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:43](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L43)

___

### \_KEY\_HASH

• `Private` **\_KEY\_HASH**: `undefined` \| `string`

#### Defined in

[soulwallet-keyvault/src/vault.ts:37](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L37)

___

### \_account

• `Private` **\_account**: `Map`<`string`, `ECDSA`\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:39](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L39)

___

### \_storage

• `Private` **\_storage**: `Storage`

#### Defined in

[soulwallet-keyvault/src/vault.ts:35](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L35)

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

[soulwallet-keyvault/src/vault.ts:83](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L83)

___

### \_isInitialized

▸ `Private` **_isInitialized**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:201](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L201)

___

### \_loadDecryptKeyHash

▸ `Private` **_loadDecryptKeyHash**(): `Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Returns

`Promise`<[`Result`](../modules.md#result)<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/vault.ts:149](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L149)

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

[soulwallet-keyvault/src/vault.ts:408](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L408)

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

[soulwallet-keyvault/src/vault.ts:159](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L159)

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

[soulwallet-keyvault/src/vault.ts:292](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L292)

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

[soulwallet-keyvault/src/vault.ts:356](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L356)

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

[soulwallet-keyvault/src/vault.ts:187](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L187)

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

[soulwallet-keyvault/src/vault.ts:76](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L76)

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

[soulwallet-keyvault/src/vault.ts:306](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L306)

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

[soulwallet-keyvault/src/vault.ts:330](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L330)

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

[soulwallet-keyvault/src/vault.ts:105](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L105)

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

[soulwallet-keyvault/src/vault.ts:173](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L173)

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

[soulwallet-keyvault/src/vault.ts:280](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L280)

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

[soulwallet-keyvault/src/vault.ts:394](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L394)

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

[soulwallet-keyvault/src/vault.ts:254](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L254)

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

[soulwallet-keyvault/src/vault.ts:68](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L68)

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

[soulwallet-keyvault/src/vault.ts:60](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L60)

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

[soulwallet-keyvault/src/vault.ts:440](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L440)

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

[soulwallet-keyvault/src/vault.ts:464](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L464)

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

[soulwallet-keyvault/src/vault.ts:368](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L368)

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

[soulwallet-keyvault/src/vault.ts:145](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L145)

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

[soulwallet-keyvault/src/vault.ts:216](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L216)

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

[soulwallet-keyvault/src/vault.ts:92](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-keyvault/src/vault.ts#L92)
