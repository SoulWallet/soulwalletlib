//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "constructor",
    "inputs": [
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
    "name": "getAddress",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
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
    "name": "getBool",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBytes",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBytes32",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInt",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMerkleRoot",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSlotValue",
    "inputs": [
      {
        "name": "_slot",
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
    "name": "getString",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTreeCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTreeDepth",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getUint256",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "insertLeaf",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_signingKey",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAddress",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setBool",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setBytes",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setBytes32",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDefaultKeystoreAddress",
    "inputs": [
      {
        "name": "_defaultKeystoreLogic",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setInt",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setKeystoreLogic",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_logicAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setSlotValue",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setString",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUint256",
    "inputs": [
      {
        "name": "_slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_key",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "slotToKeystoreLogic",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
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
    "type": "event",
    "name": "KeystoreLogicSet",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "logicAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LeafInserted",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "signingKeyHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
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
    "name": "newLeaf",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "signingKeyHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "blockNo",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "leafNode",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "index",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
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
  }
];