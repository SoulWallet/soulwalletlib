import { ethers } from "ethers";
import { UserOperation } from "./interface/ISoulWallet.js";
import { deepHexlify } from "@account-abstraction/utils";
import { IBundler, UserOpDetail, UserOpGas, UserOpReceipt } from "./interface/IBundler.js";
import { UserOpErrorCodes, UserOpErrors } from "./interface/IUserOpErrors.js";
import { Ok, Err, Result } from '../../soulwallet-result/lib/main.js';

export class Bundler implements IBundler {
    private bundler: ethers.JsonRpcProvider;

    constructor(bundler: ethers.JsonRpcProvider | string) {
        if (typeof bundler === 'string') {
            this.bundler = new ethers.JsonRpcProvider(bundler);
        } else {
            this.bundler = bundler;
        }
    }

    async eth_sendUserOperation(entryPoint: string, userOp: UserOperation): Promise<Result<string, UserOpErrors>> {
        try {
            const userOpHash = await this.bundler.send(
                'eth_sendUserOperation',
                [
                    deepHexlify(userOp),
                    entryPoint
                ]
            );
            return new Ok(userOpHash);
        } catch (error: any) {
            if (typeof error.error === 'object' && typeof error.error.code === 'number' && typeof error.error.message === 'string') {
                return new Err(new UserOpErrors(error.error.code, error.error.message, typeof error.error.data === 'object' ? error.error.data : undefined));
            } else {
                //return new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error');
                return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error'));
            }
        }
    }

    async eth_estimateUserOperationGas(entryPoint: string, userOp: UserOperation): Promise<Result<UserOpGas, UserOpErrors>> {
        try {
            const userOpGas = await this.bundler.send(
                'eth_estimateUserOperationGas',
                [
                    deepHexlify(userOp),
                    entryPoint
                ]
            ) as UserOpGas;
            if (!userOpGas) {
                return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error'));
            } else {
                return new Ok(userOpGas);
            }

        } catch (error: any) {
            if (typeof error.error === 'object' && typeof error.error.code === 'number' && typeof error.error.message === 'string') {
                return new Err(new UserOpErrors(error.error.code, error.error.message, typeof error.error.data === 'object' ? error.error.data : undefined));
            } else {
                //return new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error');
                return new Err(new UserOpErrors(UserOpErrorCodes.UnknownError, 'unknown error'));
            }
        }
    }

    async eth_getUserOperationByHash(userOpHash: string): Promise<Result<null | UserOpDetail, string>> {
        try {
            const ret = await this.bundler.send(
                'eth_estimateUserOperationGas',
                [
                    userOpHash
                ]
            );
            return new Ok(ret);
        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new Err(error.message);
            } else {
                console.error(error);
                return new Err('unknown error');
            }
        }
    }

    async eth_getUserOperationReceipt(userOpHash: string): Promise<Result<null | UserOpReceipt, string>> {
        try {
            const ret = await this.bundler.send(
                'eth_getUserOperationReceipt',
                [
                    userOpHash
                ]
            );
            return new Ok(ret);
        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new Err(error.message);
            } else {
                console.error(error);
                return new Err('unknown error');
            }
        }
    }

    async eth_supportedEntryPoints(): Promise<Result<string[], string>> {
        try {
            const ret = await this.bundler.send(
                'eth_supportedEntryPoints',
                []
            );
            if (Array.isArray(ret)) {
                return new Ok(ret);
            } else {
                return new Err('unknown error');
            }

        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new Err(error.message);
            } else {
                console.error(error);
                return new Err('unknown error');
            }
        }
    }

    async eth_chainId(): Promise<Result<number, string>> {
        try {
            const chain = await this.bundler.send('eth_chainId', []);
            return new Ok(parseInt(chain));
        } catch (error: any) {
            if (typeof error === 'object' && typeof error.message === 'string') {
                return new Err(error.message);
            } else {
                console.error(error);
                return new Err('unknown error');
            }
        }
    }

}