import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IM4mDAO, IM4mDAOInterface } from "../IM4mDAO";
export declare class IM4mDAO__factory {
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
    static createInterface(): IM4mDAOInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IM4mDAO;
}
