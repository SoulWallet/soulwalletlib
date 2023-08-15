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
            let verificationGasLimitOverHead = 21000n;
            if (userOp.initCode !== '0x') {
                verificationGasLimitOverHead += 13000n;
            }
            if (userOp.paymasterAndData !== '0x') {
                verificationGasLimitOverHead += 30000n;
            }
            userOp.verificationGasLimit = '0x' + (BigInt(userOp.verificationGasLimit) + verificationGasLimitOverHead).toString(16);
        }
    }
}