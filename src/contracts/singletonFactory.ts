/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-08 16:54:29
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-08 16:56:01
 */
import { IContract } from './icontract';

const ABI: any =
    [
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "_initCode",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes32",
                    "name": "_salt",
                    "type": "bytes32"
                }
            ],
            "name": "deploy",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "createdContract",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];


const bytecode =
'';

const contract: IContract = {
    ABI,
    bytecode
};

export { contract as SingletonFactory };