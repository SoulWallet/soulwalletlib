import { ethers, keccak256 } from "ethers";
import { UserOperation } from "../interface/UserOperation.js"

/**
 * pack the userOperation
 * @param op
 * @param forSignature "true" if the hash is needed to calculate the getUserOpHash()
 *  "false" to pack entire UserOp, for calculating the calldata cost of putting it on-chain.
 */
export function packUserOp(op: UserOperation, forSignature = true): string {
    const abiCoder = new ethers.AbiCoder();
    if (forSignature) {
        return abiCoder.encode(
            ['address', 'uint256', 'bytes32', 'bytes32',
                'uint256', 'uint256', 'uint256', 'uint256', 'uint256',
                'bytes32'],
            [op.sender, op.nonce, keccak256(op.initCode), keccak256(op.callData),
            op.callGasLimit, op.verificationGasLimit, op.preVerificationGas, op.maxFeePerGas, op.maxPriorityFeePerGas,
            keccak256(op.paymasterAndData)])
    } else {
        // for the purpose of calculating gas cost encode also signature (and no keccak of bytes)
        return abiCoder.encode(
            ['address', 'uint256', 'bytes', 'bytes',
                'uint256', 'uint256', 'uint256', 'uint256', 'uint256',
                'bytes', 'bytes'],
            [op.sender, op.nonce, op.initCode, op.callData,
            op.callGasLimit, op.verificationGasLimit, op.preVerificationGas, op.maxFeePerGas, op.maxPriorityFeePerGas,
            op.paymasterAndData, op.signature])
    }
}

/**
 * calculate the userOpHash of a given userOperation.
 * The userOpHash is a hash of all UserOperation fields, except the "signature" field.
 * The entryPoint uses this value in the emitted UserOperationEvent.
 * A wallet may use this value as the hash to sign (the SampleWallet uses this method)
 * @param op
 * @param entryPoint
 * @param chainId
 */
export function getUserOpHash(op: UserOperation, entryPoint: string, chainId: number): string {
    const userOpHash = keccak256(packUserOp(op, true))
    const enc = new ethers.AbiCoder().encode(
        ['bytes32', 'address', 'uint256'],
        [userOpHash, entryPoint, chainId])
    return keccak256(enc)
}