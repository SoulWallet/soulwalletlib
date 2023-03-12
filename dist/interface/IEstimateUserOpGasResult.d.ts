/**
 * return value from estimateUserOpGas
 */
export interface IEstimateUserOpGasResult {
    /**
     * the preVerification gas used by this UserOperation.
     */
    preVerificationGas: string;
    /**
     * gas used for validation of this UserOperation, including account creation
     */
    verificationGas: string;
    /**
     * (possibly future timestamp) after which this UserOperation is valid
     */
    validAfter?: string;
    /**
     * the deadline after which this UserOperation is invalid (not a gas estimation parameter, but returned by validation
     */
    validUntil?: string;
    /**
     * estimated cost of calling the account with the given callData
     */
    callGasLimit: string;
}
