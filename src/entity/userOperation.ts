import { ethers, BigNumber } from "ethers";
import { AddressZero, EntryPointAddress, SingletonFactoryAddress } from "../defines/address";
import { NumberLike, toDecString, toHexString, toNumber } from "../defines/numberLike";
import { UserOp } from '../utils/userOp';
import { Optimistic } from "../utils/L2/optimistic/optimistic";
import { CHAINID } from "../defines/chainId";
import { EstimateGas } from "../utils/estimateGas";
import { Arbitrum } from "../utils/L2/arbitrum/arbitrum";
import { SignatureMode, Signatures } from "../utils/signatures";
import { IUserOperation } from "../interface/IUserOperation";
import { EntryPointContract } from "../contracts/entryPoint";
import { Guardian } from "../utils/guardians";
import { PersonalSign } from "../utils/personalSign";

/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol    
 */

/**
 * @class UserOperation
 * @description UserOperation class
 * @example
 * const userOperation = new UserOperation();
 * @property {String} sender the sender address
 * @property {NumberLike} nonce the nonce
 * @property {String} initCode the initCode
 * @property {String} callData the callData
 * @property {String} preVerificationGas the preVerificationGas
 * @property {String} verificationGasLimit the verificationGasLimit
 * @property {String} maxFeePerGas the maxFeePerGas
 * @property {String} maxPriorityFeePerGas the maxPriorityFeePerGas
 * @property {String} paymasterAndData the paymasterAndData
 * @property {String} signature the signature
 */

class UserOperation {

    /**
     * Creates an instance of UserOperation.
     * @param {string} [sender='']
     * @param {NumberLike} [nonce=0]
     * @param {string} [initCode='0x']
     * @param {string} [callData='0x']
     * @param {NumberLike} [callGasLimit=0]
     * @param {NumberLike} [maxFeePerGas=0]
     * @param {NumberLike} [maxPriorityFeePerGas=0]
     * @param {string} [paymasterAndData='0x']
     * @param {NumberLike} [verificationGasLimit=0]
     * @param {NumberLike} [preVerificationGas=0]
     * @param {string} [signature='0x']
     * @memberof UserOperation
     */
    constructor(sender: string = '', nonce: NumberLike = 0, initCode: string = '0x', callData: string = '0x', callGasLimit: NumberLike = 0, maxFeePerGas: NumberLike = 0, maxPriorityFeePerGas: NumberLike = 0, paymasterAndData: string = '0x', verificationGasLimit: NumberLike = 0, preVerificationGas: NumberLike = 0, signature: string = '0x') {
        this._sender = sender;
        this._nonce = nonce;
        this._initCode = initCode;
        this._callData = callData;
        this._callGasLimit = callGasLimit;
        this._verificationGasLimit = verificationGasLimit;
        this._preVerificationGas = preVerificationGas;
        this._maxFeePerGas = maxFeePerGas;
        this._maxPriorityFeePerGas = maxPriorityFeePerGas;
        this._paymasterAndData = paymasterAndData;
        this._signature = signature;
    }


    private _sender: string = '';

    public get sender(): string {
        return this._sender;
    }
    public set sender(value: string) {
        if (!ethers.utils.isAddress(value)) {
            throw new Error('invalid sender address');
        }
        this._sender = value;
    }
    private _nonce: NumberLike = 0;
    public get nonce(): NumberLike {
        return this._nonce;
    }
    public set nonce(value: NumberLike) {
        this._nonce = value;
    }
    private _initCode: string = '0x';
    public get initCode(): string {
        return this._initCode;
    }
    public set initCode(value: string) {
        this._initCode = value;
    }

    private _callData: string = '0x';
    public get callData(): string {
        return this._callData;
    }
    public set callData(value: string) {
        this._callData = value;
    }
    private _callGasLimit: NumberLike = 0;
    public get callGasLimit(): NumberLike {
        return this._callGasLimit;
    }
    public set callGasLimit(value: NumberLike) {
        this._callGasLimit = value;
    }
    private _verificationGasLimit: NumberLike = 0;//450000;
    public get verificationGasLimit(): NumberLike {
        return this._verificationGasLimit;
    }
    public set verificationGasLimit(value: NumberLike) {
        this._verificationGasLimit = value;
    }
    private _preVerificationGas: NumberLike = 0;//47000;
    public get preVerificationGas(): NumberLike {
        return this._preVerificationGas;
    }
    public set preVerificationGas(value: NumberLike) {
        this._preVerificationGas = value;
    }
    private _maxFeePerGas: NumberLike = 0;
    public get maxFeePerGas(): NumberLike {
        return this._maxFeePerGas;
    }
    public set maxFeePerGas(value: NumberLike) {
        this._maxFeePerGas = value;
    }
    private _maxPriorityFeePerGas: NumberLike = 0;
    public get maxPriorityFeePerGas(): NumberLike {
        return this._maxPriorityFeePerGas;
    }
    public set maxPriorityFeePerGas(value: NumberLike) {
        this._maxPriorityFeePerGas = value;
    }
    private _paymasterAndData: string = '0x';
    public get paymasterAndData(): string {
        return this._paymasterAndData;
    }
    public set paymasterAndData(value: string) {
        this._paymasterAndData = value;
    }
    private _signature: string = '0x';
    public get signature(): string {
        return this._signature;
    }
    public set signature(value: string) {
        this._signature = value;
    }



    /**
     * @description convert to userOperation tuple string
     * @returns {string} the userOperation tuple string
     */
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

    /**
     * @description convert to userOperation struct
     * @returns {object} the userOperation struct
     */
    public getStruct(): IUserOperation {
        this.alignment();
        return {
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
        };
    }

    /**
     * @description convert NumberLike property to hex string
     * @returns {void}
     */
    public alignment() {
        this._nonce = toHexString(this._nonce);
        this._callGasLimit = toHexString(this._callGasLimit);
        this._verificationGasLimit = toHexString(this._verificationGasLimit);
        this._preVerificationGas = toHexString(this._preVerificationGas);
        this._maxFeePerGas = toHexString(this._maxFeePerGas);
        this._maxPriorityFeePerGas = toHexString(this._maxPriorityFeePerGas);
        this._paymasterAndData = this._paymasterAndData === AddressZero ? '0x' : this._paymasterAndData;
    }

    /**
     * @description convert to userOperation json string
     * @returns {string} the userOperation json string
     */
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

    /**
     * @description convert from userOperation json string
     * @param {string} json the userOperation json string
     * @returns {UserOperation} the userOperation object
     */
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

        const userOp = new UserOperation(obj.sender, obj.nonce, obj.initCode, obj.callData, obj.callGasLimit, obj.maxFeePerGas, obj.maxPriorityFeePerGas, obj.paymasterAndData, obj.verificationGasLimit, obj.preVerificationGas, obj.signature);
        return userOp;
    }



    /**
     * @description convert from userOperation object
     * @param {object} obj the userOperation object
     * @returns {UserOperation} the userOperation object
     */
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

        const userOp = new UserOperation(obj.sender, obj.nonce, obj.initCode, obj.callData, obj.callGasLimit, obj.maxFeePerGas, obj.maxPriorityFeePerGas, obj.paymasterAndData, obj.verificationGasLimit, obj.preVerificationGas, obj.signature);
        return userOp;
    }

    /**
     * 
     *
     * @return {*}  {string}
     * @memberof UserOperation
     */
    public getSemiValidSign(): string {
        if (this._callData.startsWith('0x4fb2e45d')) {
            const hash: string = ethers.utils.hexlify(ethers.utils.randomBytes(32));
            const guardian = new Guardian(SingletonFactoryAddress);
            const guardianCount = 20;
            const guardianAddress = [];
            const guardianWallets = [];
            for (let index = 0; index < guardianCount; index++) {
                const _wallet = ethers.Wallet.createRandom();
                guardianWallets.push(_wallet);
                guardianAddress.push(_wallet.address);
            }
            const gurdianAddressAndInitCode = guardian.calculateGuardianAndInitCode(SingletonFactoryAddress, guardianAddress, guardianCount, "");
            const guardianSignArr: any[] = [];
            for (let index = 0; index < guardianCount; index++) {
                guardianSignArr.push(
                    {
                        contract: false,
                        address: guardianAddress[index],
                        signature: PersonalSign.signMessage(hash, guardianWallets[index].privateKey)
                    }
                );
            }
            return guardian.packGuardiansSignByInitCode(gurdianAddressAndInitCode.address, guardianSignArr, gurdianAddressAndInitCode.initCode);
        } else {
            return Signatures.encodeSignature(SignatureMode.owner,
                this.sender,
                "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                268435455,
                268435455
            )
        }
    }

    /**
     * @description get the paymaster sign hash
     * @returns {string} the paymaster sign hash
     */
    public payMasterSignHash(): string {
        return UserOp.payMasterSignHash(this);
    }


    /**
     *
     *
     * @param {string} signer
     * @param {string} signature
     * @param {SignatureMode} [signatureMode=SignatureMode.owner]
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @memberof UserOperation
     */
    public signWithSignature(
        signer: string,
        signature: string,
        signatureMode: SignatureMode = SignatureMode.owner,
        validAfter: number = 0,
        validUntil: number = 0,
    ) {
        this.signature = Signatures.encodeSignature(signatureMode, signer, signature, validAfter, validUntil)
    }

    /**
    * @description get the UserOpHash (userOp hash)
    * @param {string} entryPointAddress the entry point address
    * @param {number} chainId the chain id
    * @returns {string} the UserOpHash (userOp hash)
    */
    public getUserOpHash(entryPointAddress: string, chainId: number): string {
        return UserOp.getUserOpHash(this, entryPointAddress, chainId);
    }

    /**
     * get the UserOp Hash to be signed (packed UserOpHash with with time range) 
     *
     * @param {string} entryPointAddress
     * @param {number} chainId
     * @param {string} signer
     * @param {SignatureMode} [signatureMode=SignatureMode.owner]
     * @param {number} [validAfter=0]
     * @param {number} [validUntil=0]
     * @return {*}  {string}
     * @memberof UserOperation
     */
    public getUserOpHashWithTimeRange(entryPointAddress: string, chainId: number, signer: string, signatureMode: SignatureMode = SignatureMode.owner, validAfter = 0, validUntil = 0): string {
        if (validUntil < validAfter) {
            throw new Error('validUntil must be greater than validAfter');
        }

        const _hash = this.getUserOpHash(entryPointAddress, chainId);
        return Signatures.packSignatureHash(_hash, signer, signatureMode, validAfter, validUntil);
    }

    /**
     *
     *
     * @return {*}  {BigNumber}
     * @memberof UserOperation
     */
    public requiredGas(): BigNumber {
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
        return requiredGas;
    }

    /**
     * get the required prefund
     *
     * @param {ethers.providers.BaseProvider} provider
     * @param {string} [entryPoint]
     * @return {*} 
     * @memberof UserOperation
     */
    public async requiredPrefund(provider?: ethers.providers.BaseProvider, entryPoint?: string): Promise<{ requiredPrefund: BigNumber, requiredGas: BigNumber, deposit: BigNumber }> {
        const gasPrice = BigNumber.from(this.maxFeePerGas);
        const requiredGas = this.requiredGas();
        const requiredPrefund = gasPrice.mul(requiredGas);
        let deposit: BigNumber = BigNumber.from(0);
        if (entryPoint && provider) {

            /*
                function getDepositInfo(address account) public view returns (DepositInfo memory info)
                struct DepositInfo {
                    uint112 deposit;
                    bool staked;
                    uint112 stake;
                    uint32 unstakeDelaySec;
                    uint48 withdrawTime;
                }
            */
            const entryPointContract = new ethers.Contract(entryPoint, EntryPointContract.ABI, provider);
            const depositInfo = await entryPointContract.callStatic.getDepositInfo(this.sender);
            deposit = BigNumber.from(depositInfo.deposit);
        }
        return {
            requiredPrefund,
            requiredGas,
            deposit
        };
    }

}

export { UserOperation };