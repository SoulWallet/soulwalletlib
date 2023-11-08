---
"@soulwallet/keyvault": patch
"@soulwallet/decoder": patch
"@soulwallet/assets": patch
"@soulwallet/abi": patch
"@soulwallet/sdk": patch
---

- @soulwallet/keyvault

  - Updated ethers.js -> 6.8.1

- @soulwallet/decoder

  - Updated bytes4 dictionary for contracts

- @soulwallet/assets

  - Updated ERC20 database

    ```shell
    + Big Time
    + iExec RLC
    ```

- @soulwallet/abi

  - Updated contract ABI

    - ```
      ABI_KeystoreProof.ts
      	lastestProofL1BlockNumber -> latestProofL1BlockNumber

      ABI_SoulWallet.ts
      	hash -> rawHash
      ```

- @soulwallet/sdk

  - Supported RS256 signature algorithm

    ```js
    export interface RSAPublicKey {
      /**
       * Hex string of public exponent
       *
       * @type {string}
       * @memberof RSAPublicKey
       */
      e: string;

      /**
       * Hex string of public key
       *
       * @type {string}
       * @memberof RSAPublicKey
       */
      n: string;
    }
    ```
