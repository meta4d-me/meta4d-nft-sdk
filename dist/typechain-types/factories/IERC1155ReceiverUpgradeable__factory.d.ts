import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC1155ReceiverUpgradeable, IERC1155ReceiverUpgradeableInterface } from "../IERC1155ReceiverUpgradeable";
export declare class IERC1155ReceiverUpgradeable__factory {
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
    static createInterface(): IERC1155ReceiverUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155ReceiverUpgradeable;
}
