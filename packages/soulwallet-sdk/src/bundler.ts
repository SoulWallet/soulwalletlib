import { ethers } from "ethers";
import { UserOperation } from "./interface/ISoulWallet.js";
import { deepHexlify } from "@account-abstraction/utils";
import { IBundler, UserOpDetail, UserOpGas, UserOpReceipt } from "./interface/IBundler.js";
import { UserOpErrorCodes, UserOpErrors } from "./interface/IUserOpErrors.js";
import { ResultWithErrors } from "internal-interface";

export class Bundler implements IBundler {
    private bundler: ethers.JsonRpcProvider;

    constructor(bundler: ethers.JsonRpcProvider | string) {
        if (typeof bundler === 'string') {
            this.bundler = new ethers.JsonRpcProvider(bundler);
        } else {
            this.bundler = bundler;
        }
    }

    async eth_sendUserOperation(entryPoint: string, userOp: UserOperation): Promise<ResultWithErrors<string, UserOpErrors>> {
        try {
            const userOpHash = await this.bundler.send(
                'eth_sendUserOperation',
                [
                    deepHexlify(userOp),
                    entryPoint
                ]
            );
            return new ResultWithErrors(true, userOpHash);
        } catch (error: any) {
            if (typeof error.error === 'object' && typeof error.error.code === 'number' && typeof error.error.message === 'string') {
                return new ResultWithErrors<string, UserOpErrors>(false, undefined, new UserOpErrors(error.error.code, error.error.message, typeof error.error.data === 'object' ? error.error.data : undefined));
            } else {
                //return new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error');
                return new ResultWithErrors<string, UserOpErrors>(false, undefined, new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error'));
            }
        }
    }

    async eth_estimateUserOperationGas(entryPoint: string, userOp: UserOperation): Promise<ResultWithErrors<UserOpGas, UserOpErrors>> {
        try {
            const userOpGas = await this.bundler.send(
                'eth_estimateUserOperationGas',
                [
                    deepHexlify(userOp),
                    entryPoint
                ]
            ) as UserOpGas;
            if (!userOpGas) {
                return new ResultWithErrors<UserOpGas, UserOpErrors>(false, undefined, new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error'));
            } else {
                return new ResultWithErrors<UserOpGas, UserOpErrors>(true, userOpGas);
            }

        } catch (error: any) {
            if (typeof error.error === 'object' && typeof error.error.code === 'number' && typeof error.error.message === 'string') {
                return new ResultWithErrors<UserOpGas, UserOpErrors>(false, undefined, new UserOpErrors(error.error.code, error.error.message, typeof error.error.data === 'object' ? error.error.data : undefined));
            } else {
                //return new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error');
                return new ResultWithErrors<UserOpGas, UserOpErrors>(false, undefined, new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error'));
            }
        }
    }

    async eth_getUserOperationByHash(userOpHash: string): Promise<ResultWithErrors<null | UserOpDetail, string>> {
        try {
            const ret = await this.bundler.send(
                'eth_estimateUserOperationGas',
                [
                    userOpHash
                ]
            );
            return new ResultWithErrors<null | UserOpDetail, string>(true, ret);
        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new ResultWithErrors<null | UserOpDetail, string>(false, undefined, error.message);
            } else {
                console.error(error);
                return new ResultWithErrors<null | UserOpDetail, string>(false, undefined, 'unknown error');
            }
        }
    }

    async eth_getUserOperationReceipt(userOpHash: string): Promise<ResultWithErrors<null | UserOpReceipt, string>> {
        try {
            const ret = await this.bundler.send(
                'eth_getUserOperationReceipt',
                [
                    userOpHash
                ]
            );
            return new ResultWithErrors<null | UserOpReceipt, string>(true, ret);
        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new ResultWithErrors<null | UserOpReceipt, string>(false, undefined, error.message);
            } else {
                console.error(error);
                return new ResultWithErrors<null | UserOpReceipt, string>(false, undefined, 'unknown error');
            }
        }
    }

    async eth_supportedEntryPoints(): Promise<ResultWithErrors<string[], string>> {
        try {
            const ret = await this.bundler.send(
                'eth_supportedEntryPoints',
                []
            );
            if (Array.isArray(ret)) {
                return new ResultWithErrors<string[], string>(true, ret);
            } else {
                return new ResultWithErrors<string[], string>(false, undefined, 'unknown error');
            }

        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new ResultWithErrors<string[], string>(false, undefined, error.message);
            } else {
                console.error(error);
                return new ResultWithErrors<string[], string>(false, undefined, 'unknown error');
            }
        }
    }

    async eth_chainId(): Promise<ResultWithErrors<number, string>> {
        try {
            const chain = await this.bundler.send('eth_chainId', []);
            return new ResultWithErrors<number, string>(true, parseInt(chain));
        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new ResultWithErrors<number, string>(false, undefined, error.message);
            } else {
                console.error(error);
                return new ResultWithErrors<number, string>(false, undefined, 'unknown error');
            }
        }
    }

}