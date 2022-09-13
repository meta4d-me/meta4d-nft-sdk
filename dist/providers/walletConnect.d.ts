export interface IWalletConnectConnectorOptions {
    infuraId?: string;
    rpc?: {
        [chainId: number]: string;
    };
    bridge?: string;
    qrcode?: boolean;
    qrcodeModalOptions?: {
        mobileLinks?: string[];
    };
    network?: string;
    chainId: number;
}
declare const ConnectToWalletConnect: (opts: IWalletConnectConnectorOptions) => Promise<unknown>;
export default ConnectToWalletConnect;
