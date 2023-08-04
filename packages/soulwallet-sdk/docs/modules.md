[@soulwallet/sdk](README.md) / Modules

# @soulwallet/sdk

## Table of contents

### Classes

- [Bundler](classes/Bundler.md)
- [Err](classes/Err.md)
- [L1KeyStore](classes/L1KeyStore.md)
- [Ok](classes/Ok.md)
- [SoulWallet](classes/SoulWallet.md)
- [UserOpErrorCodes](classes/UserOpErrorCodes.md)
- [UserOpErrors](classes/UserOpErrors.md)
- [UserOpUtils](classes/UserOpUtils.md)

### Interfaces

- [KeyStoreInfo](interfaces/KeyStoreInfo.md)
- [Transaction](interfaces/Transaction.md)
- [UserOpDetail](interfaces/UserOpDetail.md)
- [UserOpGas](interfaces/UserOpGas.md)
- [UserOpReceipt](interfaces/UserOpReceipt.md)

### Type Aliases

- [Result](modules.md#result)
- [UserOperation](modules.md#useroperation)

## Type Aliases

### Result

Ƭ **Result**<`T`, `E`\>: [`Ok`](classes/Ok.md)<`T`, `E`\> \| [`Err`](classes/Err.md)<`T`, `E`\>

Defines a Result type, which can be either Ok or Err.

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Defined in

packages/soulwallet-result/lib.cjs/Result.d.ts:4

___

### UserOperation

Ƭ **UserOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callData` | `HexString` |
| `callGasLimit` | `BigNumberish` |
| `initCode` | `HexString` |
| `maxFeePerGas` | `BigNumberish` |
| `maxPriorityFeePerGas` | `BigNumberish` |
| `nonce` | `BigNumberish` |
| `paymasterAndData` | `HexString` |
| `preVerificationGas` | `BigNumberish` |
| `sender` | `Address` |
| `signature` | `HexString` |
| `verificationGasLimit` | `BigNumberish` |

#### Defined in

[packages/soulwallet-sdk/src/interface/UserOperation.ts:6](https://github.com/SoulWallet/soulwalletlib/blob/38adfd4/packages/soulwallet-sdk/src/interface/UserOperation.ts#L6)
