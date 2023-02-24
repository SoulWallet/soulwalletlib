[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ERC20

# Class: ERC20

[<internal>](../modules/internal_.md).ERC20

erc20 token class

## Table of contents

### Constructors

- [constructor](internal_.ERC20.md#constructor)

### Properties

- [MAX\_INT256](internal_.ERC20.md#max_int256)
- [\_token](internal_.ERC20.md#_token)

### Methods

- [approve](internal_.ERC20.md#approve)
- [approveGasLimit](internal_.ERC20.md#approvegaslimit)
- [getApproveCallData](internal_.ERC20.md#getapprovecalldata)
- [getContract](internal_.ERC20.md#getcontract)
- [transfer](internal_.ERC20.md#transfer)
- [transferFrom](internal_.ERC20.md#transferfrom)

## Constructors

### constructor

• **new ERC20**()

#### Defined in

[src/utils/tokens.ts:61](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L61)

## Properties

### MAX\_INT256

• `Private` `Readonly` **MAX\_INT256**: ``"115792089237316195423570985008687907853269984665640564039457584007913129639935"``

#### Defined in

[src/utils/tokens.ts:91](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L91)

___

### \_token

• `Private` **\_token**: [`Token`](internal_.Token.md)

#### Defined in

[src/utils/tokens.ts:55](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L55)

## Methods

### approve

▸ **approve**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_spender`, `_value`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

approve token to spender

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
| `_token` | `string` | the token address |
| `_spender` | `string` | the spender address |
| `_value` | `string` | the value |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:83](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L83)

___

### approveGasLimit

▸ `Private` **approveGasLimit**(`etherProvider`, `walletAddress`, `approveData`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) |
| `walletAddress` | `string` |
| `approveData` | [`IApproveToken`](../interfaces/IApproveToken.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

[src/utils/tokens.ts:94](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L94)

___

### getApproveCallData

▸ **getApproveCallData**(`etherProvider`, `walletAddress`, `approveData`): `Promise`<{ `callData`: `string` = '0x'; `callGasLimit`: `string` = '0x0' }\>

get approve call data (use activate wallet)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) | the ethers.js provider e.g. ethers.provider |
| `walletAddress` | `string` | same as userOperation.sender |
| `approveData` | [`IApproveToken`](../interfaces/IApproveToken.md)[] | the approve data |

#### Returns

`Promise`<{ `callData`: `string` = '0x'; `callGasLimit`: `string` = '0x0' }\>

the call data

#### Defined in

[src/utils/tokens.ts:114](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L114)

___

### getContract

▸ `Private` **getContract**(`etherProvider`, `contractAddress`): [`Contract`](internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `etherProvider` | [`BaseProvider`](internal_.BaseProvider.md) |
| `contractAddress` | `string` |

#### Returns

[`Contract`](internal_.Contract.md)

#### Defined in

[src/utils/tokens.ts:65](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L65)

___

### transfer

▸ **transfer**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_to`, `_value`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

transfer token

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
| `_token` | `string` | the token address |
| `_to` | `string` | the to address |
| `_value` | `string` | the value |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:204](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L204)

___

### transferFrom

▸ **transferFrom**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_from`, `_to`, `_value`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

transfer token

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
| `_token` | `string` | the token address |
| `_from` | `string` | - |
| `_to` | `string` | the to address |
| `_value` | `string` | the value |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:182](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L182)
