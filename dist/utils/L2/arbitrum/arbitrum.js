"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arbitrum = void 0;
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:08:05
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-05 14:51:36
 */
const ethers_1 = require("ethers");
const estimateGasHelper_1 = require("../../../contracts/estimateGasHelper");
const arbitrumNodeInterface_1 = require("./arbitrumNodeInterface");
class Arbitrum {
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
    static calcGasPrice(l2Provider, op, basefee, entryPointAddress, estimateGasHelper) {
        return __awaiter(this, void 0, void 0, function* () {
            // estimateGas with EstimateGasHelper
            let encodeABI = new ethers_1.ethers.utils.Interface(estimateGasHelper_1.EstimateGasHelper.ABI).encodeFunctionData("simulateValidation", [entryPointAddress, op]);
            const _gasLimit = yield arbitrumNodeInterface_1.ArbitrumNodeInterface.gasEstimateComponents(l2Provider, estimateGasHelper, encodeABI);
            const gasLimitForL1 = _gasLimit.gasEstimateForL1;
            const requiredGasL2 = op.requiredGas();
            const maxGasPriceL2 = op.maxGasPrice(basefee);
            const constL1 = gasLimitForL1.mul(maxGasPriceL2);
            const constL1PreGas = constL1.div(requiredGasL2);
            const reasonableGasPrice = maxGasPriceL2.add(constL1PreGas);
            const _basefee = ethers_1.BigNumber.from(basefee);
            if (reasonableGasPrice.gt(_basefee)) {
                return {
                    maxFeePerGas: reasonableGasPrice.mul(120).div(100).toHexString(),
                    maxPriorityFeePerGas: reasonableGasPrice.sub(_basefee).toHexString()
                };
            }
            return {
                maxFeePerGas: op.maxFeePerGas,
                maxPriorityFeePerGas: op.maxPriorityFeePerGas
            };
        });
    }
}
exports.Arbitrum = Arbitrum;
//# sourceMappingURL=arbitrum.js.map