@soulwallet/abi / [Modules](modules.md)

<h1 align="center">
   <b>
        @soulwallet/abi
    </b>
</h1>

<p align="center">
soulwallet-contract ABI
</p>

<p align="center">
    <a href="https://github.com/SoulWallet/soulwalletlib/tree/develop/packages/soulwallet-abi"><b>Code</b></a> •
    <a href="https://github.com/SoulWallet/soulwalletlib/blob/develop/packages/soulwallet-abi/docs/modules.md"><b>Documentation</b></a>
</p>

## Table of Contents

  - [Installing](#installing)
    
  - [Example](#example)

  - [License](#license)

## Installing

Using npm:

```bash
$ npm install @soulwallet/abi
```

Using yarn:

```bash
$ yarn add @soulwallet/abi
```

Using pnpm:

```bash
$ pnpm add @soulwallet/abi
```

Once the package is installed, you can import the library using `import` approach:

```bash
import { ABI_SoulWallet } from '@soulwallet/abi'
```

## Example

```typescript
import { 
    ABI_KeyStore,
    ABI_SoulWallet,
    ABI_SoulWalletFactory,
    ABI_SoulWalletProxy,
    ABI_Simple2FA,
    ABI_Dailylimit,
    ABI_SecurityControlModule,
    ABI_SocialRecoveryModule,
    ABI_Upgrade,
    ABI_TrustedModuleManager,
    ABI_TrustedPluginManager,
    ABI_OpKnownStateRootWithHistory,
    ABI_ArbKnownStateRootWithHistory,
    ABI_KeyStoreModule,
    ABI_KeystoreProof,
    ABI_ERC20Paymaster,
    ABI_EntryPoint
} from '@soulwallet/abi'
```

## License

ISC
