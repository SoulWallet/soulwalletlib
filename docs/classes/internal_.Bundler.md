[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Bundler

# Class: Bundler

[<internal>](../modules/internal_.md).Bundler

bundler utils

## Table of contents

### Constructors

- [constructor](internal_.Bundler.md#constructor)

### Properties

- [\_bundlerApi](internal_.Bundler.md#_bundlerapi)
- [\_entryPoint](internal_.Bundler.md#_entrypoint)
- [\_etherProvider](internal_.Bundler.md#_etherprovider)
- [\_init](internal_.Bundler.md#_init)
- [\_timeout](internal_.Bundler.md#_timeout)

### Methods

- [decodeExecutionResult](internal_.Bundler.md#decodeexecutionresult)
- [decodeFailedOp](internal_.Bundler.md#decodefailedop)
- [decodeValidationResult](internal_.Bundler.md#decodevalidationresult)
- [eth\_chainId](internal_.Bundler.md#eth_chainid)
- [eth\_estimateUserOperationGas](internal_.Bundler.md#eth_estimateuseroperationgas)
- [eth\_getUserOperationByHash](internal_.Bundler.md#eth_getuseroperationbyhash)
- [eth\_getUserOperationReceipt](internal_.Bundler.md#eth_getuseroperationreceipt)
- [eth\_sendUserOperation](internal_.Bundler.md#eth_senduseroperation)
- [eth\_supportedEntryPoints](internal_.Bundler.md#eth_supportedentrypoints)
- [init](internal_.Bundler.md#init)
- [rpcRequest](internal_.Bundler.md#rpcrequest)
- [sendUserOperation](internal_.Bundler.md#senduseroperation)
- [simulateHandleOp](internal_.Bundler.md#simulatehandleop)
- [simulateValidation](internal_.Bundler.md#simulatevalidation)
- [sleep](internal_.Bundler.md#sleep)

## Constructors

### constructor

• **new Bundler**(`entryPoint`, `etherProvider`, `bundlerApi?`, `timeout?`)

Bundler utils

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryPoint` | `string` | the entry point address |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | the ethers.js provider e.g. ethers.provider |
| `bundlerApi?` | `string` | the bundler api url |
| `timeout?` | [`ApiTimeOut`](internal_.ApiTimeOut.md) | the timeout |

#### Defined in

[src/utils/bundler.ts:53](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L53)

## Properties

### \_bundlerApi

• `Private` `Optional` **\_bundlerApi**: `string`

#### Defined in

[src/utils/bundler.ts:41](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L41)

___

### \_entryPoint

• `Private` **\_entryPoint**: `string` = `''`

#### Defined in

[src/utils/bundler.ts:39](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L39)

___

### \_etherProvider

• `Private` **\_etherProvider**: [`BaseProvider`](internal_.BaseProvider.md)

#### Defined in

[src/utils/bundler.ts:40](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L40)

___

### \_init

• `Private` **\_init**: `boolean` = `false`

#### Defined in

[src/utils/bundler.ts:83](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L83)

___

### \_timeout

• `Private` **\_timeout**: [`ApiTimeOut`](internal_.ApiTimeOut.md)

#### Defined in

[src/utils/bundler.ts:42](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L42)

## Methods

### decodeExecutionResult

▸ `Private` **decodeExecutionResult**(`result`): ``null`` \| [`IResult`](../interfaces/IResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `string` |

#### Returns

``null`` \| [`IResult`](../interfaces/IResult.md)

#### Defined in

[src/utils/bundler.ts:235](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L235)

___

### decodeFailedOp

▸ `Private` **decodeFailedOp**(`result`): ``null`` \| [`IResult`](../interfaces/IResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `string` |

#### Returns

``null`` \| [`IResult`](../interfaces/IResult.md)

#### Defined in

[src/utils/bundler.ts:255](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L255)

___

### decodeValidationResult

▸ `Private` **decodeValidationResult**(`result`): ``null`` \| [`IResult`](../interfaces/IResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `string` |

#### Returns

``null`` \| [`IResult`](../interfaces/IResult.md)

#### Defined in

[src/utils/bundler.ts:276](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L276)

___

### eth\_chainId

▸ **eth_chainId**(): `Promise`<`string`\>

get bundler supported chainid

#### Returns

`Promise`<`string`\>

supported chainid

#### Defined in

[src/utils/bundler.ts:129](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L129)

___

### eth\_estimateUserOperationGas

▸ **eth_estimateUserOperationGas**(`userOp`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](UserOperation.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bundler.ts:174](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L174)

___

### eth\_getUserOperationByHash

▸ **eth_getUserOperationByHash**(`userOpHash`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bundler.ts:189](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L189)

___

### eth\_getUserOperationReceipt

▸ **eth_getUserOperationReceipt**(`userOpHash`): `Promise`<``null`` \| [`IUserOpReceipt`](../interfaces/IUserOpReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`<``null`` \| [`IUserOpReceipt`](../interfaces/IUserOpReceipt.md)\>

#### Defined in

[src/utils/bundler.ts:178](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L178)

___

### eth\_sendUserOperation

▸ **eth_sendUserOperation**(`userOp`): `Promise`<`string`\>

send user operation via bundler

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](UserOperation.md) |

#### Returns

`Promise`<`string`\>

user operation hash

#### Defined in

[src/utils/bundler.ts:160](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L160)

___

### eth\_supportedEntryPoints

▸ **eth_supportedEntryPoints**(): `Promise`<`string`[]\>

get bundler supported entry points

#### Returns

`Promise`<`string`[]\>

supported entry points

#### Defined in

[src/utils/bundler.ts:144](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L144)

___

### init

▸ **init**(): `Promise`<`void`\>

init the bundler

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bundler.ts:89](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L89)

___

### rpcRequest

▸ `Private` **rpcRequest**<`T1`, `T2`\>(`data`, `timeout?`): `Promise`<`T2`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRPCRequest`](../interfaces/internal_.IRPCRequest.md)<`T1`\> |
| `timeout?` | `number` |

#### Returns

`Promise`<`T2`\>

#### Defined in

[src/utils/bundler.ts:63](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L63)

___

### sendUserOperation

▸ **sendUserOperation**(`userOp`, `receiptTimeout?`, `receiptInterval?`): [`EventEmitter`](internal_.EventEmitter-1.md)

send user operation via bundler

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `userOp` | [`UserOperation`](UserOperation.md) | `undefined` |  |
| `receiptTimeout` | `number` | `0` | receipt timeout |
| `receiptInterval` | `number` | `undefined` | receipt interval |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

emitter event: send, error, receipt, timeout

#### Defined in

[src/utils/bundler.ts:207](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L207)

___

### simulateHandleOp

▸ **simulateHandleOp**(`op`): `Promise`<[`IResult`](../interfaces/IResult.md)\>

simulateHandleOp

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |

#### Returns

`Promise`<[`IResult`](../interfaces/IResult.md)\>

result

#### Defined in

[src/utils/bundler.ts:302](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L302)

___

### simulateValidation

▸ **simulateValidation**(`op`): `Promise`<[`IResult`](../interfaces/IResult.md)\>

simulateValidation

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`UserOperation`](UserOperation.md) |

#### Returns

`Promise`<[`IResult`](../interfaces/IResult.md)\>

result

#### Defined in

[src/utils/bundler.ts:332](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L332)

___

### sleep

▸ `Private` **sleep**(`ms`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/utils/bundler.ts:193](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/bundler.ts#L193)
