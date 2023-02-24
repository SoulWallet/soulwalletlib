[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BaseProvider

# Class: BaseProvider

[<internal>](../modules/internal_.md).BaseProvider

## Hierarchy

- [`Provider`](internal_.Provider.md)

  ↳ **`BaseProvider`**

## Implements

- [`EnsProvider`](../interfaces/internal_.EnsProvider.md)

## Table of contents

### Constructors

- [constructor](internal_.BaseProvider.md#constructor)

### Properties

- [\_bootstrapPoll](internal_.BaseProvider.md#_bootstrappoll)
- [\_emitted](internal_.BaseProvider.md#_emitted)
- [\_events](internal_.BaseProvider.md#_events)
- [\_fastBlockNumber](internal_.BaseProvider.md#_fastblocknumber)
- [\_fastBlockNumberPromise](internal_.BaseProvider.md#_fastblocknumberpromise)
- [\_fastQueryDate](internal_.BaseProvider.md#_fastquerydate)
- [\_internalBlockNumber](internal_.BaseProvider.md#_internalblocknumber)
- [\_isProvider](internal_.BaseProvider.md#_isprovider)
- [\_lastBlockNumber](internal_.BaseProvider.md#_lastblocknumber)
- [\_maxFilterBlockRange](internal_.BaseProvider.md#_maxfilterblockrange)
- [\_maxInternalBlockNumber](internal_.BaseProvider.md#_maxinternalblocknumber)
- [\_network](internal_.BaseProvider.md#_network)
- [\_networkPromise](internal_.BaseProvider.md#_networkpromise)
- [\_poller](internal_.BaseProvider.md#_poller)
- [\_pollingInterval](internal_.BaseProvider.md#_pollinginterval)
- [anyNetwork](internal_.BaseProvider.md#anynetwork)
- [disableCcipRead](internal_.BaseProvider.md#disableccipread)
- [formatter](internal_.BaseProvider.md#formatter)

### Accessors

- [blockNumber](internal_.BaseProvider.md#blocknumber)
- [network](internal_.BaseProvider.md#network)
- [polling](internal_.BaseProvider.md#polling)
- [pollingInterval](internal_.BaseProvider.md#pollinginterval)
- [ready](internal_.BaseProvider.md#ready)

### Methods

- [\_addEventListener](internal_.BaseProvider.md#_addeventlistener)
- [\_call](internal_.BaseProvider.md#_call)
- [\_getAddress](internal_.BaseProvider.md#_getaddress)
- [\_getBlock](internal_.BaseProvider.md#_getblock)
- [\_getBlockTag](internal_.BaseProvider.md#_getblocktag)
- [\_getFastBlockNumber](internal_.BaseProvider.md#_getfastblocknumber)
- [\_getFilter](internal_.BaseProvider.md#_getfilter)
- [\_getInternalBlockNumber](internal_.BaseProvider.md#_getinternalblocknumber)
- [\_getResolver](internal_.BaseProvider.md#_getresolver)
- [\_getTransactionRequest](internal_.BaseProvider.md#_gettransactionrequest)
- [\_ready](internal_.BaseProvider.md#_ready)
- [\_setFastBlockNumber](internal_.BaseProvider.md#_setfastblocknumber)
- [\_startEvent](internal_.BaseProvider.md#_startevent)
- [\_stopEvent](internal_.BaseProvider.md#_stopevent)
- [\_waitForTransaction](internal_.BaseProvider.md#_waitfortransaction)
- [\_wrapTransaction](internal_.BaseProvider.md#_wraptransaction)
- [addListener](internal_.BaseProvider.md#addlistener)
- [call](internal_.BaseProvider.md#call)
- [ccipReadFetch](internal_.BaseProvider.md#ccipreadfetch)
- [detectNetwork](internal_.BaseProvider.md#detectnetwork)
- [emit](internal_.BaseProvider.md#emit)
- [estimateGas](internal_.BaseProvider.md#estimategas)
- [getAvatar](internal_.BaseProvider.md#getavatar)
- [getBalance](internal_.BaseProvider.md#getbalance)
- [getBlock](internal_.BaseProvider.md#getblock)
- [getBlockNumber](internal_.BaseProvider.md#getblocknumber)
- [getBlockWithTransactions](internal_.BaseProvider.md#getblockwithtransactions)
- [getCode](internal_.BaseProvider.md#getcode)
- [getEtherPrice](internal_.BaseProvider.md#getetherprice)
- [getFeeData](internal_.BaseProvider.md#getfeedata)
- [getGasPrice](internal_.BaseProvider.md#getgasprice)
- [getLogs](internal_.BaseProvider.md#getlogs)
- [getNetwork](internal_.BaseProvider.md#getnetwork)
- [getResolver](internal_.BaseProvider.md#getresolver)
- [getStorageAt](internal_.BaseProvider.md#getstorageat)
- [getTransaction](internal_.BaseProvider.md#gettransaction)
- [getTransactionCount](internal_.BaseProvider.md#gettransactioncount)
- [getTransactionReceipt](internal_.BaseProvider.md#gettransactionreceipt)
- [listenerCount](internal_.BaseProvider.md#listenercount)
- [listeners](internal_.BaseProvider.md#listeners)
- [lookupAddress](internal_.BaseProvider.md#lookupaddress)
- [off](internal_.BaseProvider.md#off)
- [on](internal_.BaseProvider.md#on)
- [once](internal_.BaseProvider.md#once)
- [perform](internal_.BaseProvider.md#perform)
- [poll](internal_.BaseProvider.md#poll)
- [removeAllListeners](internal_.BaseProvider.md#removealllisteners)
- [removeListener](internal_.BaseProvider.md#removelistener)
- [resetEventsBlock](internal_.BaseProvider.md#reseteventsblock)
- [resolveName](internal_.BaseProvider.md#resolvename)
- [sendTransaction](internal_.BaseProvider.md#sendtransaction)
- [waitForTransaction](internal_.BaseProvider.md#waitfortransaction)
- [getFormatter](internal_.BaseProvider.md#getformatter)
- [getNetwork](internal_.BaseProvider.md#getnetwork-1)
- [isProvider](internal_.BaseProvider.md#isprovider)

## Constructors

### constructor

• **new BaseProvider**(`network`)

ready

 A Promise<Network> that resolves only once the provider is ready.

 Sub-classes that call the super with a network without a chainId
 MUST set this. Standard named networks have a known chainId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `Promise`<[`Network`](../modules/internal_.md#network)\> \| [`Networkish`](../modules/internal_.md#networkish) |

#### Overrides

[Provider](internal_.Provider.md).[constructor](internal_.Provider.md#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:89

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: [`Timer`](../interfaces/internal_.Timer.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_events

• **\_events**: [`Event`](internal_.Event.md)[]

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[Provider](internal_.Provider.md).[_isProvider](internal_.Provider.md#_isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: [`Network`](../modules/internal_.md#network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_poller

• **\_poller**: [`Timer`](../interfaces/internal_.Timer.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: [`Formatter`](internal_.Formatter.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): [`Network`](../modules/internal_.md#network)

#### Returns

[`Network`](../modules/internal_.md#network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:102

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:104

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:105

___

### ready

• `get` **ready**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`BaseProvider`](internal_.BaseProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |
| `once` | `boolean` |

#### Returns

[`BaseProvider`](internal_.BaseProvider.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:147

___

### \_call

▸ **_call**(`transaction`, `blockTag`, `attempt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |
| `blockTag` | [`BlockTag`](../modules/internal_.md#blocktag) |
| `attempt` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:127

___

### \_getAddress

▸ **_getAddress**(`addressOrName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:130

___

### \_getBlock

▸ **_getBlock**(`blockHashOrBlockTag`, `includeTransactions?`): `Promise`<[`Block`](../interfaces/internal_.Block.md) \| [`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |
| `includeTransactions?` | `boolean` |

#### Returns

`Promise`<[`Block`](../interfaces/internal_.Block.md) \| [`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:131

___

### \_getBlockTag

▸ **_getBlockTag**(`blockTag`): `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:106

___

### \_getFilter

▸ **_getFilter**(`filter`): `Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md) \| `Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\> |

#### Returns

`Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:126

___

### \_getInternalBlockNumber

▸ **_getInternalBlockNumber**(`maxAge`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAge` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:95

___

### \_getResolver

▸ **_getResolver**(`name`, `operation?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `operation?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:140

___

### \_getTransactionRequest

▸ **_getTransactionRequest**(`transaction`): `Promise`<[`Transaction`](../interfaces/internal_.Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`Transaction`](../interfaces/internal_.Transaction.md)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:90

___

### \_setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:107

___

### \_startEvent

▸ **_startEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](internal_.Event.md) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:145

___

### \_stopEvent

▸ **_stopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](internal_.Event.md) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:146

___

### \_waitForTransaction

▸ **_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations` | `number` |
| `timeout` | `number` |
| `replaceable` | `Object` |
| `replaceable.data` | `string` |
| `replaceable.from` | `string` |
| `replaceable.nonce` | `number` |
| `replaceable.startBlock` | `number` |
| `replaceable.to` | `string` |
| `replaceable.value` | [`BigNumber`](internal_.BigNumber.md) |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:109

___

### \_wrapTransaction

▸ **_wrapTransaction**(`tx`, `hash?`, `startBlock?`): [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](../interfaces/internal_.Transaction.md) |
| `hash?` | `string` |
| `startBlock?` | `number` |

#### Returns

[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:123

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Inherited from

[Provider](internal_.Provider.md).[addListener](internal_.Provider.md#addlistener)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Provider](internal_.Provider.md).[call](internal_.Provider.md#call)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:128

___

### ccipReadFetch

▸ **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](../interfaces/internal_.Transaction.md) |
| `calldata` | `string` |
| `urls` | `string`[] |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:99

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

[Provider](internal_.Provider.md).[emit](internal_.Provider.md#emit)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:150

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Overrides

[Provider](internal_.Provider.md).[estimateGas](internal_.Provider.md#estimategas)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:129

___

### getAvatar

▸ **getAvatar**(`nameOrAddress`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrAddress` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:143

___

### getBalance

▸ **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Overrides

[Provider](internal_.Provider.md).[getBalance](internal_.Provider.md#getbalance)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:119

___

### getBlock

▸ **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Overrides

[Provider](internal_.Provider.md).[getBlock](internal_.Provider.md#getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Overrides

[Provider](internal_.Provider.md).[getBlockNumber](internal_.Provider.md#getblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:117

___

### getBlockWithTransactions

▸ **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Overrides

[Provider](internal_.Provider.md).[getBlockWithTransactions](internal_.Provider.md#getblockwithtransactions)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:133

___

### getCode

▸ **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Provider](internal_.Provider.md).[getCode](internal_.Provider.md#getcode)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Inherited from

[Provider](internal_.Provider.md).[getFeeData](internal_.Provider.md#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Overrides

[Provider](internal_.Provider.md).[getGasPrice](internal_.Provider.md#getgasprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:118

___

### getLogs

▸ **getLogs**(`filter`): `Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md) \| `Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\> |

#### Returns

`Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Overrides

[Provider](internal_.Provider.md).[getLogs](internal_.Provider.md#getlogs)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Overrides

[Provider](internal_.Provider.md).[getNetwork](internal_.Provider.md#getnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:100

___

### getResolver

▸ **getResolver**(`name`): `Promise`<``null`` \| [`Resolver`](internal_.Resolver.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| [`Resolver`](internal_.Resolver.md)\>

#### Implementation of

[EnsProvider](../interfaces/internal_.EnsProvider.md).[getResolver](../interfaces/internal_.EnsProvider.md#getresolver)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:139

___

### getStorageAt

▸ **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../modules/internal_.md#bignumberish) \| `Promise`<[`BigNumberish`](../modules/internal_.md#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Provider](internal_.Provider.md).[getStorageAt](internal_.Provider.md#getstorageat)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:122

___

### getTransaction

▸ **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Overrides

[Provider](internal_.Provider.md).[getTransaction](internal_.Provider.md#gettransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:134

___

### getTransactionCount

▸ **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`number`\>

#### Overrides

[Provider](internal_.Provider.md).[getTransactionCount](internal_.Provider.md#gettransactioncount)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:120

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Overrides

[Provider](internal_.Provider.md).[getTransactionReceipt](internal_.Provider.md#gettransactionreceipt)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:135

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

`number`

#### Overrides

[Provider](internal_.Provider.md).[listenerCount](internal_.Provider.md#listenercount)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:151

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

#### Overrides

[Provider](internal_.Provider.md).[listeners](internal_.Provider.md#listeners)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:152

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

[EnsProvider](../interfaces/internal_.EnsProvider.md).[lookupAddress](../interfaces/internal_.EnsProvider.md#lookupaddress)

#### Overrides

[Provider](internal_.Provider.md).[lookupAddress](internal_.Provider.md#lookupaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`BaseProvider`](internal_.BaseProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener?` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseProvider`](internal_.BaseProvider.md)

#### Overrides

[Provider](internal_.Provider.md).[off](internal_.Provider.md#off)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`BaseProvider`](internal_.BaseProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseProvider`](internal_.BaseProvider.md)

#### Overrides

[Provider](internal_.Provider.md).[on](internal_.Provider.md#on)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`BaseProvider`](internal_.BaseProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`BaseProvider`](internal_.BaseProvider.md)

#### Overrides

[Provider](internal_.Provider.md).[once](internal_.Provider.md#once)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:149

___

### perform

▸ **perform**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:144

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:96

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`BaseProvider`](internal_.BaseProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`BaseProvider`](internal_.BaseProvider.md)

#### Overrides

[Provider](internal_.Provider.md).[removeAllListeners](internal_.Provider.md#removealllisteners)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:154

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

#### Inherited from

[Provider](internal_.Provider.md).[removeListener](internal_.Provider.md#removelistener)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

___

### resetEventsBlock

▸ **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:97

___

### resolveName

▸ **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

[EnsProvider](../interfaces/internal_.EnsProvider.md).[resolveName](../interfaces/internal_.EnsProvider.md#resolvename)

#### Overrides

[Provider](internal_.Provider.md).[resolveName](internal_.Provider.md#resolvename)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:141

___

### sendTransaction

▸ **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Overrides

[Provider](internal_.Provider.md).[sendTransaction](internal_.Provider.md#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:124

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Overrides

[Provider](internal_.Provider.md).[waitForTransaction](internal_.Provider.md#waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### getFormatter

▸ `Static` **getFormatter**(): [`Formatter`](internal_.Formatter.md)

#### Returns

[`Formatter`](internal_.Formatter.md)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:92

___

### getNetwork

▸ `Static` **getNetwork**(`network`): [`Network`](../modules/internal_.md#network)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Networkish`](../modules/internal_.md#networkish) |

#### Returns

[`Network`](../modules/internal_.md#network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:93

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Inherited from

[Provider](internal_.Provider.md).[isProvider](internal_.Provider.md#isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
