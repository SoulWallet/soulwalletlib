import { ethers } from "ethers";
import { GuardHookInputData, ISoulWallet, Transaction, UserOperation } from "./interface/ISoulWallet.js";
import { TypeGuard } from "./tools/typeGuard.js";
import { StorageCache } from "./tools/storageCache.js";
import { ABI_SoulWalletFactory, ABI_SoulWallet, ABI_EntryPoint } from "@soulwallet/abi";
import { getUserOpHash } from '@account-abstraction/utils'
import { HookInputData, Signature } from "./tools/signature.js";
import { Hex } from "./tools/hex.js";
import { GasOverhead } from "./tools/gasOverhead.js";
import { UserOpErrors, UserOpErrorCodes } from "./interface/IUserOpErrors.js";
import { Bundler } from "./bundler.js";
import { Ok, Err, Result } from '../../soulwallet-result/lib/main.js';

export class onChainConfig {
    chainId: number = 0;
    entryPoint: string = "";
    soulWalletLogic: string = "";
}


export class SoulWallet extends ISoulWallet {
    readonly days = 86400;
    readonly defalutInitialGuardianSafePeriod = 2 * this.days;

    readonly provider: ethers.JsonRpcProvider;
    readonly bundler: ethers.JsonRpcProvider;
    readonly soulWalletFactoryAddress: string;
    readonly defalutCallbackHandlerAddress: string;
    readonly keyStoreModuleAddress: string;
    readonly securityControlModuleAddress: string;

    readonly preVerificationGasDeploy: number = 10000000;

    readonly Bundler: Bundler;


    constructor(
        _provider: string,
        _bundler: string,
        _soulWalletFactoryAddress: string,
        _defalutCallbackHandlerAddress: string,
        _keyStoreModuleAddress: string,
        _securityControlModuleAddress: string,

    ) {
        super();
        if (TypeGuard.httpOrHttps(_provider).isErr()) throw new Error("invalid provider");
        if (TypeGuard.httpOrHttps(_bundler).isErr()) throw new Error("invalid bundler");
        if (TypeGuard.onlyAddress(_soulWalletFactoryAddress).isErr()) throw new Error("invalid soulWalletFactoryAddress");
        if (TypeGuard.onlyAddress(_defalutCallbackHandlerAddress).isErr()) throw new Error("invalid defalutCallbackHandlerAddress");
        if (TypeGuard.onlyAddress(_keyStoreModuleAddress).isErr()) throw new Error("invalid keyStoreModuleAddress");
        if (TypeGuard.onlyAddress(_securityControlModuleAddress).isErr()) throw new Error("invalid securityControlModuleAddress");

        this.provider = new ethers.JsonRpcProvider(_provider);
        this.bundler = new ethers.JsonRpcProvider(_bundler);
        this.soulWalletFactoryAddress = _soulWalletFactoryAddress;
        this.defalutCallbackHandlerAddress = _defalutCallbackHandlerAddress;
        this.keyStoreModuleAddress = _keyStoreModuleAddress;
        this.securityControlModuleAddress = _securityControlModuleAddress;

        this.Bundler = new Bundler(this.bundler);
    }


    async getOnChainConfig(): Promise<Result<onChainConfig, Error>> {
        const key = `onChainConfig_${this.soulWalletFactoryAddress}`;
        // read from cache
        let _onChainConfig = StorageCache.getInstance().get<onChainConfig | undefined>(key, undefined);
        if (!_onChainConfig) {
            const _soulWalletFactory = new ethers.Contract(this.soulWalletFactoryAddress, ABI_SoulWalletFactory, this.provider);
            const soulWalletLogic: string = await _soulWalletFactory.getFunction("walletImpl").staticCall();
            const _soulWallet = new ethers.Contract(soulWalletLogic, ABI_SoulWallet, this.provider);
            const entryPoint: string = await _soulWallet.getFunction("entryPoint").staticCall();

            _onChainConfig = new onChainConfig();

            const _chainIdBigint = (await this.provider.getNetwork()).chainId;
            const _chainId: number = Number(_chainIdBigint);
            if (Number.isSafeInteger(_chainId)) {
                if (_chainId === 0) {
                    return new Err(
                        new Error("Invalid chainId")
                    );
                }
            } else {
                return new Err(
                    new Error("chainId is not a safe integer")
                );
            }

            const _bundlerChainIdBigint = (await this.bundler.getNetwork()).chainId;
            const _bundlerChainId: number = Number(_bundlerChainIdBigint);
            if (Number.isSafeInteger(_bundlerChainId)) {
                if (_bundlerChainId === 0) {
                    return new Err(
                        new Error("Invalid bundler chainId")
                    );
                }
            } else {
                return new Err(
                    new Error("bundler chainId is not a safe integer")
                );
            }

            if (_chainId !== _bundlerChainId) {
                return new Err(
                    new Error("chainId !== bundler chainId")
                );
            }

            _onChainConfig.chainId = _chainId;
            _onChainConfig.entryPoint = entryPoint;
            _onChainConfig.soulWalletLogic = soulWalletLogic;

            // save to cache
            StorageCache.getInstance().set(key, _onChainConfig);

            // check bundler RPC
            const ret = await this.Bundler.eth_supportedEntryPoints();
            if (ret.isErr()) {
                return new Err(ret.ERR);
            }
            if (ret.OK.join().toLowerCase().indexOf(entryPoint.toLowerCase()) === -1) {
                return new Err(
                    new Error(`Bundler network doesn't support entryPoint ${entryPoint}`)
                );
            }
        }
        return new Ok(_onChainConfig);
    }

    private _entryPointContract: ethers.Contract | undefined;

    private async getEntryPointContract(): Promise<Result<ethers.Contract, Error>> {
        if (this._entryPointContract === undefined) {
            const _onChainConfig = await this.getOnChainConfig();
            if (_onChainConfig.isErr()) {
                return new Err(_onChainConfig.ERR);
            }
            this._entryPointContract = new ethers.Contract(_onChainConfig.OK.entryPoint, ABI_EntryPoint, this.provider);
        }
        return new Ok(this._entryPointContract);
    }

    async entryPoint(): Promise<Result<string, Error>> {
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr()) {
            return new Err(_onChainConfig.ERR);
        }
        return new Ok(_onChainConfig.OK.entryPoint);
    }

    async initializeData(initialKey: string, initialGuardianHash: string, initialGuardianSafePeriod: number = this.defalutInitialGuardianSafePeriod): Promise<Result<string, Error>> {
        /* 
            function initialize(
                address anOwner,
                address defalutCallbackHandler,
                bytes[] calldata modules,
                bytes[] calldata plugins
            )
        */

        // default dely time is 2 days
        const securityControlModuleAndData = (this.securityControlModuleAddress + Hex.paddingZero(this.defalutInitialGuardianSafePeriod, 32).substring(2)).toLowerCase();
        /* 
         (bytes32 initialKey, bytes32 initialGuardianHash, uint64 guardianSafePeriod) = abi.decode(_data, (bytes32, bytes32, uint64));
        */
        const _initialKey = Hex.paddingZero(initialKey, 32)
        const keyStoreInitData = new ethers.AbiCoder().encode(["bytes32", "bytes32", "uint64"], [_initialKey, initialGuardianHash, initialGuardianSafePeriod]);
        const keyStoreModuleAndData = (this.keyStoreModuleAddress + keyStoreInitData.substring(2)).toLowerCase();

        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr()) {
            return new Err(_onChainConfig.ERR);
        }
        const _soulWallet = new ethers.Contract(_onChainConfig.OK.soulWalletLogic, ABI_SoulWallet, this.provider);
        const initializeData = _soulWallet.interface.encodeFunctionData("initialize", [
            initialKey,
            this.defalutCallbackHandlerAddress,
            [
                securityControlModuleAndData,
                keyStoreModuleAndData
            ],
            []
        ]
        );

        return new Ok(initializeData);
    }


    async calcWalletAddress(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        initialGuardianSafePeriod?: number
    ): Promise<Result<string, Error>> {
        const _initializeDataRet = await this.initializeData(initialKey, initialGuardianHash, initialGuardianSafePeriod);
        if (_initializeDataRet.isErr()) {
            return new Err(_initializeDataRet.ERR);
        }
        const _soulWallet = new ethers.Contract(this.soulWalletFactoryAddress, ABI_SoulWalletFactory, this.provider);
        /* 
         function getWalletAddress(bytes memory _initializer, bytes32 _salt) external view returns (address proxy)
        */
        // number to bytes32 string, e.g: 1 -> 0x0000000000000000000000000000000000000000000000000000000000000001
        const _salt = Hex.paddingZero(index, 32);
        const _walletAddress = await _soulWallet.getFunction("getWalletAddress").staticCall(_initializeDataRet.OK, _salt);
        return new Ok(_walletAddress);

    }

    async preFund(userOp: UserOperation): Promise<
        Result<{
            deposit: string,
            prefund: string,
            missfund: string
        }, Error>> {
        /*
        function _getRequiredPrefund(MemoryUserOp memory mUserOp) internal pure returns (uint256 requiredPrefund) {
        unchecked {
            //when using a Paymaster, the verificationGasLimit is used also to as a limit for the postOp call.
            // our security model might call postOp eventually twice
            uint256 mul = mUserOp.paymaster != address(0) ? 3 : 1;
            uint256 requiredGas = mUserOp.callGasLimit + mUserOp.verificationGasLimit * mul + mUserOp.preVerificationGas;

            requiredPrefund = requiredGas * mUserOp.maxFeePerGas;
        }
        }
        */
        // userOp.maxFeePerGas, userOp.preVerificationGas, userOp.verificationGasLimit must > 0
        try {
            const ZERO = BigInt(0);
            const maxFeePerGas = BigInt(userOp.maxFeePerGas);
            const preVerificationGas = BigInt(userOp.preVerificationGas);
            const verificationGasLimit = BigInt(userOp.verificationGasLimit);
            const callGasLimit = BigInt(userOp.callGasLimit);
            if (maxFeePerGas === ZERO || preVerificationGas === ZERO || verificationGasLimit === ZERO) {
                throw new Error("maxFeePerGas, preVerificationGas, verificationGasLimit must > 0");
            }

            // uint256 mul = mUserOp.paymaster != address(0) ? 3 : 1;
            const mul = userOp.paymasterAndData !== '0x' ? 3 : 1;
            // uint256 requiredGas = mUserOp.callGasLimit + mUserOp.verificationGasLimit * mul + mUserOp.preVerificationGas;
            const requiredGas = callGasLimit + verificationGasLimit * BigInt(mul) + preVerificationGas;
            // requiredPrefund = requiredGas * mUserOp.maxFeePerGas;
            const requiredPrefund = requiredGas * maxFeePerGas;

            //return '0x' + requiredPrefund.toString(16);

            const _onChainConfig = await this.getOnChainConfig();
            if (_onChainConfig.isErr()) {
                throw new Err(_onChainConfig.ERR);
            }


            const _entrypointRet = await this.getEntryPointContract();
            if (_entrypointRet.isErr()) {
                return new Err(_entrypointRet.ERR);
            }

            // balanceOf(): uint256 
            const _deposit: bigint = await _entrypointRet.OK.getFunction("balanceOf").staticCall(userOp.sender);

            const _missfund = _deposit < requiredPrefund ? requiredPrefund - _deposit : ZERO;

            const data = {
                deposit: '0x' + _deposit.toString(16),
                prefund: '0x' + requiredPrefund.toString(16),
                missfund: '0x' + _missfund.toString(16)
            };
            return new Ok(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(
                    new Error("unknown error")
                );
            }
        }
    }

    async createUnsignedDeployWalletUserOp(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        callData: string = "0x",
        initialGuardianSafePeriod?: number
    ): Promise<Result<UserOperation, Error>> {
        const ret = TypeGuard.onlyBytes(callData);
        if (ret.isErr()) {
            return new Err(
                new Error(ret.ERR)
            );
        }
        const _initializeData = await this.initializeData(initialKey, initialGuardianHash, initialGuardianSafePeriod);
        if (_initializeData.isErr()) {
            return new Err(_initializeData.ERR);
        }
        const initCode = `${this.soulWalletFactoryAddress}${new ethers.Interface(ABI_SoulWalletFactory)
            .encodeFunctionData("createWallet", [_initializeData.OK, Hex.paddingZero(index, 32)])
            .substring(2)
            }`.toLowerCase();
        const senderRet = await this.calcWalletAddress(index, initialKey, initialGuardianHash, initialGuardianSafePeriod);
        if (senderRet.isErr()) {
            return new Err(senderRet.ERR);
        }
        const _userOperation: UserOperation = {
            /* 
             sender: PromiseOrValue<string>;
                nonce: PromiseOrValue<BigNumberish>;
                initCode: PromiseOrValue<BytesLike>;
                callData: PromiseOrValue<BytesLike>;
                callGasLimit: PromiseOrValue<BigNumberish>;
                verificationGasLimit: PromiseOrValue<BigNumberish>;
                preVerificationGas: PromiseOrValue<BigNumberish>;
                maxFeePerGas: PromiseOrValue<BigNumberish>;
                maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
                paymasterAndData: PromiseOrValue<BytesLike>;
                signature: PromiseOrValue<BytesLike>;
            */
            sender: senderRet.OK,
            nonce: 0,
            /* 
             address factory = address(bytes20(initCode[0 : 20]));
             bytes memory initCallData = initCode[20 :];
             call(gas(), factory, 0, add(initCallData, 0x20), mload(initCallData), 0, 32)
              function createWallet(bytes memory _initializer, bytes32 _salt)
            */
            initCode,
            callData,
            callGasLimit: 0,
            verificationGasLimit: 0,
            preVerificationGas: this.preVerificationGasDeploy,
            maxFeePerGas: 0,
            maxPriorityFeePerGas: 0,
            paymasterAndData: "0x",
            signature: "0x"

        };

        return new Ok(_userOperation);
    }

    async userOpHash(userOp: UserOperation): Promise<Result<string, Error>> {
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr()) {
            return new Err(_onChainConfig.ERR);
        }
        return new Ok(getUserOpHash(userOp, _onChainConfig.OK.entryPoint, _onChainConfig.OK.chainId));

    }

    async packUserOpHash(userOp: UserOperation, validAfter?: number, validUntil?: number): Promise<
        Result<{
            packedUserOpHash: string,
            validationData: string
        }, Error>> {
        const userOPHashRet = await this.userOpHash(userOp);
        if (userOPHashRet.isErr()) {
            return new Err(userOPHashRet.ERR);
        }
        return new Ok(Signature.packUserOpHash(userOPHashRet.OK, validAfter, validUntil));
    }

    private async guardHookList(walletAddress: string): Promise<string[]> {
        const _soulWallet = new ethers.Contract(walletAddress, ABI_SoulWallet, this.provider);
        // function listPlugin(uint8 hookType) external view returns (address[] memory plugins);
        const _guardHookList = await _soulWallet.listPlugin(1 /* uint8 private constant _GUARD_HOOK = 1 << 0; */);
        return _guardHookList;
    }

    async packUserOpSignature(signature: string, validationData: string, guardHookInputData?: GuardHookInputData): Promise<string> {
        let hookInputData: HookInputData | undefined = undefined;
        if (guardHookInputData !== undefined) {
            const ret = TypeGuard.onlyAddress(guardHookInputData.sender);
            if (ret.isErr()) {
                throw new Error(`invalid sender: ${guardHookInputData.sender}`);
            }
            hookInputData = new HookInputData();
            hookInputData.guardHooks = await this.guardHookList(guardHookInputData.sender);
            hookInputData.inputData = guardHookInputData.inputData;
        }
        return Signature.packSignature(signature, validationData, hookInputData);
    }

    async estimateUserOperationGas(userOp: UserOperation): Promise<Result<true, UserOpErrors>> {
        const semiValidSignature = userOp.signature === "0x";
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr()) {
            return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, _onChainConfig.ERR.message));
        }
        try {
            if (semiValidSignature) {
                if (userOp.initCode !== "0x") {
                    // deploy
                    // no need guardHook input data 
                    userOp.signature = Signature.semiValidSignature();
                } else {
                    // #TODO : if guardianHook input data is not empty
                    userOp.signature = Signature.semiValidSignature();
                }
            }
            const userOpGasRet = await this.Bundler.eth_estimateUserOperationGas(_onChainConfig.OK.entryPoint, userOp);
            if (userOpGasRet.isErr()) {
                return new Err(userOpGasRet.ERR);
            }
            userOp.preVerificationGas = userOpGasRet.OK.preVerificationGas;
            userOp.verificationGasLimit = userOpGasRet.OK.verificationGasLimit;
            // Value of 'gas': Even number: automatic setting, 
            //                 Odd number: manually specified. Do not override!
            const _callGasLimit = BigInt(userOp.callGasLimit);
            const isEven = _callGasLimit % BigInt(2) === BigInt(0);
            if (isEven) {
                // auto
                let _newCallGasLimit = BigInt(userOpGasRet.OK.callGasLimit);
                if (_newCallGasLimit % BigInt(2) === BigInt(1)) {
                    // odd number -> even number
                    _newCallGasLimit += BigInt(1);
                }
                userOp.callGasLimit = `0x${_newCallGasLimit.toString(16)}`;
            }
            GasOverhead.calcGasOverhead(userOp);
            return new Ok(true);
        } finally {
            if (semiValidSignature) {
                userOp.signature = "0x";
            }
        }
    }

    async sendUserOperation(userOp: UserOperation): Promise<Result<true, UserOpErrors>> {
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr()) {
            return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, _onChainConfig.ERR.message));
        }
        const sendUserOpRet = await this.Bundler.eth_sendUserOperation(_onChainConfig.OK.entryPoint, userOp);
        if (sendUserOpRet.isErr()) {
            return new Err(sendUserOpRet.ERR);
        }
        const userOPHashLocal = await this.userOpHash(userOp);
        if (userOPHashLocal.isErr()) {
            return new Err(
                new UserOpErrors(UserOpErrorCodes.UnknownError, userOPHashLocal.ERR.message)
            );
        }
        if (sendUserOpRet.OK.toLowerCase() !== userOPHashLocal.OK.toLowerCase()) {
            throw new Error("userOpHash !== userOPHashLocal");
        }
        return new Ok(true);

    }

    async getNonce(walletAddr: string, key?: string): Promise<Result<string, Error>> {
        let _key = "0x0";
        if (key !== undefined) {
            const ret = TypeGuard.maxToUint192(key);
            if (ret.isErr()) {
                return new Err(
                    new Error(ret.ERR)
                );
            }
            _key = '0x' + ret.OK.toString(16);
        }
        const _entrypointRet = await this.getEntryPointContract();
        if (_entrypointRet.isErr()) {
            return new Err(_entrypointRet.ERR);
        }
        try {
            const _nonce: bigint = await _entrypointRet.OK.getFunction("getNonce").staticCall(walletAddr, _key);
            return new Ok(`0x${_nonce.toString(16)}`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(
                    new Error("unknown error")
                );
            }
        }
    }

    private async walletDeployed(walletAddress: string): Promise<Result<boolean, Error>> {
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr()) {
            return new Err(_onChainConfig.ERR);
        }
        const key = `${walletAddress}-${_onChainConfig.OK.chainId}`;

        if (StorageCache.getInstance().get<boolean>(key, false)) {
            return new Ok(true);
        }
        try {
            const code = await this.provider.getCode(walletAddress);
            const deployed = code !== "0x";
            if (deployed) {
                StorageCache.getInstance().set(key, true);
            }
            return new Ok(deployed);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return new Err(error);
            } else {
                return new Err(
                    new Error("unknown error")
                );
            }
        }
    }

    async fromTransaction(maxFeePerGas: string, maxPriorityFeePerGas: string, from: string, txs: Transaction[], nonceKey?: string): Promise<Result<UserOperation, Error>> {
        if (txs.length === 0) {
            return new Err(
                new Error("txs.length === 0")
            );
        }
        if (TypeGuard.onlyAddress(from).isErr()) {
            return new Err(
                new Error(`invalid from: ${from}`)
            );
        }
        const _walletDeployed = await this.walletDeployed(from);
        if (_walletDeployed.isErr()) {
            return new Err(_walletDeployed.ERR);
        }
        if (_walletDeployed.isErr()) {
            new Error(`walletDeployed error: ${_walletDeployed.ERR.message}`);
        }

        let callGasLimit: bigint = BigInt(0);
        for (const tx of txs) {
            if (tx.gasLimit === undefined) {
                callGasLimit = BigInt(0);
                break;
            }
            callGasLimit += BigInt(tx.gasLimit);
        }
        {
            if (callGasLimit % BigInt(2) === BigInt(1)) {
                // odd number -> even number
                callGasLimit += BigInt(1);
            }
        }

        const nonceRet = await this.getNonce(from, nonceKey);
        if (nonceRet.isErr()) {
            return new Err(nonceRet.ERR);
        }
        let callData: string = '0x';
        {
            /*
                function execute(address dest, uint256 value, bytes calldata func) external;
                function executeBatch(address[] calldata dest, bytes[] calldata func) external;
                function executeBatch(address[] calldata dest, uint256[] calldata value, bytes[] calldata func) external;
            */
            const abi = new ethers.Interface(ABI_SoulWallet);

            let to: string[] = [];
            let value: string[] = [];
            let data: string[] = [];
            let hasValue = false;
            for (let i = 0; i < txs.length; i++) {
                const _to = txs[i].to;
                if (TypeGuard.onlyAddress(_to).isErr()) return new Err(new Error(`invalid to: ${to}`));
                to.push(_to);

                const _valueTmp = txs[i].value;
                const _value = _valueTmp === undefined ? '0x0' : '0x' + BigInt(_valueTmp).toString(16);
                if (_value !== '0x0') hasValue = true;
                value.push(_value);

                const _dataTmp = txs[i].data;
                const _data = _dataTmp === undefined ? '0x' : _dataTmp;
                if (TypeGuard.onlyBytes(_data).isErr()) return new Err(new Error(`invalid data: ${_data}`));
                data.push(_data);
            }

            if (txs.length > 1) {
                if (hasValue) {
                    callData = abi.encodeFunctionData("executeBatchexecuteBatch(address[],uint256[],bytes[])", [to, value, data]);
                } else {
                    callData = abi.encodeFunctionData("executeBatch(address[],bytes[])", [to, data]);
                }
            } else {
                callData = abi.encodeFunctionData("execute", [to[0], value[0], data[0]]);
            }
        }

        const _userOperation: UserOperation = {
            sender: from,
            nonce: nonceRet.OK,
            /* 
             address factory = address(bytes20(initCode[0 : 20]));
             bytes memory initCallData = initCode[20 :];
             call(gas(), factory, 0, add(initCallData, 0x20), mload(initCallData), 0, 32)
              function createWallet(bytes memory _initializer, bytes32 _salt)
            */
            initCode: '0x',
            callData: callData,
            callGasLimit: '0x' + callGasLimit.toString(16),
            verificationGasLimit: 0,
            preVerificationGas: 0,
            maxFeePerGas: '0x' + BigInt(maxFeePerGas).toString(16),
            maxPriorityFeePerGas: '0x' + BigInt(maxPriorityFeePerGas).toString(16),
            paymasterAndData: "0x",
            signature: "0x"
        };

        return new Ok(_userOperation);

    }
}