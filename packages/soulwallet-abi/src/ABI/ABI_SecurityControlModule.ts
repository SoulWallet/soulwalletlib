export default [
    {
        "inputs": [
            {
                "internalType": "contract ITrustedContractManager",
                "name": "_trustedModuleManager",
                "type": "address"
            },
            {
                "internalType": "contract ITrustedContractManager",
                "name": "_trustedPluginManager",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            }
        ],
        "name": "AlreadyQueuedError",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "returnData",
                "type": "bytes"
            }
        ],
        "name": "ExecuteError",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotInitializedError",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotOwnerError",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            }
        ],
        "name": "NotQueuedError",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "RemoveSelfError",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "blockTimestmap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "TimestampNotPassedError",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "UnsupportedSelectorError",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "Cancel",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "CancelAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "Execute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "ModuleDeInit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "ModuleInit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "Queue",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "MAX_DELAY",
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
        "inputs": [],
        "name": "MIN_DELAY",
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
                "internalType": "bytes32",
                "name": "_txId",
                "type": "bytes32"
            }
        ],
        "name": "cancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "cancelAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "_seed",
                "type": "uint128"
            },
            {
                "internalType": "address",
                "name": "_target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "getTxId",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "_target",
                "type": "address"
            }
        ],
        "name": "getWalletConfig",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "seed",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint64",
                        "name": "delay",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct IBaseSecurityControlModule.WalletConfig",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "queue",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "txId",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "requiredFunctions",
        "outputs": [
            {
                "internalType": "bytes4[]",
                "name": "",
                "type": "bytes4[]"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "trustedModuleManager",
        "outputs": [
            {
                "internalType": "contract ITrustedContractManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "trustedPluginManager",
        "outputs": [
            {
                "internalType": "contract ITrustedContractManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "walletDeInit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "walletInit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];