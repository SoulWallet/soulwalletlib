export declare class PersonalSign {
    static signMessage(msg: string, privateKey: string): string;
    static recoverAddress(msg: string, signature: string): string;
}
