"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-19 09:43:11
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:12:37
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = exports.toHexString = exports.toDecString = exports.isNumberLike = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
/**
 * is number like
 * @param {any} value
 * @returns {boolean}
 */
function isNumberLike(value) {
    return typeof value === "number" || typeof value === "string";
}
exports.isNumberLike = isNumberLike;
/**
 * NumberLike to Dec string
 * @param {NumberLike} value
 * @returns {string}
 */
function toDecString(value) {
    return bignumber_1.BigNumber.from(value).toString();
}
exports.toDecString = toDecString;
/**
 * NumberLike to Hex string
 * @param {NumberLike} value
 * @returns {string}
 */
function toHexString(value) {
    if (typeof value === "number" || (typeof value === "string" && !value.startsWith('0x'))) {
        return bignumber_1.BigNumber.from(value).toHexString();
    }
    return value;
}
exports.toHexString = toHexString;
/**
 * NumberLike to number
 * @param {NumberLike} value
 * @returns {number}
 */
function toNumber(value) {
    return bignumber_1.BigNumber.from(value).toNumber();
}
exports.toNumber = toNumber;
//# sourceMappingURL=numberLike.js.map