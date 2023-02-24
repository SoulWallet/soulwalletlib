[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Provider

# Class: Provider

[<internal>](../modules/internal_.md).Provider

## Hierarchy

- **`Provider`**

  ↳ [`BaseProvider`](internal_.BaseProvider.md)

## Implements

- [`OnceBlockable`](../interfaces/internal_.OnceBlockable.md)

## Table of contents

### Constructors

- [constructor](internal_.Provider.md#constructor)

### Properties

- [\_isProvider](internal_.Provider.md#_isprovider)

### Methods

- [addListener](internal_.Provider.md#addlistener)
- [call](internal_.Provider.md#call)
- [emit](internal_.Provider.md#emit)
- [estimateGas](internal_.Provider.md#estimategas)
- [getBalance](internal_.Provider.md#getbalance)
- [getBlock](internal_.Provider.md#getblock)
- [getBlockNumber](internal_.Provider.md#getblocknumber)
- [getBlockWithTransactions](internal_.Provider.md#getblockwithtransactions)
- [getCode](internal_.Provider.md#getcode)
- [getFeeData](internal_.Provider.md#getfeedata)
- [getGasPrice](internal_.Provider.md#getgasprice)
- [getLogs](internal_.Provider.md#getlogs)
- [getNetwork](internal_.Provider.md#getnetwork)
- [getStorageAt](internal_.Provider.md#getstorageat)
- [getTransaction](internal_.Provider.md#gettransaction)
- [getTransactionCount](internal_.Provider.md#gettransactioncount)
- [getTransactionReceipt](internal_.Provider.md#gettransactionreceipt)
- [listenerCount](internal_.Provider.md#listenercount)
- [listeners](internal_.Provider.md#listeners)
- [lookupAddress](internal_.Provider.md#lookupaddress)
- [off](internal_.Provider.md#off)
- [on](internal_.Provider.md#on)
- [once](internal_.Provider.md#once)
- [removeAllListeners](internal_.Provider.md#removealllisteners)
- [removeListener](internal_.Provider.md#removelistener)
- [resolveName](internal_.Provider.md#resolvename)
- [sendTransaction](internal_.Provider.md#sendtransaction)
- [waitForTransaction](internal_.Provider.md#waitfortransaction)
- [isProvider](internal_.Provider.md#isprovider)

## Constructors

### constructor

• **new Provider**()

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:153

## Properties

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### call

▸ `Abstract` **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:133

___

### emit

▸ `Abstract` **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:144

___

### estimateGas

▸ `Abstract` **estimateGas**(`transaction`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:134

___

### getBalance

▸ `Abstract` **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:128

___

### getBlock

▸ `Abstract` **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:135

___

### getBlockNumber

▸ `Abstract` **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:125

___

### getBlockWithTransactions

▸ `Abstract` **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:136

___

### getCode

▸ `Abstract` **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:130

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ `Abstract` **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

___

### getLogs

▸ `Abstract` **getLogs**(`filter`): `Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/internal_.Filter.md) |

#### Returns

`Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:139

___

### getNetwork

▸ `Abstract` **getNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:124

___

### getStorageAt

▸ `Abstract` **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../modules/internal_.md#bignumberish) \| `Promise`<[`BigNumberish`](../modules/internal_.md#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:131

___

### getTransaction

▸ `Abstract` **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:137

___

### getTransactionCount

▸ `Abstract` **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:129

___

### getTransactionReceipt

▸ `Abstract` **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:138

___

### listenerCount

▸ `Abstract` **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:145

___

### listeners

▸ `Abstract` **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:146

___

### lookupAddress

▸ `Abstract` **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:141

___

### off

▸ `Abstract` **off**(`eventName`, `listener?`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener?` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:147

___

### on

▸ `Abstract` **on**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:142

___

### once

▸ `Abstract` **once**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Implementation of

[OnceBlockable](../interfaces/internal_.OnceBlockable.md).[once](../interfaces/internal_.OnceBlockable.md#once)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:143

___

### removeAllListeners

▸ `Abstract` **removeAllListeners**(`eventName?`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:148

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

___

### resolveName

▸ `Abstract` **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:140

___

### sendTransaction

▸ `Abstract` **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:132

___

### waitForTransaction

▸ `Abstract` **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
