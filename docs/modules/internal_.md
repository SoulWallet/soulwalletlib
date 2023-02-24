[soul-wallet-lib](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Namespaces

- [EventEmitter](internal_.EventEmitter.md)

### Classes

- [AbiCoder](../classes/internal_.AbiCoder.md)
- [ApiTimeOut](../classes/internal_.ApiTimeOut.md)
- [BaseContract](../classes/internal_.BaseContract.md)
- [BaseProvider](../classes/internal_.BaseProvider.md)
- [BigNumber](../classes/internal_.BigNumber.md)
- [Bundler](../classes/internal_.Bundler.md)
- [CodefiGasFees](../classes/internal_.CodefiGasFees.md)
- [Coder](../classes/internal_.Coder.md)
- [ConstructorFragment](../classes/internal_.ConstructorFragment.md)
- [Contract](../classes/internal_.Contract.md)
- [DecodeCallData](../classes/internal_.DecodeCallData.md)
- [DeployFactory](../classes/internal_.DeployFactory.md)
- [Description](../classes/internal_.Description.md)
- [ERC1155](../classes/internal_.ERC1155.md)
- [ERC20](../classes/internal_.ERC20.md)
- [ERC721](../classes/internal_.ERC721.md)
- [ETH](../classes/internal_.ETH.md)
- [ErrorDescription](../classes/internal_.ErrorDescription.md)
- [ErrorFragment](../classes/internal_.ErrorFragment.md)
- [Event](../classes/internal_.Event.md)
- [EventEmitter](../classes/internal_.EventEmitter-1.md)
- [EventFragment](../classes/internal_.EventFragment.md)
- [ForkEvent](../classes/internal_.ForkEvent.md)
- [Formatter](../classes/internal_.Formatter.md)
- [Fragment](../classes/internal_.Fragment.md)
- [FunctionFragment](../classes/internal_.FunctionFragment.md)
- [Guardian](../classes/internal_.Guardian.md)
- [Indexed](../classes/internal_.Indexed.md)
- [Interface](../classes/internal_.Interface.md)
- [LogDescription](../classes/internal_.LogDescription.md)
- [ParamType](../classes/internal_.ParamType.md)
- [Provider](../classes/internal_.Provider.md)
- [Reader](../classes/internal_.Reader.md)
- [Resolver](../classes/internal_.Resolver.md)
- [RunningEvent](../classes/internal_.RunningEvent.md)
- [Signer](../classes/internal_.Signer.md)
- [Token](../classes/internal_.Token.md)
- [TokenAndPaymaster](../classes/internal_.TokenAndPaymaster.md)
- [TransactionDescription](../classes/internal_.TransactionDescription.md)
- [UserOp](../classes/internal_.UserOp.md)
- [Writer](../classes/internal_.Writer.md)

### Interfaces

- [ArrayLike](../interfaces/internal_.ArrayLike.md)
- [AsyncIterableIterator](../interfaces/internal_.AsyncIterableIterator.md)
- [AsyncIterator](../interfaces/internal_.AsyncIterator.md)
- [Avatar](../interfaces/internal_.Avatar.md)
- [Block](../interfaces/internal_.Block.md)
- [BlockWithTransactions](../interfaces/internal_.BlockWithTransactions.md)
- [ConcatArray](../interfaces/internal_.ConcatArray.md)
- [EnsProvider](../interfaces/internal_.EnsProvider.md)
- [EnsResolver](../interfaces/internal_.EnsResolver.md)
- [Error](../interfaces/internal_.Error.md)
- [Event](../interfaces/internal_.Event-1.md)
- [EventEmitter](../interfaces/internal_.EventEmitter-2.md)
- [EventEmitterOptions](../interfaces/internal_.EventEmitterOptions.md)
- [EventFilter](../interfaces/internal_.EventFilter.md)
- [FeeData](../interfaces/internal_.FeeData.md)
- [Filter](../interfaces/internal_.Filter.md)
- [FilterByBlockHash](../interfaces/internal_.FilterByBlockHash.md)
- [Hexable](../interfaces/internal_.Hexable.md)
- [IByte4Method](../interfaces/internal_.IByte4Method.md)
- [IContract](../interfaces/internal_.IContract.md)
- [IDecode](../interfaces/internal_.IDecode.md)
- [IRPCRequest](../interfaces/internal_.IRPCRequest.md)
- [ITokenAndPaymaster](../interfaces/internal_.ITokenAndPaymaster.md)
- [IterableIterator](../interfaces/internal_.IterableIterator.md)
- [Iterator](../interfaces/internal_.Iterator.md)
- [IteratorReturnResult](../interfaces/internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/internal_.IteratorYieldResult.md)
- [JsonFragment](../interfaces/internal_.JsonFragment.md)
- [JsonFragmentType](../interfaces/internal_.JsonFragmentType.md)
- [Log](../interfaces/internal_.Log.md)
- [OnceBlockable](../interfaces/internal_.OnceBlockable.md)
- [PopulatedTransaction](../interfaces/internal_.PopulatedTransaction.md)
- [PromiseLike](../interfaces/internal_.PromiseLike.md)
- [RefCounted](../interfaces/internal_.RefCounted.md)
- [Result](../interfaces/internal_.Result.md)
- [StaticEventEmitterOptions](../interfaces/internal_.StaticEventEmitterOptions.md)
- [SuggestedGasFees](../interfaces/internal_.SuggestedGasFees.md)
- [Timer](../interfaces/internal_.Timer.md)
- [Transaction](../interfaces/internal_.Transaction.md)
- [TransactionReceipt](../interfaces/internal_.TransactionReceipt.md)
- [TransactionResponse](../interfaces/internal_.TransactionResponse.md)
- [\_Block](../interfaces/internal_._Block.md)
- [\_DOMEventTarget](../interfaces/internal_._DOMEventTarget.md)
- [\_NodeEventTarget](../interfaces/internal_._NodeEventTarget.md)
- [fee](../interfaces/internal_.fee.md)
- [gasPrices](../interfaces/internal_.gasPrices.md)
- [guardianSignature](../interfaces/internal_.guardianSignature.md)

### Type Aliases

- [AccessList](internal_.md#accesslist)
- [AccessListish](internal_.md#accesslistish)
- [BigNumberish](internal_.md#bignumberish)
- [BlockTag](internal_.md#blocktag)
- [Bytes](internal_.md#bytes)
- [BytesLike](internal_.md#byteslike)
- [CoerceFunc](internal_.md#coercefunc)
- [CoerceFunc](internal_.md#coercefunc-1)
- [ContractFunction](internal_.md#contractfunction)
- [ContractInterface](internal_.md#contractinterface)
- [Deferrable](internal_.md#deferrable)
- [EventFilter](internal_.md#eventfilter)
- [EventType](internal_.md#eventtype)
- [FlatArray](internal_.md#flatarray)
- [FormatFunc](internal_.md#formatfunc)
- [FormatFuncs](internal_.md#formatfuncs)
- [Formats](internal_.md#formats)
- [IteratorResult](internal_.md#iteratorresult)
- [Listener](internal_.md#listener)
- [Network](internal_.md#network)
- [Networkish](internal_.md#networkish)
- [NumberLike](internal_.md#numberlike)
- [Record](internal_.md#record)
- [TransactionRequest](internal_.md#transactionrequest)

### Functions

- [Error](internal_.md#error)

## Type Aliases

### AccessList

Ƭ **AccessList**: { `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:3

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](internal_.md#accesslist) \| [`string`, `string`[]][] \| [`Record`](internal_.md#record)<`string`, `string`[]\>

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:7

___

### BigNumberish

Ƭ **BigNumberish**: [`BigNumber`](../classes/internal_.BigNumber.md) \| [`Bytes`](internal_.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:2

___

### BlockTag

Ƭ **BlockTag**: `string` \| `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:33

___

### Bytes

Ƭ **Bytes**: [`ArrayLike`](../interfaces/internal_.ArrayLike.md)<`number`\>

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:1

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](internal_.md#bytes) \| `string`

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:2

___

### CoerceFunc

Ƭ **CoerceFunc**: (`type`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ (`type`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:4

___

### CoerceFunc

Ƭ **CoerceFunc**: (`type`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ (`type`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:10

___

### ContractFunction

Ƭ **ContractFunction**<`T`\>: (...`args`: `any`[]) => `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`...args`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`T`\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:45

___

### ContractInterface

Ƭ **ContractInterface**: `string` \| `ReadonlyArray`<[`Fragment`](../classes/internal_.Fragment.md) \| [`JsonFragment`](../interfaces/internal_.JsonFragment.md) \| `string`\> \| [`Interface`](../classes/internal_.Interface.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### Deferrable

Ƭ **Deferrable**<`T`\>: { [K in keyof T]: T[K] \| Promise<T[K]\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:3

___

### EventFilter

Ƭ **EventFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `topics?` | (`string` \| `string`[])[] |

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:41

___

### EventType

Ƭ **EventType**: `string` \| (`string` \| `string`[])[] \| [`EventFilter`](../interfaces/internal_.EventFilter.md) \| [`ForkEvent`](../classes/internal_.ForkEvent.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:121

___

### FlatArray

Ƭ **FlatArray**<`Arr`, `Depth`\>: { `done`: `Arr` ; `recur`: `Arr` extends `ReadonlyArray`<infer InnerArr\> ? [`FlatArray`](internal_.md#flatarray)<`InnerArr`, [``-1``, ``0``, ``1``, ``2``, ``3``, ``4``, ``5``, ``6``, ``7``, ``8``, ``9``, ``10``, ``11``, ``12``, ``13``, ``14``, ``15``, ``16``, ``17``, ``18``, ``19``, ``20``][`Depth`]\> : `Arr`  }[`Depth` extends ``-1`` ? ``"done"`` : ``"recur"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arr` | `Arr` |
| `Depth` | extends `number` |

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:21

___

### FormatFunc

Ƭ **FormatFunc**: (`value`: `any`) => `any`

#### Type declaration

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:4

___

### FormatFuncs

Ƭ **FormatFuncs**: `Object`

#### Index signature

▪ [key: `string`]: [`FormatFunc`](internal_.md#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:5

___

### Formats

Ƭ **Formats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `blockWithTransactions` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `filter` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `filterLog` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `receipt` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `receiptLog` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `transaction` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `transactionRequest` | [`FormatFuncs`](internal_.md#formatfuncs) |

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:8

___

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

___

### Listener

Ƭ **Listener**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:122

___

### Network

Ƭ **Network**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_defaultProvider?` | (`providers`: `any`, `options?`: `any`) => `any` |
| `chainId` | `number` |
| `ensAddress?` | `string` |
| `name` | `string` |

#### Defined in

node_modules/@ethersproject/networks/lib/types.d.ts:1

___

### Networkish

Ƭ **Networkish**: [`Network`](internal_.md#network) \| `string` \| `number`

#### Defined in

node_modules/@ethersproject/networks/lib/types.d.ts:7

___

### NumberLike

Ƭ **NumberLike**: `number` \| `string`

number like type

#### Defined in

[src/defines/numberLike.ts:16](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/defines/numberLike.ts#L16)

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1590

___

### TransactionRequest

Ƭ **TransactionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | [`AccessListish`](internal_.md#accesslistish) |
| `ccipReadEnabled?` | `boolean` |
| `chainId?` | `number` |
| `customData?` | [`Record`](internal_.md#record)<`string`, `any`\> |
| `data?` | [`BytesLike`](internal_.md#byteslike) |
| `from?` | `string` |
| `gasLimit?` | [`BigNumberish`](internal_.md#bignumberish) |
| `gasPrice?` | [`BigNumberish`](internal_.md#bignumberish) |
| `maxFeePerGas?` | [`BigNumberish`](internal_.md#bignumberish) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](internal_.md#bignumberish) |
| `nonce?` | [`BigNumberish`](internal_.md#bignumberish) |
| `to?` | `string` |
| `type?` | `number` |
| `value?` | [`BigNumberish`](internal_.md#bignumberish) |

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:7

## Functions

### Error

▸ **Error**(`message?`): [`Error`](internal_.md#error)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Error`](internal_.md#error)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1060
