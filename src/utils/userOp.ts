/**
 * fork from:
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/test/UserOp.ts
 */

import { arrayify, defaultAbiCoder, keccak256, recoverAddress } from 'ethers/lib/utils'
import { ecsign, toRpcSig, fromRpcSig, keccak256 as keccak256_buffer } from 'ethereumjs-util'
import { UserOperation } from '../entity/userOperation'
import { ethers } from "ethers";

export enum SignatureMode {
  owner = 0,
  guardian = 1
}
export class UserOp {


  constructor() {
  }



  private encode(typevalues: Array<{ type: string, val: any }>, forSignature: boolean): string {
    const types = typevalues.map(typevalue => typevalue.type === 'bytes' && forSignature ? 'bytes32' : typevalue.type)
    const values = typevalues.map((typevalue) => typevalue.type === 'bytes' && forSignature ? keccak256(typevalue.val) : typevalue.val)
    return defaultAbiCoder.encode(types, values)
  }




  public packUserOp(op: UserOperation, forSignature = true): string {
    if (forSignature) {
      // lighter signature scheme (must match UserOperation#pack): do encode a zero-length signature, but strip afterwards the appended zero-length value
      const userOpType = {
        components: [
          { type: 'address', name: 'sender' },
          { type: 'uint256', name: 'nonce' },
          { type: 'bytes', name: 'initCode' },
          { type: 'bytes', name: 'callData' },
          { type: 'uint256', name: 'callGasLimit' },
          { type: 'uint256', name: 'verificationGasLimit' },
          { type: 'uint256', name: 'preVerificationGas' },
          { type: 'uint256', name: 'maxFeePerGas' },
          { type: 'uint256', name: 'maxPriorityFeePerGas' },
          { type: 'bytes', name: 'paymasterAndData' },
          { type: 'bytes', name: 'signature' }
        ],
        name: 'userOp',
        type: 'tuple'
      }
      let encoded = defaultAbiCoder.encode([userOpType as any], [{ ...op, signature: '0x' }])
      // remove leading word (total length) and trailing word (zero-length signature)
      encoded = '0x' + encoded.slice(66, encoded.length - 64)
      return encoded
    }
    const typevalues = [
      { type: 'address', val: op.sender },
      { type: 'uint256', val: op.nonce },
      { type: 'bytes', val: op.initCode },
      { type: 'bytes', val: op.callData },
      { type: 'uint256', val: op.callGasLimit },
      { type: 'uint256', val: op.verificationGasLimit },
      { type: 'uint256', val: op.preVerificationGas },
      { type: 'uint256', val: op.maxFeePerGas },
      { type: 'uint256', val: op.maxPriorityFeePerGas },
      { type: 'bytes', val: op.paymasterAndData }
    ]
    if (!forSignature) {
      // for the purpose of calculating gas cost, also hash signature
      typevalues.push({ type: 'bytes', val: op.signature })
    }
    return this.encode(typevalues, forSignature)
  }

  public getUserOpHash(op: UserOperation, entryPointAddress: string, chainId: number): string {
    const userOpHash = keccak256(this.packUserOp(op, true))
    const enc = defaultAbiCoder.encode(
      ['bytes32', 'address', 'uint256'],
      [userOpHash, entryPointAddress, chainId])
    return keccak256(enc)
  }


  private _signUserOp(op: UserOperation, entryPointAddress: string, chainId: number, privateKey: string): string {
    const message = this.getUserOpHash(op, entryPointAddress, chainId)
    return this._signReuestId(message, privateKey);
  }

  public _signReuestId(userOpHash: string, privateKey: string): string {
    const msg1 = Buffer.concat([
      Buffer.from('\x19Ethereum Signed Message:\n32', 'ascii'),
      Buffer.from(arrayify(userOpHash))
    ])

    const sig = ecsign(keccak256_buffer(msg1), Buffer.from(arrayify(privateKey)))
    // that's equivalent of:  await signer.signMessage(message);
    // (but without "async"
    const signedMessage1 = toRpcSig(sig.v, sig.r, sig.s);
    return signedMessage1;
  }


  /**
   * sign a user operation with the given private key
   * @param op 
   * @param entryPointAddress 
   * @param chainId 
   * @param privateKey 
   * @returns signature
   */
  public signUserOp(op: UserOperation, entryPointAddress: string, chainId: number, privateKey: string): string {
    const sign = this._signUserOp(op, entryPointAddress, chainId, privateKey);
    return this.signUserOpWithPersonalSign(ethers.utils.computeAddress(privateKey), sign);
  }

  /**
   * sign a user operation with the UserOpHash signature
   * @param signAddress signer address
   * @param signature the signature of the UserOpHash
   * @param deadline deadline (block time), default 0
   * @returns signature
   */
  public signUserOpWithPersonalSign(signAddress: string, signature: string, deadline = 0) {
    const enc = defaultAbiCoder.encode(['uint8', 'address', 'uint64', 'bytes'],
      [
        SignatureMode.owner,
        signAddress,
        deadline,
        signature
      ]
    );
    return enc;
  }




  public payMasterSignHash(op: UserOperation): string {
    return keccak256(defaultAbiCoder.encode([
      'address', // sender
      'uint256', // nonce
      'bytes32', // initCode
      'bytes32', // callData
      'uint256', // callGas
      'uint', // verificationGas
      'uint', // preVerificationGas
      'uint256', // maxFeePerGas
      'uint256', // maxPriorityFeePerGas
      'address', // paymaster
    ], [
      op.sender,
      op.nonce,
      keccak256(op.initCode),
      keccak256(op.callData),
      op.callGasLimit,
      op.verificationGasLimit,
      op.preVerificationGas,
      op.maxFeePerGas,
      op.maxPriorityFeePerGas,
      op.paymasterAndData.substring(0, 42),
    ]))
  }





}
