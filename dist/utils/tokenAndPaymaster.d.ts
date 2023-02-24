/**
 * TokenPaymaster helper
 * @class TokenAndPaymaster
  */
export declare class TokenAndPaymaster {
    /**
     * pack token and paymaster to bytes
     * @static
     * @param {ITokenAndPaymaster[]} tokenAndPaymaster
     * @returns {string} the packed bytes
     */
    static pack(tokenAndPaymaster: ITokenAndPaymaster[]): string;
    /**
     * unpack bytes to token and paymaster
     * @static
     * @param {string} data the packed bytes
     * @returns {ITokenAndPaymaster[]} the unpacked token and paymaster
     */
    static unpack(data: string): ITokenAndPaymaster[];
}
/**
 * ITokenAndPaymaster
 * @interface ITokenAndPaymaster
 * @property {string} token the token address
 * @property {string} paymaster the paymaster address
 */
export interface ITokenAndPaymaster {
    token: string;
    paymaster: string;
}
