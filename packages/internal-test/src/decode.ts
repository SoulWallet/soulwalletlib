import { ethers } from "ethers";
import { ABI_EntryPoint, ABI_SoulWallet } from "@soulwallet/abi";
import { Decoder } from "@soulwallet/decoder";

export class Decode {
    constructor() { }

    async run(): Promise<void> {

        let callData = '0x';

        const abi = new ethers.Interface(ABI_SoulWallet);

        let to: string[] = [
            '0xccaE58775FcBc01E0bB965Cc153363CD93e2d0f4',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
        ];
        let value: string[] = [
            '11',
            '12'
        ];

        // encode erc20 transfer
        const erc20Interface = new ethers.Interface([
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]);

        let data: string[] = [
            '0x32',
            erc20Interface.encodeFunctionData("transfer", ['0x4521C9aD6A3D4230803aB752Ed238BE11F8B342F', '0xf'])
        ];

        if (to.length > 1) {
            if (value[0] !== '0x0') {
                callData = abi.encodeFunctionData("executeBatch(address[],uint256[],bytes[])", [to, value, data]);
            } else {
                callData = abi.encodeFunctionData("executeBatch(address[],bytes[])", [to, data]);
            }
        } else {
            callData = abi.encodeFunctionData("execute", [to[0], value[0], data[0]]);
        }

        const ret = await Decoder.decode(1, '0x1', '0x2', callData);
        if (ret.isErr()) {
            throw new Error(ret.ERR);
        }
        if (ret.OK.length !== 2) {
            throw new Error('result length error');
        }

    }

}

