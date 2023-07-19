
import { ethers } from 'ethers';
import * as ethUtil from 'ethereumjs-util';

export class PersonalSign {
    public static signMessage(msg: string, privateKey: string) {
        const messageHex = Buffer.from(ethers.getBytes(msg)).toString('hex');
        const personalMessage = ethUtil.hashPersonalMessage(ethUtil.toBuffer(ethUtil.addHexPrefix(messageHex)));
        const _privateKey = Buffer.from(privateKey.substring(2), "hex");
        const signature1 = ethUtil.ecsign(personalMessage, _privateKey);
        return ethUtil.toRpcSig(signature1.v, signature1.r, signature1.s);
    }
}