import { providers, ethers } from "ethers";

let provider: providers.Web3Provider | null = null;

let handleAccountsChanged: (...args: unknown[]) => void,
  handleChainChanged: (...args: unknown[]) => void,
  handleDisconnect: (...args: unknown[]) => void,
  handleError: (...args: unknown[]) => void;

async function onAccountsChanged(accounts: string[]) {
  console.debug("[util-metamask] onAccountsChanged: ", accounts);
  getProvider();
  if (handleAccountsChanged) handleAccountsChanged(accounts);
}

async function onChainChanged(id: string) {
  // learn more: https://docs.metamask.io/guide/ethereum-provider.html#chain-ids and https://chainid.network/
  const chainId_ = Number.parseInt(id, 16);
  console.debug("[util-metamask] onChainIdChanged: ", chainId_);
  getProvider();
  if (handleChainChanged) handleChainChanged(chainId_);
}
async function onDisconnect(error: any) {
  console.debug("[util-metamask] onDisconnect: ", error);
  if (handleDisconnect) handleDisconnect(error);
}

function onError(error: string) {
  console.debug("[util-metamask] onError: ", error);
  if (handleError) handleError(error);
}

export const registerCallbacks = (callback: {
  handleAccountsChanged?: any;
  handleChainChanged?: any;
  handleDisconnect?: any;
  handleError?: any;
}) => {
  handleAccountsChanged = callback.handleAccountsChanged;
  handleChainChanged = callback.handleChainChanged;
  handleDisconnect = callback.handleDisconnect;
  handleError = callback.handleError;
};

// todo Refactor for working without metamask.
const getProvider = () => {
  if (!window.ethereum) {
    throw new Error("Provider not find");
  }
  if (provider) {
    window.ethereum.removeListener("accountsChanged", onAccountsChanged);
    window.ethereum.removeListener("chainChanged", onChainChanged);
    window.ethereum.removeListener("disconnect", onDisconnect);
    window.ethereum.removeListener("error", onError);
  }

  // provider = new providers.Web3Provider(window.ethereum as unknown as providers.ExternalProvider);
  provider = new ethers.providers.Web3Provider(window.ethereum);
  if (!provider) throw new Error("Unable to create in page provider.");

  window.ethereum.on("accountsChanged", onAccountsChanged);
  window.ethereum.on("chainChanged", onChainChanged);
  window.ethereum.on("disconnect", onDisconnect);
  window.ethereum.on("error", onError);
  return provider;
};

export default getProvider;
