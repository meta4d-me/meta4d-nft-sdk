import axios from "axios";
import getProvider from "./utils/getProvider";
import {
  M4mNFTRegistry,
  M4mNFTRegistry__factory,
  M4mNFT,
  M4mComponent,
  ERC721,
  ERC721__factory,
  ERC1155Upgradeable,
  ERC1155Upgradeable__factory,
  SimpleM4mNFT,
  SimpleM4mNFT__factory,
  Zip,
  Zip__factory,
  Manager,
  Manager__factory,
} from "./typechain-types";
import { Contract } from "ethers";
import { ethers } from "ethers";
import {
  _CONTRACT,
  META4D_NFT_BACKEND_HOST,
  RPC_NODE,
  ChAIN_NAME,
} from "./utils/constants";
/**
 * Register new component NFT
 */

export enum ENUM_CHAIN_NAME {
  CHAIN_NAME_MAINNET = "mainnet",
  CHAIN_NAME_POLYGON = "polygon",
  CHAIN_NAME_RINKEBY = "rinkeby",
  CHAIN_NAME_MUMBAI = "mumbai",
}

export interface IPrepareComponentParams {
  chain_name: ENUM_CHAIN_NAME; // chain name
  component_id: string;
  description: string;
  // full name of component
  name: string;
  // abbrevation of name
  symbol: string;
  // ipfs hash
  uri: string;
  // attributes that compliant Opense
  attrs: Record<string, any>[];
}
/**
 * Prepare component
 * @param param - params
 * @param param.chain_name - chain name
 * @returns
 */
export const prepareComponent = async (param: IPrepareComponentParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const sig = await signer.signMessage(param.component_id);
  const url = `${META4D_NFT_BACKEND_HOST}/api/v1/component/generate`;
  const res = await axios.post(url, { ...param, sig });
  return res;
};

export interface IBindMetadataParams {
  chain_name: ENUM_CHAIN_NAME;
  m4m_token_id: string;
  description: string;
  name: string;
  uri: string;
}
export const bindMetadata = async (param: IBindMetadataParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const sig = await signer.signMessage(param.m4m_token_id);
  const url = `${META4D_NFT_BACKEND_HOST}/api/v1/m4m-nft/bind-metadata`;
  const res = await axios.post(url, { ...param, sig });
  return res;
};

export interface IConvertNFTParams {
  originalNFT: string; // original NFT contract address
  originalTokenId: number; // original NFT token id
  componentIds: number[]; //component ids
  amounts: number[]; // component amounts
  sig: string;
}
export const convertNFT = async (param: IConvertNFTParams) => {
  if (
    param.componentIds &&
    param.amounts &&
    param.componentIds.length !== param.amounts.length
  ) {
    throw new Error(
      "Invalid params, component ids and amounts length mismatch."
    );
  }
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.M4mNFTRegistry[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;

  const tx = await registry.convertNFT(
    param.originalNFT,
    param.originalTokenId,
    param.componentIds,
    param.amounts,
    param.sig
  );
  const res = await tx.wait();
  return res;
};

export interface ICommonM4mNFTParams {
  m4mNFTId: string;
  componentIds: number[];
  amounts: number[];
}
export const splitM4mNFT = async (param: ICommonM4mNFTParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.M4mNFTRegistry[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const tx = await registry.splitM4mNFT(
    param.m4mNFTId,
    param.componentIds,
    param.amounts
  );
  const res = await tx.wait();
  return res;
};
export const assembleM4mNFT = async (param: ICommonM4mNFTParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.M4mNFTRegistry[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const tx = await registry.assembleM4mNFT(
    param.m4mNFTId,
    param.componentIds,
    param.amounts
  );
  const res = await tx.wait();
  return res;
};

export const redeemNFT = async (param: ICommonM4mNFTParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.M4mNFTRegistry[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const tx = await registry.redeem(
    param.m4mNFTId,
    param.componentIds,
    param.amounts
  );
  const res = await tx.wait();
  return res;
};

export const approveForAll = async (
  type: "erc721" | "erc1155",
  nftContract: string,
  targetContract: string
) => {
  const provider = await getProvider();
  const nft = new Contract(
    nftContract,
    type === "erc721" ? ERC721__factory.abi : ERC1155Upgradeable__factory.abi,
    provider.getSigner()
  );
  const tx = await nft.setApprovalForAll(targetContract, true);
  const res = await tx.wait();
  return res;
};

export interface IClaimLootParams {
  uuid: string;
  componentIds: number[];
  amounts: number[];
  sig: string;
}

export const claimLoot = async (param: IClaimLootParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.M4mNFTRegistry[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const tx = await registry.claimLoot(
    param.uuid,
    param.componentIds,
    param.amounts,
    param.sig
  );
  const res = await tx.wait();
  return res;
};

// for server
export const getSimpleM4MNFTTokenId = async (chainId: number) => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_NODE[chainId]);
  const simpleM4MNFT = new Contract(
    _CONTRACT.SimpleM4mNFT[chainId],
    SimpleM4mNFT__factory.abi,
    provider
  ) as SimpleM4mNFT;
  const res = await simpleM4MNFT.tokenIndex();
  return res.toNumber();
};

/**
 * Zip mint simple m4m nft and convert simple to M4M nft at one transaction.
 */
export const mintM4MNFT = async (
  owner: string,
  chainId: number,
  privateKey: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_NODE[chainId]);
  const signer = new ethers.Wallet(privateKey, provider);
  const zipContract = new Contract(
    _CONTRACT.Zip[chainId],
    Zip__factory.abi,
    signer
  ) as Zip;
  const simpleM4mNFT = new Contract(
    _CONTRACT.SimpleM4mNFT[chainId],
    SimpleM4mNFT__factory.abi,
    signer
  ) as SimpleM4mNFT;
  const tokenId = await simpleM4mNFT.tokenIndex();
  const url = `${META4D_NFT_BACKEND_HOST}/api/v1/m4m-nft/initialization?original_addr=${simpleM4mNFT.address}&&original_token_id=${tokenId}&&chain_name=${ChAIN_NAME[chainId]}`;
  const res = await axios.get(url);
  const data: any = res.data;
  if (!data) {
    throw new Error("Http response error");
  }
  const tx = await zipContract.mintM4mNFT(
    owner,
    data.component_ids.split(","),
    data.component_nums.split(","),
    data.sig
  );
  const zipRes = await tx.wait();
  return zipRes;
};

export const zipChangeComponents = async (
  chainId: number,
  privateKey: string,
  m4mTokenId: number,
  outComponentsIds: number[],
  outAmounts: number[],
  inComponentIds: number[],
  inAmounts: number[]
) => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_NODE[chainId]);
  const signer = new ethers.Wallet(privateKey, provider);
  const zipContract = new Contract(
    _CONTRACT.Zip[chainId],
    Zip__factory.abi,
    signer
  ) as Zip;
  const tx = await zipContract.changeComponents(
    m4mTokenId,
    outComponentsIds,
    outAmounts,
    inComponentIds,
    inAmounts
  );
  const res = await tx.wait();
  return res;
};

export const zipChangeComponentsAndRecordVersion = async (
  chainId: number,
  privateKey: string,
  m4mTokenId: number,
  outComponentsIds: number[],
  outAmounts: number[],
  inComponentIds: number[],
  inAmounts: number[],
  oldVersion: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_NODE[chainId]);
  const signer = new ethers.Wallet(privateKey, provider);
  const zipContract = new Contract(
    _CONTRACT.Zip[chainId],
    Zip__factory.abi,
    signer
  ) as Zip;
  const tx = await zipContract.changeComponentsAndRecordVersion(
    m4mTokenId,
    outComponentsIds,
    outAmounts,
    inComponentIds,
    inAmounts,
    oldVersion
  );
  const res = await tx.wait();
  return res;
};

export const setURIVersion = async (
  chainId: number,
  nftContract: string,
  tokenId: number,
  uri: string,
  privateKey: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_NODE[chainId]);
  const signer = new ethers.Wallet(privateKey, provider);
  const managerContract = new Contract(
    _CONTRACT.VersionManager[chainId],
    Manager__factory.abi,
    signer
  ) as Manager;
  const tx = await managerContract.setInfo(
    {
      chainId,
      nft: nftContract,
      tokenId,
    },
    uri
  );
  const res = await tx.wait();
  return res;
};
