import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC1155Upgradeable, IERC1155UpgradeableInterface } from "../IERC1155Upgradeable";
export declare class IERC1155Upgradeable__factory {
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
    static createInterface(): IERC1155UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155Upgradeable;
}
