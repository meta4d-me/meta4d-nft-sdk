/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ManagerV2, ManagerV2Interface } from "../ManagerV2";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "getInfo",
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
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
    ],
    name: "getLatestInfoAll",
    outputs: [
      {
        internalType: "address[]",
        name: "_creators",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "_uris",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "info",
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
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "setInfoByPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e1c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806341fbc5081461005c5780634596f594146100855780636520d46d1461009a578063adbbcb95146100bb578063f345b897146100ce575b600080fd5b61006f61006a3660046109c5565b6100e1565b60405161007c9190610a49565b60405180910390f35b610098610093366004610b70565b610183565b005b6100ad6100a8366004610bbf565b610259565b60405161007c929190610bdb565b61006f6100c9366004610c7c565b61043a565b6100986100dc366004610ca7565b61050a565b60006020818152928152604080822090935290815220805461010290610d30565b80601f016020809104026020016040519081016040528092919081815260200182805461012e90610d30565b801561017b5780601f106101505761010080835404028352916020019161017b565b820191906000526020600020905b81548152906001019060200180831161015e57829003601f168201915b505050505081565b60008151116101c75760405162461bcd60e51b815260206004820152600b60248201526a696c6c6567616c2075726960a81b60448201526064015b60405180910390fd5b60006101d28361062e565b60008181526020818152604080832033845290915290208054919250906101f890610d30565b1515905061022e57600081815260016020818152604083208054928301815583529091200180546001600160a01b031916331790555b6000818152602081815260408083203384528252909120835161025392850190610910565b50505050565b60608060006102678461062e565b60008181526001602090815260409182902080548351818402810184019094528084529394509192908301828280156102c957602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102ab575b50505050509250825167ffffffffffffffff8111156102ea576102ea610a63565b60405190808252806020026020018201604052801561031d57816020015b60608152602001906001900390816103085790505b50915060005b835181101561043357600080838152602001908152602001600020600085838151811061035257610352610d6b565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020805461038590610d30565b80601f01602080910402602001604051908101604052809291908181526020018280546103b190610d30565b80156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b505050505083828151811061041557610415610d6b565b6020026020010181905250808061042b90610d81565b915050610323565b5050915091565b60606000806104488561062e565b81526020019081526020016000206000836001600160a01b03166001600160a01b03168152602001908152602001600020805461048490610d30565b80601f01602080910402602001604051908101604052809291908181526020018280546104b090610d30565b80156104fd5780601f106104d2576101008083540402835291602001916104fd565b820191906000526020600020905b8154815290600101906020018083116104e057829003601f168201915b5050505050905092915050565b60008251116105495760405162461bcd60e51b815260206004820152600b60248201526a696c6c6567616c2075726960a81b60448201526064016101be565b60006105548461062e565b9050600061058a828560405160200161056e929190610daa565b6040516020818303038152906040528051906020012084610691565b6000838152602081815260408083206001600160a01b038516845290915290208054919250906105b990610d30565b151590506105f857600082815260016020818152604083208054928301815583529091200180546001600160a01b0319166001600160a01b0383161790555b6000828152602081815260408083206001600160a01b03851684528252909120855161062692870190610910565b505050505050565b60008160000151826020015183604001516040516020016106749392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b604051602081830303815290604052805190602001209050919050565b60008060006106a085856106b5565b915091506106ad816106fb565b509392505050565b6000808251604114156106ec5760208301516040840151606085015160001a6106e08782858561084c565b945094505050506106f4565b506000905060025b9250929050565b600081600481111561070f5761070f610dd0565b14156107185750565b600181600481111561072c5761072c610dd0565b141561077a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016101be565b600281600481111561078e5761078e610dd0565b14156107dc5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016101be565b60038160048111156107f0576107f0610dd0565b14156108495760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016101be565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156108835750600090506003610907565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156108d7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661090057600060019250925050610907565b9150600090505b94509492505050565b82805461091c90610d30565b90600052602060002090601f01602090048101928261093e5760008555610984565b82601f1061095757805160ff1916838001178555610984565b82800160010185558215610984579182015b82811115610984578251825591602001919060010190610969565b50610990929150610994565b5090565b5b808211156109905760008155600101610995565b80356001600160a01b03811681146109c057600080fd5b919050565b600080604083850312156109d857600080fd5b823591506109e8602084016109a9565b90509250929050565b60005b83811015610a0c5781810151838201526020016109f4565b838111156102535750506000910152565b60008151808452610a358160208601602086016109f1565b601f01601f19169290920160200192915050565b602081526000610a5c6020830184610a1d565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600060608284031215610a8b57600080fd5b6040516060810181811067ffffffffffffffff82111715610aae57610aae610a63565b60405282358152905080610ac4602084016109a9565b6020820152604083013560408201525092915050565b600067ffffffffffffffff80841115610af557610af5610a63565b604051601f8501601f19908116603f01168101908282118183101715610b1d57610b1d610a63565b81604052809350858152868686011115610b3657600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112610b6157600080fd5b610a5c83833560208501610ada565b60008060808385031215610b8357600080fd5b610b8d8484610a79565b9150606083013567ffffffffffffffff811115610ba957600080fd5b610bb585828601610b50565b9150509250929050565b600060608284031215610bd157600080fd5b610a5c8383610a79565b604080825283519082018190526000906020906060840190828701845b82811015610c1d5781516001600160a01b031684529284019290840190600101610bf8565b50505083810382850152845180825282820190600581901b8301840187850160005b83811015610c6d57601f19868403018552610c5b838351610a1d565b94870194925090860190600101610c3f565b50909998505050505050505050565b60008060808385031215610c8f57600080fd5b610c998484610a79565b91506109e8606084016109a9565b600080600060a08486031215610cbc57600080fd5b610cc68585610a79565b9250606084013567ffffffffffffffff80821115610ce357600080fd5b610cef87838801610b50565b93506080860135915080821115610d0557600080fd5b508401601f81018613610d1757600080fd5b610d2686823560208401610ada565b9150509250925092565b600181811c90821680610d4457607f821691505b60208210811415610d6557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610da357634e487b7160e01b600052601160045260246000fd5b5060010190565b82815260008251610dc28160208501602087016109f1565b919091016020019392505050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212207b78712969bc971518490f4452bd4c9d1052f818d6349ef6a8caff5613bd8bee64736f6c634300080c0033";

type ManagerV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManagerV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ManagerV2__factory extends ContractFactory {
  constructor(...args: ManagerV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ManagerV2";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ManagerV2> {
    return super.deploy(overrides || {}) as Promise<ManagerV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ManagerV2 {
    return super.attach(address) as ManagerV2;
  }
  connect(signer: Signer): ManagerV2__factory {
    return super.connect(signer) as ManagerV2__factory;
  }
  static readonly contractName: "ManagerV2";
  public readonly contractName: "ManagerV2";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerV2Interface {
    return new utils.Interface(_abi) as ManagerV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ManagerV2 {
    return new Contract(address, _abi, signerOrProvider) as ManagerV2;
  }
}
