[@soulwallet/keyvault](../README.md) / [Modules](../modules.md) / ABFA

# Class: ABFA

Anti-Brute-Force Algorithm

**`Export`**

## Table of contents

### Constructors

- [constructor](ABFA.md#constructor)

### Methods

- [argon2id](ABFA.md#argon2id)
- [scrypt](ABFA.md#scrypt)

## Constructors

### constructor

• **new ABFA**(): [`ABFA`](ABFA.md)

#### Returns

[`ABFA`](ABFA.md)

## Methods

### argon2id

▸ **argon2id**(`password`, `salt`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `salt` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[soulwallet-keyvault/src/crypto.ts:210](https://github.com/SoulWallet/soulwalletlib/blob/ba276ce/packages/soulwallet-keyvault/src/crypto.ts#L210)

___

### scrypt

▸ **scrypt**(`password`, `salt?`, `N?`, `r?`, `p?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `password` | `string` | `undefined` |
| `salt` | `string` | `scryptConfig.salt` |
| `N` | `number` | `scryptConfig.N` |
| `r` | `number` | `scryptConfig.r` |
| `p` | `number` | `scryptConfig.p` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Defined in

[soulwallet-keyvault/src/crypto.ts:187](https://github.com/SoulWallet/soulwalletlib/blob/ba276ce/packages/soulwallet-keyvault/src/crypto.ts#L187)
