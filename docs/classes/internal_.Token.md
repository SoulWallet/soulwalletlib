[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Token

# Class: Token

[<internal>](../modules/internal_.md).Token

token interface

## Table of contents

### Constructors

- [constructor](internal_.Token.md#constructor)

### Methods

- [createOp](internal_.Token.md#createop)

## Constructors

### constructor

• **new Token**()

## Methods

### createOp

▸ **createOp**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAndData`, `maxFeePerGas`, `maxPriorityFeePerGas`, `callContract`, `encodeABI`, `value?`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | `undefined` |
| `walletAddress` | `string` | `undefined` |
| `nonce` | [`NumberLike`](../modules/internal_.md#numberlike) | `undefined` |
| `entryPointAddress` | `string` | `undefined` |
| `paymasterAndData` | `string` | `undefined` |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | `undefined` |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | `undefined` |
| `callContract` | `string` | `undefined` |
| `encodeABI` | `string` | `undefined` |
| `value` | `string` | `'0'` |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

#### Defined in

[src/utils/tokens.ts:21](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L21)
