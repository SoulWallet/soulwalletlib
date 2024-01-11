//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
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
        "name": "initialGuardianSafePeriod",
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
  }
];