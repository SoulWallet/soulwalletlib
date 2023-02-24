[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ERC721

# Class: ERC721

[<internal>](../modules/internal_.md).ERC721

ERC721

## Table of contents

### Constructors

- [constructor](internal_.ERC721.md#constructor)

### Properties

- [\_token](internal_.ERC721.md#_token)

### Methods

- [approve](internal_.ERC721.md#approve)
- [getContract](internal_.ERC721.md#getcontract)
- [safeTransferFrom](internal_.ERC721.md#safetransferfrom)
- [setApprovalForAll](internal_.ERC721.md#setapprovalforall)
- [transfer](internal_.ERC721.md#transfer)
- [transferFrom](internal_.ERC721.md#transferfrom)

## Constructors

### constructor

• **new ERC721**()

#### Defined in

[src/utils/tokens.ts:223](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L223)

## Properties

### \_token

• `Private` **\_token**: [`Token`](internal_.Token.md)

#### Defined in

[src/utils/tokens.ts:218](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L218)

## Methods

### approve

▸ **approve**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_spender`, `_tokenId`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

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
| `_tokenId` | `string` | the token id |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:246](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L246)

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

[src/utils/tokens.ts:227](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L227)

___

### safeTransferFrom

▸ **safeTransferFrom**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_from`, `_to`, `_tokenId`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

safe transfer token

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
| `_tokenId` | `string` | the token id |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:314](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L314)

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

[src/utils/tokens.ts:337](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L337)

___

### transfer

▸ **transfer**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_to`, `_tokenId`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

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
| `_tokenId` | `string` | the token id |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:291](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L291)

___

### transferFrom

▸ **transferFrom**(`etherProvider`, `walletAddress`, `nonce`, `entryPointAddress`, `paymasterAddress`, `maxFeePerGas`, `maxPriorityFeePerGas`, `_token`, `_from`, `_to`, `_tokenId`): `Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

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
| `_tokenId` | `string` | the token id |

#### Returns

`Promise`<``null`` \| [`UserOperation`](UserOperation.md)\>

the userOperation

#### Defined in

[src/utils/tokens.ts:268](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/tokens.ts#L268)
