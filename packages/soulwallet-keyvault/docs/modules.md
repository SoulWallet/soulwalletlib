[@soulwallet/keyvault](README.md) / Modules

# @soulwallet/keyvault

## Table of contents

### Classes

- [Err](classes/Err.md)
- [Ok](classes/Ok.md)
- [Vault](classes/Vault.md)

### Interfaces

- [SignData](interfaces/SignData.md)

### Type Aliases

- [Result](modules.md#result)
- [VaultEvents](modules.md#vaultevents)

## Type Aliases

### Result

Ƭ **Result**<`T`, `E`\>: [`Ok`](classes/Ok.md)<`T`, `E`\> \| [`Err`](classes/Err.md)<`T`, `E`\>

Defines a Result type, which can be either Ok or Err.

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Defined in

soulwallet-result/lib.cjs/Result.d.ts:4

___

### VaultEvents

Ƭ **VaultEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AccountAdded` | `string` |
| `AccountRemoved` | `string` |
| `Initialized` | `void` |
| `Locked` | `void` |
| `PersonalSign` | [`SignData`](interfaces/SignData.md) |
| `ReInitialized` | `void` |
| `Sign` | [`SignData`](interfaces/SignData.md) |
| `Unlocked` | `void` |

#### Defined in

[soulwallet-keyvault/src/vault.ts:15](https://github.com/SoulWallet/soulwalletlib/blob/1189b3a/packages/soulwallet-keyvault/src/vault.ts#L15)
