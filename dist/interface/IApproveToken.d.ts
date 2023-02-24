/**
 * token approve data interface
 * @interface IApproveToken
 * @property {string} token the token address
 * @property {string} spender the spender address
 * @property {string?} value the approve value
 */
export interface IApproveToken {
    token: string;
    spender: string;
    value?: string;
}
