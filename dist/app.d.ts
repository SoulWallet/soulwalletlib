import { SoulWalletLib } from './exportLib/soulWalletLib';
import { UserOperation } from "./entity/userOperation";
import { IResult, IValidationResult, IStakeInfo, IReturnInfo, IFailedOp, IExecutionResult } from './interface/IResult';
import { IUserOpReceipt, ITransactionReceipt, ITransactionReceiptLog } from './interface/IUserOpReceipt';
import { IApproveToken } from './interface/IApproveToken';
import { ITransaction } from './interface/ITransaction';
import { Bundler } from './utils/bundler';
import { SignatureMode, Signatures } from './utils/signatures';
import { NumberLike } from './defines/numberLike';
/**
 * @module soulwalletlib
 * @description SoulWalletLib
 * @property {SoulWalletLib} SoulWalletLib soulwallet lib
 * @property {UserOperation} UserOperation user operation
 * @property {IResult} IResult result interface
 * @property {IValidationResult} IValidationResult validation result interface
 * @property {IStakeInfo} IStakeInfo stake info interface
 * @property {IReturnInfo} IReturnInfo return info interface
 * @property {IFailedOp} IFailedOp failed op interface
 * @property {IExecutionResult} IExecutionResult execution result interface
 * @property {IUserOpReceipt} IUserOpReceipt user op receipt interface
 * @property {ITransactionReceipt} ITransactionReceipt transaction receipt interface
 * @property {ITransactionReceiptLog} ITransactionReceiptLog transaction receipt log interface
 * @property {IApproveToken} IApproveToken approve token interface
 * @property {ITransaction} ITransaction transaction interface
 *
 */
export { SoulWalletLib, Bundler, UserOperation, SignatureMode, Signatures, IResult, IValidationResult, IStakeInfo, IReturnInfo, IFailedOp, IExecutionResult, IUserOpReceipt, ITransactionReceipt, ITransactionReceiptLog, IApproveToken, ITransaction, NumberLike };
