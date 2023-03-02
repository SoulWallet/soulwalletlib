/**
 * fork from:
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/test/UserOp.ts
 */

import { arrayify, defaultAbiCoder, keccak256, recoverAddress } from 'ethers/lib/utils'
import { ecsign, toRpcSig, fromRpcSig, keccak256 as keccak256_buffer } from 'ethereumjs-util'
import { UserOperation } from '../entity/userOperation'
import { BigNumber, ethers } from "ethers";

export enum SignatureMode {
  owner = 0,
  guardian = 1
}
export class UserOp {


  constructor() {
  }



  private static encode(typevalues: Array<{ type: string, val: any }>, forSignature: boolean): string {
    const types = typevalues.map(typevalue => typevalue.type === 'bytes' && forSignature ? 'bytes32' : typevalue.type)
    const values = typevalues.map((typevalue) => typevalue.type === 'bytes' && forSignature ? keccak256(typevalue.val) : typevalue.val)
    return defaultAbiCoder.encode(types, values)
  }

  // define in bundler (https://github.com/eth-infinitism/bundler/blob/main/packages/sdk/src/calcPreVerificationGas.ts#L44)
  private static DefaultGasOverheads = {
    fixed: 21000,
    perUserOp: 18300,
    perUserOpWord: 4,
    zeroByte: 4,
    nonZeroByte: 16,
    bundleSize: 1,
    sigSize: 65
  }

  /**
   * @description: pack user operation for call data
   *
   * @param {UserOperation} op
   * @return {*}  {Uint8Array}
   * @memberof UserOp
   */
  public static packUserOpForCallData(op: UserOperation): string {
    let mockSignature = false;
    if (op.signature === '0x') {
      mockSignature = true;
      // Single signature
      op.signature = '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000';
    }

    const packed = this.packUserOp(op, false);
    if (mockSignature) {
      op.signature = '0x';
    }
    return packed;
  }

  public static callDataCost(op: UserOperation): number {
    if (!ethers.utils.isAddress(op.sender)) {
      return 0;
    }

    const packed = ethers.utils.arrayify(this.packUserOpForCallData(op));

    const lengthInWord = (packed.length + 31) / 32
    const callDataCost = packed.map(x =>
      x === 0 ?
        this.DefaultGasOverheads.zeroByte :
        this.DefaultGasOverheads.nonZeroByte
    ).reduce((sum, x) => sum + x)
    const ret = Math.round(
      callDataCost +
      this.DefaultGasOverheads.fixed / this.DefaultGasOverheads.bundleSize +
      this.DefaultGasOverheads.perUserOp +
      this.DefaultGasOverheads.perUserOpWord * lengthInWord
    )

    return ret;
  }


  public static packUserOp(op: UserOperation, forSignature = true): string {
    op.alignment();
    if (forSignature) {
      // lighter signature scheme (must match UserOperation#pack): do encode a zero-length signature, but strip afterwards the appended zero-length value
      const userOpType = {
        components: [
          { type: 'address', name: '_sender' },
          { type: 'uint256', name: '_nonce' },
          { type: 'bytes', name: '_initCode' },
          { type: 'bytes', name: '_callData' },
          { type: 'uint256', name: '_callGasLimit' },
          { type: 'uint256', name: '_verificationGasLimit' },
          { type: 'uint256', name: '_preVerificationGas' },
          { type: 'uint256', name: '_maxFeePerGas' },
          { type: 'uint256', name: '_maxPriorityFeePerGas' },
          { type: 'bytes', name: '_paymasterAndData' },
          { type: 'bytes', name: '_signature' }
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

  public static getUserOpHash(op: UserOperation, entryPointAddress: string, chainId: number): string {
    const userOpHash = keccak256(this.packUserOp(op, true));
    const enc = defaultAbiCoder.encode(
      ['bytes32', 'address', 'uint256'],
      [userOpHash, entryPointAddress, chainId])
    return keccak256(enc)
  }


  private static _signUserOp(op: UserOperation, entryPointAddress: string, chainId: number, privateKey: string): string {
    const message = this.getUserOpHash(op, entryPointAddress, chainId)
    return this._signReuestId(message, privateKey);
  }

  public static _signReuestId(userOpHash: string, privateKey: string): string {
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
  public static signUserOp(op: UserOperation, entryPointAddress: string, chainId: number, privateKey: string): string {
    const sign = this._signUserOp(op, entryPointAddress, chainId, privateKey);
    return this.signUserOpWithPersonalSign(ethers.utils.computeAddress(privateKey), sign);
  }

  /**
   * sign a user operation with the UserOpHash signature
   * @param signAddress signer address
   * @param signature the signature of the UserOpHash
   * @param validAfter the signature is valid after this block time
   * @param validUntil the signature is valid until this block time
   * @returns signature
   */
  public static signUserOpWithPersonalSign(signAddress: string, signature: string, validAfter = 0, validUntil = 0) {
    const enc = defaultAbiCoder.encode(['uint8', 'address', 'uint48', 'uint48', 'bytes'],
      [
        SignatureMode.owner,
        signAddress,
        validAfter,
        validUntil,
        signature
      ]
    );
    return enc;
  }




  public static payMasterSignHash(op: UserOperation): string {
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
