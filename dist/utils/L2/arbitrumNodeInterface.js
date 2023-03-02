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
exports.ArbitrumNodeInterface = void 0;
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 11:02:34
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 11:02:34
 */
const ethers_1 = require("ethers");
const L2ABI_1 = require("./L2ABI");
class ArbitrumNodeInterface {
    static gasEstimateComponents(etherProvider, to, calldata, contractCreation = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const encodeABI = new ethers_1.ethers.utils.Interface(L2ABI_1.ArbitrumNodeInterfaceABI).encodeFunctionData("gasEstimateComponents", [
                to,
                contractCreation,
                calldata
            ]);
            const gasLimit = yield etherProvider.call({
                to: ArbitrumNodeInterface.arbitrumNodeInterface,
                data: encodeABI
            });
            const decodeABI = new ethers_1.ethers.utils.Interface(L2ABI_1.ArbitrumNodeInterfaceABI).decodeFunctionResult("gasEstimateComponents", gasLimit);
            return {
                baseFee: decodeABI.baseFee,
                gasEstimate: decodeABI.gasEstimate,
                gasEstimateForL1: decodeABI.gasEstimateForL1,
                l1BaseFeeEstimate: decodeABI.l1BaseFeeEstimate
            };
        });
    }
}
exports.ArbitrumNodeInterface = ArbitrumNodeInterface;
ArbitrumNodeInterface.arbitrumNodeInterface = '0x00000000000000000000000000000000000000C8';
//# sourceMappingURL=arbitrumNodeInterface.js.map