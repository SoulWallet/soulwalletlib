/**
 * number like type
 * @typedef {number|string|} NumberLike
 */
export type NumberLike = number | string;
/**
 * is number like
 * @param {any} value
 * @returns {boolean}
 */
export declare function isNumberLike(value: any): boolean;
/**
 * NumberLike to Dec string
 * @param {NumberLike} value
 * @returns {string}
 */
export declare function toDecString(value: NumberLike): string;
/**
 * NumberLike to Hex string
 * @param {NumberLike} value
 * @returns {string}
 */
export declare function toHexString(value: NumberLike): string;
/**
 * NumberLike to number
 * @param {NumberLike} value
 * @returns {number}
 */
export declare function toNumber(value: NumberLike): number;
