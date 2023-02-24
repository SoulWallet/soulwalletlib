[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Formatter

# Class: Formatter

[<internal>](../modules/internal_.md).Formatter

## Table of contents

### Constructors

- [constructor](internal_.Formatter.md#constructor)

### Properties

- [formats](internal_.Formatter.md#formats)

### Methods

- [\_block](internal_.Formatter.md#_block)
- [accessList](internal_.Formatter.md#accesslist)
- [address](internal_.Formatter.md#address)
- [bigNumber](internal_.Formatter.md#bignumber)
- [block](internal_.Formatter.md#block)
- [blockTag](internal_.Formatter.md#blocktag)
- [blockWithTransactions](internal_.Formatter.md#blockwithtransactions)
- [boolean](internal_.Formatter.md#boolean)
- [callAddress](internal_.Formatter.md#calladdress)
- [contractAddress](internal_.Formatter.md#contractaddress)
- [data](internal_.Formatter.md#data)
- [difficulty](internal_.Formatter.md#difficulty)
- [filter](internal_.Formatter.md#filter)
- [filterLog](internal_.Formatter.md#filterlog)
- [getDefaultFormats](internal_.Formatter.md#getdefaultformats)
- [hash](internal_.Formatter.md#hash)
- [hex](internal_.Formatter.md#hex)
- [number](internal_.Formatter.md#number)
- [receipt](internal_.Formatter.md#receipt)
- [receiptLog](internal_.Formatter.md#receiptlog)
- [topics](internal_.Formatter.md#topics)
- [transaction](internal_.Formatter.md#transaction)
- [transactionRequest](internal_.Formatter.md#transactionrequest)
- [transactionResponse](internal_.Formatter.md#transactionresponse)
- [type](internal_.Formatter.md#type)
- [uint256](internal_.Formatter.md#uint256)
- [allowFalsish](internal_.Formatter.md#allowfalsish)
- [allowNull](internal_.Formatter.md#allownull)
- [arrayOf](internal_.Formatter.md#arrayof)
- [check](internal_.Formatter.md#check)

## Constructors

### constructor

• **new Formatter**()

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:20

## Properties

### formats

• `Readonly` **formats**: [`Formats`](../modules/internal_.md#formats)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:19

## Methods

### \_block

▸ **_block**(`value`, `format`): [`Block`](../interfaces/internal_.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `format` | `any` |

#### Returns

[`Block`](../interfaces/internal_.Block.md)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:36

___

### accessList

▸ **accessList**(`accessList`): [`AccessList`](../modules/internal_.md#accesslist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessList` | `any`[] |

#### Returns

[`AccessList`](../modules/internal_.md#accesslist)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:22

___

### address

▸ **address**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:29

___

### bigNumber

▸ **bigNumber**(`value`): [`BigNumber`](internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:25

___

### block

▸ **block**(`value`): [`Block`](../interfaces/internal_.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Block`](../interfaces/internal_.Block.md)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:37

___

### blockTag

▸ **blockTag**(`blockTag`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:32

___

### blockWithTransactions

▸ **blockWithTransactions**(`value`): [`Block`](../interfaces/internal_.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Block`](../interfaces/internal_.Block.md)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:38

___

### boolean

▸ **boolean**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:26

___

### callAddress

▸ **callAddress**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:30

___

### contractAddress

▸ **contractAddress**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:31

___

### data

▸ **data**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:28

___

### difficulty

▸ **difficulty**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:34

___

### filter

▸ **filter**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:45

___

### filterLog

▸ **filterLog**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:46

___

### getDefaultFormats

▸ **getDefaultFormats**(): [`Formats`](../modules/internal_.md#formats)

#### Returns

[`Formats`](../modules/internal_.md#formats)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:21

___

### hash

▸ **hash**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:33

___

### hex

▸ **hex**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:27

___

### number

▸ **number**(`number`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:23

___

### receipt

▸ **receipt**(`value`): [`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:43

___

### receiptLog

▸ **receiptLog**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:42

___

### topics

▸ **topics**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:44

___

### transaction

▸ **transaction**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:41

___

### transactionRequest

▸ **transactionRequest**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:39

___

### transactionResponse

▸ **transactionResponse**(`transaction`): [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:40

___

### type

▸ **type**(`number`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:24

___

### uint256

▸ **uint256**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:35

___

### allowFalsish

▸ `Static` **allowFalsish**(`format`, `replaceValue`): [`FormatFunc`](../modules/internal_.md#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../modules/internal_.md#formatfunc) |
| `replaceValue` | `any` |

#### Returns

[`FormatFunc`](../modules/internal_.md#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:51

___

### allowNull

▸ `Static` **allowNull**(`format`, `nullValue?`): [`FormatFunc`](../modules/internal_.md#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../modules/internal_.md#formatfunc) |
| `nullValue?` | `any` |

#### Returns

[`FormatFunc`](../modules/internal_.md#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:50

___

### arrayOf

▸ `Static` **arrayOf**(`format`): [`FormatFunc`](../modules/internal_.md#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../modules/internal_.md#formatfunc) |

#### Returns

[`FormatFunc`](../modules/internal_.md#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:52

___

### check

▸ `Static` **check**(`format`, `object`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `Object` |
| `object` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:47
