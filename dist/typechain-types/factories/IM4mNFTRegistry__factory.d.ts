import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IM4mNFTRegistry, IM4mNFTRegistryInterface } from "../IM4mNFTRegistry";
export declare class IM4mNFTRegistry__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IM4mNFTRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IM4mNFTRegistry;
}
