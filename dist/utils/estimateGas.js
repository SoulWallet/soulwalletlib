"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:41:26
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-06 17:12:28
 */
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
exports.EstimateGas = void 0;
const chainId_1 = require("../defines/chainId");
const arbitrumNodeInterface_1 = require("./L2/arbitrum/arbitrumNodeInterface");
class EstimateGas {
    static estimate(etherProvider, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let gasLimit = yield etherProvider.estimateGas({
                from: transaction.from,
                to: transaction.to,
                data: transaction.data,
                value: transaction.value,
                gasLimit: transaction.gasLimit
            });
            let gasLimitForL1;
            let gasLimitForL2;
            const chainId = yield etherProvider.getNetwork().then((network) => network.chainId);
            if (chainId === chainId_1.CHAINID.ARBITRUM || chainId === chainId_1.CHAINID.ARBITRUM_GOERLI) {
                const _gasLimit = yield arbitrumNodeInterface_1.ArbitrumNodeInterface.gasEstimateComponents(etherProvider, transaction.from, transaction.to, transaction.data);
                gasLimitForL1 = _gasLimit.gasEstimateForL1;
                gasLimitForL2 = gasLimit.sub(gasLimitForL1);
            }
            return {
                gasLimit,
                gasLimitForL1,
                gasLimitForL2
            };
        });
    }
}
exports.EstimateGas = EstimateGas;
//# sourceMappingURL=estimateGas.js.map