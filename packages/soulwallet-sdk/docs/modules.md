[@soulwallet/sdk](README.md) / Modules

# @soulwallet/sdk

## Table of contents

### Enumerations

- [KeyStoreTypedDataType](enums/KeyStoreTypedDataType.md)
- [SignkeyType](enums/SignkeyType.md)

### Classes

- [Base64Url](classes/Base64Url.md)
- [Bundler](classes/Bundler.md)
- [Err](classes/Err.md)
- [L1KeyStore](classes/L1KeyStore.md)
- [Ok](classes/Ok.md)
- [P256Lib](classes/P256Lib.md)
- [SoulWallet](classes/SoulWallet.md)
- [UserOpErrorCodes](classes/UserOpErrorCodes.md)
- [UserOpErrors](classes/UserOpErrors.md)
- [UserOpUtils](classes/UserOpUtils.md)
- [WalletFactory](classes/WalletFactory.md)
- [WebAuthN](classes/WebAuthN.md)

### Interfaces

- [ECCPoint](interfaces/ECCPoint.md)
- [GuardianSignature](interfaces/GuardianSignature.md)
- [KeyStoreInfo](interfaces/KeyStoreInfo.md)
- [RSAPublicKey](interfaces/RSAPublicKey.md)
- [Transaction](interfaces/Transaction.md)
- [UserOpDetail](interfaces/UserOpDetail.md)
- [UserOpGas](interfaces/UserOpGas.md)
- [UserOpReceipt](interfaces/UserOpReceipt.md)

### Type Aliases

- [InitialKey](modules.md#initialkey)
- [PackedUserOperation](modules.md#packeduseroperation)
- [Result](modules.md#result)
- [UserOperation](modules.md#useroperation)

## Type Aliases

### InitialKey

Ƭ **InitialKey**: [`ECCPoint`](interfaces/ECCPoint.md) \| [`RSAPublicKey`](interfaces/RSAPublicKey.md) \| `string`

Initial key of the wallet
ECCPoint, RSAPublicKey, EOA or packed bytes32

#### Defined in

[packages/soulwallet-sdk/src/interface/ISoulWallet.ts:240](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/ISoulWallet.ts#L240)

___

### PackedUserOperation

Ƭ **PackedUserOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountGasLimits` | `Bytes32` |
| `callData` | `HexString` |
| `gasFees` | `Bytes32` |
| `initCode` | `HexString` |
| `nonce` | `BigNumberish` |
| `paymasterAndData` | `HexString` |
| `preVerificationGas` | `BigNumberish` |
| `sender` | `Address` |
| `signature` | `HexString` |

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:26](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/UserOperation.ts#L26)

___

### Result

Ƭ **Result**\<`T`, `E`\>: [`Ok`](classes/Ok.md)\<`T`, `E`\> \| [`Err`](classes/Err.md)\<`T`, `E`\>

Defines a Result type, which can be either Ok or Err.

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Defined in

packages/soulwallet-result/lib.esm/Result.d.ts:4

___

### UserOperation

Ƭ **UserOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callData` | `HexString` |
| `callGasLimit` | `BigNumberish` |
| `factory` | `Address` \| ``null`` |
| `factoryData` | `HexString` \| ``null`` |
| `maxFeePerGas` | `BigNumberish` |
| `maxPriorityFeePerGas` | `BigNumberish` |
| `nonce` | `BigNumberish` |
| `paymaster` | `Address` \| ``null`` |
| `paymasterData` | `HexString` \| ``null`` |
| `paymasterPostOpGasLimit` | `BigNumberish` |
| `paymasterVerificationGasLimit` | `BigNumberish` |
| `preVerificationGas` | `BigNumberish` |
| `sender` | `Address` |
| `signature` | `HexString` |
| `verificationGasLimit` | `BigNumberish` |

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:8](https://github.com/SoulWallet/soulwalletlib/blob/c4026ab/packages/soulwallet-sdk/src/interface/UserOperation.ts#L8)
