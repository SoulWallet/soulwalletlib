[@soulwallet/decoder](../README.md) / [Modules](../modules.md) / Decoder

# Class: Decoder

Decode the transaction data (userOp.calldata).

**`Export`**

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

▸ `Static` **decode**(`chainId`, `from`, `to`, `calldata`): `Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md)[], `Error`\>\>

Decode the transaction data (userOp.calldata).
@description: Why use async: May be use some online services in the future, use the async keyword ensures that the interface signature will not need to change in the future.

**`Static`**

**`Memberof`**

Decoder

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `from` | `string` |
| `to` | `string` |
| `calldata` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md)[], `Error`\>\>

{Promise<Result<DecodeResult[], Error>>}

#### Defined in

[soulwallet-decoder/src/decoder.ts:30](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-decoder/src/decoder.ts#L30)

___

### decodeFunctionParams

▸ `Static` `Private` **decodeFunctionParams**(`calldata`): `Promise`<[`Result`](../modules.md#result)<[`Method`](../interfaces/Method.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `calldata` | `string` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`Method`](../interfaces/Method.md), `Error`\>\>

#### Defined in

[soulwallet-decoder/src/decoder.ts:94](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-decoder/src/decoder.ts#L94)

___

### decodeItem

▸ `Static` `Private` **decodeItem**(`from`, `to`, `value`, `calldata`, `chainId`): `Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `value` | `bigint` |
| `calldata` | `string` |
| `chainId` | `number` |

#### Returns

`Promise`<[`Result`](../modules.md#result)<[`DecodeResult`](../interfaces/DecodeResult.md), `Error`\>\>

#### Defined in

[soulwallet-decoder/src/decoder.ts:128](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-decoder/src/decoder.ts#L128)
