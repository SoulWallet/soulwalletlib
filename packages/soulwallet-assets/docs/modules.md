[@soulwallet/assets](README.md) / Modules

# @soulwallet/assets

## Table of contents

### Enumerations

- [AddressType](enums/AddressType.md)

### Classes

- [Err](classes/Err.md)
- [Ok](classes/Ok.md)

### Interfaces

- [TokenInfo](interfaces/TokenInfo.md)

### Type Aliases

- [Result](modules.md#result)

### Functions

- [getAsset](modules.md#getasset)

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

soulwallet-result/lib/Result.d.ts:4

## Functions

### getAsset

▸ **getAsset**(`chainId`, `address`): `Promise`<[`Result`](modules.md#result)<[`TokenInfo`](interfaces/TokenInfo.md), `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `address` | `string` |

#### Returns

`Promise`<[`Result`](modules.md#result)<[`TokenInfo`](interfaces/TokenInfo.md), `string`\>\>

#### Defined in

[soulwallet-assets/src/asset.ts:5](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-assets/src/asset.ts#L5)
