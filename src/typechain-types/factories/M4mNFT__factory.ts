/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { M4mNFT, M4mNFTInterface } from "../M4mNFT";

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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "string",
        name: "__baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    name: "initialize",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "registry",
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
        name: "data",
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
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "updateBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612030806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80634f6ccce7116100b8578063931688cb1161007c578063931688cb1461028957806395d89b411461029c578063a22cb465146102a4578063b88d4fde146102b7578063c87b56dd146102ca578063e985e9c5146102dd57600080fd5b80634f6ccce71461022a5780636352211e1461023d57806370a08231146102505780637ab4339d146102635780637b1039991461027657600080fd5b806323b872dd116100ff57806323b872dd146101cb5780632f745c59146101de57806340c10f19146101f157806342842e0e1461020457806342966c681461021757600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a36600461190c565b610319565b60405190151581526020015b60405180910390f35b61016c610344565b60405161015b9190611981565b61018c610187366004611994565b6103d6565b6040516001600160a01b03909116815260200161015b565b6101b76101b23660046119c2565b6103fd565b005b6099545b60405190815260200161015b565b6101b76101d93660046119ee565b610518565b6101bd6101ec3660046119c2565b610549565b6101b76101ff3660046119c2565b6105df565b6101b76102123660046119ee565b610636565b6101b7610225366004611994565b610651565b6101bd610238366004611994565b6106a6565b61018c61024b366004611994565b610739565b6101bd61025e366004611a2f565b610799565b6101b7610271366004611af8565b61081f565b60ca5461018c906001600160a01b031681565b6101b7610297366004611b4a565b610960565b61016c610973565b6101b76102b2366004611b7f565b610982565b6101b76102c5366004611bb2565b61098d565b61016c6102d8366004611994565b6109c5565b61014f6102eb366004611c32565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b148061033e575061033e82610a2c565b92915050565b60606065805461035390611c60565b80601f016020809104026020016040519081016040528092919081815260200182805461037f90611c60565b80156103cc5780601f106103a1576101008083540402835291602001916103cc565b820191906000526020600020905b8154815290600101906020018083116103af57829003601f168201915b5050505050905090565b60006103e182610a7c565b506000908152606960205260409020546001600160a01b031690565b600061040882610739565b9050806001600160a01b0316836001600160a01b0316141561047b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610497575061049781336102eb565b6105095760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610472565b6105138383610adb565b505050565b6105223382610b49565b61053e5760405162461bcd60e51b815260040161047290611c9b565b610513838383610bc8565b600061055483610799565b82106105b65760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610472565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b60ca546001600160a01b031633146106285760405162461bcd60e51b815260206004820152600c60248201526b696c6c20726567697374727960a01b6044820152606401610472565b6106328282610d6f565b5050565b6105138383836040518060200160405280600081525061098d565b60ca546001600160a01b0316331461069a5760405162461bcd60e51b815260206004820152600c60248201526b696c6c20726567697374727960a01b6044820152606401610472565b6106a381610d89565b50565b60006106b160995490565b82106107145760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610472565b6099828154811061072757610727611ce9565b90600052602060002001549050919050565b6000818152606760205260408120546001600160a01b03168061033e5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610472565b60006001600160a01b0382166108035760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610472565b506001600160a01b031660009081526068602052604090205490565b600054610100900460ff161580801561083f5750600054600160ff909116105b806108595750303b158015610859575060005460ff166001145b6108bc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610472565b6000805460ff1916600117905580156108df576000805461ff0019166101001790555b6108e7610e30565b82516108fa9060c990602086019061185d565b5060ca80546001600160a01b0319166001600160a01b0384161790558015610513576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b80516106329060c990602084019061185d565b60606066805461035390611c60565b610632338383610e9d565b6109973383610b49565b6109b35760405162461bcd60e51b815260040161047290611c9b565b6109bf84848484610f6c565b50505050565b60606109d082610a7c565b60006109da610f9f565b905060008151116109fa5760405180602001604052806000815250610a25565b80610a0484610fd1565b604051602001610a15929190611d1b565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b1480610a5d57506001600160e01b03198216635b5e139f60e01b145b8061033e57506301ffc9a760e01b6001600160e01b031983161461033e565b6000818152606760205260409020546001600160a01b03166106a35760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610472565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b1082610739565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b5583610739565b9050806001600160a01b0316846001600160a01b03161480610b9c57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610bc05750836001600160a01b0316610bb5846103d6565b6001600160a01b0316145b949350505050565b826001600160a01b0316610bdb82610739565b6001600160a01b031614610c3f5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610472565b6001600160a01b038216610ca15760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610472565b610cac8383836110cf565b610cb7600082610adb565b6001600160a01b0383166000908152606860205260408120805460019290610ce0908490611d60565b90915550506001600160a01b0382166000908152606860205260408120805460019290610d0e908490611d77565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6106328282604051806020016040528060008152506111a6565b6000610d9482610739565b9050610da2816000846110cf565b610dad600083610adb565b6001600160a01b0381166000908152606860205260408120805460019290610dd6908490611d60565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600054610100900460ff16610e9b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610472565b565b816001600160a01b0316836001600160a01b03161415610eff5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610472565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610f77848484610bc8565b610f83848484846111d9565b6109bf5760405162461bcd60e51b815260040161047290611d8f565b606060c9610fac306112d7565b604051602001610fbd929190611de1565b604051602081830303815290604052905090565b606081610ff55750506040805180820190915260018152600360fc1b602082015290565b8160005b811561101f578061100981611e98565b91506110189050600a83611ec9565b9150610ff9565b60008167ffffffffffffffff81111561103a5761103a611a4c565b6040519080825280601f01601f191660200182016040528015611064576020820181803683370190505b5090505b8415610bc057611079600183611d60565b9150611086600a86611edd565b611091906030611d77565b60f81b8183815181106110a6576110a6611ce9565b60200101906001600160f81b031916908160001a9053506110c8600a86611ec9565b9450611068565b6110da83838361132b565b60ca546040516323c1f0ad60e21b8152600481018390526000916001600160a01b031690638f07c2b490602401608060405180830381865afa158015611124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111489190611ef1565b50919250600291506111579050565b81600381111561116957611169611f3e565b14156109bf5760405162461bcd60e51b815260206004820152600c60248201526b1d1bdad95b881b1bd8dad95960a21b6044820152606401610472565b6111b083836113e3565b6111bd60008484846111d9565b6105135760405162461bcd60e51b815260040161047290611d8f565b60006001600160a01b0384163b156112cc57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061121d903390899088908890600401611f54565b6020604051808303816000875af1925050508015611258575060408051601f3d908101601f1916820190925261125591810190611f91565b60015b6112b2573d808015611286576040519150601f19603f3d011682016040523d82523d6000602084013e61128b565b606091505b5080516112aa5760405162461bcd60e51b815260040161047290611d8f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bc0565b506001949350505050565b6060816112fe5750506040805180820190915260048152630307830360e41b602082015290565b8160005b8115611321578061131281611e98565b915050600882901c9150611302565b610bc08482611531565b6001600160a01b0383166113865761138181609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b6113a9565b816001600160a01b0316836001600160a01b0316146113a9576113a983826116cd565b6001600160a01b0382166113c0576105138161176a565b826001600160a01b0316826001600160a01b031614610513576105138282611819565b6001600160a01b0382166114395760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610472565b6000818152606760205260409020546001600160a01b03161561149e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610472565b6114aa600083836110cf565b6001600160a01b03821660009081526068602052604081208054600192906114d3908490611d77565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60606000611540836002611fae565b61154b906002611d77565b67ffffffffffffffff81111561156357611563611a4c565b6040519080825280601f01601f19166020018201604052801561158d576020820181803683370190505b509050600360fc1b816000815181106115a8576115a8611ce9565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106115d7576115d7611ce9565b60200101906001600160f81b031916908160001a90535060006115fb846002611fae565b611606906001611d77565b90505b600181111561167e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061163a5761163a611ce9565b1a60f81b82828151811061165057611650611ce9565b60200101906001600160f81b031916908160001a90535060049490941c9361167781611fcd565b9050611609565b508315610a255760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610472565b600060016116da84610799565b6116e49190611d60565b600083815260986020526040902054909150808214611737576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b60995460009061177c90600190611d60565b6000838152609a6020526040812054609980549394509092849081106117a4576117a4611ce9565b9060005260206000200154905080609983815481106117c5576117c5611ce9565b6000918252602080832090910192909255828152609a909152604080822084905585825281205560998054806117fd576117fd611fe4565b6001900381819060005260206000200160009055905550505050565b600061182483610799565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b82805461186990611c60565b90600052602060002090601f01602090048101928261188b57600085556118d1565b82601f106118a457805160ff19168380011785556118d1565b828001600101855582156118d1579182015b828111156118d15782518255916020019190600101906118b6565b506118dd9291506118e1565b5090565b5b808211156118dd57600081556001016118e2565b6001600160e01b0319811681146106a357600080fd5b60006020828403121561191e57600080fd5b8135610a25816118f6565b60005b8381101561194457818101518382015260200161192c565b838111156109bf5750506000910152565b6000815180845261196d816020860160208601611929565b601f01601f19169290920160200192915050565b602081526000610a256020830184611955565b6000602082840312156119a657600080fd5b5035919050565b6001600160a01b03811681146106a357600080fd5b600080604083850312156119d557600080fd5b82356119e0816119ad565b946020939093013593505050565b600080600060608486031215611a0357600080fd5b8335611a0e816119ad565b92506020840135611a1e816119ad565b929592945050506040919091013590565b600060208284031215611a4157600080fd5b8135610a25816119ad565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611a7d57611a7d611a4c565b604051601f8501601f19908116603f01168101908282118183101715611aa557611aa5611a4c565b81604052809350858152868686011115611abe57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611ae957600080fd5b610a2583833560208501611a62565b60008060408385031215611b0b57600080fd5b823567ffffffffffffffff811115611b2257600080fd5b611b2e85828601611ad8565b9250506020830135611b3f816119ad565b809150509250929050565b600060208284031215611b5c57600080fd5b813567ffffffffffffffff811115611b7357600080fd5b610bc084828501611ad8565b60008060408385031215611b9257600080fd5b8235611b9d816119ad565b915060208301358015158114611b3f57600080fd5b60008060008060808587031215611bc857600080fd5b8435611bd3816119ad565b93506020850135611be3816119ad565b925060408501359150606085013567ffffffffffffffff811115611c0657600080fd5b8501601f81018713611c1757600080fd5b611c2687823560208401611a62565b91505092959194509250565b60008060408385031215611c4557600080fd5b8235611c50816119ad565b91506020830135611b3f816119ad565b600181811c90821680611c7457607f821691505b60208210811415611c9557634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60008151611d11818560208601611929565b9290920192915050565b60008351611d2d818460208801611929565b835190830190611d41818360208801611929565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611d7257611d72611d4a565b500390565b60008219821115611d8a57611d8a611d4a565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600080845481600182811c915080831680611dfd57607f831692505b6020808410821415611e1d57634e487b7160e01b86526022600452602486fd5b818015611e315760018114611e4257611e6f565b60ff19861689528489019650611e6f565b60008b81526020902060005b86811015611e675781548b820152908501908301611e4e565b505084890196505b505050505050611e8f611e828286611cff565b602f60f81b815260010190565b95945050505050565b6000600019821415611eac57611eac611d4a565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611ed857611ed8611eb3565b500490565b600082611eec57611eec611eb3565b500690565b60008060008060808587031215611f0757600080fd5b845160048110611f1657600080fd5b602086015160408701519195509350611f2e816119ad565b6060959095015193969295505050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611f8790830184611955565b9695505050505050565b600060208284031215611fa357600080fd5b8151610a25816118f6565b6000816000190483118215151615611fc857611fc8611d4a565b500290565b600081611fdc57611fdc611d4a565b506000190190565b634e487b7160e01b600052603160045260246000fdfea26469706673582212202a897d2347f9b0c9deed12e9926ada9dc50dad0645ec61de04bdddc5e8647d6f64736f6c634300080c0033";

type M4mNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: M4mNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class M4mNFT__factory extends ContractFactory {
  constructor(...args: M4mNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "M4mNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<M4mNFT> {
    return super.deploy(overrides || {}) as Promise<M4mNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): M4mNFT {
    return super.attach(address) as M4mNFT;
  }
  connect(signer: Signer): M4mNFT__factory {
    return super.connect(signer) as M4mNFT__factory;
  }
  static readonly contractName: "M4mNFT";
  public readonly contractName: "M4mNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): M4mNFTInterface {
    return new utils.Interface(_abi) as M4mNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): M4mNFT {
    return new Contract(address, _abi, signerOrProvider) as M4mNFT;
  }
}
