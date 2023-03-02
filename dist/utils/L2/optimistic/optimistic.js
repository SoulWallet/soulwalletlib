"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:07:56
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 19:37:40
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
exports.Optimistic = void 0;
const ethers_1 = require("ethers");
const address_1 = require("../../../defines/address");
const userOp_1 = require("../../userOp");
const optimisticL1GasPriceOracle_1 = require("./optimisticL1GasPriceOracle");
class Optimistic {
    static calcGasPrice(l2Provider, op) {
        return __awaiter(this, void 0, void 0, function* () {
            const calldataL1 = userOp_1.UserOp.packUserOpForCallData(op);
            /*
            (Gas Price * Gas) + (l1GasUsed * l1GasPrice * l1FeeScalar)
            */
            //OptimisticGasPriceOracle
            const optimisticL1GasPriceOracle = new optimisticL1GasPriceOracle_1.OptimisticL1GasPriceOracle(l2Provider);
            // L2 cost
            const l2Cost = op.requiredPrefundL2();
            /*
                    uint256 l1GasUsed = getL1GasUsed(_data);
                    uint256 l1Fee = l1GasUsed * l1BaseFee;
                    uint256 divisor = 10**decimals;
                    uint256 unscaled = l1Fee * scalar;
                    uint256 scaled = unscaled / divisor;
                    return scaled;
            */
            // L1 cost 
            let l1Cost = yield optimisticL1GasPriceOracle.getL1Fee(calldataL1);
            const cost = l2Cost.add(l1Cost);
            const noPaymaster = op.paymasterAndData === address_1.AddressZero || op.paymasterAndData === '0x';
            const mul = noPaymaster ? 1 : 3;
            const requiredGas = ethers_1.BigNumber.from(op.callGasLimit).add(ethers_1.BigNumber.from(op.verificationGasLimit).mul(mul)).add(ethers_1.BigNumber.from(op.preVerificationGas));
            const reasonableGasPrice = cost.div(requiredGas).mul(120).div(100).toString();
            return reasonableGasPrice;
            ``;
        });
    }
}
exports.Optimistic = Optimistic;
//# sourceMappingURL=optimistic.js.map