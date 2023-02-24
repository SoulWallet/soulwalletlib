[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BigNumber

# Class: BigNumber

[<internal>](../modules/internal_.md).BigNumber

## Implements

- [`Hexable`](../interfaces/internal_.Hexable.md)

## Table of contents

### Constructors

- [constructor](internal_.BigNumber.md#constructor)

### Properties

- [\_hex](internal_.BigNumber.md#_hex)
- [\_isBigNumber](internal_.BigNumber.md#_isbignumber)

### Methods

- [abs](internal_.BigNumber.md#abs)
- [add](internal_.BigNumber.md#add)
- [and](internal_.BigNumber.md#and)
- [div](internal_.BigNumber.md#div)
- [eq](internal_.BigNumber.md#eq)
- [fromTwos](internal_.BigNumber.md#fromtwos)
- [gt](internal_.BigNumber.md#gt)
- [gte](internal_.BigNumber.md#gte)
- [isNegative](internal_.BigNumber.md#isnegative)
- [isZero](internal_.BigNumber.md#iszero)
- [lt](internal_.BigNumber.md#lt)
- [lte](internal_.BigNumber.md#lte)
- [mask](internal_.BigNumber.md#mask)
- [mod](internal_.BigNumber.md#mod)
- [mul](internal_.BigNumber.md#mul)
- [or](internal_.BigNumber.md#or)
- [pow](internal_.BigNumber.md#pow)
- [shl](internal_.BigNumber.md#shl)
- [shr](internal_.BigNumber.md#shr)
- [sub](internal_.BigNumber.md#sub)
- [toBigInt](internal_.BigNumber.md#tobigint)
- [toHexString](internal_.BigNumber.md#tohexstring)
- [toJSON](internal_.BigNumber.md#tojson)
- [toNumber](internal_.BigNumber.md#tonumber)
- [toString](internal_.BigNumber.md#tostring)
- [toTwos](internal_.BigNumber.md#totwos)
- [xor](internal_.BigNumber.md#xor)
- [from](internal_.BigNumber.md#from)
- [isBigNumber](internal_.BigNumber.md#isbignumber)

## Constructors

### constructor

• **new BigNumber**(`constructorGuard`, `hex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `hex` | `string` |

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:7

## Properties

### \_hex

• `Readonly` **\_hex**: `string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:5

___

### \_isBigNumber

• `Readonly` **\_isBigNumber**: `boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:6

## Methods

### abs

▸ **abs**(): [`BigNumber`](internal_.BigNumber.md)

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:10

___

### add

▸ **add**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:11

___

### and

▸ **and**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:17

___

### div

▸ **div**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:13

___

### eq

▸ **eq**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:23

___

### fromTwos

▸ **fromTwos**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:8

___

### gt

▸ **gt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:26

___

### gte

▸ **gte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:27

___

### isNegative

▸ **isNegative**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:28

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:29

___

### lt

▸ **lt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:24

___

### lte

▸ **lte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:25

___

### mask

▸ **mask**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:20

___

### mod

▸ **mod**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:15

___

### mul

▸ **mul**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:14

___

### or

▸ **or**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:18

___

### pow

▸ **pow**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:16

___

### shl

▸ **shl**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:21

___

### shr

▸ **shr**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:22

___

### sub

▸ **sub**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:12

___

### toBigInt

▸ **toBigInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:31

___

### toHexString

▸ **toHexString**(): `string`

#### Returns

`string`

#### Implementation of

[Hexable](../interfaces/internal_.Hexable.md).[toHexString](../interfaces/internal_.Hexable.md#tohexstring)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:33

___

### toJSON

▸ **toJSON**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:34

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:30

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:32

___

### toTwos

▸ **toTwos**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:9

___

### xor

▸ **xor**(`other`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:19

___

### from

▸ `Static` **from**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:35

___

### isBigNumber

▸ `Static` **isBigNumber**(`value`): value is BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is BigNumber

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:36
