/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061124c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610d5c565b610228565b60405190151581526020015b60405180910390f35b61010461027a565b6040516100f39190610dd1565b61012461011f366004610de4565b61030c565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610e19565b6103a6565b005b61014f61015f366004610e43565b6104bc565b61014f610172366004610e43565b6104ed565b610124610185366004610de4565b610508565b61019d610198366004610e7f565b61057f565b6040519081526020016100f3565b610104610606565b61014f6101c1366004610e9a565b610615565b61014f6101d4366004610eec565b610624565b6101046101e7366004610de4565b61065c565b6100e76101fa366004610fc8565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061025957506001600160e01b03198216635b5e139f60e01b145b8061027457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606065805461028990610ffb565b80601f01602080910402602001604051908101604052809291908181526020018280546102b590610ffb565b80156103025780601f106102d757610100808354040283529160200191610302565b820191906000526020600020905b8154815290600101906020018083116102e557829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b031661038a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b60006103b182610508565b9050806001600160a01b0316836001600160a01b0316141561041f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610381565b336001600160a01b038216148061043b575061043b81336101fa565b6104ad5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610381565b6104b78383610744565b505050565b6104c633826107b2565b6104e25760405162461bcd60e51b815260040161038190611036565b6104b78383836108a9565b6104b783838360405180602001604052806000815250610624565b6000818152606760205260408120546001600160a01b0316806102745760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610381565b60006001600160a01b0382166105ea5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610381565b506001600160a01b031660009081526068602052604090205490565b60606066805461028990610ffb565b610620338383610a45565b5050565b61062e33836107b2565b61064a5760405162461bcd60e51b815260040161038190611036565b61065684848484610b14565b50505050565b6000818152606760205260409020546060906001600160a01b03166106db5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610381565b60006106f260408051602081019091526000815290565b90506000815111610712576040518060200160405280600081525061073d565b8061071c84610b47565b60405160200161072d929190611087565b6040516020818303038152906040525b9392505050565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061077982610508565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152606760205260408120546001600160a01b031661082b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610381565b600061083683610508565b9050806001600160a01b0316846001600160a01b031614806108715750836001600160a01b03166108668461030c565b6001600160a01b0316145b806108a157506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166108bc82610508565b6001600160a01b0316146109205760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610381565b6001600160a01b0382166109825760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610381565b61098d600082610744565b6001600160a01b03831660009081526068602052604081208054600192906109b69084906110cc565b90915550506001600160a01b03821660009081526068602052604081208054600192906109e49084906110e3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610aa75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610381565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b1f8484846108a9565b610b2b84848484610c45565b6106565760405162461bcd60e51b8152600401610381906110fb565b606081610b6b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b955780610b7f8161114d565b9150610b8e9050600a8361117e565b9150610b6f565b60008167ffffffffffffffff811115610bb057610bb0610ed6565b6040519080825280601f01601f191660200182016040528015610bda576020820181803683370190505b5090505b84156108a157610bef6001836110cc565b9150610bfc600a86611192565b610c079060306110e3565b60f81b818381518110610c1c57610c1c6111a6565b60200101906001600160f81b031916908160001a905350610c3e600a8661117e565b9450610bde565b60006001600160a01b0384163b15610d3857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c899033908990889088906004016111bc565b6020604051808303816000875af1925050508015610cc4575060408051601f3d908101601f19168201909252610cc1918101906111f9565b60015b610d1e573d808015610cf2576040519150601f19603f3d011682016040523d82523d6000602084013e610cf7565b606091505b508051610d165760405162461bcd60e51b8152600401610381906110fb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108a1565b506001949350505050565b6001600160e01b031981168114610d5957600080fd5b50565b600060208284031215610d6e57600080fd5b813561073d81610d43565b60005b83811015610d94578181015183820152602001610d7c565b838111156106565750506000910152565b60008151808452610dbd816020860160208601610d79565b601f01601f19169290920160200192915050565b60208152600061073d6020830184610da5565b600060208284031215610df657600080fd5b5035919050565b80356001600160a01b0381168114610e1457600080fd5b919050565b60008060408385031215610e2c57600080fd5b610e3583610dfd565b946020939093013593505050565b600080600060608486031215610e5857600080fd5b610e6184610dfd565b9250610e6f60208501610dfd565b9150604084013590509250925092565b600060208284031215610e9157600080fd5b61073d82610dfd565b60008060408385031215610ead57600080fd5b610eb683610dfd565b915060208301358015158114610ecb57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610f0257600080fd5b610f0b85610dfd565b9350610f1960208601610dfd565b925060408501359150606085013567ffffffffffffffff80821115610f3d57600080fd5b818701915087601f830112610f5157600080fd5b813581811115610f6357610f63610ed6565b604051601f8201601f19908116603f01168101908382118183101715610f8b57610f8b610ed6565b816040528281528a6020848701011115610fa457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fdb57600080fd5b610fe483610dfd565b9150610ff260208401610dfd565b90509250929050565b600181811c9082168061100f57607f821691505b6020821081141561103057634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008351611099818460208801610d79565b8351908301906110ad818360208801610d79565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110de576110de6110b6565b500390565b600082198211156110f6576110f66110b6565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000600019821415611161576111616110b6565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261118d5761118d611168565b500490565b6000826111a1576111a1611168565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111ef90830184610da5565b9695505050505050565b60006020828403121561120b57600080fd5b815161073d81610d4356fea264697066735822122095fedbb7adfa20383ff12cc04dfb063c466f298fa778321317a64a9ad78f4b0f64736f6c634300080c0033";

type ERC721UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC721UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721Upgradeable";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }
  static readonly contractName: "ERC721Upgradeable";
  public readonly contractName: "ERC721Upgradeable";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}
