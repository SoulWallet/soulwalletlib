import { ethers } from "ethers";
import { ECCPoint, GuardHookInputData, ISoulWallet, InitialKey, SignkeyType, Transaction } from "./interface/ISoulWallet.js";
import { UserOperation } from "./interface/UserOperation.js";
import { TypeGuard } from "./tools/typeGuard.js";
import { StorageCache } from "./tools/storageCache.js";
import { ABI_SoulWalletFactory, ABI_SoulWallet, ABI_EntryPoint } from "@soulwallet_test/abi";
import { HookInputData, Signature } from "./tools/signature.js";
import { Hex } from "./tools/hex.js";
import { GasOverhead } from "./tools/gasOverhead.js";
import { UserOpErrors, UserOpErrorCodes } from "./interface/IUserOpErrors.js";
import { Bundler } from "./bundler.js";
import { Ok, Err, Result } from '@soulwallet_test/result';
import { getUserOpHash } from "./tools/userOpHash.js";

export class onChainConfig {
    chainId: number = 0;
    entryPoint: string = "";
    soulWalletLogic: string = "";
}


/**
 * main class of the SDK.
 *
 * @export
 * @class SoulWallet
 * @implements {ISoulWallet}
 */
export class SoulWallet implements ISoulWallet {
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

    private _onChainConfig: onChainConfig | undefined = undefined;


    constructor(
        _provider: string | ethers.JsonRpcProvider,
        _bundler: string | ethers.JsonRpcProvider,
        _soulWalletFactoryAddress: string,
        _defalutCallbackHandlerAddress: string,
        _keyStoreModuleAddress: string,
        _securityControlModuleAddress: string,

    ) {
        if (typeof _provider === 'string') {
            if (TypeGuard.httpOrHttps(_provider).isErr() === true) throw new Error("invalid provider");
            this.provider = new ethers.JsonRpcProvider(_provider);
        } else {
            this.provider = _provider;
        }
        if (typeof _bundler === 'string') {
            if (TypeGuard.httpOrHttps(_bundler).isErr() === true) throw new Error("invalid bundler");
            this.bundler = new ethers.JsonRpcProvider(_bundler);
        } else {
            this.bundler = _bundler;
        }
        if (TypeGuard.onlyAddress(_soulWalletFactoryAddress).isErr() === true) throw new Error("invalid soulWalletFactoryAddress");
        if (TypeGuard.onlyAddress(_defalutCallbackHandlerAddress).isErr() === true) throw new Error("invalid defalutCallbackHandlerAddress");
        if (TypeGuard.onlyAddress(_keyStoreModuleAddress).isErr() === true) throw new Error("invalid keyStoreModuleAddress");
        if (TypeGuard.onlyAddress(_securityControlModuleAddress).isErr() === true) throw new Error("invalid securityControlModuleAddress");

        this.soulWalletFactoryAddress = _soulWalletFactoryAddress;
        this.defalutCallbackHandlerAddress = _defalutCallbackHandlerAddress;
        this.keyStoreModuleAddress = _keyStoreModuleAddress;
        this.securityControlModuleAddress = _securityControlModuleAddress;

        this.Bundler = new Bundler(this.bundler);
    }


    async getOnChainConfig(): Promise<Result<onChainConfig, Error>> {
        if (this._onChainConfig) {
            return new Ok(this._onChainConfig);
        }
        let _chainId: number = 0;
        {
            const _chainIdBigint = (await this.provider.getNetwork()).chainId;
            _chainId = Number(_chainIdBigint);
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
        }

        const key = `onChainConfig_${this.soulWalletFactoryAddress}_${_chainId}`;
        // read from cache
        let _onChainConfig = StorageCache.getInstance().get<onChainConfig | undefined>(key, undefined);
        if (!_onChainConfig) {
            const _soulWalletFactory = new ethers.Contract(this.soulWalletFactoryAddress, ABI_SoulWalletFactory, this.provider);
            const soulWalletLogic: string = await _soulWalletFactory.getFunction("walletImpl").staticCall();
            const _soulWallet = new ethers.Contract(soulWalletLogic, ABI_SoulWallet, this.provider);
            const entryPoint: string = await _soulWallet.getFunction("entryPoint").staticCall();

            _onChainConfig = new onChainConfig();

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
            if (ret.isErr() === true) {
                return new Err(ret.ERR);
            }
            if (ret.OK.join().toLowerCase().indexOf(entryPoint.toLowerCase()) === -1) {
                return new Err(
                    new Error(`Bundler network doesn't support entryPoint ${entryPoint}`)
                );
            }
        }
        this._onChainConfig = _onChainConfig;
        return new Ok(_onChainConfig);
    }

    private _entryPointContract: ethers.Contract | undefined;

    private async getEntryPointContract(): Promise<Result<ethers.Contract, Error>> {
        if (this._entryPointContract === undefined) {
            const _onChainConfig = await this.getOnChainConfig();
            if (_onChainConfig.isErr() === true) {
                return new Err(_onChainConfig.ERR);
            }
            this._entryPointContract = new ethers.Contract(_onChainConfig.OK.entryPoint, ABI_EntryPoint, this.provider);
        }
        return new Ok(this._entryPointContract);
    }

    async entryPoint(): Promise<Result<string, Error>> {
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr() === true) {
            return new Err(_onChainConfig.ERR);
        }
        return new Ok(_onChainConfig.OK.entryPoint);
    }

    async initializeData(initialKeys: InitialKey[], initialGuardianHash: string, initialGuardianSafePeriod: number = this.defalutInitialGuardianSafePeriod): Promise<Result<string, Error>> {
        /* 
            function initialize(
                bytes32[] anOwner,
                address defalutCallbackHandler,
                bytes[] calldata modules,
                bytes[] calldata plugins
            )
        */
        if (initialKeys.length === 0) {
            return new Err(
                new Error("initialKeys.length===0")
            );
        }

        const _initialKeys: string[] = [];
        for (const oneKey of initialKeys) {
            if (typeof oneKey === 'string') {
                TypeGuard.onlyAddress(oneKey);
                _initialKeys.push(Hex.paddingZero(oneKey, 32));
            } else {
                TypeGuard.onlyBytes32(oneKey.x);
                TypeGuard.onlyBytes32(oneKey.y);
                // keccak256(abi.encodePacked(uint256 Qx,uint256 Qy));
                const _key = ethers.keccak256(ethers.solidityPacked(["uint256", "uint256"], [oneKey.x, oneKey.y]));
                _initialKeys.push(_key);
            }
        }
        _initialKeys.sort((a, b) => {
            const aBig = BigInt(a);
            const bBig = BigInt(b);
            if (aBig === bBig) {
                throw new Error(`guardian address is duplicated: ${a}`);
            } else if (aBig < bBig) {
                return -1;
            } else {
                return 1;
            }
        });
        // get all key hash
        // keccak256(abi.encodePacked(bytes32[] key));
        const _initialKey = ethers.keccak256(ethers.solidityPacked(["bytes32[]"], [_initialKeys]));

        // default dely time is 2 days
        const securityControlModuleAndData = (this.securityControlModuleAddress + Hex.paddingZero(this.defalutInitialGuardianSafePeriod, 32).substring(2)).toLowerCase();
        /* 
         (bytes32 initialKey, bytes32 initialGuardianHash, uint64 guardianSafePeriod) = abi.decode(_data, (bytes32, bytes32, uint64));
        */
        const keyStoreInitData = new ethers.AbiCoder().encode(["bytes32", "bytes32", "uint64"], [_initialKey, initialGuardianHash, initialGuardianSafePeriod]);
        const keyStoreModuleAndData = (this.keyStoreModuleAddress + keyStoreInitData.substring(2)).toLowerCase();

        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr() === true) {
            return new Err(_onChainConfig.ERR);
        }
        const _soulWallet = new ethers.Contract(_onChainConfig.OK.soulWalletLogic, ABI_SoulWallet, this.provider);
        const initializeData = _soulWallet.interface.encodeFunctionData("initialize", [
            _initialKeys,
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
        initialKeys: InitialKey[],
        initialGuardianHash: string,
        initialGuardianSafePeriod?: number
    ): Promise<Result<string, Error>> {
        const _initializeDataRet = await this.initializeData(initialKeys, initialGuardianHash, initialGuardianSafePeriod);
        if (_initializeDataRet.isErr() === true) {
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
            if (_onChainConfig.isErr() === true) {
                throw new Err(_onChainConfig.ERR);
            }


            const _entrypointRet = await this.getEntryPointContract();
            if (_entrypointRet.isErr() === true) {
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
        initialKeys: InitialKey[],
        initialGuardianHash: string,
        callData: string = "0x",
        initialGuardianSafePeriod?: number
    ): Promise<Result<UserOperation, Error>> {
        const ret = TypeGuard.onlyBytes(callData);
        if (ret.isErr() === true) {
            return new Err(
                new Error(ret.ERR)
            );
        }
        const _initializeData = await this.initializeData(initialKeys, initialGuardianHash, initialGuardianSafePeriod);
        if (_initializeData.isErr() === true) {
            return new Err(_initializeData.ERR);
        }
        const initCode = `${this.soulWalletFactoryAddress}${new ethers.Interface(ABI_SoulWalletFactory)
            .encodeFunctionData("createWallet", [_initializeData.OK, Hex.paddingZero(index, 32)])
            .substring(2)
            }`.toLowerCase();
        const senderRet = await this.calcWalletAddress(index, initialKeys, initialGuardianHash, initialGuardianSafePeriod);
        if (senderRet.isErr() === true) {
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
        if (_onChainConfig.isErr() === true) {
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
        if (userOPHashRet.isErr() === true) {
            return new Err(userOPHashRet.ERR);
        }
        return new Ok(Signature.packUserOpHash(userOPHashRet.OK, validAfter, validUntil));
    }

    private async guardHookList(walletAddress: string): Promise<Result<string[], Error>> {
        try {
            const _soulWallet = new ethers.Contract(walletAddress, ABI_SoulWallet, this.provider);
            // function listPlugin(uint8 hookType) external view returns (address[] memory plugins);
            const _guardHookList = await _soulWallet.listPlugin(1 /* uint8 private constant _GUARD_HOOK = 1 << 0; */);
            return new Ok(_guardHookList);
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

    private async prePackUserOpSignature(guardHookInputData?: GuardHookInputData): Promise<Result<HookInputData | undefined, Error>> {
        let hookInputData: HookInputData | undefined = undefined;
        if (guardHookInputData !== undefined) {
            const ret = TypeGuard.onlyAddress(guardHookInputData.sender);
            if (ret.isErr() === true) {
                throw new Error(`invalid sender: ${guardHookInputData.sender}`);
            }
            hookInputData = new HookInputData();
            const guardHooksRet = await this.guardHookList(guardHookInputData.sender);
            if (guardHooksRet.isErr() === true) {
                return new Err(guardHooksRet.ERR);
            }
            hookInputData.guardHooks = guardHooksRet.OK;
            hookInputData.inputData = guardHookInputData.inputData;
        }
        return new Ok(hookInputData);
    }

    /**
     * pack userOp signature (EOA)
     *
     * @param {string} signature EOA signature
     * @param {string} validationData validation data
     * @param {GuardHookInputData} [guardHookInputData] 
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof SoulWallet
     */
    async packUserOpEOASignature(signature: string, validationData: string, guardHookInputData?: GuardHookInputData): Promise<Result<string, Error>> {
        const hookInputData = await this.prePackUserOpSignature(guardHookInputData);
        if (hookInputData.isErr() === true) {
            return new Err(hookInputData.ERR);
        }
        return new Ok(
            Signature.packEOASignature(signature, validationData, hookInputData.OK)
        );
    }

    /**
     * pack userOp signature (P256)
     *
     * @param {{
     *         publicKey: ECCPoint,
     *         r: string,
     *         s: string,
     *         authenticatorData: string,
     *         clientDataSuffix: string
     *     }} signatureData signature data
     * @param {string} validationData validation data
     * @param {GuardHookInputData} [guardHookInputData]
     * @return {*}  {Promise<Result<string, Error>>}
     * @memberof SoulWallet
     */
    async packUserOpP256Signature(signatureData: {
        publicKey: ECCPoint,
        r: string,
        s: string,
        authenticatorData: string,
        clientDataSuffix: string
    }, validationData: string, guardHookInputData?: GuardHookInputData): Promise<Result<string, Error>> {
        const hookInputData = await this.prePackUserOpSignature(guardHookInputData);
        if (hookInputData.isErr() === true) {
            return new Err(hookInputData.ERR);
        }
        return new Ok(
            Signature.packP256Signature(signatureData, validationData, hookInputData.OK)
        );
    }

    async estimateUserOperationGas(userOp: UserOperation, signkeyType?: SignkeyType, semiValidGuardHookInputData?: GuardHookInputData): Promise<Result<true, UserOpErrors>> {
        if (semiValidGuardHookInputData !== undefined) {
            if (semiValidGuardHookInputData.sender.toLowerCase() !== userOp.sender.toLowerCase()) {
                return new Err(
                    new UserOpErrors(UserOpErrorCodes.UnknownError, `invalid sender: ${semiValidGuardHookInputData.sender}`)
                );
            }
            if (userOp.initCode === "0x") {
                return new Err(
                    new UserOpErrors(UserOpErrorCodes.UnknownError, `cannot set semiValidGuardHookInputData when the contract wallet is not deployed`)
                );
            }
        }
        const semiValidSignature = userOp.signature === "0x";
        const _onChainConfig = await this.getOnChainConfig();
        if (_onChainConfig.isErr() === true) {
            return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, _onChainConfig.ERR.message));
        }
        try {
            if (semiValidSignature) {
                // semiValidSignature
                const validationData = (BigInt(68719476735) << BigInt(160)) + (BigInt(1599999999) << BigInt(160 + 48));
                let signatureRet: Result<string, Error>;
                if (signkeyType === SignkeyType.P256) {
                    signatureRet = await this.packUserOpP256Signature(
                        {
                            publicKey: {
                                x: "0xe89e8b4be943fadb4dc599fe2e8af87a79b438adde328a3b72d43324506cd5b6",
                                y: "0x4fbfe4a2f9934783c3b1af712ee87abc08f576e79346efc3b8355d931bd7b976"
                            },
                            r: "0x2ae3ddfe4cc414dc0fad7ff3a5c960d1cee1211722d3099ade76e5ac1826731a",
                            s: "0x87e5d654f357e4cd6cb52512b2da4d91eae0ae48e9d892ce532b9352f63a55d6",
                            authenticatorData: "0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000",
                            clientDataSuffix: "\",\"origin\":\"http://localhost:5500\",\"crossOrigin\":false}"
                        },
                        `0x${validationData.toString(16)}`,
                        semiValidGuardHookInputData
                    );
                } else {
                    const signature = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
                    signatureRet = await this.packUserOpEOASignature(signature, `0x${validationData.toString(16)}`, semiValidGuardHookInputData);
                }
                if (signatureRet.isErr() === true) {
                    return new Err(
                        new UserOpErrors(UserOpErrorCodes.UnknownError, signatureRet.ERR.message)
                    );
                }
                userOp.signature = signatureRet.OK;
            }
            const userOpGasRet = await this.Bundler.eth_estimateUserOperationGas(_onChainConfig.OK.entryPoint, userOp);
            if (userOpGasRet.isErr() === true) {
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
        if (_onChainConfig.isErr() === true) {
            return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, _onChainConfig.ERR.message));
        }
        const sendUserOpRet = await this.Bundler.eth_sendUserOperation(_onChainConfig.OK.entryPoint, userOp);
        if (sendUserOpRet.isErr() === true) {
            return new Err(sendUserOpRet.ERR);
        }
        const userOPHashLocal = await this.userOpHash(userOp);
        if (userOPHashLocal.isErr() === true) {
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
            if (ret.isErr() === true) {
                return new Err(
                    new Error(ret.ERR)
                );
            }
            _key = '0x' + ret.OK.toString(16);
        }
        const _entrypointRet = await this.getEntryPointContract();
        if (_entrypointRet.isErr() === true) {
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
        if (_onChainConfig.isErr() === true) {
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
        if (TypeGuard.onlyAddress(from).isErr() === true) {
            return new Err(
                new Error(`invalid from: ${from}`)
            );
        }
        const _walletDeployed = await this.walletDeployed(from);
        if (_walletDeployed.isErr() === true) {
            return new Err(_walletDeployed.ERR);
        }
        if (_walletDeployed.isErr() === true) {
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
        if (nonceRet.isErr() === true) {
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

            const to: string[] = [];
            const value: string[] = [];
            const data: string[] = [];
            let hasValue = false;
            for (let i = 0; i < txs.length; i++) {
                const _to = txs[i].to;
                if (TypeGuard.onlyAddress(_to).isErr() === true) return new Err(new Error(`invalid to: ${to}`));
                to.push(_to);

                const _valueTmp = txs[i].value;
                const _value = _valueTmp === undefined ? '0x0' : '0x' + BigInt(_valueTmp).toString(16);
                if (_value !== '0x0') hasValue = true;
                value.push(_value);

                const _dataTmp = txs[i].data;
                const _data = _dataTmp === undefined ? '0x' : _dataTmp;
                if (TypeGuard.onlyBytes(_data).isErr() === true) return new Err(new Error(`invalid data: ${_data}`));
                data.push(_data);
            }

            if (txs.length > 1) {
                if (hasValue) {
                    callData = abi.encodeFunctionData("executeBatch(address[],uint256[],bytes[])", [to, value, data]);
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