/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-07-25 10:53:52
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-23 15:34:19
 */

import { ethers, BigNumber } from "ethers";
import { AddressZero, SingletonFactoryAddress } from "../defines/address";
import { NumberLike, toDecString, toHexString, toNumber } from "../defines/numberLike";
import { UserOp } from '../utils/userOp';
/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol    
 */

class UserOperation {

    private _userOp: UserOp;

    constructor() {
        this._userOp = new UserOp();
    }

    public sender: string = '';
    public nonce: NumberLike = 0;
    public initCode: string = '0x';
    public callData: string = '0x';
    public callGasLimit: NumberLike = 0;
    public verificationGasLimit: NumberLike = 450000;
    public preVerificationGas: NumberLike = 0;//47000;
    public maxFeePerGas: NumberLike = 0;
    public maxPriorityFeePerGas: NumberLike = 0;
    public paymasterAndData: string = '0x';
    public signature: string = '0x';

    public toTuple(): string {
        /* 
        address sender;
        uint256 nonce;
        bytes initCode;
        bytes callData;
        uint callGas;
        uint verificationGas;
        uint preVerificationGas;
        uint maxFeePerGas;
        uint maxPriorityFeePerGas;
        address paymaster;
        bytes paymasterData;
        bytes signature;
        */
        return `["${this.sender.toLocaleLowerCase()}","${toDecString(this.nonce)}","${this.initCode}","${this.callData}","${toDecString(this.callGasLimit)}","${toDecString(this.verificationGasLimit)}","${toDecString(this.preVerificationGas)}","${toDecString(this.maxFeePerGas)}","${toDecString(this.maxPriorityFeePerGas)}","${this.paymasterAndData}","${this.signature}"]`;
    }

    public alignment() {
        this.nonce = toHexString(this.nonce);
        this.callGasLimit = toHexString(this.callGasLimit);
        this.verificationGasLimit = toHexString(this.verificationGasLimit);
        this.preVerificationGas = toHexString(this.preVerificationGas);
        this.maxFeePerGas = toHexString(this.maxFeePerGas);
        this.maxPriorityFeePerGas = toHexString(this.maxPriorityFeePerGas);
        this.paymasterAndData = this.paymasterAndData === AddressZero ? '0x' : this.paymasterAndData;
    }

    public toJSON(): string {
        this.alignment();
        return JSON.stringify({
            sender: this.sender,
            nonce: this.nonce,
            initCode: this.initCode,
            callData: this.callData,
            callGasLimit: this.callGasLimit,
            verificationGasLimit: this.verificationGasLimit,
            preVerificationGas: this.preVerificationGas,
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            paymasterAndData: this.paymasterAndData,
            signature: this.signature
        });
    }

    public static fromJSON(json: string): UserOperation {
        const obj = JSON.parse(json);
        if (!obj || typeof obj !== 'object') {
            throw new Error('invalid json');
        }
        if (typeof obj.sender !== 'string') {
            throw new Error('invalid sender');
        }
        if (typeof obj.nonce !== 'string' && typeof obj.nonce !== 'number') {
            throw new Error('invalid nonce');
        }
        if (typeof obj.initCode !== 'string' || !obj.initCode.startsWith('0x')) {
            throw new Error('invalid initCode');
        }
        if (typeof obj.callData !== 'string' || !obj.callData.startsWith('0x')) {
            throw new Error('invalid callData');
        }
        if (typeof obj.callGasLimit !== 'string' && typeof obj.callGasLimit !== 'number') {
            throw new Error('invalid callGasLimit');
        }
        if (typeof obj.verificationGasLimit !== 'string' && typeof obj.verificationGasLimit !== 'number') {
            throw new Error('invalid verificationGasLimit');
        }
        if (typeof obj.preVerificationGas !== 'string' && typeof obj.preVerificationGas !== 'number') {
            throw new Error('invalid preVerificationGas');
        }
        if (typeof obj.maxFeePerGas !== 'string' && typeof obj.maxFeePerGas !== 'number') {
            throw new Error('invalid maxFeePerGas');
        }
        if (typeof obj.maxPriorityFeePerGas !== 'string' && typeof obj.maxPriorityFeePerGas !== 'number') {
            throw new Error('invalid maxPriorityFeePerGas');
        }
        if (typeof obj.paymasterAndData !== 'string' || !obj.paymasterAndData.startsWith('0x')) {
            throw new Error('invalid paymasterAndData');
        }
        if (typeof obj.signature !== 'string' || !obj.signature.startsWith('0x')) {
            throw new Error('invalid signature');
        }

        const userOp = new UserOperation();
        userOp.sender = obj.sender;
        userOp.nonce = obj.nonce;
        userOp.initCode = obj.initCode;
        userOp.callData = obj.callData;
        userOp.callGasLimit = obj.callGasLimit;
        userOp.verificationGasLimit = obj.verificationGasLimit;
        userOp.preVerificationGas = obj.preVerificationGas;
        userOp.maxFeePerGas = obj.maxFeePerGas;
        userOp.maxPriorityFeePerGas = obj.maxPriorityFeePerGas;
        userOp.paymasterAndData = obj.paymasterAndData;
        userOp.signature = obj.signature;
        return userOp;
    }

    public static fromObject(obj: any): UserOperation {
        if (!obj || typeof obj !== 'object') {
            throw new Error('invalid json');
        }
        if (typeof obj.sender !== 'string') {
            throw new Error('invalid sender');
        }
        if (typeof obj.nonce !== 'string' && typeof obj.nonce !== 'number') {
            throw new Error('invalid nonce');
        }
        if (typeof obj.initCode !== 'string' || !obj.initCode.startsWith('0x')) {
            throw new Error('invalid initCode');
        }
        if (typeof obj.callData !== 'string' || !obj.callData.startsWith('0x')) {
            throw new Error('invalid callData');
        }
        if (typeof obj.callGasLimit !== 'string' && typeof obj.callGasLimit !== 'number') {
            throw new Error('invalid callGasLimit');
        }
        if (typeof obj.verificationGasLimit !== 'string' && typeof obj.verificationGasLimit !== 'number') {
            throw new Error('invalid verificationGasLimit');
        }
        if (typeof obj.preVerificationGas !== 'string' && typeof obj.preVerificationGas !== 'number') {
            throw new Error('invalid preVerificationGas');
        }
        if (typeof obj.maxFeePerGas !== 'string' && typeof obj.maxFeePerGas !== 'number') {
            throw new Error('invalid maxFeePerGas');
        }
        if (typeof obj.maxPriorityFeePerGas !== 'string' && typeof obj.maxPriorityFeePerGas !== 'number') {
            throw new Error('invalid maxPriorityFeePerGas');
        }
        if (typeof obj.paymasterAndData !== 'string' || !obj.paymasterAndData.startsWith('0x')) {
            throw new Error('invalid paymasterAndData');
        }
        if (typeof obj.signature !== 'string' || !obj.signature.startsWith('0x')) {
            throw new Error('invalid signature');
        }

        const userOp = new UserOperation();
        userOp.sender = obj.sender;
        userOp.nonce = obj.nonce;
        userOp.initCode = obj.initCode;
        userOp.callData = obj.callData;
        userOp.callGasLimit = obj.callGasLimit;
        userOp.verificationGasLimit = obj.verificationGasLimit;
        userOp.preVerificationGas = obj.preVerificationGas;
        userOp.maxFeePerGas = obj.maxFeePerGas;
        userOp.maxPriorityFeePerGas = obj.maxPriorityFeePerGas;
        userOp.paymasterAndData = obj.paymasterAndData;
        userOp.signature = obj.signature;
        return userOp;
    }

    public setCallData(callData: string) {
        this.callData = callData;
        this.preVerificationGas = 0;
        this.calcPreVerificationGas();
    }
    public setPaymasterAndData(paymasterAndData: string='0x') {
        this.paymasterAndData = paymasterAndData;
        this.preVerificationGas = 0;
        this.calcPreVerificationGas();
    }

    private calcPreVerificationGas() {
        if (BigNumber.from(this.preVerificationGas).eq(0)) {
            this.preVerificationGas = this._userOp.callDataCost(this) + 10000;
        }
    }

    /**
     * estimate the gas
     * @param entryPointAddress the entry point address
     * @param estimateGasFunc the estimate gas function
     * @returns false if failed
     */
    public async estimateGas(
        entryPointAddress: string,
        etherProvider: ethers.providers.BaseProvider
        // estimateGasFunc: (txInfo: ethers.utils.Deferrable<ethers.providers.TransactionRequest>) => Promise<BigNumber> //(transaction:ethers.providers.TransactionRequest):Promise<number>
        // (transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>): Promise<ether.BigNumber>
    ) {
        try {
            const estimateGasRe = await etherProvider.estimateGas({
                from: entryPointAddress,
                to: this.sender,
                data: this.callData,
                gasLimit: 20000000
            });

            this.callGasLimit = estimateGasRe.toNumber();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

    /**
     * get the paymaster sign hash
     * @returns 
     */
    public payMasterSignHash(): string {
        return this._userOp.payMasterSignHash(this);
    }

    /**
     * sign the user operation
     * @param entryPoint the entry point address
     * @param chainId the chain id
     * @param privateKey the private key
     */
    public sign(
        entryPoint: string,
        chainId: number,
        privateKey: string): void {
        this.signature = this._userOp.signUserOp(this, entryPoint, chainId, privateKey);
    }


    /**
     * sign the user operation with personal sign
     * @param signAddress the sign address
     * @param signature the signature of the UserOpHash
     */
    public signWithSignature(signAddress: string, signature: string) {
        this.signature = this._userOp.signUserOpWithPersonalSign(signAddress, signature);
    }


    /**
     * get the UserOpHash (userOp hash)
     * @param entryPointAddress the entry point address
     * @param chainId the chain id
     * @returns hex string
     */
    public getUserOpHash(entryPointAddress: string, chainId: number): string {
        this.calcPreVerificationGas();
        return this._userOp.getUserOpHash(this, entryPointAddress, chainId);
    }

    /**
     * get the UserOpHash (userOp hash) with deadline
     * @param entryPointAddress 
     * @param chainId 
     * @param deadline unix timestamp
     * @returns bytes32 hash
     */
    public getUserOpHashWithDeadline(entryPointAddress: string, chainId: number, deadline: number): string {
        this.calcPreVerificationGas();
        const _hash = this.getUserOpHash(entryPointAddress, chainId);
        return ethers.utils.solidityKeccak256(['bytes32', 'uint64'], [_hash, deadline]);
    }

    /**
     * get required pre fund
     * @param basefee for EIP1559, the basefee
     * @returns required pre fund
     */
    public requiredPrefund(basefee?: BigNumber | NumberLike): BigNumber {
        this.calcPreVerificationGas();

        /* 
         uint256 maxFeePerGas = mUserOp.maxFeePerGas;
        uint256 maxPriorityFeePerGas = mUserOp.maxPriorityFeePerGas;
        if (maxFeePerGas == maxPriorityFeePerGas) {
            //legacy mode (for networks that don't support basefee opcode)
            return maxFeePerGas;
        }
        return min(maxFeePerGas, maxPriorityFeePerGas + block.basefee);
        */
        let gasPrice: BigNumber;
        const maxFeePerGas = BigNumber.from(this.maxFeePerGas);
        const maxPriorityFeePerGas = BigNumber.from(this.maxPriorityFeePerGas);
        if (maxFeePerGas.eq(maxPriorityFeePerGas)) {
            gasPrice = maxFeePerGas;
        } else {
            if (basefee !== undefined) {
                basefee = BigNumber.from(basefee);
                const _fee = basefee.add(maxPriorityFeePerGas);
                gasPrice = _fee.gt(maxFeePerGas) ? maxFeePerGas : _fee;
            } else {
                gasPrice = maxFeePerGas;
            }
        }

        /* 
       //when using a Paymaster, the verificationGasLimit is used also to as a limit for the postOp call.
       // our security model might call postOp eventually twice
       uint256 mul = mUserOp.paymaster != address(0) ? 3 : 1;
       uint256 requiredGas = mUserOp.callGasLimit + mUserOp.verificationGasLimit * mul + mUserOp.preVerificationGas;

       // TODO: copy logic of gasPrice?
       requiredPrefund = requiredGas * getUserOpGasPrice(mUserOp);
       */
        const noPaymaster = this.paymasterAndData === AddressZero || this.paymasterAndData === '0x';
        const mul = noPaymaster ? 1 : 3;
        const requiredGas = BigNumber.from(this.callGasLimit).add(BigNumber.from(this.verificationGasLimit).mul(mul)).add(BigNumber.from(this.preVerificationGas));
        const requiredPrefund = requiredGas.mul(gasPrice);

        return requiredPrefund;
    }

}



export { UserOperation };