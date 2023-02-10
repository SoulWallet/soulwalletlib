/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-11-07 21:08:08
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-10 15:36:46
 */

import { UserOperation } from "../entity/userOperation";
import { execFromEntryPoint, execBatchFromEntryPoint } from "../defines/ABI";
import { BigNumber, ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";

export interface ITransaction {
    data: string;
    from: string;
    gas: string;
    to: string;
    value: string;
}


export class Converter {

    constructor() {
    }

    public async fromTransaction(
        etherProvider: ethers.providers.BaseProvider,
        entryPointAddress: string,
        transcations: ITransaction[],
        nonce: number = 0,
        maxFeePerGas: NumberLike = 0,
        maxPriorityFeePerGas: NumberLike = 0,
        paymasterAndData: string = "0x"
    ): Promise<UserOperation | null> {

        const op = new UserOperation();
        op.nonce = nonce;
        op.paymasterAndData = paymasterAndData;
        op.maxFeePerGas = maxFeePerGas;
        op.maxPriorityFeePerGas = maxPriorityFeePerGas;

        if (transcations.length === 0) {
            throw new Error("transcation is empty");
        }

        op.sender = (transcations[0].from).toLowerCase();

        // #TODO if gas is null


        let _callGasLimit: BigNumber = BigNumber.from(transcations[0].gas);

        const _to: string[] = [transcations[0].to];
        const _value: string[] = [transcations[0].value];
        const _data: string[] = [transcations[0].data];

        if (transcations.length > 1) {
            for (let i = 1; i < transcations.length; i++) {
                _callGasLimit.add(BigNumber.from(transcations[i]));
                _to.push(transcations[i].to);
                _value.push(transcations[i].value);
                _data.push(transcations[i].data);
                if (op.sender !== transcations[i].from.toLowerCase()) {
                    throw new Error("transcation sender is not same");
                }
            }
        }

        op.callGasLimit = _callGasLimit.toHexString();

        if (transcations.length === 1) {
            op.callData = new ethers.utils.Interface(execFromEntryPoint)
                .encodeFunctionData("execFromEntryPoint",
                    [_to[0], _value[0], _data[0]]
                );
        } else {
            op.callData = new ethers.utils.Interface(execBatchFromEntryPoint)
                .encodeFunctionData("execFromEntryPoint",
                    [_to, _value, _data]
                );
        }


        // let gasEstimated = await op.estimateGas(entryPointAddress,
        //     etherProvider
        // );
        // if (!gasEstimated) {
        //     return null;
        // }

        return op;
    }
}