import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IM4mNFTRegistryInterface extends utils.Interface {
    contractName: "IM4mNFTRegistry";
    functions: {
        "assembleM4mNFT(uint256,uint256[],uint256[])": FunctionFragment;
        "components()": FunctionFragment;
        "convertNFT(address,uint256,uint256[],uint256[],bytes)": FunctionFragment;
        "dao()": FunctionFragment;
        "getTokenComponentAmount(uint256,uint256)": FunctionFragment;
        "getTokenComponentAmounts(uint256,uint256[])": FunctionFragment;
        "getTokenStatus(uint256)": FunctionFragment;
        "lock(uint256)": FunctionFragment;
        "m4mNFT()": FunctionFragment;
        "operator()": FunctionFragment;
        "redeem(uint256,uint256[],uint256[])": FunctionFragment;
        "splitM4mNFT(uint256,uint256[],uint256[])": FunctionFragment;
        "unlock(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "assembleM4mNFT", values: [BigNumberish, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "components", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertNFT", values: [string, BigNumberish, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenComponentAmount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenComponentAmounts", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getTokenStatus", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "m4mNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "splitM4mNFT", values: [BigNumberish, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "unlock", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "assembleM4mNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "components", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenComponentAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenComponentAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "m4mNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitM4mNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    events: {};
}
export interface IM4mNFTRegistry extends BaseContract {
    contractName: "IM4mNFTRegistry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IM4mNFTRegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        assembleM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        components(overrides?: CallOverrides): Promise<[string]>;
        convertNFT(original: string, tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dao(overrides?: CallOverrides): Promise<[string]>;
        getTokenComponentAmount(tokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenComponentAmounts(tokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getTokenStatus(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[number, string, string, BigNumber]>;
        lock(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        m4mNFT(overrides?: CallOverrides): Promise<[string]>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        splitM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlock(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    assembleM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    components(overrides?: CallOverrides): Promise<string>;
    convertNFT(original: string, tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dao(overrides?: CallOverrides): Promise<string>;
    getTokenComponentAmount(tokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenComponentAmounts(tokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getTokenStatus(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[number, string, string, BigNumber]>;
    lock(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    m4mNFT(overrides?: CallOverrides): Promise<string>;
    operator(overrides?: CallOverrides): Promise<string>;
    redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    splitM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlock(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        assembleM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        components(overrides?: CallOverrides): Promise<string>;
        convertNFT(original: string, tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: CallOverrides): Promise<void>;
        dao(overrides?: CallOverrides): Promise<string>;
        getTokenComponentAmount(tokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenComponentAmounts(tokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getTokenStatus(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[number, string, string, BigNumber]>;
        lock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        m4mNFT(overrides?: CallOverrides): Promise<string>;
        operator(overrides?: CallOverrides): Promise<string>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        splitM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        unlock(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        assembleM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        components(overrides?: CallOverrides): Promise<BigNumber>;
        convertNFT(original: string, tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenComponentAmount(tokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenComponentAmounts(tokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getTokenStatus(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        lock(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        m4mNFT(overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        splitM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlock(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        assembleM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        components(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertNFT(original: string, tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenComponentAmount(tokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenComponentAmounts(tokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenStatus(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lock(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        m4mNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        splitM4mNFT(tokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlock(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
