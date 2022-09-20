import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface M4mNFTRegistryInterface extends utils.Interface {
    contractName: "M4mNFTRegistry";
    functions: {
        "assembleM4mNFT(uint256,uint256[],uint256[])": FunctionFragment;
        "claimLoot(string,uint256[],uint256[],bytes)": FunctionFragment;
        "claimedLoot(bytes32)": FunctionFragment;
        "components()": FunctionFragment;
        "convertNFT(address,uint256,uint256[],uint256[],bytes)": FunctionFragment;
        "dao()": FunctionFragment;
        "getTokenComponentAmount(uint256,uint256)": FunctionFragment;
        "getTokenComponentAmounts(uint256,uint256[])": FunctionFragment;
        "getTokenStatus(uint256)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "lock(uint256)": FunctionFragment;
        "m4mNFT()": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "operator()": FunctionFragment;
        "owner()": FunctionFragment;
        "redeem(uint256,uint256[],uint256[])": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setOperator(address)": FunctionFragment;
        "splitM4mNFT(uint256,uint256[],uint256[])": FunctionFragment;
        "splitTokens(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unlock(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "assembleM4mNFT", values: [BigNumberish, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimLoot", values: [string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "claimedLoot", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "components", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertNFT", values: [string, BigNumberish, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenComponentAmount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenComponentAmounts", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getTokenStatus", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "lock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "m4mNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "splitM4mNFT", values: [BigNumberish, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "splitTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unlock", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "assembleM4mNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimLoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedLoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "components", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenComponentAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenComponentAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "m4mNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitM4mNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    events: {
        "Assemble(uint256,uint256[],uint256[])": EventFragment;
        "ClaimedLoot(address,uint256[],uint256[])": EventFragment;
        "ConvertToM4mNFT(address,address,uint256,uint256)": EventFragment;
        "Initialize(uint256,uint256[],uint256[])": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Redeem(address,address,uint256,uint256)": EventFragment;
        "SetOperator(address)": EventFragment;
        "Split(uint256,uint256[],uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Assemble"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimedLoot"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConvertToM4mNFT"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Split"): EventFragment;
}
export declare type AssembleEvent = TypedEvent<[BigNumber, BigNumber[], BigNumber[]], {
    m4mTokenId: BigNumber;
    componentIds: BigNumber[];
    amount: BigNumber[];
}>;
export declare type AssembleEventFilter = TypedEventFilter<AssembleEvent>;
export declare type ClaimedLootEvent = TypedEvent<[string, BigNumber[], BigNumber[]], {
    owner: string;
    componentIds: BigNumber[];
    amount: BigNumber[];
}>;
export declare type ClaimedLootEventFilter = TypedEventFilter<ClaimedLootEvent>;
export declare type ConvertToM4mNFTEvent = TypedEvent<[string, string, BigNumber, BigNumber], {
    owner: string;
    original: string;
    originalTokenId: BigNumber;
    m4mTokenId: BigNumber;
}>;
export declare type ConvertToM4mNFTEventFilter = TypedEventFilter<ConvertToM4mNFTEvent>;
export declare type InitializeEvent = TypedEvent<[BigNumber, BigNumber[], BigNumber[]], {
    m4mTokenId: BigNumber;
    componentIds: BigNumber[];
    amount: BigNumber[];
}>;
export declare type InitializeEventFilter = TypedEventFilter<InitializeEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[string, string], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type RedeemEvent = TypedEvent<[string, string, BigNumber, BigNumber], {
    owner: string;
    original: string;
    originalTokenId: BigNumber;
    m4mTokenId: BigNumber;
}>;
export declare type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export declare type SetOperatorEvent = TypedEvent<[string], {
    newOperator: string;
}>;
export declare type SetOperatorEventFilter = TypedEventFilter<SetOperatorEvent>;
export declare type SplitEvent = TypedEvent<[BigNumber, BigNumber[], BigNumber[]], {
    m4mTokenId: BigNumber;
    componentIds: BigNumber[];
    amount: BigNumber[];
}>;
export declare type SplitEventFilter = TypedEventFilter<SplitEvent>;
export interface M4mNFTRegistry extends BaseContract {
    contractName: "M4mNFTRegistry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: M4mNFTRegistryInterface;
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
        assembleM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimLoot(uuid: string, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimedLoot(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        components(overrides?: CallOverrides): Promise<[string]>;
        convertNFT(original: string, originalTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dao(overrides?: CallOverrides): Promise<[string]>;
        getTokenComponentAmount(m4mTokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenComponentAmounts(m4mTokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getTokenStatus(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<[number, string, string, BigNumber]>;
        initialize(_components: string, _m4mNFT: string, _dao: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lock(m4mTokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        m4mNFT(overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOperator(newOperator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        splitM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        splitTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber, number, string] & {
            original: string;
            originalTokenId: BigNumber;
            status: number;
            originalAttrHash: string;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlock(m4mTokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    assembleM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimLoot(uuid: string, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimedLoot(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    components(overrides?: CallOverrides): Promise<string>;
    convertNFT(original: string, originalTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dao(overrides?: CallOverrides): Promise<string>;
    getTokenComponentAmount(m4mTokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenComponentAmounts(m4mTokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getTokenStatus(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<[number, string, string, BigNumber]>;
    initialize(_components: string, _m4mNFT: string, _dao: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lock(m4mTokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    m4mNFT(overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operator(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOperator(newOperator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    splitM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    splitTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber, number, string] & {
        original: string;
        originalTokenId: BigNumber;
        status: number;
        originalAttrHash: string;
    }>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlock(m4mTokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        assembleM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claimLoot(uuid: string, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimedLoot(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        components(overrides?: CallOverrides): Promise<string>;
        convertNFT(original: string, originalTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: CallOverrides): Promise<void>;
        dao(overrides?: CallOverrides): Promise<string>;
        getTokenComponentAmount(m4mTokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenComponentAmounts(m4mTokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getTokenStatus(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<[number, string, string, BigNumber]>;
        initialize(_components: string, _m4mNFT: string, _dao: string, overrides?: CallOverrides): Promise<void>;
        lock(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        m4mNFT(overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        operator(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setOperator(newOperator: string, overrides?: CallOverrides): Promise<void>;
        splitM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        splitTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber, number, string] & {
            original: string;
            originalTokenId: BigNumber;
            status: number;
            originalAttrHash: string;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unlock(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Assemble(uint256,uint256[],uint256[])"(m4mTokenId?: null, componentIds?: null, amount?: null): AssembleEventFilter;
        Assemble(m4mTokenId?: null, componentIds?: null, amount?: null): AssembleEventFilter;
        "ClaimedLoot(address,uint256[],uint256[])"(owner?: null, componentIds?: null, amount?: null): ClaimedLootEventFilter;
        ClaimedLoot(owner?: null, componentIds?: null, amount?: null): ClaimedLootEventFilter;
        "ConvertToM4mNFT(address,address,uint256,uint256)"(owner?: null, original?: null, originalTokenId?: null, m4mTokenId?: null): ConvertToM4mNFTEventFilter;
        ConvertToM4mNFT(owner?: null, original?: null, originalTokenId?: null, m4mTokenId?: null): ConvertToM4mNFTEventFilter;
        "Initialize(uint256,uint256[],uint256[])"(m4mTokenId?: null, componentIds?: null, amount?: null): InitializeEventFilter;
        Initialize(m4mTokenId?: null, componentIds?: null, amount?: null): InitializeEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Redeem(address,address,uint256,uint256)"(owner?: null, original?: null, originalTokenId?: null, m4mTokenId?: null): RedeemEventFilter;
        Redeem(owner?: null, original?: null, originalTokenId?: null, m4mTokenId?: null): RedeemEventFilter;
        "SetOperator(address)"(newOperator?: null): SetOperatorEventFilter;
        SetOperator(newOperator?: null): SetOperatorEventFilter;
        "Split(uint256,uint256[],uint256[])"(m4mTokenId?: null, componentIds?: null, amount?: null): SplitEventFilter;
        Split(m4mTokenId?: null, componentIds?: null, amount?: null): SplitEventFilter;
    };
    estimateGas: {
        assembleM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimLoot(uuid: string, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimedLoot(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        components(overrides?: CallOverrides): Promise<BigNumber>;
        convertNFT(original: string, originalTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenComponentAmount(m4mTokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenComponentAmounts(m4mTokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getTokenStatus(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_components: string, _m4mNFT: string, _dao: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lock(m4mTokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        m4mNFT(overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOperator(newOperator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        splitM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        splitTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlock(m4mTokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        assembleM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimLoot(uuid: string, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimedLoot(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        components(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertNFT(original: string, originalTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenComponentAmount(m4mTokenId: BigNumberish, componentId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenComponentAmounts(m4mTokenId: BigNumberish, componentIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenStatus(m4mTokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_components: string, _m4mNFT: string, _dao: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lock(m4mTokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        m4mNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOperator(newOperator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        splitM4mNFT(m4mTokenId: BigNumberish, componentIds: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        splitTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlock(m4mTokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
