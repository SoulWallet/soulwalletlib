export default [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newImplementation",
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
                "internalType": "address",
                "name": "newLogic",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldLogic",
                "type": "address"
            }
        ],
        "name": "Upgrade",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "newImplementation",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "upgrade",
        "outputs": [],
        "stateMutability": "nonpayable",
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