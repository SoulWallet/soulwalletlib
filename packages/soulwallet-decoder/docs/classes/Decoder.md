[@soulwallet/decoder](../README.md) / [Modules](../modules.md) / Decoder

# Class: Decoder

## Table of contents

### Constructors

- [constructor](Decoder.md#constructor)

### Methods

- [decode](Decoder.md#decode)
- [decodeFunctionParams](Decoder.md#decodefunctionparams)
- [decodeItem](Decoder.md#decodeitem)

## Constructors

### constructor

• **new Decoder**()

## Methods

### decode

▸ `Static` **decode**(`chainId`, `from`, `to`, `calldata`): `Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md)[], `string`\>\>

@Doc: Why use: async?
       May be use some online services in the future, 
       use the async keyword ensures that the interface signature will not need to change in the future.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `from` | `string` |
| `to` | `string` |
| `calldata` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md)[], `string`\>\>

#### Defined in

[soulwallet-decoder/src/decoder.ts:17](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-decoder/src/decoder.ts#L17)

___

### decodeFunctionParams

▸ `Static` `Private` **decodeFunctionParams**(`calldata`): `Promise`<[`Result`](../modules.md#result)<[`Method`](../interfaces/Method.md), `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `calldata` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`Method`](../interfaces/Method.md), `string`\>\>

#### Defined in

[soulwallet-decoder/src/decoder.ts:79](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-decoder/src/decoder.ts#L79)

___

### decodeItem

▸ `Static` `Private` **decodeItem**(`from`, `to`, `value`, `calldata`, `chainId`): `Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md), `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `value` | `bigint` |
| `calldata` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md), `string`\>\>

#### Defined in

[soulwallet-decoder/src/decoder.ts:111](https://github.com/proofofsoulprotocol/soulwalletlib/blob/99dfd90/packages/soulwallet-decoder/src/decoder.ts#L111)
