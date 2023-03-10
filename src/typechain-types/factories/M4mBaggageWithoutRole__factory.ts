/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  M4mBaggageWithoutRole,
  M4mBaggageWithoutRoleInterface,
} from "../M4mBaggageWithoutRole";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gameId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uuid",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct IM4mBaggage.LockedNFT",
        name: "info",
        type: "tuple",
      },
    ],
    name: "GameBegin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gameId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uuid",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct IM4mBaggage.LockedNFT",
        name: "info",
        type: "tuple",
      },
    ],
    name: "GameSettled",
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
        indexed: false,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "SignerUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uuid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "inComponentIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "inAmounts",
        type: "uint256[]",
      },
    ],
    name: "gameBegin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "lootIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lootAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lostIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lostAmounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "operatorSig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "gameSignerSig",
        type: "bytes",
      },
    ],
    name: "gameEnd",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "getGameOwner",
    outputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IM4mNFTRegistryV2",
        name: "reg",
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
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uuid",
        type: "string",
      },
    ],
    name: "isGameSettled",
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
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "inComponentIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "inAmounts",
        type: "uint256[]",
      },
    ],
    name: "lockComponents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lockedComponents",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "lockedEmptyNFTs",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usedNonce",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "lockedNFTs",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uuid",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "contract IM4mNFTRegistryV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gameSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "setGameSignerAndOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "lootIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lootAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lostIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lostAmounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "operatorSig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "gameSignerSig",
        type: "bytes",
      },
    ],
    name: "settleLoots",
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
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "transferOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "transferSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "m4mTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "outComponentIds",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "operatorSig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "gameSignerSig",
        type: "bytes",
      },
    ],
    name: "unlockComponents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612df3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063a3787017116100b8578063d2e0c2301161007c578063d2e0c2301461038e578063df78cc85146103a1578063e2cf646c146103b4578063e916918b146103c7578063f23a6e61146103da578063f2fde38b146103f957600080fd5b8063a3787017146102ba578063af861af7146102f4578063b3ecdfc314610307578063bc197c811461035c578063c4d66de81461037b57600080fd5b80636539ee2d1161010a5780636539ee2d1461022d5780636f82028f14610240578063715018a6146102535780637b1039991461025b5780638da5cb5b14610287578063945633c11461029857600080fd5b806301ffc9a7146101475780630d4bb6b81461016f57806314224b16146101ce578063150b7a02146101e35780633a30556a1461021a575b600080fd5b61015a6101553660046121dc565b61040c565b60405190151581526020015b60405180910390f35b6101a961017d366004612206565b610132602052600090815260409020805460018201546002909201546001600160a01b03909116919083565b604080516001600160a01b039094168452602084019290925290820152606001610166565b6101e16101dc366004612234565b610443565b005b6102016101f1366004612319565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610166565b6101e1610228366004612403565b610507565b61015a61023b366004612502565b610a83565b6101e161024e36600461254c565b610ad0565b6101e1610c9a565b61012d5461026f906001600160a01b031681565b6040516001600160a01b039091168152602001610166565b6033546001600160a01b031661026f565b6102ab6102a6366004612206565b610cae565b604051610166939291906125ea565b6102e66102c836600461261a565b61013160209081526000928352604080842090915290825290205481565b604051908152602001610166565b6101e161030236600461263c565b610d64565b61033c610315366004612206565b61012e60205260009081526040902080546001909101546001600160a01b03918216911682565b604080516001600160a01b03938416815292909116602083015201610166565b61020161036a3660046126d7565b63bc197c8160e01b95945050505050565b6101e1610389366004612754565b61109a565b6101e161039c366004612234565b61129a565b6101e16103af366004612771565b611357565b6101e16103c23660046127db565b611652565b6101e16103d53660046128e4565b61197f565b6102016103e8366004612972565b63f23a6e6160e01b95945050505050565b6101e1610407366004612754565b611cba565b60006001600160e01b03198216630271189760e51b148061043d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815261012e60205260409020546001600160a01b0316331461049f5760405162461bcd60e51b815260206004820152600d60248201526c37b7363c9037b832b930ba37b960991b60448201526064015b60405180910390fd5b600082815261012e602090815260409182902080546001600160a01b0319166001600160a01b0385169081179091558251858152918201527f793c7e64f530286f5392e4266e68cf1d6d1f08a9c5494c8b916d4b86f546cb3e91015b60405180910390a15050565b600087815261012f60209081526040808320815160608101835281546001600160a01b03168152600182015493810193909352600281018054919284019161054e906129da565b80601f016020809104026020016040519081016040528092919081815260200182805461057a906129da565b80156105c75780601f1061059c576101008083540402835291602001916105c7565b820191906000526020600020905b8154815290600101906020018083116105aa57829003601f168201915b505050919092525050815160208084015160408086015190519596506000956105f395508e9301612a15565b60408051601f1981840301815291815281516020808401919091206000818152610130909252919020549192509060ff16156106595760405162461bcd60e51b8152602060048201526005602482015264195b99195960da1b6044820152606401610496565b600081815261013060209081526040808320805460ff191660019081179091558d845261012f909252822080546001600160a01b0319168155908101829055906106a66002830182612109565b505081898989896040516020016106c1959493929190612a8e565b604051602081830303815290604052915081805190602001209050600083600001516001600160a01b0316336001600160a01b031614610702576000610705565b60015b60ff16905061071a8460200151838888611d33565b6107249082612ae9565b905060028110156107475760405162461bcd60e51b815260040161049690612b01565b61012d5484516040516339199b9d60e01b81526001600160a01b03909216916339199b9d9161077c918e908e90600401612b55565b600060405180830381600087803b15801561079657600080fd5b505af11580156107aa573d6000803e3d6000fd5b505061012d54604051636198e33960e01b8152600481018f90526001600160a01b039091169250636198e3399150602401600060405180830381600087803b1580156107f557600080fd5b505af1158015610809573d6000803e3d6000fd5b505061012d546040516308c0779760e11b81526001600160a01b039091169250631180ef2e9150610842908e908c908c90600401612b8b565b600060405180830381600087803b15801561085c57600080fd5b505af1158015610870573d6000803e3d6000fd5b5050505061012d60009054906101000a90046001600160a01b03166001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ec9190612ba4565b6001600160a01b0316636b20c454308a8a6040518463ffffffff1660e01b815260040161091b93929190612b55565b600060405180830381600087803b15801561093557600080fd5b505af1158015610949573d6000803e3d6000fd5b5050505061012d60009054906101000a90046001600160a01b03166001600160a01b031663be22f35e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c59190612ba4565b8451604051635c46a7ef60e11b81523060048201526001600160a01b039182166024820152604481018e9052608060648201526000608482015291169063b88d4fde9060a401600060405180830381600087803b158015610a2557600080fd5b505af1158015610a39573d6000803e3d6000fd5b505050507fa48564a91c5b3e827c8c002f85309502c8fcdc8b48c5b826798ab39b85439ecb8b85604051610a6e929190612bc1565b60405180910390a15050505050505050505050565b60008085858585604051602001610a9d9493929190612a15565b60408051808303601f190181529181528151602092830120600090815261013090925290205460ff169695505050505050565b610ad8611db8565b60008311610b155760405162461bcd60e51b815260206004820152600a6024820152691a5b1b0819d85b59525960b21b6044820152606401610496565b600083815261012e60205260409020600101546001600160a01b031615610b6a5760405162461bcd60e51b81526020600482015260096024820152686f6e6c79206f6e636560b81b6044820152606401610496565b6001600160a01b03811615801590610b8a57506001600160a01b03821615155b610bc65760405162461bcd60e51b815260206004820152600d60248201526c34b6361037b817b9b4b3b732b960991b6044820152606401610496565b6040805180820182526001600160a01b0384811682528381166020808401828152600089815261012e8352869020945185549085166001600160a01b0319918216178655905160019095018054959094169416939093179091558251868152918201527fbc3f928a2240d921e006f13446712fe7588e04553a6ddc13da2143e0ed93395b910160405180910390a1604080518481526001600160a01b03831660208201527f793c7e64f530286f5392e4266e68cf1d6d1f08a9c5494c8b916d4b86f546cb3e910160405180910390a1505050565b610ca2611db8565b610cac6000611e12565b565b61012f602052600090815260409020805460018201546002830180546001600160a01b03909316939192610ce1906129da565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0d906129da565b8015610d5a5780601f10610d2f57610100808354040283529160200191610d5a565b820191906000526020600020905b815481529060010190602001808311610d3d57829003601f168201915b5050505050905083565b60008581526101326020908152604091829020825160608101845281546001600160a01b031681526001808301549382019390935260029091015492810192909252610db09086612bff565b816040015114610dee5760405162461bcd60e51b8152602060048201526009602482015268696c6c206e6f6e636560b81b6044820152606401610496565b6000868152610132602052604081206002810187905560010181905584516001600160401b03811115610e2357610e23612264565b604051908082528060200260200182016040528015610e4c578160200160208202803683370190505b50905060005b8551811015610f0f5761013160008981526020019081526020016000206000878381518110610e8357610e83612c16565b6020026020010151815260200190815260200160002054828281518110610eac57610eac612c16565b602002602001018181525050600061013160008a81526020019081526020016000206000888481518110610ee257610ee2612c16565b60200260200101518152602001908152602001600020819055508080610f0790612c2c565b915050610e52565b5060008787846020015188604051602001610f2d9493929190612c47565b604051602081830303815290604052805190602001209050600083600001516001600160a01b0316336001600160a01b031614610f6b576000610f6e565b60015b60ff169050610f838460200151838888611d33565b610f8d9082612ae9565b90506002811015610fb05760405162461bcd60e51b815260040161049690612b01565b61012d60009054906101000a90046001600160a01b03166001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611004573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110289190612ba4565b8451604051631759616b60e11b81526001600160a01b039290921691632eb2c2d69161105d913091908c908990600401612c65565b600060405180830381600087803b15801561107757600080fd5b505af115801561108b573d6000803e3d6000fd5b50505050505050505050505050565b600054610100900460ff16158080156110ba5750600054600160ff909116105b806110d45750303b1580156110d4575060005460ff166001145b6111375760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610496565b6000805460ff19166001179055801561115a576000805461ff0019166101001790555b611162611e64565b61116a611e94565b611172611e94565b61012d80546001600160a01b0319166001600160a01b03841690811790915560408051632e98bef960e21b8152905163ba62fbe4916004808201926020929091908290030181865afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f09190612ba4565b60405163a22cb46560e01b81526001600160a01b03848116600483015260016024830152919091169063a22cb46590604401600060405180830381600087803b15801561123c57600080fd5b505af1158015611250573d6000803e3d6000fd5b505050508015611296576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020016104fb565b5050565b600082815261012e60205260409020600101546001600160a01b031633146112f45760405162461bcd60e51b815260206004820152600d60248201526c37b7363c9037b832b930ba37b960991b6044820152606401610496565b600082815261012e602090815260409182902060010180546001600160a01b0319166001600160a01b0385169081179091558251858152918201527fbc3f928a2240d921e006f13446712fe7588e04553a6ddc13da2143e0ed93395b91016104fb565b80518251148015611369575060008251115b6113a15760405162461bcd60e51b8152602060048201526009602482015268696c6c20706172616d60b81b6044820152606401610496565b600084815261012f60205260409020546001600160a01b0316156113fb5760405162461bcd60e51b8152602060048201526011602482015270191d5c1b1a58d85d195908134d1b539195607a1b6044820152606401610496565b600084815261013260205260409020546001600160a01b03168061143d5760008581526101326020526040902080546001600160a01b031916331790556114da565b6001600160a01b03811633146114865760405162461bcd60e51b815260206004820152600e60248201526d1bdddb995c881c995c5d5a5c995960921b6044820152606401610496565b60008581526101326020526040902060010154156114da5760405162461bcd60e51b815260206004820152601160248201527031b0b73737ba103637b1b59030b3b0b4b760791b6044820152606401610496565b6000858152610132602090815260409182902060010186905561012d548251632e98bef960e21b815292516001600160a01b039091169263ba62fbe49260048083019391928290030181865afa158015611538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155c9190612ba4565b6001600160a01b0316632eb2c2d6333086866040518563ffffffff1660e01b815260040161158d9493929190612c65565b600060405180830381600087803b1580156115a757600080fd5b505af11580156115bb573d6000803e3d6000fd5b5050505060005b835181101561164a578281815181106115dd576115dd612c16565b60200260200101516101316000888152602001908152602001600020600086848151811061160d5761160d612c16565b6020026020010151815260200190815260200160002060008282546116329190612ae9565b9091555081905061164281612c2c565b9150506115c2565b505050505050565b60008881526101326020908152604091829020825160608101845281546001600160a01b03168152600180830154938201939093526002909101549281019290925261169e9089612bff565b8160400151146116dc5760405162461bcd60e51b8152602060048201526009602482015268696c6c206e6f6e636560b81b6044820152606401610496565b6000898152610132602090815260408083206002018b9055838201519051611711928d92918d918d918d918d918d9101612cc0565b604051602081830303815290604052805190602001209050600082600001516001600160a01b0316336001600160a01b03161461174f576000611752565b60015b60ff1690506117678360200151838787611d33565b6117719082612ae9565b905060028110156117945760405162461bcd60e51b815260040161049690612b01565b61012d5460008c81526101326020526040908190205490516339199b9d60e01b81526001600160a01b03928316926339199b9d926117db929116908d908d90600401612b55565b600060405180830381600087803b1580156117f557600080fd5b505af1158015611809573d6000803e3d6000fd5b5050505060005b87518110156118985786818151811061182b5761182b612c16565b602002602001015161013160008e815260200190815260200160002060008a848151811061185b5761185b612c16565b6020026020010151815260200190815260200160002060008282546118809190612bff565b9091555081905061189081612c2c565b915050611810565b5061012d60009054906101000a90046001600160a01b03166001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119119190612ba4565b6001600160a01b0316636b20c4543089896040518463ffffffff1660e01b815260040161194093929190612b55565b600060405180830381600087803b15801561195a57600080fd5b505af115801561196e573d6000803e3d6000fd5b505050505050505050505050505050565b61012d60009054906101000a90046001600160a01b03166001600160a01b031663be22f35e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f79190612ba4565b604051635c46a7ef60e11b81523360048201523060248201526044810185905260806064820152600060848201526001600160a01b03919091169063b88d4fde9060a401600060405180830381600087803b158015611a5557600080fd5b505af1158015611a69573d6000803e3d6000fd5b5050505061012d60009054906101000a90046001600160a01b03166001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ac1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae59190612ba4565b6001600160a01b0316632eb2c2d6333085856040518563ffffffff1660e01b8152600401611b169493929190612c65565b600060405180830381600087803b158015611b3057600080fd5b505af1158015611b44573d6000803e3d6000fd5b505061012d5460405163124436a360e11b81526001600160a01b0390911692506324886d469150611b7d90869086908690600401612b8b565b600060405180830381600087803b158015611b9757600080fd5b505af1158015611bab573d6000803e3d6000fd5b505061012d546040516337519c1960e21b8152600481018790526001600160a01b03909116925063dd4670649150602401600060405180830381600087803b158015611bf657600080fd5b505af1158015611c0a573d6000803e3d6000fd5b50506040805160608101825233815260208082018a81528284018a815260008a815261012f845294909420835181546001600160a01b0319166001600160a01b039091161781559051600182015592518051929550859450611c759260028501929190910190612143565b509050507fa0a4d7d7327af934fdaa124a254d00fb13f61f778cd5a69cd12f0e81f058188f8482604051611caa929190612bc1565b60405180910390a1505050505050565b611cc2611db8565b6001600160a01b038116611d275760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610496565b611d3081611e12565b50565b600084815261012e60209081526040808320815180830190925280546001600160a01b039081168084526001909201541692820192909252908290611d79908786611ebb565b15611d8c5780611d8881612c2c565b9150505b611d9b82602001518787611ebb565b15611dae5780611daa81612c2c565b9150505b9695505050505050565b6033546001600160a01b03163314610cac5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610496565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16611e8b5760405162461bcd60e51b815260040161049690612d06565b610cac33611e12565b600054610100900460ff16610cac5760405162461bcd60e51b815260040161049690612d06565b6000806000611eca8585611fff565b90925090506000816004811115611ee357611ee3612d51565b148015611f015750856001600160a01b0316826001600160a01b0316145b15611f1157600192505050611ff8565b600080876001600160a01b0316631626ba7e60e01b8888604051602401611f39929190612d67565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611f779190612d88565b600060405180830381855afa9150503d8060008114611fb2576040519150601f19603f3d011682016040523d82523d6000602084013e611fb7565b606091505b5091509150818015611fca575080516020145b8015611ff157508051630b135d3f60e11b90611fef9083016020908101908401612da4565b145b9450505050505b9392505050565b6000808251604114156120365760208301516040840151606085015160001a61202a87828585612045565b9450945050505061203e565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561207c5750600090506003612100565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156120d0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166120f957600060019250925050612100565b9150600090505b94509492505050565b508054612115906129da565b6000825580601f10612125575050565b601f016020900490600052602060002090810190611d3091906121c7565b82805461214f906129da565b90600052602060002090601f01602090048101928261217157600085556121b7565b82601f1061218a57805160ff19168380011785556121b7565b828001600101855582156121b7579182015b828111156121b757825182559160200191906001019061219c565b506121c39291506121c7565b5090565b5b808211156121c357600081556001016121c8565b6000602082840312156121ee57600080fd5b81356001600160e01b031981168114611ff857600080fd5b60006020828403121561221857600080fd5b5035919050565b6001600160a01b0381168114611d3057600080fd5b6000806040838503121561224757600080fd5b8235915060208301356122598161221f565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156122a2576122a2612264565b604052919050565b600082601f8301126122bb57600080fd5b81356001600160401b038111156122d4576122d4612264565b6122e7601f8201601f191660200161227a565b8181528460208386010111156122fc57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561232f57600080fd5b843561233a8161221f565b9350602085013561234a8161221f565b92506040850135915060608501356001600160401b0381111561236c57600080fd5b612378878288016122aa565b91505092959194509250565b600082601f83011261239557600080fd5b813560206001600160401b038211156123b0576123b0612264565b8160051b6123bf82820161227a565b92835284810182019282810190878511156123d957600080fd5b83870192505b848310156123f8578235825291830191908301906123df565b979650505050505050565b600080600080600080600060e0888a03121561241e57600080fd5b8735965060208801356001600160401b038082111561243c57600080fd5b6124488b838c01612384565b975060408a013591508082111561245e57600080fd5b61246a8b838c01612384565b965060608a013591508082111561248057600080fd5b61248c8b838c01612384565b955060808a01359150808211156124a257600080fd5b6124ae8b838c01612384565b945060a08a01359150808211156124c457600080fd5b6124d08b838c016122aa565b935060c08a01359150808211156124e657600080fd5b506124f38a828b016122aa565b91505092959891949750929550565b6000806000806080858703121561251857600080fd5b84356125238161221f565b9350602085013592506040850135915060608501356001600160401b0381111561236c57600080fd5b60008060006060848603121561256157600080fd5b8335925060208401356125738161221f565b915060408401356125838161221f565b809150509250925092565b60005b838110156125a9578181015183820152602001612591565b838111156125b8576000848401525b50505050565b600081518084526125d681602086016020860161258e565b601f01601f19169290920160200192915050565b60018060a01b038416815282602082015260606040820152600061261160608301846125be565b95945050505050565b6000806040838503121561262d57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561265457600080fd5b853594506020860135935060408601356001600160401b038082111561267957600080fd5b61268589838a01612384565b9450606088013591508082111561269b57600080fd5b6126a789838a016122aa565b935060808801359150808211156126bd57600080fd5b506126ca888289016122aa565b9150509295509295909350565b600080600080600060a086880312156126ef57600080fd5b85356126fa8161221f565b9450602086013561270a8161221f565b935060408601356001600160401b038082111561272657600080fd5b61273289838a01612384565b9450606088013591508082111561274857600080fd5b6126a789838a01612384565b60006020828403121561276657600080fd5b8135611ff88161221f565b6000806000806080858703121561278757600080fd5b843593506020850135925060408501356001600160401b03808211156127ac57600080fd5b6127b888838901612384565b935060608701359150808211156127ce57600080fd5b5061237887828801612384565b600080600080600080600080610100898b0312156127f857600080fd5b883597506020890135965060408901356001600160401b038082111561281d57600080fd5b6128298c838d01612384565b975060608b013591508082111561283f57600080fd5b61284b8c838d01612384565b965060808b013591508082111561286157600080fd5b61286d8c838d01612384565b955060a08b013591508082111561288357600080fd5b61288f8c838d01612384565b945060c08b01359150808211156128a557600080fd5b6128b18c838d016122aa565b935060e08b01359150808211156128c757600080fd5b506128d48b828c016122aa565b9150509295985092959890939650565b600080600080600060a086880312156128fc57600080fd5b8535945060208601356001600160401b038082111561291a57600080fd5b61292689838a016122aa565b955060408801359450606088013591508082111561294357600080fd5b61294f89838a01612384565b9350608088013591508082111561296557600080fd5b506126ca88828901612384565b600080600080600060a0868803121561298a57600080fd5b85356129958161221f565b945060208601356129a58161221f565b9350604086013592506060860135915060808601356001600160401b038111156129ce57600080fd5b6126ca888289016122aa565b600181811c908216806129ee57607f821691505b60208210811415612a0f57634e487b7160e01b600052602260045260246000fd5b50919050565b6bffffffffffffffffffffffff198560601b16815283601482015282603482015260008251612a4b81605485016020870161258e565b9190910160540195945050505050565b60008151602080840160005b83811015612a8357815187529582019590820190600101612a67565b509495945050505050565b60008651612aa0818460208b0161258e565b612ac7612ac1612abb612ab58487018b612a5b565b89612a5b565b87612a5b565b85612a5b565b98975050505050505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612afc57612afc612ad3565b500190565b6020808252600d908201526c3737903832b936b4b9b9b4b7b760991b604082015260600190565b805180835260209283019260009190808401838315612a8357815187529582019590820190600101612a67565b6001600160a01b0384168152606060208201819052600090612b7990830185612b28565b8281036040840152611dae8185612b28565b838152606060208201526000612b796060830185612b28565b600060208284031215612bb657600080fd5b8151611ff88161221f565b8281526040602082015260018060a01b03825116604082015260208201516060820152600060408301516060608084015261261160a08401826125be565b600082821015612c1157612c11612ad3565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600019821415612c4057612c40612ad3565b5060010190565b8481528360208201528260408201526000611dae6060830184612a5b565b6001600160a01b0385811682528416602082015260a060408201819052600090612c9190830185612b28565b8281036060840152612ca38185612b28565b838103608090940193909352505060008152602001949350505050565b8781528660208201528560408201526000612cf9612cf3612ced612ce7606086018a612a5b565b88612a5b565b86612a5b565b84612a5b565b9998505050505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000612d8060408301846125be565b949350505050565b60008251612d9a81846020870161258e565b9190910192915050565b600060208284031215612db657600080fd5b505191905056fea2646970667358221220ada88e0cba0d8c198473cd41c4a2e73060b5e7a32baf0f49020404ee1e1a412264736f6c634300080c0033";

type M4mBaggageWithoutRoleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: M4mBaggageWithoutRoleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class M4mBaggageWithoutRole__factory extends ContractFactory {
  constructor(...args: M4mBaggageWithoutRoleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "M4mBaggageWithoutRole";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<M4mBaggageWithoutRole> {
    return super.deploy(overrides || {}) as Promise<M4mBaggageWithoutRole>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): M4mBaggageWithoutRole {
    return super.attach(address) as M4mBaggageWithoutRole;
  }
  connect(signer: Signer): M4mBaggageWithoutRole__factory {
    return super.connect(signer) as M4mBaggageWithoutRole__factory;
  }
  static readonly contractName: "M4mBaggageWithoutRole";
  public readonly contractName: "M4mBaggageWithoutRole";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): M4mBaggageWithoutRoleInterface {
    return new utils.Interface(_abi) as M4mBaggageWithoutRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): M4mBaggageWithoutRole {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as M4mBaggageWithoutRole;
  }
}
