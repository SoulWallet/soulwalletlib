[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DecodeCallData

# Class: DecodeCallData

[<internal>](../modules/internal_.md).DecodeCallData

decode call data

## Table of contents

### Constructors

- [constructor](internal_.DecodeCallData.md#constructor)

### Properties

- [\_readFromStorage](internal_.DecodeCallData.md#_readfromstorage)
- [\_saveToStorage](internal_.DecodeCallData.md#_savetostorage)
- [bytes4Methods](internal_.DecodeCallData.md#bytes4methods)
- [instance](internal_.DecodeCallData.md#instance)

### Methods

- [\_decode](internal_.DecodeCallData.md#_decode)
- [decode](internal_.DecodeCallData.md#decode)
- [read4BytesMethod](internal_.DecodeCallData.md#read4bytesmethod)
- [readFromStorage](internal_.DecodeCallData.md#readfromstorage)
- [saveToStorage](internal_.DecodeCallData.md#savetostorage)
- [setStorage](internal_.DecodeCallData.md#setstorage)
- [new](internal_.DecodeCallData.md#new)

## Constructors

### constructor

• `Private` **new DecodeCallData**()

#### Defined in

[src/utils/decodeCallData.ts:22](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L22)

## Properties

### \_readFromStorage

• `Private` **\_readFromStorage**: ``null`` \| (`key`: `string`) => ``null`` \| `string` = `null`

#### Defined in

[src/utils/decodeCallData.ts:21](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L21)

___

### \_saveToStorage

• `Private` **\_saveToStorage**: ``null`` \| (`key`: `string`, `value`: `string`) => `any` = `null`

#### Defined in

[src/utils/decodeCallData.ts:20](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L20)

___

### bytes4Methods

• `Private` **bytes4Methods**: `Map`<`string`, [`IByte4Method`](../interfaces/internal_.IByte4Method.md)\>

#### Defined in

[src/utils/decodeCallData.ts:19](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L19)

___

### instance

▪ `Static` `Private` **instance**: [`DecodeCallData`](internal_.DecodeCallData.md)

#### Defined in

[src/utils/decodeCallData.ts:18](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L18)

## Methods

### \_decode

▸ `Private` **_decode**(`to`, `value`, `callData`): `Promise`<``null`` \| [`IDecode`](../interfaces/internal_.IDecode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `value` | `string` \| `number` \| [`BigNumber`](internal_.BigNumber.md) |
| `callData` | `string` |

#### Returns

`Promise`<``null`` \| [`IDecode`](../interfaces/internal_.IDecode.md)\>

#### Defined in

[src/utils/decodeCallData.ts:226](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L226)

___

### decode

▸ **decode**(`callData`): `Promise`<[`IDecode`](../interfaces/internal_.IDecode.md)[]\>

decode callData

#### Parameters

| Name | Type |
| :------ | :------ |
| `callData` | `string` |

#### Returns

`Promise`<[`IDecode`](../interfaces/internal_.IDecode.md)[]\>

#### Defined in

[src/utils/decodeCallData.ts:174](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L174)

___

### read4BytesMethod

▸ `Private` **read4BytesMethod**(`bytes4`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes4` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/utils/decodeCallData.ts:141](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L141)

___

### readFromStorage

▸ `Private` **readFromStorage**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/utils/decodeCallData.ts:134](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L134)

___

### saveToStorage

▸ `Private` **saveToStorage**(`key`, `value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/decodeCallData.ts:129](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L129)

___

### setStorage

▸ **setStorage**(`saveToStorage`, `readFromStorage`): `void`

set saveToStorage function & readFromStorage function

#### Parameters

| Name | Type |
| :------ | :------ |
| `saveToStorage` | (`key`: `string`, `value`: `string`) => `any` |
| `readFromStorage` | (`key`: `string`) => ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[src/utils/decodeCallData.ts:124](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L124)

___

### new

▸ `Static` **new**(): [`DecodeCallData`](internal_.DecodeCallData.md)

get instance

#### Returns

[`DecodeCallData`](internal_.DecodeCallData.md)

#### Defined in

[src/utils/decodeCallData.ts:112](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/decodeCallData.ts#L112)
