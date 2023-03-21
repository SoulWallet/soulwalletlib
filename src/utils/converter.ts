/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-11-07 21:08:08
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-21 11:11:14
 */

import { UserOperation } from "../entity/userOperation";
import { execFromEntryPoint, execBatchFromEntryPoint } from "../defines/ABI";
import { BigNumber, ethers } from "ethers";
import { NumberLike } from "../defines/numberLike";
import { ITransaction } from "../interface/ITransaction";


/**
 * converter class
 * @class Converter
 */
export class Converter {

    /**
     * @constructor
     */
    constructor() {
    }

    /**
     * convert transcations to userOperation
     * @param {ITransaction[]} transcations the transcations
     * @param {NumberLike} nonce the nonce
     * @param {NumberLike} maxFeePerGas the max fee per gas
     * @param {NumberLike} maxPriorityFeePerGas the max priority fee per gas
     * @param {string?} paymasterAndData the paymaster and data
     * @returns {UserOperation} the userOperation
     */
    public fromTransaction(
        transcations: ITransaction[],
        nonce: NumberLike,
        maxFeePerGas: NumberLike,
        maxPriorityFeePerGas: NumberLike,
        paymasterAndData: string = "0x"
    ): UserOperation {
        if (transcations.length === 0) {
            throw new Error("transcation is empty");
        }

        let sender = (transcations[0].from || '').toLowerCase();
        let callGasLimits: NumberLike[] = []

        // #TODO if gas is null


        //let _callGasLimit: BigNumber = BigNumber.from(transcations[0].gas);

        const _to: string[] = [transcations[0].to];
        const _value: string[] = [BigNumber.from(transcations[0].value).toHexString()];
        const _data: string[] = [transcations[0].data];
        if (transcations[0].gasLimit) {
            callGasLimits.push(transcations[0].gasLimit);
        }

        if (transcations.length > 1) {
            for (let i = 1; i < transcations.length; i++) {
                // _callGasLimit.add(BigNumber.from(transcations[i]));
                _to.push(transcations[i].to);
                _value.push(BigNumber.from(transcations[i].value).toHexString());
                _data.push(transcations[i].data);
                const _gasLimit = transcations[i].gasLimit;
                if (_gasLimit) {
                    callGasLimits.push(_gasLimit);
                }
                const _sender = (transcations[i].from || '').toLowerCase();
                if (sender !== _sender) {
                    throw new Error("transcation sender is not same");
                }
            }
        }

        //op.callGasLimit = _callGasLimit.toHexString();
        let callData;
        if (transcations.length === 1) {
            callData = new ethers.utils.Interface(execFromEntryPoint)
                .encodeFunctionData("execFromEntryPoint",
                    [_to[0], _value[0], _data[0]]
                );
        } else {
            callData = new ethers.utils.Interface(execBatchFromEntryPoint)
                .encodeFunctionData("execFromEntryPoint",
                    [_to, _value, _data]
                );
        }
        let callGasLimit = BigNumber.from(0);
        if (callGasLimits.length === transcations.length) {
            for (let i = 0; i < callGasLimits.length; i++) {
                callGasLimit = callGasLimit.add(callGasLimits[i]);
            }
            if(callGasLimit.gt(0)){
                callGasLimit = callGasLimit.add(30000);
            }
        }
        const op = new UserOperation(
            sender,
            nonce, undefined, callData, callGasLimit.toHexString(), maxFeePerGas, maxPriorityFeePerGas, paymasterAndData
        );

        // let gasEstimated = await op.estimateGas(entryPointAddress,
        //     etherProvider
        // );
        // if (!gasEstimated) {
        //     return null;
        // }

        return op;
    }
}