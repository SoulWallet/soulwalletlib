[@soulwallet/assets](README.md) / Modules

# @soulwallet/assets

## Table of contents

### Enumerations

- [AddressType](enums/AddressType.md)

### Classes

- [ResultWithErrors](classes/ResultWithErrors.md)

### Interfaces

- [TokenInfo](interfaces/TokenInfo.md)

### Functions

- [getAsset](modules.md#getasset)

## Functions

### getAsset

▸ **getAsset**(`chainId`, `address`): `Promise`<[`ResultWithErrors`](classes/ResultWithErrors.md)<[`TokenInfo`](interfaces/TokenInfo.md), `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `address` | `string` |

#### Returns

`Promise`<[`ResultWithErrors`](classes/ResultWithErrors.md)<[`TokenInfo`](interfaces/TokenInfo.md), `string`\>\>

#### Defined in

soulwallet-assets/src/asset.ts:5
