/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:08:05
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-06 17:16:19
 */
import { BigNumber, ethers } from 'ethers';
import { EstimateGasHelper } from '../../../contracts/estimateGasHelper';
import { AddressZero } from '../../../defines/address';
import { NumberLike } from '../../../defines/numberLike';
import { UserOperation } from '../../../entity/userOperation';
import { IGasPrice } from '../IgasPrice';
import { ArbitrumNodeInterface } from './arbitrumNodeInterface';


export class Arbitrum {

    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {UserOperation} op
     * @param {(BigNumber | NumberLike)} basefee
     * @param {string} entryPointAddress
     * @param {string} estimateGasHelper
     * @return {*}  {Promise<IGasPrice>}
     * @memberof Arbitrum
     */
    public static async calcGasPrice(
        l2Provider: ethers.providers.BaseProvider,
        op: UserOperation,
        basefee: BigNumber | NumberLike,
        entryPointAddress: string,
        estimateGasHelper: string,
        from: string | undefined
    ): Promise<IGasPrice> {
        // estimateGas with EstimateGasHelper
        let encodeABI = new ethers.utils.Interface(EstimateGasHelper.ABI).encodeFunctionData("simulateValidation", [entryPointAddress, op]);

        const _gasLimit = await ArbitrumNodeInterface.gasEstimateComponents(l2Provider, from, estimateGasHelper, encodeABI);
        const gasLimitForL1 = _gasLimit.gasEstimateForL1;

        const requiredGasL2 = op.requiredGas();
        const maxGasPriceL2 = op.maxGasPrice(basefee);
        const constL1 = gasLimitForL1.mul(maxGasPriceL2);
        const constL1PreGas = constL1.div(requiredGasL2);
        const reasonableGasPrice = maxGasPriceL2.add(constL1PreGas);

        const _basefee = BigNumber.from(basefee);
        if (reasonableGasPrice.gt(_basefee)) {
            return {
                maxFeePerGas: reasonableGasPrice.mul(120).div(100).toHexString(),// +20% of maxFeePerGas
                maxPriorityFeePerGas: reasonableGasPrice.sub(_basefee).toHexString()
            };
        }
        return {
            maxFeePerGas: op.maxFeePerGas,
            maxPriorityFeePerGas: op.maxPriorityFeePerGas
        };

    }
}