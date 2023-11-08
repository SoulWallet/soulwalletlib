//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
    {
        "inputs": [
            {
                "internalType": "contract IEntryPoint",
                "name": "_EntryPoint",
                "type": "address"
            },
            {
                "internalType": "contract IValidator",
                "name": "_validator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ADDRESS_ALREADY_EXISTS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ADDRESS_NOT_EXISTS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CALLER_MUST_BE_ENTRYPOINT",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CALLER_MUST_BE_MODULE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CALLER_MUST_BE_SELF_OR_MODULE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DATA_ALREADY_EXISTS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DATA_NOT_EXISTS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "HASH_ALREADY_APPROVED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "HASH_ALREADY_REJECTED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_ADDRESS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_DATA",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_GUARD_HOOK_DATA",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_LOGIC_ADDRESS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INVALID_SELECTOR",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidInitialization",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MODULE_ADDRESS_EMPTY",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MODULE_EXECUTE_FROM_MODULE_RECURSIVE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MODULE_NOT_SUPPORT_INTERFACE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MODULE_SELECTORS_EMPTY",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NOT_IMPLEMENTED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NO_OWNER",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotInitializing",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_ADDRESS_EMPTY",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_HOOK_TYPE_ERROR",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_INIT_FAILED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_NOT_REGISTERED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_NOT_SUPPORT_INTERFACE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_POST_HOOK_FAILED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PLUGIN_PRE_HOOK_FAILED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SAME_LOGIC_ADDRESS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SELECTOR_ALREADY_EXISTS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UPGRADE_FAILED",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "ApproveHash",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "fallbackContract",
                "type": "address"
            }
        ],
        "name": "FallbackChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "version",
                "type": "uint64"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "module",
                "type": "address"
            }
        ],
        "name": "ModuleAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "module",
                "type": "address"
            }
        ],
        "name": "ModuleRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "module",
                "type": "address"
            }
        ],
        "name": "ModuleRemovedWithError",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "owner",
                "type": "bytes32"
            }
        ],
        "name": "OwnerAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "OwnerCleared",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "owner",
                "type": "bytes32"
            }
        ],
        "name": "OwnerRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            }
        ],
        "name": "PluginAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            }
        ],
        "name": "PluginRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            }
        ],
        "name": "PluginRemovedWithError",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "RejectHash",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldImplementation",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "moduleAndData",
                "type": "bytes"
            }
        ],
        "name": "addModule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "owner",
                "type": "bytes32"
            }
        ],
        "name": "addOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "owners",
                "type": "bytes32[]"
            }
        ],
        "name": "addOwners",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "pluginAndData",
                "type": "bytes"
            }
        ],
        "name": "addPlugin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "approveHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "entryPoint",
        "outputs": [
            {
                "internalType": "contract IEntryPoint",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "dest",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "func",
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
                "internalType": "address[]",
                "name": "dest",
                "type": "address[]"
            },
            {
                "internalType": "bytes[]",
                "name": "func",
                "type": "bytes[]"
            }
        ],
        "name": "executeBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "dest",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "value",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "func",
                "type": "bytes[]"
            }
        ],
        "name": "executeBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "executeFromModule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNonce",
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
                "internalType": "bytes32[]",
                "name": "owners",
                "type": "bytes32[]"
            },
            {
                "internalType": "address",
                "name": "defalutCallbackHandler",
                "type": "address"
            },
            {
                "internalType": "bytes[]",
                "name": "modules",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes[]",
                "name": "plugins",
                "type": "bytes[]"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "module",
                "type": "address"
            }
        ],
        "name": "isAuthorizedModule",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            }
        ],
        "name": "isAuthorizedPlugin",
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
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "owner",
                "type": "bytes32"
            }
        ],
        "name": "isOwner",
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
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "rawHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "isValidSignature",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "magicValue",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "listModule",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "modules",
                "type": "address[]"
            },
            {
                "internalType": "bytes4[][]",
                "name": "selectors",
                "type": "bytes4[][]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "listOwner",
        "outputs": [
            {
                "internalType": "bytes32[]",
                "name": "owners",
                "type": "bytes32[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "hookType",
                "type": "uint8"
            }
        ],
        "name": "listPlugin",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "plugins",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "name": "pluginDataLoad",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
            }
        ],
        "name": "pluginDataStore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "rejectHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "module",
                "type": "address"
            }
        ],
        "name": "removeModule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "owner",
                "type": "bytes32"
            }
        ],
        "name": "removeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            }
        ],
        "name": "removePlugin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "newOwner",
                "type": "bytes32"
            }
        ],
        "name": "resetOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "newOwners",
                "type": "bytes32[]"
            }
        ],
        "name": "resetOwners",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "fallbackContract",
                "type": "address"
            }
        ],
        "name": "setFallbackHandler",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "oldImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeFrom",
        "outputs": [],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "initCode",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "callGasLimit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "verificationGasLimit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "preVerificationGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPriorityFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "paymasterAndData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct UserOperation",
                "name": "userOp",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "userOpHash",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "missingAccountFunds",
                "type": "uint256"
            }
        ],
        "name": "validateUserOp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "validationData",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "validator",
        "outputs": [
            {
                "internalType": "contract IValidator",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];