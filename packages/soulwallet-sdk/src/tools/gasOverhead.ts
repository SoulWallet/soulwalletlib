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
        // #TODO need optimize

        // preVerificationGas over head
        {
            userOp.preVerificationGas = '0x' + (BigInt(userOp.preVerificationGas) + BigInt(10000)).toString(16);
        }

        // verificationGasLimit over head
        {
            if (userOp.paymasterAndData == '0x') {
                userOp.verificationGasLimit = '0x' + (BigInt(userOp.verificationGasLimit) + BigInt(100000)).toString(16);
            } else {
                userOp.verificationGasLimit = '0x' + (BigInt(userOp.verificationGasLimit) + BigInt(150000)).toString(16);
            }
        }
    }
}