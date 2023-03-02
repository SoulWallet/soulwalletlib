"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 11:01:51
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-02 11:01:52
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
exports.OptimisticL1GasPriceOracle = void 0;
const ethers_1 = require("ethers");
const L2ABI_1 = require("./L2ABI");
class OptimisticL1GasPriceOracle {
    constructor(provider, gasPriceOracle = '0x420000000000000000000000000000000000000F') {
        this._optimisticGasPriceOracle = new ethers_1.ethers.Contract(gasPriceOracle, L2ABI_1.OptimisticGasPriceOracleABI, provider);
    }
    decimals() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.decimals();
        });
    }
    gasPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.gasPrice();
        });
    }
    getL1Fee(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.getL1Fee(data);
        });
    }
    getL1GasUsed(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.getL1GasUsed(data);
        });
    }
    l1BaseFee() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.l1BaseFee();
        });
    }
    overhead() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.overhead();
        });
    }
    scalar() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._optimisticGasPriceOracle.scalar();
        });
    }
}
exports.OptimisticL1GasPriceOracle = OptimisticL1GasPriceOracle;
//# sourceMappingURL=optimisticL1GasPriceOracle.js.map