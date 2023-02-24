[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ERC1155

# Class: ERC1155

[<internal>](../modules/internal_.md).ERC1155

ERC1155

## Table of contents

### Constructors

- [constructor](internal_.ERC1155.md#constructor)

### Properties

- [\_token](internal_.ERC1155.md#_token)

### Methods

- [getContract](internal_.ERC1155.md#getcontract)
- [safeBatchTransferFrom](internal_.ERC1155.md#safebatchtransferfrom)
- [safeTransferFrom](internal_.ERC1155.md#safetransferfrom)
- [setApprovalForAll](internal_.ERC1155.md#setapprovalforall)

## Constructors

### constructor

• **new ERC1155**()

#### Defined in

[src/utils/tokens.ts:359](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L359)

## Properties

### \_token

• `Private` **\_token**: [`Token`](internal_.Token.md)

#### Defined in

[src/utils/tokens.ts:354](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L354)

## Methods

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

[src/utils/tokens.ts:363](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L363)

___

### safeBatchTransferFrom

▸ **safeBatchTransferFrom**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_from`, `_to`, `_ids`, `_values`, `_data`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

safeBatchTransferFrom

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
| `_from` | `string` | the from address |
| `_to` | `string` | the to address |
| `_ids` | `string` | the ids |
| `_values` | `string` | the values |
| `_data` | `string` | the data |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:410](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L410)

___

### safeTransferFrom

▸ **safeTransferFrom**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_from`, `_to`, `_id`, `_value`, `_data`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

safeTransferFrom

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
| `_from` | `string` | the from address |
| `_to` | `string` | the to address |
| `_id` | `string` | the id |
| `_value` | `string` | the value |
| `_data` | `string` | the data |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:384](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L384)

___

### setApprovalForAll

▸ **setApprovalForAll**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_operator`, `_approved`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

Enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s assets

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
| `_operator` | `string` | the operator address |
| `_approved` | `boolean` | the approved |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:433](https://github.com/proofofsoulprotocol/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L433)
