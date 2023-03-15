import { BigNumber, ethers } from "ethers";
/**
 * decode call data
 * @class DecodeCallData
 */
export declare class DecodeCallData {
    private static instance;
    private bytes4Methods;
    private _saveToStorage;
    private _readFromStorage;
    private constructor();
    /**
     * get instance
     * @returns {DecodeCallData}
     */
    static new(): DecodeCallData;
    /**
     * set saveToStorage function & readFromStorage function
     * @param {Function} saveToStorage
     * @param {Function} readFromStorage
     */
    setStorage(saveToStorage: (key: string, value: string) => any, readFromStorage: (key: string) => string | null): void;
    private saveToStorage;
    private readFromStorage;
    private read4BytesMethod;
    private decode4BytesMethod;
    /**
     * decode callData
     * @param {string} callData
     * @returns {Promise<IDecode[]>}
     */
    decode(callData: string): Promise<IDecode[]>;
}
interface IDecode {
    bytes4: string;
    /**
     * function name
     */
    functionName: string;
    /**
     * function signature
     */
    functionSignature: string;
    /**
     * to address
     */
    to: string;
    /**
     * ether value
     */
    value: BigNumber;
    /**
     * other params
     */
    params: ethers.utils.Result;
}
export {};
