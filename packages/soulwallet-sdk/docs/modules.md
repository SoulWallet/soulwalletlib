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

### Interfaces

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

packages/soulwallet-result/lib/Result.d.ts:4

___

### UserOperation

Ƭ **UserOperation**: `NotPromise`<`UserOperationStruct`\>

#### Defined in

[packages/soulwallet-sdk/src/interface/ISoulWallet.ts:3](https://github.com/proofofsoulprotocol/soulwalletlib/blob/f66010c/packages/soulwallet-sdk/src/interface/ISoulWallet.ts#L3)
