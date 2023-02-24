[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AbiCoder

# Class: AbiCoder

[<internal>](../modules/internal_.md).AbiCoder

## Table of contents

### Constructors

- [constructor](internal_.AbiCoder.md#constructor)

### Properties

- [coerceFunc](internal_.AbiCoder.md#coercefunc)

### Methods

- [\_getCoder](internal_.AbiCoder.md#_getcoder)
- [\_getReader](internal_.AbiCoder.md#_getreader)
- [\_getWordSize](internal_.AbiCoder.md#_getwordsize)
- [\_getWriter](internal_.AbiCoder.md#_getwriter)
- [decode](internal_.AbiCoder.md#decode)
- [encode](internal_.AbiCoder.md#encode)
- [getDefaultValue](internal_.AbiCoder.md#getdefaultvalue)

## Constructors

### constructor

• **new AbiCoder**(`coerceFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coerceFunc?` | [`CoerceFunc`](../modules/internal_.md#coercefunc) |

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:7

## Properties

### coerceFunc

• `Readonly` **coerceFunc**: [`CoerceFunc`](../modules/internal_.md#coercefunc)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:6

## Methods

### \_getCoder

▸ **_getCoder**(`param`): [`Coder`](internal_.Coder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ParamType`](internal_.ParamType.md) |

#### Returns

[`Coder`](internal_.Coder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:8

___

### \_getReader

▸ **_getReader**(`data`, `allowLoose?`): [`Reader`](internal_.Reader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `allowLoose?` | `boolean` |

#### Returns

[`Reader`](internal_.Reader.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:10

___

### \_getWordSize

▸ **_getWordSize**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:9

___

### \_getWriter

▸ **_getWriter**(): [`Writer`](internal_.Writer.md)

#### Returns

[`Writer`](internal_.Writer.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:11

___

### decode

▸ **decode**(`types`, `data`, `loose?`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](internal_.ParamType.md))[] |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `loose?` | `boolean` |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:14

___

### encode

▸ **encode**(`types`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](internal_.ParamType.md))[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:13

___

### getDefaultValue

▸ **getDefaultValue**(`types`): [`Result`](../interfaces/internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](internal_.ParamType.md))[] |

#### Returns

[`Result`](../interfaces/internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:12
