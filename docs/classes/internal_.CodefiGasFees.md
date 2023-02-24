[soul-wallet-lib](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CodefiGasFees

# Class: CodefiGasFees

[<internal>](../modules/internal_.md).CodefiGasFees

gas fee

## Table of contents

### Constructors

- [constructor](internal_.CodefiGasFees.md#constructor)

### Methods

- [getEIP1559GasFees](internal_.CodefiGasFees.md#geteip1559gasfees)
- [getLegacyGasPrices](internal_.CodefiGasFees.md#getlegacygasprices)

## Constructors

### constructor

• **new CodefiGasFees**()

## Methods

### getEIP1559GasFees

▸ `Static` **getEIP1559GasFees**(`chainId`): `Promise`<``null`` \| [`SuggestedGasFees`](../interfaces/internal_.SuggestedGasFees.md)\>

get gas fees

**`Static`**

**`Link`**

https://gas-api.metaswap.codefi.network/networks/1/suggestedGasFees

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` | the chain id |

#### Returns

`Promise`<``null`` \| [`SuggestedGasFees`](../interfaces/internal_.SuggestedGasFees.md)\>

the gas fees

#### Defined in

[src/utils/gasFee.ts:25](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/gasFee.ts#L25)

___

### getLegacyGasPrices

▸ `Static` **getLegacyGasPrices**(`chainId`): `Promise`<``null`` \| [`gasPrices`](../interfaces/internal_.gasPrices.md)\>

get legacy gas prices

**`Static`**

**`Link`**

https://gas-api.metaswap.codefi.network/networks/1/gasPrices

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` | the chain id |

#### Returns

`Promise`<``null`` \| [`gasPrices`](../interfaces/internal_.gasPrices.md)\>

the gas prices

#### Defined in

[src/utils/gasFee.ts:49](https://github.com/zhangshengjie/soulwalletlib/blob/93d2029/src/utils/gasFee.ts#L49)
