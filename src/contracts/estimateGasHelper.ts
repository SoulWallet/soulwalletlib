/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-03 17:08:57
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-03 18:36:13
 */
import { IContract } from './icontract';

const ABI: any =
    [
        {
            "inputs": [
                {
                    "internalType": "contract IEntryPoint",
                    "name": "entryPoint",
                    "type": "address"
                },
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
                    "internalType": "struct UserOperation[]",
                    "name": "ops",
                    "type": "tuple[]"
                },
                {
                    "internalType": "address payable",
                    "name": "beneficiary",
                    "type": "address"
                }
            ],
            "name": "handleOps",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IEntryPoint",
                    "name": "entryPoint",
                    "type": "address"
                },
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
                    "name": "ops",
                    "type": "tuple"
                }
            ],
            "name": "simulateValidation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];


const bytecode = '';

const contract: IContract = {
    ABI,
    bytecode
};

export { contract as EstimateGasHelper };