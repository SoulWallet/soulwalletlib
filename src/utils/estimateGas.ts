/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:41:26
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 11:13:56
 */

import { BigNumber, ethers } from "ethers";
import { CHAINID } from "../defines/chainId";
import { ITransaction } from "../interface/ITransaction";
import { ArbitrumNodeInterface } from "./L2/arbitrumNodeInterface";

export interface IEstimateGas {
    gasLimit: BigNumber;
    gasLimitForL1: BigNumber | undefined;
    gasLimitForL2: BigNumber | undefined;
}

export class EstimateGas {
    public static async estimate(etherProvider: ethers.providers.BaseProvider, transaction: ITransaction): Promise<IEstimateGas> {
        let gasLimit = await etherProvider.estimateGas({
            from: transaction.from,
            to: transaction.to,
            data: transaction.data,
            value: transaction.value,
            gasLimit: transaction.gasLimit
        });
        let gasLimitForL1: BigNumber | undefined;
        let gasLimitForL2: BigNumber | undefined;
        const chainId = await etherProvider.getNetwork().then((network) => network.chainId);
        if (chainId === CHAINID.ARBITRUM || chainId === CHAINID.ARBITRUM_GOERLI) {
            const _gasLimit = await ArbitrumNodeInterface.gasEstimateComponents(etherProvider, transaction.to, transaction.data);
            gasLimitForL1 = _gasLimit.gasEstimateForL1;
            gasLimitForL2 = gasLimit.sub(gasLimitForL1);
        }
        return {
            gasLimit,
            gasLimitForL1,
            gasLimitForL2
        };
    }
}