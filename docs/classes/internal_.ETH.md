[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ETH

# Class: ETH

[<internal>](../modules/internal_.md).ETH

ETH

## Table of contents

### Constructors

- [constructor](internal_.ETH.md#constructor)

### Properties

- [\_token](internal_.ETH.md#_token)

### Methods

- [transfer](internal_.ETH.md#transfer)

## Constructors

### constructor

• **new ETH**()

#### Defined in

[src/utils/tokens.ts:454](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L454)

## Properties

### \_token

• `Private` **\_token**: [`Token`](internal_.Token.md)

#### Defined in

[src/utils/tokens.ts:449](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L449)

## Methods

### transfer

▸ **transfer**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `to`, `value`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

transfer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | the ethers.js provider e.g. ethers.provider |
| `walletAddress` | `string` | same as userOperation.sender |
| `nonce` | [`NumberLike`](../modules/internal_.md#numberlike) | the nonce |
| `entryPointAddress` | `string` | the entry point address |
| `paymasterAddress` | `string` | the paymaster address |
| `maxFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | the max fee per gas |
| `maxPriorityFeePerGas` | [`NumberLike`](../modules/internal_.md#numberlike) | the max priority fee per gas |
| `to` | `string` | the to address |
| `value` | `string` | the value |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:472](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L472)
