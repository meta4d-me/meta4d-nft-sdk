export interface ICoinbaseWalletSdkConnectorOptions {
    infuraId?: string;
    rpc?: string;
    chainId?: number;
    appName?: string;
    appLogoUrl?: string;
    darkMode?: boolean;
    network?: string;
}
declare const ConnectToCoinbaseWalletSdk: (opts: ICoinbaseWalletSdkConnectorOptions) => Promise<unknown>;
/**
 * @deprecated WalletLink is deprecated in favor of CoinbaseWalletSdk
 */
export declare const walletlink: (opts: ICoinbaseWalletSdkConnectorOptions) => Promise<unknown>;
export default ConnectToCoinbaseWalletSdk;
