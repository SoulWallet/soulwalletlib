//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "function",
    "name": "syncL1Keystore",
    "inputs": [
      {
        "name": "wallet",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "KeyStoreInited",
    "inputs": [
      {
        "name": "_wallet",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "_initialKey",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "guardianSafePeriod",
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyStoreSyncd",
    "inputs": [
      {
        "name": "_wallet",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "_newOwners",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  }
];