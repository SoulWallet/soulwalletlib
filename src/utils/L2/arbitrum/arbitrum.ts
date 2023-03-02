/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:08:05
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 19:38:04
 */
import { BigNumber, ethers } from 'ethers';
import { AddressZero } from '../../../defines/address';
import { UserOperation } from '../../../entity/userOperation';
import { UserOp } from '../../userOp';
import {  ArbitrumNodeInterface } from './arbitrumNodeInterface';


export class Arbitrum {
    public static async calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation) {
       
    }
}