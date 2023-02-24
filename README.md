<h1 align="center">
   <b>
        soul-wallet-lib
    </b>
</h1>

<p align="center">The interaction library for SoulWallet</p>

<p align="center">
    <a href="https://github.com/proofofsoulprotocol/soul-wallet-contract/"><b>Compatible Contracts</b></a> •
    <a href="docs/modules.md"><b>Documentation</b></a>
</p>


## Table of Contents

  - [Features](#features)

  - [Installing](#installing)
    
  - [Example](#example)

  - [License](#license)

    

## Features

- All-In-One

- UserOperation can be built with a single function

- Built-in Bundler module

- Built-in CallData parsing module

- Built-in common operations, such as ERC20 ERC721 ERC1155 (e.g. you can create a transfer UserOperation with one function)

- Auto update preVerificationGas (lower deposit requirements for user)

- ⚠️ Note: current version will refactor the code in the future and cannot guarantee compatibility

  

## Installing

Using npm:

```bash
$ npm install git+https://github.com/proofofsoulprotocol/soulwalletlib.git#v0.1.0-alpha.13
```

Using yarn:

```bash
$ yarn add git+https://github.com/proofofsoulprotocol/soulwalletlib.git#v0.1.0-alpha.13
```

Using pnpm:

```bash
$ pnpm add git+https://github.com/proofofsoulprotocol/soulwalletlib.git#v0.1.0-alpha.13
```

Once the package is installed, you can import the library using `import` approach:

```bash
import { IApproveToken, ITransaction, SoulWalletLib, UserOperation } from 'soul-wallet-lib';
```



## Example

```typescript
import { ethers } from "ethers";
import { IUserOpReceipt, SoulWalletLib, UserOperation } from 'soul-wallet-lib';

async function main() {
    const soulWalletLib = new SoulWalletLib();

    const walletAddress = await soulWalletLib.calculateWalletAddress(
        '0x0',  // <address> SoulWalletLogic Contract Address
        '0x0',  // <address> EntryPoint Contract Address
        '0x0',  // <address> Wallet Owner Address
        86400,  // <uint32> upgradeDelay (seconds)
        86400,  // <uint32> guardianDelay (seconds)
        '0x0'  // <address> guardianAddress
    );

    const activateOp = soulWalletLib.activateWalletOp(
        '0x0',  // <address> SoulWalletLogic Contract Address
        '0x0',  // <address> EntryPoint Contract Address
        '0x0',  // <address> Wallet Owner Address
        86400,  // <uint32> upgradeDelay (seconds)
        86400,  // <uint32> guardianDelay (seconds)
        '0x0',  // <address> guardianAddress
        '0x',   // <bytes> paymasterAndData
        10000000000,// 100Gwei
        1000000000,// 10Gwei 
    );

    const userOpHash = activateOp.getUserOpHash(
        '0x0',  // <address> EntryPoint Contract Address
        1,      // <uint32> chainId
    );

    activateOp.signWithSignature(
        '0x0',  // <address> Wallet Owner Address
        '0x'    // <bytes> signature of userOpHash
    );


    const bundler = new soulWalletLib.Bundler(
        '0x0',  // <address> EntryPoint Contract Address
        new ethers.providers.JsonRpcProvider('<RPC Provider>'),
    );

    const validation = await bundler.simulateValidation(activateOp);
    if (validation.status !== 0) {
        throw new Error(`error code:${validation.status}`);
    }

    const bundlerEvent = bundler.sendUserOperation(activateOp);
    bundlerEvent.on('error', (err: any) => {
        console.log(err);
    });
    bundlerEvent.on('send', (userOpHash: string) => {
        console.log('send: ' + userOpHash);
    });
    bundlerEvent.on('receipt', (receipt: IUserOpReceipt) => {
        console.log('receipt: ' + JSON.stringify(receipt));
    });
    bundlerEvent.on('timeout', () => {
        console.log('timeout');
    });
}

main();
```
- More Example: https://github.com/proofofsoulprotocol/soul-wallet-contract/blob/main/test/test.ts




## License

[MPL-2.0](LICENSE)
