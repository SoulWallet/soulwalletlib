[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Writer

# Class: Writer

[<internal>](../modules/internal_.md).Writer

## Table of contents

### Constructors

- [constructor](internal_.Writer.md#constructor)

### Properties

- [\_data](internal_.Writer.md#_data)
- [\_dataLength](internal_.Writer.md#_datalength)
- [\_padding](internal_.Writer.md#_padding)
- [wordSize](internal_.Writer.md#wordsize)

### Accessors

- [data](internal_.Writer.md#data)
- [length](internal_.Writer.md#length)

### Methods

- [\_getValue](internal_.Writer.md#_getvalue)
- [\_writeData](internal_.Writer.md#_writedata)
- [appendWriter](internal_.Writer.md#appendwriter)
- [writeBytes](internal_.Writer.md#writebytes)
- [writeUpdatableValue](internal_.Writer.md#writeupdatablevalue)
- [writeValue](internal_.Writer.md#writevalue)

## Constructors

### constructor

• **new Writer**(`wordSize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordSize?` | `number` |

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:27

## Properties

### \_data

• **\_data**: `Uint8Array`[]

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:24

___

### \_dataLength

• **\_dataLength**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:25

___

### \_padding

• **\_padding**: `Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:26

___

### wordSize

• `Readonly` **wordSize**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:23

## Accessors

### data

• `get` **data**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:28

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:29

## Methods

### \_getValue

▸ **_getValue**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:33

___

### \_writeData

▸ **_writeData**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:30

___

### appendWriter

▸ **appendWriter**(`writer`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`Writer`](internal_.Writer.md) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:31

___

### writeBytes

▸ **writeBytes**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:32

___

### writeUpdatableValue

▸ **writeUpdatableValue**(): (`value`: [`BigNumberish`](../modules/internal_.md#bignumberish)) => `void`

#### Returns

`fn`

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

##### Returns

`void`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:35

___

### writeValue

▸ **writeValue**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:34
