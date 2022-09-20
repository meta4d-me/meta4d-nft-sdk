import { Connector_Types } from "./utils/getProvider";
import { BigNumber, ethers } from "ethers";
export * from "./nft";
export { Connector_Types } from "./utils/getProvider";
export declare const connect: (callback: {
    handleAccountsChanged?: any;
    handleChainChanged?: any;
    handleDisconnect?: any;
    handleError?: any;
}) => Promise<void>;
export declare const disconnect: () => void;
export declare const getInfo: () => Promise<{
    address: string;
    chainId: number;
}>;
export declare const switchNetwork: (network?: string) => Promise<void>;
export declare const login: (connectorType?: Connector_Types) => Promise<string>;
export declare const mintNFT: (owner: string, ipfsHash: string) => Promise<{
    tokenId: number | null;
}>;
export declare const loadBlob: (uri: string) => Promise<Blob>;
export declare const getNFT: (tokenId: Number, type?: "url" | "blob" | "base64") => Promise<any>;
export declare const getNFTList: (owner: string, nftContractAddr: string) => Promise<{
    tokenId: BigNumber;
    uri: string;
    metadata: any;
}[]>;
export declare const loadSource: (uri: string, type?: "url" | "blob" | "base64") => Promise<unknown>;
export declare const transfer: (to: string, tokenId: Number) => Promise<ethers.ContractReceipt>;
export declare const walletSign: (privateKey: string, msg: string) => Promise<string>;
