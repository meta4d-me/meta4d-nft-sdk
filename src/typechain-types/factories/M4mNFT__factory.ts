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
  "0x608060405234801561001057600080fd5b5061214d806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80634f6ccce7116100b8578063931688cb1161007c578063931688cb1461028957806395d89b411461029c578063a22cb465146102a4578063b88d4fde146102b7578063c87b56dd146102ca578063e985e9c5146102dd57600080fd5b80634f6ccce71461022a5780636352211e1461023d57806370a08231146102505780637ab4339d146102635780637b1039991461027657600080fd5b806323b872dd116100ff57806323b872dd146101cb5780632f745c59146101de57806340c10f19146101f157806342842e0e1461020457806342966c681461021757600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a366004611a3e565b610319565b60405190151581526020015b60405180910390f35b61016c610344565b60405161015b9190611ab3565b61018c610187366004611ac6565b6103d6565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611af4565b6103fd565b005b6099545b60405190815260200161015b565b6101b76101d9366004611b20565b610518565b6101bd6101ec366004611af4565b610549565b6101b76101ff366004611af4565b6105df565b6101b7610212366004611b20565b610636565b6101b7610225366004611ac6565b610651565b6101bd610238366004611ac6565b6106a6565b61018c61024b366004611ac6565b610739565b6101bd61025e366004611b61565b610799565b6101b7610271366004611c2a565b61081f565b60ca5461018c906001600160a01b031681565b6101b7610297366004611c7c565b610960565b61016c610973565b6101b76102b2366004611cb1565b610982565b6101b76102c5366004611ce4565b61098d565b61016c6102d8366004611ac6565b6109c5565b61014f6102eb366004611d64565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b148061033e575061033e82610a2c565b92915050565b60606065805461035390611d92565b80601f016020809104026020016040519081016040528092919081815260200182805461037f90611d92565b80156103cc5780601f106103a1576101008083540402835291602001916103cc565b820191906000526020600020905b8154815290600101906020018083116103af57829003601f168201915b5050505050905090565b60006103e182610a7c565b506000908152606960205260409020546001600160a01b031690565b600061040882610739565b9050806001600160a01b0316836001600160a01b0316141561047b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610497575061049781336102eb565b6105095760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610472565b6105138383610adb565b505050565b6105223382610b49565b61053e5760405162461bcd60e51b815260040161047290611dcd565b610513838383610bc8565b600061055483610799565b82106105b65760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610472565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b60ca546001600160a01b031633146106285760405162461bcd60e51b815260206004820152600c60248201526b696c6c20726567697374727960a01b6044820152606401610472565b6106328282610d39565b5050565b6105138383836040518060200160405280600081525061098d565b60ca546001600160a01b0316331461069a5760405162461bcd60e51b815260206004820152600c60248201526b696c6c20726567697374727960a01b6044820152606401610472565b6106a381610d53565b50565b60006106b160995490565b82106107145760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610472565b6099828154811061072757610727611e1a565b90600052602060002001549050919050565b6000818152606760205260408120546001600160a01b03168061033e5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610472565b60006001600160a01b0382166108035760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610472565b506001600160a01b031660009081526068602052604090205490565b600054610100900460ff161580801561083f5750600054600160ff909116105b806108595750303b158015610859575060005460ff166001145b6108bc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610472565b6000805460ff1916600117905580156108df576000805461ff0019166101001790555b6108e7610df6565b82516108fa9060c990602086019061198f565b5060ca80546001600160a01b0319166001600160a01b0384161790558015610513576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b80516106329060c990602084019061198f565b60606066805461035390611d92565b610632338383610e63565b6109973383610b49565b6109b35760405162461bcd60e51b815260040161047290611dcd565b6109bf84848484610f32565b50505050565b60606109d082610a7c565b60006109da610f65565b905060008151116109fa5760405180602001604052806000815250610a25565b80610a0484610f97565b604051602001610a15929190611e4c565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b1480610a5d57506001600160e01b03198216635b5e139f60e01b145b8061033e57506301ffc9a760e01b6001600160e01b031983161461033e565b6000818152606760205260409020546001600160a01b03166106a35760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610472565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b1082610739565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b5583610739565b9050806001600160a01b0316846001600160a01b03161480610b9c57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610bc05750836001600160a01b0316610bb5846103d6565b6001600160a01b0316145b949350505050565b826001600160a01b0316610bdb82610739565b6001600160a01b031614610c015760405162461bcd60e51b815260040161047290611e7b565b6001600160a01b038216610c635760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610472565b610c708383836001611034565b826001600160a01b0316610c8382610739565b6001600160a01b031614610ca95760405162461bcd60e51b815260040161047290611e7b565b600081815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260688552838620805460001901905590871680865283862080546001019055868652606790945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610632828260405180602001604052806000815250611113565b6000610d5e82610739565b9050610d6e816000846001611034565b610d7782610739565b600083815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526068845282852080546000190190558785526067909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600054610100900460ff16610e615760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610472565b565b816001600160a01b0316836001600160a01b03161415610ec55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610472565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610f3d848484610bc8565b610f4984848484611146565b6109bf5760405162461bcd60e51b815260040161047290611ec0565b606060c9610f7230611244565b604051602001610f83929190611f12565b604051602081830303815290604052905090565b60606000610fa48361125b565b600101905060008167ffffffffffffffff811115610fc457610fc4611b7e565b6040519080825280601f01601f191660200182016040528015610fee576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846110275761102c565b610ff8565b509392505050565b61104084848484611333565b60ca546040516323c1f0ad60e21b8152600481018490526000916001600160a01b031690638f07c2b490602401608060405180830381865afa15801561108a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ae9190611fc9565b50919250600291506110bd9050565b8160038111156110cf576110cf612016565b141561110c5760405162461bcd60e51b815260206004820152600c60248201526b1d1bdad95b881b1bd8dad95960a21b6044820152606401610472565b5050505050565b61111d8383611460565b61112a6000848484611146565b6105135760405162461bcd60e51b815260040161047290611ec0565b60006001600160a01b0384163b1561123957604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061118a90339089908890889060040161202c565b6020604051808303816000875af19250505080156111c5575060408051601f3d908101601f191682019092526111c291810190612069565b60015b61121f573d8080156111f3576040519150601f19603f3d011682016040523d82523d6000602084013e6111f8565b606091505b5080516112175760405162461bcd60e51b815260040161047290611ec0565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bc0565b506001949350505050565b606061033e82611253846115f9565b600101611663565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061129a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106112c6576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106112e457662386f26fc10000830492506010015b6305f5e10083106112fc576305f5e100830492506008015b612710831061131057612710830492506004015b60648310611322576064830492506002015b600a831061033e5760010192915050565b60018111156113a25760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b6064820152608401610472565b816001600160a01b0385166113fe576113f981609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b611421565b836001600160a01b0316856001600160a01b0316146114215761142185826117ff565b6001600160a01b03841661143d576114388161189c565b61110c565b846001600160a01b0316846001600160a01b03161461110c5761110c848261194b565b6001600160a01b0382166114b65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610472565b6000818152606760205260409020546001600160a01b03161561151b5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610472565b611529600083836001611034565b6000818152606760205260409020546001600160a01b03161561158e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610472565b6001600160a01b038216600081815260686020908152604080832080546001019055848352606790915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080608083901c156116115760809290921c916010015b604083901c156116265760409290921c916008015b602083901c1561163b5760209290921c916004015b601083901c156116505760109290921c916002015b600883901c1561033e5760010192915050565b6060600061167283600261209c565b61167d9060026120bb565b67ffffffffffffffff81111561169557611695611b7e565b6040519080825280601f01601f1916602001820160405280156116bf576020820181803683370190505b509050600360fc1b816000815181106116da576116da611e1a565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061170957611709611e1a565b60200101906001600160f81b031916908160001a905350600061172d84600261209c565b6117389060016120bb565b90505b60018111156117b0576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061176c5761176c611e1a565b1a60f81b82828151811061178257611782611e1a565b60200101906001600160f81b031916908160001a90535060049490941c936117a9816120d3565b905061173b565b508315610a255760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610472565b6000600161180c84610799565b61181691906120ea565b600083815260986020526040902054909150808214611869576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b6099546000906118ae906001906120ea565b6000838152609a6020526040812054609980549394509092849081106118d6576118d6611e1a565b9060005260206000200154905080609983815481106118f7576118f7611e1a565b6000918252602080832090910192909255828152609a9091526040808220849055858252812055609980548061192f5761192f612101565b6001900381819060005260206000200160009055905550505050565b600061195683610799565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b82805461199b90611d92565b90600052602060002090601f0160209004810192826119bd5760008555611a03565b82601f106119d657805160ff1916838001178555611a03565b82800160010185558215611a03579182015b82811115611a035782518255916020019190600101906119e8565b50611a0f929150611a13565b5090565b5b80821115611a0f5760008155600101611a14565b6001600160e01b0319811681146106a357600080fd5b600060208284031215611a5057600080fd5b8135610a2581611a28565b60005b83811015611a76578181015183820152602001611a5e565b838111156109bf5750506000910152565b60008151808452611a9f816020860160208601611a5b565b601f01601f19169290920160200192915050565b602081526000610a256020830184611a87565b600060208284031215611ad857600080fd5b5035919050565b6001600160a01b03811681146106a357600080fd5b60008060408385031215611b0757600080fd5b8235611b1281611adf565b946020939093013593505050565b600080600060608486031215611b3557600080fd5b8335611b4081611adf565b92506020840135611b5081611adf565b929592945050506040919091013590565b600060208284031215611b7357600080fd5b8135610a2581611adf565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611baf57611baf611b7e565b604051601f8501601f19908116603f01168101908282118183101715611bd757611bd7611b7e565b81604052809350858152868686011115611bf057600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611c1b57600080fd5b610a2583833560208501611b94565b60008060408385031215611c3d57600080fd5b823567ffffffffffffffff811115611c5457600080fd5b611c6085828601611c0a565b9250506020830135611c7181611adf565b809150509250929050565b600060208284031215611c8e57600080fd5b813567ffffffffffffffff811115611ca557600080fd5b610bc084828501611c0a565b60008060408385031215611cc457600080fd5b8235611ccf81611adf565b915060208301358015158114611c7157600080fd5b60008060008060808587031215611cfa57600080fd5b8435611d0581611adf565b93506020850135611d1581611adf565b925060408501359150606085013567ffffffffffffffff811115611d3857600080fd5b8501601f81018713611d4957600080fd5b611d5887823560208401611b94565b91505092959194509250565b60008060408385031215611d7757600080fd5b8235611d8281611adf565b91506020830135611c7181611adf565b600181811c90821680611da657607f821691505b60208210811415611dc757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60008151611e42818560208601611a5b565b9290920192915050565b60008351611e5e818460208801611a5b565b835190830190611e72818360208801611a5b565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600080845481600182811c915080831680611f2e57607f831692505b6020808410821415611f4e57634e487b7160e01b86526022600452602486fd5b818015611f625760018114611f7357611fa0565b60ff19861689528489019650611fa0565b60008b81526020902060005b86811015611f985781548b820152908501908301611f7f565b505084890196505b505050505050611fc0611fb38286611e30565b602f60f81b815260010190565b95945050505050565b60008060008060808587031215611fdf57600080fd5b845160048110611fee57600080fd5b60208601516040870151919550935061200681611adf565b6060959095015193969295505050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061205f90830184611a87565b9695505050505050565b60006020828403121561207b57600080fd5b8151610a2581611a28565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156120b6576120b6612086565b500290565b600082198211156120ce576120ce612086565b500190565b6000816120e2576120e2612086565b506000190190565b6000828210156120fc576120fc612086565b500390565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220764bb081f72a82d1293d62b151dfc25ee95e39f5f6002832441dea614e715a8864736f6c634300080c0033";

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
