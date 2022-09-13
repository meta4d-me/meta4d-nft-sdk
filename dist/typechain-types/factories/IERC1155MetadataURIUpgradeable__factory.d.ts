import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC1155MetadataURIUpgradeable, IERC1155MetadataURIUpgradeableInterface } from "../IERC1155MetadataURIUpgradeable";
export declare class IERC1155MetadataURIUpgradeable__factory {
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
    static createInterface(): IERC1155MetadataURIUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155MetadataURIUpgradeable;
}
