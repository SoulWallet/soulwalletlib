import { UserOperation } from "../interface/UserOperation.js";



export class GasOverhead {
    /**
     * 
     *
     * @static
     * @param {UserOperation} userOp
     * @memberof GasOverhead
     */
    public static calcGasOverhead(userOp: UserOperation) {

        // preVerificationGas overhead
        {
            // preVerificationGas overhead 1024 = 64bytes more ( 1024/16 = 64 )
            userOp.preVerificationGas = '0x' + (BigInt(userOp.preVerificationGas) + BigInt(1024)).toString(16);
        }

        // verificationGasLimit overhead
        {
            let verificationGasLimitOverHead = BigInt(21000);
            if (userOp.initCode !== '0x') {
                verificationGasLimitOverHead += BigInt(13000);
            }
            if (userOp.paymasterAndData !== '0x') {
                verificationGasLimitOverHead += BigInt(30000);
            }
            userOp.verificationGasLimit = '0x' + (BigInt(userOp.verificationGasLimit) + verificationGasLimitOverHead).toString(16);
        }
    }
}