declare const _default: {
    BinanceWalletProvider: () => Promise<any>;
    CoinbaseWalletProvider: (opts: import("./coinbaseWallet").ICoinbaseWalletSdkConnectorOptions) => Promise<unknown>;
    WalletConnectProvider: (opts: import("./walletConnect").IWalletConnectConnectorOptions) => Promise<unknown>;
    InjectedProvider: () => Promise<any>;
};
export default _default;
