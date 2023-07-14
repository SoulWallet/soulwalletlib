import { BN } from "bn.js"
import { ethers } from "ethers";
import { GuardHookInputData, ISoulWallet, UserOperation } from "./interface/ISoulWallet";
import { TypeGuard } from "./tools/typeGuard";
import { StorageCache } from "./tools/storageCache";
import { ABI_SoulWalletFactory, ABI_SoulWallet } from "@soulwallet/abi";
import { NotPromise, packUserOp, getUserOpHash } from '@account-abstraction/utils'
import { L1KeyStore } from "./L1KeyStore";
import { HookInputData, Signature } from "./tools/signature";
import { Hex } from "./tools/hex";

export class onChainConfig {
    chainId: number = 0;
    entryPoint: string = "";
    soulWalletLogic: string = "";
}


export class SoulWallet extends ISoulWallet {
    readonly days = 86400;

    readonly provider: ethers.JsonRpcProvider;
    readonly bundler: ethers.JsonRpcProvider;
    readonly soulWalletFactoryAddress: string;
    readonly defalutCallbackHandlerAddress: string;
    readonly keyStoreModuleAddress: string;
    readonly securityControlModuleAddress: string;

    readonly preVerificationGasDeploy: number = 10000000;

    constructor(
        _provider: string,
        _bundler: string,
        _soulWalletFactoryAddress: string,
        _defalutCallbackHandlerAddress: string,
        _keyStoreModuleAddress: string,
        _securityControlModuleAddress: string,

    ) {
        super();
        TypeGuard.httpOrHttps(_provider);
        TypeGuard.httpOrHttps(_bundler);
        TypeGuard.onlyAddress(_soulWalletFactoryAddress);
        TypeGuard.onlyAddress(_defalutCallbackHandlerAddress);
        TypeGuard.onlyAddress(_keyStoreModuleAddress);
        TypeGuard.onlyAddress(_securityControlModuleAddress);

        this.provider = new ethers.JsonRpcProvider(_provider);
        this.bundler = new ethers.JsonRpcProvider(_bundler);
        this.soulWalletFactoryAddress = _soulWalletFactoryAddress;
        this.defalutCallbackHandlerAddress = _defalutCallbackHandlerAddress;
        this.keyStoreModuleAddress = _keyStoreModuleAddress;
        this.securityControlModuleAddress = _securityControlModuleAddress;
    }


    async getOnChainConfig(): Promise<onChainConfig> {
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
                    throw new Error("Invalid chainId");
                }
            } else {
                throw new Error("chainId is not a safe integer");
            }
            _onChainConfig.chainId = _chainId;
            _onChainConfig.entryPoint = entryPoint;
            _onChainConfig.soulWalletLogic = soulWalletLogic;

            // save to cache
            StorageCache.getInstance().set(key, _onChainConfig);

            // check bundler RPC
            const supportedEntryPoint = await this.bundler.send(
                'eth_supportedEntryPoints',
                []
            );
            if (!Array.isArray(supportedEntryPoint)) {
                throw new Error("Invalid bundler RPC response");
            }
            if (supportedEntryPoint.join().toLowerCase().indexOf(entryPoint.toLowerCase()) === -1) {
                throw new Error(
                    `Bundler network doesn't support entryPoint ${entryPoint}`
                );
            }
        }
        return _onChainConfig;
    }

    async initializeData(
        keyStoreSlot: string) {
        const _onChainConfig = await this.getOnChainConfig();
        const _soulWallet = new ethers.Contract(_onChainConfig.soulWalletLogic, ABI_SoulWallet, this.provider);
        /* 
            function initialize(
                address anOwner,
                address defalutCallbackHandler,
                bytes[] calldata modules,
                bytes[] calldata plugins
            )
        */

        // default dely time is 2 days
        const securityControlModuleAndData = this.securityControlModuleAddress + Hex.paddingZero(2 * this.days, 32).substring(2).toLowerCase();
        const keyStoreModuleAndData = this.keyStoreModuleAddress.toLowerCase() + keyStoreSlot.substring(2).toLowerCase();
        const initializeData = _soulWallet.interface.encodeFunctionData("initialize", [
            ethers.ZeroAddress,
            this.defalutCallbackHandlerAddress,
            [
                securityControlModuleAndData,
                keyStoreModuleAndData
            ],
            []
        ]
        );

        return initializeData;
    }


    async calcWalletAddress(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        initialGuardianSafePeriod?: number
    ): Promise<string> {
        const keyStoreSlot = L1KeyStore.getSlot(initialKey, initialGuardianHash, initialGuardianSafePeriod);
        const _initializeData = await this.initializeData(keyStoreSlot);
        const _soulWallet = new ethers.Contract(this.soulWalletFactoryAddress, ABI_SoulWalletFactory, this.provider);
        /* 
         function getWalletAddress(bytes memory _initializer, bytes32 _salt) external view returns (address proxy)
        */
        // number to bytes32 string, e.g: 1 -> 0x0000000000000000000000000000000000000000000000000000000000000001
        const _salt = Hex.paddingZero(index, 32);
        const _walletAddress = await _soulWallet.getFunction("getWalletAddress").staticCall(_initializeData, _salt);
        return _walletAddress;
    }

    async createUnsignedDeployWalletUserOp(
        index: number,
        initialKey: string,
        initialGuardianHash: string,
        callData: string = "0x",
        initialGuardianSafePeriod?: number
    ): Promise<UserOperation> {
        TypeGuard.onlyBytes(callData);

        const keyStoreSlot = L1KeyStore.getSlot(initialKey, initialGuardianHash, initialGuardianSafePeriod);
        const _initializeData = await this.initializeData(keyStoreSlot);
        const initCode = `${this.soulWalletFactoryAddress}${new ethers.Interface(ABI_SoulWalletFactory)
            .encodeFunctionData("createWallet", [_initializeData, Hex.paddingZero(index, 32)])
            .substring(2)
            }`;
        let userOperationStruct: UserOperation = {
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
            sender: await this.calcWalletAddress(index, initialKey, initialGuardianHash, initialGuardianSafePeriod),
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

        return userOperationStruct;
    }

    async getUserOpHash(userOp: UserOperation): Promise<string> {
        const _onChainConfig = await this.getOnChainConfig();
        return getUserOpHash(userOp, _onChainConfig.entryPoint, _onChainConfig.chainId);
    }

    private async guardHookList(walletAddress: string): Promise<string[]> {
        const _soulWallet = new ethers.Contract(walletAddress, ABI_SoulWallet, this.provider);
        // function listPlugin(uint8 hookType) external view returns (address[] memory plugins);
        const _guardHookList = await _soulWallet.listPlugin(1 /* uint8 private constant _GUARD_HOOK = 1 << 0; */);
        return _guardHookList;
    }

    async packUserOpSignature(signature: string, signatureValidPeriod?: number, guardHookInputData?: GuardHookInputData): Promise<string> {
        if (guardHookInputData !== undefined) {
            TypeGuard.onlyAddress(guardHookInputData.sender);

            const hookInputData: HookInputData = new HookInputData();
            hookInputData.guardHooks = await this.guardHookList(guardHookInputData.sender);
            hookInputData.inputData = guardHookInputData.inputData;

            return Signature.packSignature(signature, signatureValidPeriod, hookInputData);
        } else {
            return Signature.packSignature(signature, signatureValidPeriod);
        }
    }

    async estimateUserOperationGas(userOp: UserOperation): Promise<void> {
        const _onChainConfig = await this.getOnChainConfig();
        const semiValidSignature = userOp.signature === "0x";
        if (semiValidSignature) {
            userOp.signature = "0x00";
        }

        const userOpGas = await this.bundler.send(
            'eth_estimateUserOperationGas',
            [
                userOp,
                _onChainConfig.entryPoint
            ]
        );
        /* 
        preVerificationGas,
        verificationGas,
        deadline,
        callGasLimit
        */
        userOp.preVerificationGas = userOpGas.preVerificationGas;
        userOp.verificationGasLimit = userOpGas.verificationGas;
        userOp.callGasLimit = userOpGas.callGasLimit;

        if (semiValidSignature) {
            userOp.signature = "0x";
        }
    }
}