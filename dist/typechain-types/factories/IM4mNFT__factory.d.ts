import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IM4mNFT, IM4mNFTInterface } from "../IM4mNFT";
export declare class IM4mNFT__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IM4mNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IM4mNFT;
}
