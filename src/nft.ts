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
} from "./typechain-types";
import { Contract } from "ethers";
import { ethers } from "ethers";
import { _CONTRACT, META4D_NFT_BACKEND_HOST } from "./utils/constants";
/**
 * Register new component NFT
 */
export interface IPrepareComponentParams {
  chain_name: string;
  // code of equipment, should be string of number
  component_id: string;
  description: string;
  // full name of component
  name: string;
  // abbrevation of name
  symbol: string;
  // ipfs hash
  uri: string;
  // attributes that compliant Opense
  attrs: Record<string, any>;
}
export const prepareComponent = async (param: IPrepareComponentParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const sig = await signer.signMessage(param.component_id);
  const url = `${META4D_NFT_BACKEND_HOST}/api/v1/component/generate`;
  const res = await axios.post(url, { ...param, sig });
  return res;
};

export interface IBindMetadataParams {
  chain_name: string;
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
    _CONTRACT.META4D_NFT_REGISTRY[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const hash1 = ethers.utils.solidityKeccak256(
    ["bytes"],
    [
      ethers.utils.solidityPack(
        ["address", "uint"],
        [param.originalNFT, param.originalTokenId]
      ),
    ]
  );
  const m4mNFTId = ethers.BigNumber.from(hash1);
  const hash2 = ethers.utils.solidityKeccak256(
    ["bytes"],
    [
      ethers.utils.solidityPack(
        [
          "uint",
          `uint[${param.componentIds.length}]`,
          `uint[${param.amounts.length}]`,
        ],
        [m4mNFTId, param.componentIds, param.amounts]
      ),
    ]
  );
  const sig = await provider.getSigner().signMessage(hash2);
  const tx = await registry.convertNFT(
    param.originalNFT,
    param.originalTokenId,
    param.componentIds,
    param.amounts,
    sig
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
    _CONTRACT.META4D_NFT_REGISTRY[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const res = await registry.splitM4mNFT(
    param.m4mNFTId,
    param.componentIds,
    param.amounts
  );
  return res;
};
export const assembleM4mNFT = async (param: ICommonM4mNFTParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.META4D_NFT_REGISTRY[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const res = await registry.assembleM4mNFT(
    param.m4mNFTId,
    param.componentIds,
    param.amounts
  );
  return res;
};

export const redeemNFT = async (param: ICommonM4mNFTParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const chainId = await signer.getChainId();
  const registry = new Contract(
    _CONTRACT.META4D_NFT_REGISTRY[chainId],
    M4mNFTRegistry__factory.abi,
    signer
  ) as M4mNFTRegistry;
  const res = await registry.redeem(
    param.m4mNFTId,
    param.componentIds,
    param.amounts
  );
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
  const res = await nft.setApprovalForAll(targetContract, true);
  return res;
};
