import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IM4mDAOInterface extends utils.Interface {
    contractName: "IM4mDAO";
    functions: {
        "convertibleList(address)": FunctionFragment;
        "setConvertibleList(address,bool)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "convertibleList", values: [string]): string;
    encodeFunctionData(functionFragment: "setConvertibleList", values: [string, boolean]): string;
    decodeFunctionResult(functionFragment: "convertibleList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConvertibleList", data: BytesLike): Result;
    events: {};
}
export interface IM4mDAO extends BaseContract {
    contractName: "IM4mDAO";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IM4mDAOInterface;
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
        convertibleList(nft: string, overrides?: CallOverrides): Promise<[boolean]>;
        setConvertibleList(nft: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    convertibleList(nft: string, overrides?: CallOverrides): Promise<boolean>;
    setConvertibleList(nft: string, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        convertibleList(nft: string, overrides?: CallOverrides): Promise<boolean>;
        setConvertibleList(nft: string, enabled: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        convertibleList(nft: string, overrides?: CallOverrides): Promise<BigNumber>;
        setConvertibleList(nft: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        convertibleList(nft: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setConvertibleList(nft: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
