import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC1271Upgradeable, IERC1271UpgradeableInterface } from "../IERC1271Upgradeable";
export declare class IERC1271Upgradeable__factory {
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
    static createInterface(): IERC1271UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1271Upgradeable;
}
