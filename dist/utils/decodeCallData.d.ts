import { BigNumber } from "ethers";
export declare class DecodeCallData {
    private static instance;
    private bytes4Methods;
    private _saveToStorage;
    private _readFromStorage;
    private constructor();
    static new(): DecodeCallData;
    /**
     * set saveToStorage function & readFromStorage function
     * @param saveToStorage async function
     * @param readFromStorage async function
     */
    setStorage(saveToStorage: (key: string, value: string) => any, readFromStorage: (key: string) => string | null): void;
    private saveToStorage;
    private readFromStorage;
    private read4BytesMethod;
    /**
     * decode call data
     * @param callData call data
     * @returns
     */
    decode(callData: string): Promise<IDecode[]>;
    _decode(to: string, value: number | string | BigNumber, callData: string): Promise<IDecode | null>;
}
interface IDecode {
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
    params: any;
}
export {};
