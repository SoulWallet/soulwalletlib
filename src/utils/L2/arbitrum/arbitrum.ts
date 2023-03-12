/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:08:05
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-12 22:52:18
 */
import { BigNumber, ethers } from 'ethers';
import { EntryPointContract } from '../../../contracts/entryPoint';
import { EstimateGasHelper } from '../../../contracts/estimateGasHelper';
import { AddressZero, ArbitrumEstimateGasHelperAddress } from '../../../defines/address';
import { NumberLike } from '../../../defines/numberLike';
import { UserOperation } from '../../../entity/userOperation';
import { IUserOperation } from '../../../interface/IUserOperation';
import { Bundler } from '../../bundler';
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
     * @return {*}  {Promise<number>}
     * @memberof Arbitrum
     */
    public static async calcGasPrice(
        l2Provider: ethers.providers.BaseProvider,
        op: UserOperation,
        basefee: BigNumber | NumberLike,
        entryPointAddress: string,
        from: string | undefined
    ): Promise<number> {
        const bundler = new Bundler(entryPointAddress, l2Provider, '');

        let encodeABI = new ethers.utils.Interface(EstimateGasHelper.ABI).encodeFunctionData("simulateValidation", [entryPointAddress, bundler.semiValidSignature(op)]);

        const _gasLimit = await ArbitrumNodeInterface.gasEstimateComponents(l2Provider, from, entryPointAddress, encodeABI);
        const gasLimitForL1 = _gasLimit.gasEstimateForL1;

        const requiredGasL2 = op.requiredGas();
        const maxGasPriceL2 = BigNumber.from(op.maxFeePerGas);
        const constL1 = gasLimitForL1.mul(maxGasPriceL2);
        const constL1PreGas = constL1.div(requiredGasL2);
        const reasonableGasPrice = maxGasPriceL2.add(constL1PreGas).toNumber();

        return reasonableGasPrice;
    }

    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {IUserOperation} op
     * @param {(BigNumber | NumberLike)} basefee
     * @param {string} entryPointAddress
     * @param {(string | undefined)} from
     * @return {*}  {Promise<number>}
     * @memberof Arbitrum
     */
    public static async L1GasLimit(
        l2Provider: ethers.providers.BaseProvider,
        op: IUserOperation
    ): Promise<number> {
        const data = new ethers.utils.Interface(EstimateGasHelper.ABI).encodeFunctionData("userOpCalldataTest", [op]);
        try {
            const gasLimit = await ArbitrumNodeInterface.gasEstimateComponents(l2Provider, undefined, ArbitrumEstimateGasHelperAddress, data);
            return gasLimit.gasEstimateForL1.mul(50).div(100).toNumber();
        } catch (error) {
            throw error;
        }
    }
}