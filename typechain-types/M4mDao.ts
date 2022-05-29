/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface M4mDaoInterface extends utils.Interface {
  contractName: "M4mDao";
  functions: {
    "convertRecord(uint256,address,address,uint256)": FunctionFragment;
    "convertToM4mNFT(address,uint256)": FunctionFragment;
    "convertibleList(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "m4mNFT()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "redeem(uint256,address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setConvertibleList(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "convertRecord",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToM4mNFT",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertibleList",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "m4mNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setConvertibleList",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "convertRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToM4mNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertibleList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "m4mNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConvertibleList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ConvertToM4mNFT(address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Redeem(address,address,uint256,uint256)": EventFragment;
    "SetConvertibleList(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConvertToM4mNFT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConvertibleList"): EventFragment;
}

export type ConvertToM4mNFTEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { owner: string; origin: string; tokenId: BigNumber; m4mTokenId: BigNumber }
>;

export type ConvertToM4mNFTEventFilter = TypedEventFilter<ConvertToM4mNFTEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RedeemEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { owner: string; origin: string; tokenId: BigNumber; m4mTokenId: BigNumber }
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export type SetConvertibleListEvent = TypedEvent<
  [string, boolean],
  { nft: string; enabled: boolean }
>;

export type SetConvertibleListEventFilter =
  TypedEventFilter<SetConvertibleListEvent>;

export interface M4mDao extends BaseContract {
  contractName: "M4mDao";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: M4mDaoInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    convertRecord(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    convertToM4mNFT(
      origin: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    convertibleList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _m4mNFT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    m4mNFT(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      m4mTokenId: BigNumberish,
      origin: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConvertibleList(
      nft: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  convertRecord(
    arg0: BigNumberish,
    arg1: string,
    arg2: string,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  convertToM4mNFT(
    origin: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  convertibleList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _m4mNFT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  m4mNFT(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  redeem(
    m4mTokenId: BigNumberish,
    origin: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConvertibleList(
    nft: string,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    convertRecord(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    convertToM4mNFT(
      origin: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    convertibleList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    initialize(_m4mNFT: string, overrides?: CallOverrides): Promise<void>;

    m4mNFT(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    redeem(
      m4mTokenId: BigNumberish,
      origin: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setConvertibleList(
      nft: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ConvertToM4mNFT(address,address,uint256,uint256)"(
      owner?: null,
      origin?: null,
      tokenId?: null,
      m4mTokenId?: null
    ): ConvertToM4mNFTEventFilter;
    ConvertToM4mNFT(
      owner?: null,
      origin?: null,
      tokenId?: null,
      m4mTokenId?: null
    ): ConvertToM4mNFTEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Redeem(address,address,uint256,uint256)"(
      owner?: null,
      origin?: null,
      tokenId?: null,
      m4mTokenId?: null
    ): RedeemEventFilter;
    Redeem(
      owner?: null,
      origin?: null,
      tokenId?: null,
      m4mTokenId?: null
    ): RedeemEventFilter;

    "SetConvertibleList(address,bool)"(
      nft?: null,
      enabled?: null
    ): SetConvertibleListEventFilter;
    SetConvertibleList(
      nft?: null,
      enabled?: null
    ): SetConvertibleListEventFilter;
  };

  estimateGas: {
    convertRecord(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToM4mNFT(
      origin: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    convertibleList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _m4mNFT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    m4mNFT(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      m4mTokenId: BigNumberish,
      origin: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConvertibleList(
      nft: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    convertRecord(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertToM4mNFT(
      origin: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    convertibleList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _m4mNFT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    m4mNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      m4mTokenId: BigNumberish,
      origin: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConvertibleList(
      nft: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
