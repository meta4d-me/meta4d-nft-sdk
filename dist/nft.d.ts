import { ethers } from "ethers";
/**
 * Register new component NFT
 */
export declare enum ENUM_CHAIN_NAME {
    CHAIN_NAME_MAINNET = "mainnet",
    CHAIN_NAME_POLYGON = "polygon",
    CHAIN_NAME_RINKEBY = "rinkeby",
    CHAIN_NAME_MUMBAI = "mumbai"
}
export interface IPrepareComponentParams {
    chain_name: ENUM_CHAIN_NAME;
    component_id: string;
    description: string;
    name: string;
    symbol: string;
    uri: string;
    attrs: Record<string, any>[];
}
/**
 * Prepare component
 * @param param - params
 * @param param.chain_name - chain name
 * @returns
 */
export declare const prepareComponent: (param: IPrepareComponentParams) => Promise<import("axios").AxiosResponse<any, any>>;
export interface IBindMetadataParams {
    chain_name: ENUM_CHAIN_NAME;
    m4m_token_id: string;
    description: string;
    name: string;
    uri: string;
}
export declare const bindMetadata: (param: IBindMetadataParams) => Promise<import("axios").AxiosResponse<any, any>>;
export interface IConvertNFTParams {
    originalNFT: string;
    originalTokenId: number;
    componentIds: number[];
    amounts: number[];
    sig: string;
}
export declare const convertNFT: (param: IConvertNFTParams) => Promise<ethers.ContractReceipt>;
export interface ICommonM4mNFTParams {
    m4mNFTId: string;
    componentIds: number[];
    amounts: number[];
}
export declare const splitM4mNFT: (param: ICommonM4mNFTParams) => Promise<ethers.ContractReceipt>;
export declare const assembleM4mNFT: (param: ICommonM4mNFTParams) => Promise<ethers.ContractReceipt>;
export declare const redeemNFT: (param: ICommonM4mNFTParams) => Promise<ethers.ContractReceipt>;
export declare const approveForAll: (type: "erc721" | "erc1155", nftContract: string, targetContract: string) => Promise<any>;
export interface IClaimLootParams {
    uuid: string;
    componentIds: number[];
    amounts: number[];
    sig: string;
}
export declare const claimLoot: (param: IClaimLootParams) => Promise<ethers.ContractReceipt>;
