//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_validator",
        "type": "address",
        "internalType": "contract IKeyStoreValidator"
      },
      {
        "name": "_keystorStorage",
        "type": "address",
        "internalType": "contract IKeyStoreStorage"
      },
      {
        "name": "_owner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "approveHash",
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "cancelSetGuardian",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "cancelSetGuardianSafePeriod",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eip712Domain",
    "inputs": [],
    "outputs": [
      {
        "name": "fields",
        "type": "bytes1",
        "internalType": "bytes1"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "version",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "verifyingContract",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "salt",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "extensions",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "enableTrustedKeystoreLogic",
    "inputs": [
      {
        "name": "logic",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getGuardianHash",
    "inputs": [
      {
        "name": "rawGuardian",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "guardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getKey",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getKeyStoreInfo",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "_keyStoreInfo",
        "type": "tuple",
        "internalType": "struct IKeyStore.keyStoreInfo",
        "components": [
          {
            "name": "key",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "guardianHash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "pendingGuardianHash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "guardianActivateAt",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "guardianSafePeriod",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "pendingGuardianSafePeriod",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "guardianSafePeriodActivateAt",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getOwnersKeyHash",
    "inputs": [
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getSlot",
    "inputs": [
      {
        "name": "initialKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "guardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "keyStoreBySlot",
    "inputs": [
      {
        "name": "l1Slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "signingKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "keyStoreStorage",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IKeyStoreStorage"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nonce",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "_nonce",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rawOwnersBySlot",
    "inputs": [
      {
        "name": "l1Slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "owners",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rejectHash",
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGuardian",
    "inputs": [
      {
        "name": "initialKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "newGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGuardian",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGuardianSafePeriod",
    "inputs": [
      {
        "name": "initialKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "newGuardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGuardianSafePeriod",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newGuardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "rawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setKeyByGuardian",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newRawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "rawGuardian",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "guardianSignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setKeyByGuardian",
    "inputs": [
      {
        "name": "initialKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "newRawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "rawGuardian",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "guardianSignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setKeyByOwner",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newRawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "currentRawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setKeyByOwner",
    "inputs": [
      {
        "name": "initialKeyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "initialGuardianSafePeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "newRawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "currentRawOwners",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "upgradeKeystore",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newLogic",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "keySignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "validator",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IKeyStoreValidator"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "ApproveHash",
    "inputs": [
      {
        "name": "guardian",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "hash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CancelSetGuardian",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "guardianHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CancelSetGuardianSafePeriod",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "guardianSafePeriod",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "EIP712DomainChanged",
    "inputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GuardianChanged",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "guardianHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GuardianSafePeriodChanged",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "guardianSafePeriod",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "key",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyChanged",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "key",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyStoreUpgraded",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "newLogic",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RejectHash",
    "inputs": [
      {
        "name": "guardian",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "hash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetGuardian",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "guardianHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "effectAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetGuardianSafePeriod",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "guardianSafePeriod",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "effectAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "ECDSAInvalidSignature",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ECDSAInvalidSignatureLength",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ECDSAInvalidSignatureS",
    "inputs": [
      {
        "name": "s",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "GUARDIAN_SIGNATURE_INVALID",
    "inputs": []
  },
  {
    "type": "error",
    "name": "HASH_ALREADY_APPROVED",
    "inputs": []
  },
  {
    "type": "error",
    "name": "HASH_ALREADY_REJECTED",
    "inputs": []
  },
  {
    "type": "error",
    "name": "INVALID_DATA",
    "inputs": []
  },
  {
    "type": "error",
    "name": "INVALID_KEY",
    "inputs": []
  },
  {
    "type": "error",
    "name": "INVALID_SIGNATURE",
    "inputs": []
  },
  {
    "type": "error",
    "name": "INVALID_TIME_RANGE",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidShortString",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NOT_INITIALIZED",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OwnableInvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OwnableUnauthorizedAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "StringTooLong",
    "inputs": [
      {
        "name": "str",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "UNTRUSTED_KEYSTORE_LOGIC",
    "inputs": []
  }
];