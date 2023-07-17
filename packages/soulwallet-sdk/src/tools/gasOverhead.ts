import { UserOperation } from "../interface/ISoulWallet";



export class GasOverhead {
    public static calcGasOverhead(userOp: UserOperation) {
        // preVerificationGas over head
        {
            userOp.preVerificationGas = '0x' + (BigInt(userOp.preVerificationGas) + BigInt(10000)).toString(16);
        }

        // verificationGasLimit over head
        {
            if (userOp.paymasterAndData == '0x') {
                userOp.verificationGasLimit = '0x' + (BigInt(userOp.verificationGasLimit) + BigInt(100000)).toString(16);
            } else {
                throw new Error("calcGasOverhead not implemented for paymasterAndData!=0x");
            }
        }
    }
}