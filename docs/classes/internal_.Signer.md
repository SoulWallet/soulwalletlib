[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Signer

# Class: Signer

[<internal>](../modules/internal_.md).Signer

## Table of contents

### Constructors

- [constructor](internal_.Signer.md#constructor)

### Properties

- [\_isSigner](internal_.Signer.md#_issigner)
- [provider](internal_.Signer.md#provider)

### Methods

- [\_checkProvider](internal_.Signer.md#_checkprovider)
- [call](internal_.Signer.md#call)
- [checkTransaction](internal_.Signer.md#checktransaction)
- [connect](internal_.Signer.md#connect)
- [estimateGas](internal_.Signer.md#estimategas)
- [getAddress](internal_.Signer.md#getaddress)
- [getBalance](internal_.Signer.md#getbalance)
- [getChainId](internal_.Signer.md#getchainid)
- [getFeeData](internal_.Signer.md#getfeedata)
- [getGasPrice](internal_.Signer.md#getgasprice)
- [getTransactionCount](internal_.Signer.md#gettransactioncount)
- [populateTransaction](internal_.Signer.md#populatetransaction)
- [resolveName](internal_.Signer.md#resolvename)
- [sendTransaction](internal_.Signer.md#sendtransaction)
- [signMessage](internal_.Signer.md#signmessage)
- [signTransaction](internal_.Signer.md#signtransaction)
- [isSigner](internal_.Signer.md#issigner)

## Constructors

### constructor

• **new Signer**()

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:30

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Optional` `Readonly` **provider**: [`Provider`](internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:24

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

___

### checkTransaction

▸ **checkTransaction**(`transaction`): [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

[`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ `Abstract` **connect**(`provider`): [`Signer`](internal_.Signer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](internal_.Provider.md) |

#### Returns

[`Signer`](internal_.Signer.md)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:28

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ `Abstract` **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:25

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

___

### populateTransaction

▸ **populateTransaction**(`transaction`): `Promise`<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

___

### resolveName

▸ **resolveName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

___

### sendTransaction

▸ **sendTransaction**(`transaction`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:35

___

### signMessage

▸ `Abstract` **signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../modules/internal_.md#bytes) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:26

___

### signTransaction

▸ `Abstract` **signTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:27

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
