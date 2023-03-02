/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 11:02:34
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 19:36:28
 */
import { BigNumber, ethers } from 'ethers';
import { ArbitrumNodeInterfaceABI } from './abi';

export interface IEstimateComponents {
    baseFee: BigNumber;
    gasEstimate: BigNumber;
    gasEstimateForL1: BigNumber;
    l1BaseFeeEstimate: BigNumber;
}

export class ArbitrumNodeInterface {
    static arbitrumNodeInterface = '0x00000000000000000000000000000000000000C8'

    public static async gasEstimateComponents(
        etherProvider: ethers.providers.BaseProvider,
        to: string,
        calldata: string, contractCreation = false
    ): Promise<IEstimateComponents> {
        const encodeABI = new ethers.utils.Interface(ArbitrumNodeInterfaceABI).encodeFunctionData("gasEstimateComponents", [
            to,
            contractCreation,
            calldata
        ]);
        const gasLimit = await etherProvider.call({
            to: ArbitrumNodeInterface.arbitrumNodeInterface,
            data: encodeABI
        });
        const decodeABI = new ethers.utils.Interface(ArbitrumNodeInterfaceABI).decodeFunctionResult("gasEstimateComponents", gasLimit);
        return {
            baseFee: decodeABI.baseFee,
            gasEstimate: decodeABI.gasEstimate,
            gasEstimateForL1: decodeABI.gasEstimateForL1,
            l1BaseFeeEstimate: decodeABI.l1BaseFeeEstimate
        };


    }
}
