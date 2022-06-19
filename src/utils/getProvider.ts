import {providers} from "ethers";

let provider: providers.Web3Provider | null = null;

// todo Refactor for working without metamask.
const getProvider = () => {
    if (!window.ethereum) {
        throw new Error("Provider not find");
    }
    if (!provider) {
        provider = new providers.Web3Provider(window.ethereum as unknown as providers.ExternalProvider);
    }
    return provider;
};

export default getProvider;
