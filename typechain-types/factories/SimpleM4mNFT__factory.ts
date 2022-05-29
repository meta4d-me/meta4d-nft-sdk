/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleM4mNFT, SimpleM4mNFTInterface } from "../SimpleM4mNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPaused",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "minter",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    name: "safeMint",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [],
    name: "tokenIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [],
    name: "totalSupply",
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
  "0x60806040523480156200001157600080fd5b5060405162001b3d38038062001b3d8339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000288565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b602082108114156200028257634e487b7160e01b600052602260045260246000fd5b50919050565b6118a580620002986000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b8578063b88d4fde1161007c578063b88d4fde1461028e578063c87b56dd146102a1578063d0def521146102b4578063d204c45e146102c7578063d55f9273146102da578063e985e9c5146102e357600080fd5b806370a082311461022a5780637e4831d31461023d57806395d89b411461024a578063a22cb46514610252578063ac8d856c1461026557600080fd5b806323b872dd116100ff57806323b872dd146101cb5780632f745c59146101de57806342842e0e146101f15780634f6ccce7146102045780636352211e1461021757600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a3660046112e3565b61031f565b60405190151581526020015b60405180910390f35b61016c61034a565b60405161015b9190611354565b61018c610187366004611367565b6103dc565b6040516001600160a01b03909116815260200161015b565b6101b76101b236600461139c565b610476565b005b6008545b60405190815260200161015b565b6101b76101d93660046113c6565b61058c565b6101bd6101ec36600461139c565b6105bd565b6101b76101ff3660046113c6565b610653565b6101bd610212366004611367565b61066e565b61018c610225366004611367565b610701565b6101bd610238366004611402565b610778565b600b5461014f9060ff1681565b61016c6107ff565b6101b761026036600461141d565b61080e565b61018c610273366004611367565b600d602052600090815260409020546001600160a01b031681565b6101b761029c3660046114e5565b6108d3565b61016c6102af366004611367565b61090b565b6101b76102c2366004611561565b610946565b6101b76102d5366004611561565b6109ad565b6101bd600a5481565b61014f6102f13660046115c3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b14806103445750610344826109b9565b92915050565b606060008054610359906115f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610385906115f6565b80156103d25780601f106103a7576101008083540402835291602001916103d2565b820191906000526020600020905b8154815290600101906020018083116103b557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661045a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061048182610701565b9050806001600160a01b0316836001600160a01b031614156104ef5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610451565b336001600160a01b038216148061050b575061050b81336102f1565b61057d5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610451565b6105878383610a09565b505050565b6105963382610a77565b6105b25760405162461bcd60e51b815260040161045190611631565b610587838383610b6e565b60006105c883610778565b821061062a5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610451565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b610587838383604051806020016040528060008152506108d3565b600061067960085490565b82106106dc5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610451565b600882815481106106ef576106ef611682565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103445760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610451565b60006001600160a01b0382166107e35760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610451565b506001600160a01b031660009081526003602052604090205490565b606060018054610359906115f6565b6001600160a01b0382163314156108675760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610451565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108dd3383610a77565b6108f95760405162461bcd60e51b815260040161045190611631565b61090584848484610d19565b50505050565b6060600c60008381526020019081526020016000206040516020016109309190611698565b6040516020818303038152906040529050919050565b61095282600a54610d4c565b600a546000908152600c60209081526040909120825161097492840190611231565b50600a80546000908152600d6020526040812080546001600160a01b03191633179055815491906109a483611763565b91905055505050565b61095282600a54610e9a565b60006001600160e01b031982166380ac58cd60e01b14806109ea57506001600160e01b03198216635b5e139f60e01b145b8061034457506301ffc9a760e01b6001600160e01b0319831614610344565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a3e82610701565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610af05760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610451565b6000610afb83610701565b9050806001600160a01b0316846001600160a01b03161480610b365750836001600160a01b0316610b2b846103dc565b6001600160a01b0316145b80610b6657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610b8182610701565b6001600160a01b031614610be95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610451565b6001600160a01b038216610c4b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610451565b610c56838383610eb8565b610c61600082610a09565b6001600160a01b0383166000908152600360205260408120805460019290610c8a90849061177e565b90915550506001600160a01b0382166000908152600360205260408120805460019290610cb8908490611795565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610d24848484610b6e565b610d3084848484610f70565b6109055760405162461bcd60e51b8152600401610451906117ad565b6001600160a01b038216610da25760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610451565b6000818152600260205260409020546001600160a01b031615610e075760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610451565b610e1360008383610eb8565b6001600160a01b0382166000908152600360205260408120805460019290610e3c908490611795565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610eb482826040518060200160405280600081525061106e565b5050565b6001600160a01b038316610f1357610f0e81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610f36565b816001600160a01b0316836001600160a01b031614610f3657610f3683826110a1565b6001600160a01b038216610f4d576105878161113e565b826001600160a01b0316826001600160a01b0316146105875761058782826111ed565b60006001600160a01b0384163b1561106357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fb49033908990889088906004016117ff565b6020604051808303816000875af1925050508015610fef575060408051601f3d908101601f19168201909252610fec9181019061183c565b60015b611049573d80801561101d576040519150601f19603f3d011682016040523d82523d6000602084013e611022565b606091505b5080516110415760405162461bcd60e51b8152600401610451906117ad565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b66565b506001949350505050565b6110788383610d4c565b6110856000848484610f70565b6105875760405162461bcd60e51b8152600401610451906117ad565b600060016110ae84610778565b6110b8919061177e565b60008381526007602052604090205490915080821461110b576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906111509060019061177e565b6000838152600960205260408120546008805493945090928490811061117857611178611682565b90600052602060002001549050806008838154811061119957611199611682565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806111d1576111d1611859565b6001900381819060005260206000200160009055905550505050565b60006111f883610778565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b82805461123d906115f6565b90600052602060002090601f01602090048101928261125f57600085556112a5565b82601f1061127857805160ff19168380011785556112a5565b828001600101855582156112a5579182015b828111156112a557825182559160200191906001019061128a565b506112b19291506112b5565b5090565b5b808211156112b157600081556001016112b6565b6001600160e01b0319811681146112e057600080fd5b50565b6000602082840312156112f557600080fd5b8135611300816112ca565b9392505050565b6000815180845260005b8181101561132d57602081850181015186830182015201611311565b8181111561133f576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006113006020830184611307565b60006020828403121561137957600080fd5b5035919050565b80356001600160a01b038116811461139757600080fd5b919050565b600080604083850312156113af57600080fd5b6113b883611380565b946020939093013593505050565b6000806000606084860312156113db57600080fd5b6113e484611380565b92506113f260208501611380565b9150604084013590509250925092565b60006020828403121561141457600080fd5b61130082611380565b6000806040838503121561143057600080fd5b61143983611380565b91506020830135801515811461144e57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561148a5761148a611459565b604051601f8501601f19908116603f011681019082821181831017156114b2576114b2611459565b816040528093508581528686860111156114cb57600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156114fb57600080fd5b61150485611380565b935061151260208601611380565b925060408501359150606085013567ffffffffffffffff81111561153557600080fd5b8501601f8101871361154657600080fd5b6115558782356020840161146f565b91505092959194509250565b6000806040838503121561157457600080fd5b61157d83611380565b9150602083013567ffffffffffffffff81111561159957600080fd5b8301601f810185136115aa57600080fd5b6115b98582356020840161146f565b9150509250929050565b600080604083850312156115d657600080fd5b6115df83611380565b91506115ed60208401611380565b90509250929050565b600181811c9082168061160a57607f821691505b6020821081141561162b57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b66697066733a2f2f60c81b8152600060076000845481600182811c9150808316806116c457607f831692505b60208084108214156116e457634e487b7160e01b86526022600452602486fd5b8180156116f8576001811461170d5761173e565b60ff1986168a890152848a018801965061173e565b60008b81526020902060005b868110156117345781548c82018b0152908501908301611719565b505087858b010196505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156117775761177761174d565b5060010190565b6000828210156117905761179061174d565b500390565b600082198211156117a8576117a861174d565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061183290830184611307565b9695505050505050565b60006020828403121561184e57600080fd5b8151611300816112ca565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220c3474a1ec3608dfedfd18fb21c4d5b1d9befa325cd81fa87d1dd54055b6fb3ac64736f6c634300080c0033";

type SimpleM4mNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleM4mNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleM4mNFT__factory extends ContractFactory {
  constructor(...args: SimpleM4mNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleM4mNFT";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleM4mNFT> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<SimpleM4mNFT>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): SimpleM4mNFT {
    return super.attach(address) as SimpleM4mNFT;
  }
  connect(signer: Signer): SimpleM4mNFT__factory {
    return super.connect(signer) as SimpleM4mNFT__factory;
  }
  static readonly contractName: "SimpleM4mNFT";
  public readonly contractName: "SimpleM4mNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleM4mNFTInterface {
    return new utils.Interface(_abi) as SimpleM4mNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleM4mNFT {
    return new Contract(address, _abi, signerOrProvider) as SimpleM4mNFT;
  }
}
