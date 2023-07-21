
/**
 * UserOpErrors
 *
 * @export
 * @class UserOpErrors
 * @extends {Error}
 */
export class UserOpErrors extends Error {
  /**
   * The error code, all error codes are defined in UserOpErrorCodes.
   *
   * @type {number}
   * @memberof UserOpErrors
   */
  code: number;

  /**
   * The error data, it is optional.
   *
   * @type {(any | undefined)}
   * @memberof UserOpErrors
   */
  data: any | undefined;
  constructor(code: number, message: string, data?: any | undefined) {
    super(message);
    this.name = 'UserOpErrors';
    this.code = code;
    this.data = data;
  }
  toString(): string {
    return `UserOpErrors: ${this.message} (${this.code})`;
  }
}

/**
 * UserOpErrorCodes
 * refer: https://eips.ethereum.org/EIPS/eip-4337#rpc-methods-eth-namespace
 * @export
 * @class UserOpErrorCodes
 */
export class UserOpErrorCodes {
  static UnknownError = -1;
  static InvalidUserOp = -32602;
  static EntryPointValidationFailed = -32500;
  static PaymasterValidationFailed = -32501;
  static OpcodeValidationFailed = -32502;
  static TimeRangeValidationFailed = -32503;
  static PaymasterThrottled = -32504;
  static PaymasterStakeTooLow = -32505;
  static UnsupportedSignatureAggregator = -32506;
  static SignatureValidationFailed = -32507;
}
