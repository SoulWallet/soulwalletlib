"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-19 09:43:11
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-10 16:07:07
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = exports.toHexString = exports.toDecString = exports.isNumberLike = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
function isNumberLike(value) {
    return typeof value === "number" || typeof value === "string";
}
exports.isNumberLike = isNumberLike;
function toDecString(value) {
    return bignumber_1.BigNumber.from(value).toString();
}
exports.toDecString = toDecString;
function toHexString(value) {
    return bignumber_1.BigNumber.from(value).toHexString();
}
exports.toHexString = toHexString;
function toNumber(value) {
    return bignumber_1.BigNumber.from(value).toNumber();
}
exports.toNumber = toNumber;
//# sourceMappingURL=numberLike.js.map