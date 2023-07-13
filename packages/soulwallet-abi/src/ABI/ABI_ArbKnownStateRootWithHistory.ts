export default [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_l1Target",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "blockHash",
                "type": "bytes32"
            }
        ],
        "name": "L1BLockSyncd",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ROOT_HISTORY_SIZE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "blockHashs",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "currentRootIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_blockNumber",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_blockInfo",
                "type": "bytes"
            }
        ],
        "name": "insertNewStateRoot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_stateRoot",
                "type": "bytes32"
            }
        ],
        "name": "isKnownStateRoot",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "l1Target",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "l1BlockNumber",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "l1BlockHash",
                "type": "bytes32"
            }
        ],
        "name": "setBlockHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_stateRoot",
                "type": "bytes32"
            }
        ],
        "name": "stateRootInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "result",
                "type": "bool"
            },
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "storageRootHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "blockHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockTimestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BlockInfo",
                "name": "info",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "stateRoots",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "storageRootHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "blockTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_l1Target",
                "type": "address"
            }
        ],
        "name": "updateL1Target",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];