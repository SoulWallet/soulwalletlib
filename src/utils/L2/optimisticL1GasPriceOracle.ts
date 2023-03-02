/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 11:01:51
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 11:01:52
 */

import { BigNumber, ethers } from 'ethers';
import { OptimisticGasPriceOracleABI } from './L2ABI';

export class OptimisticL1GasPriceOracle {
    private _optimisticGasPriceOracle;
    constructor(provider: ethers.providers.BaseProvider, gasPriceOracle = '0x420000000000000000000000000000000000000F') {
        this._optimisticGasPriceOracle = new ethers.Contract(gasPriceOracle, OptimisticGasPriceOracleABI, provider);
    }
    public async decimals(): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.decimals();
    }
    public async gasPrice(): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.gasPrice();
    }
    public async getL1Fee(data: string): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.getL1Fee(data);
    }
    public async getL1GasUsed(data: string): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.getL1GasUsed(data);
    }
    public async l1BaseFee(): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.l1BaseFee();
    }
    public async overhead(): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.overhead();
    }
    public async scalar(): Promise<BigNumber> {
        return await this._optimisticGasPriceOracle.scalar();
    }
}