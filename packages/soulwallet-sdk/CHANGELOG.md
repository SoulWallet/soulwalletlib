# @soulwallet/sdk

## 0.1.13

### Patch Changes

- 26ebf12: Remove guardianSafePeriodMin restriction

## 0.1.12

### Patch Changes

- 010e96d: - @soulwallet/keyvault

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

- Updated dependencies [010e96d]
  - @soulwallet/abi@0.1.3

## 0.1.11

### Patch Changes

- e66af6c: Added recoverWebAuthNPublicKey() function

## 0.1.10

### Patch Changes

- Fix bug

## 0.1.9

### Patch Changes

- add securityControlModuleDelay argument

## 0.1.8

### Patch Changes

- 1. Added a local implementation compatible with webauthn.
  2. Allowed the minimum value for guardianSafePeriod to be 60\*1 (1 minute).

## 0.1.7

### Patch Changes

- fixed rawowners encode bug

## 0.1.6

### Patch Changes

- 774b525: EIP1271 EIP712-signature supported

## 0.1.5

### Patch Changes

- 1592675: Fix a bug in P256Lib caused by reference type

## 0.1.4

### Patch Changes

- Added L1KeyStore.getKeyHash(string[]) function

## 0.1.3

### Patch Changes

- Allow caller to customize nonce

## 0.1.2

### Patch Changes

- passkey version merged into soulwallet@npmjs.com
- Updated dependencies
  - @soulwallet/result@0.1.2
  - @soulwallet/abi@0.1.2

## 0.1.1

### Patch Changes

- fe0c28b: Initial release of the package.
- Updated dependencies [fe0c28b]
  - @soulwallet/result@0.1.1
  - @soulwallet/abi@0.1.1
