import { ethers } from "ethers";
import { BigNumberish, UserOperation } from "../interface/UserOperation.js";

function bigIntToNumber(value: bigint): number {
    if (value > Number.MAX_SAFE_INTEGER) {
        throw new Error(`value ${value} is greater than Number.MAX_SAFE_INTEGER`);
    }
    return Number(value);
}

function _BigNumberishToHexString(value: BigNumberish): string {
    return '0x' + BigInt(value).toString(16);
}

function _HexstringToBytes(value: string): string {
    if (value.length === 0) {
        return '0x';
    }
    if (value.startsWith('0x')) {
        return value;
    } else {
        return '0x' + value;
    }
}

function userOperationToJSON(userOp: UserOperation): string {
    const obj = {
        sender: ethers.getAddress(userOp.sender),
        nonce: _BigNumberishToHexString(userOp.nonce),
        initCode: _HexstringToBytes(userOp.initCode),
        callData: _HexstringToBytes(userOp.callData),
        callGasLimit: _BigNumberishToHexString(userOp.callGasLimit),
        verificationGasLimit: _BigNumberishToHexString(userOp.verificationGasLimit),
        preVerificationGas: _BigNumberishToHexString(userOp.preVerificationGas),
        maxFeePerGas: _BigNumberishToHexString(userOp.maxFeePerGas),
        maxPriorityFeePerGas: _BigNumberishToHexString(userOp.maxPriorityFeePerGas),
        paymasterAndData: _HexstringToBytes(userOp.paymasterAndData),
        signature: _HexstringToBytes(userOp.signature),
    };
    return JSON.stringify(obj);
}
function userOperationFromJSON(json: string): UserOperation {
    const obj = JSON.parse(json);
    const userOp: UserOperation = {
        sender: ethers.getAddress(obj.sender),
        nonce: '0x' + BigInt(obj.nonce).toString(16),
        initCode: obj.initCode,
        callData: obj.callData,
        callGasLimit: '0x' + BigInt(obj.callGasLimit).toString(16),
        verificationGasLimit: '0x' + BigInt(obj.verificationGasLimit).toString(16),
        preVerificationGas: '0x' + BigInt(obj.preVerificationGas).toString(16),
        maxFeePerGas: '0x' + BigInt(obj.maxFeePerGas).toString(16),
        maxPriorityFeePerGas: '0x' + BigInt(obj.maxPriorityFeePerGas).toString(16),
        paymasterAndData: obj.paymasterAndData,
        signature: obj.signature,
    };
    return userOp;
}

export {
    userOperationFromJSON,
    userOperationToJSON,
    bigIntToNumber
}
