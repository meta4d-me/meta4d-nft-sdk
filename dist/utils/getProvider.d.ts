import { providers } from "ethers";
declare let handleAccountsChanged: (...args: unknown[]) => void, handleChainChanged: (...args: unknown[]) => void, handleDisconnect: (...args: unknown[]) => void, handleError: (...args: unknown[]) => void;
export declare const registerCallbacks: (callback: {
    handleAccountsChanged?: any;
    handleChainChanged?: any;
    handleDisconnect?: any;
    handleError?: any;
}) => void;
export declare enum Connector_Types {
    BinanceWallet = "BinanceWallet",
    CoinbaseWallet = "CoinbaseWallet",
    WalletConnect = "WalletConnect",
    Injected = "Injected"
}
declare const getProvider: (connectorType?: Connector_Types) => Promise<providers.Web3Provider>;
export default getProvider;
