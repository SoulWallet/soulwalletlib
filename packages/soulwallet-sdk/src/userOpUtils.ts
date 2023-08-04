import { UserOperation } from './interface/UserOperation.js';
import { userOperationFromJSON, userOperationToJSON } from './tools/convert.js';
import { getUserOpHash } from './tools/userOpHash.js'

/**
 * UserOpUtils
 *
 * @export
 * @class UserOpUtils
 */
export class UserOpUtils {

    /**
     * userOperationToJSON
     *
     * @static
     * @param {UserOperation} userOp UserOperation
     * @return {*}  {string} json
     * @memberof UserOpUtils
     */
    static userOperationToJSON(userOp: UserOperation): string {
        return userOperationToJSON(userOp);
    }

    /**
     * userOperationFromJSON
     *
     * @static
     * @param {string} json
     * @return {*}  {UserOperation} UserOperation
     * @memberof UserOpUtils
     */
    static userOperationFromJSON(json: string): UserOperation {
        return userOperationFromJSON(json);
    }

    /**
     * getUserOpHash
     *
     * @static
     * @param {UserOperation} userOp UserOperation 
     * @param {string} entryPoint entryPoint contract address
     * @param {number} chainId chainId
     * @return {*}  {string}
     * @memberof UserOpUtils
     */
    static getUserOpHash(userOp: UserOperation, entryPoint: string, chainId: number): string {
        return getUserOpHash(userOp, entryPoint, chainId);
    }
}