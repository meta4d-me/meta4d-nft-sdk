import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { M4mNFTRegistry, M4mNFTRegistryInterface } from "../M4mNFTRegistry";
declare type M4mNFTRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class M4mNFTRegistry__factory extends ContractFactory {
    constructor(...args: M4mNFTRegistryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<M4mNFTRegistry>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): M4mNFTRegistry;
    connect(signer: Signer): M4mNFTRegistry__factory;
    static readonly contractName: "M4mNFTRegistry";
    readonly contractName: "M4mNFTRegistry";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612322806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638f07c2b4116100c3578063be22f35e1161007c578063be22f35e1461037b578063c0c53b8b1461038f578063cb849b9a146103a2578063dd467064146103e0578063f23a6e61146103f3578063f2fde38b1461041257600080fd5b80638f07c2b414610278578063906e83cc146102cc5780639ab7520014610322578063b3ab15fb14610335578063ba62fbe414610348578063bc197c811461035c57600080fd5b80634162169f116101155780634162169f146101f9578063570ca735146102255780636198e33914610239578063715018a61461024c57806384b1f2e4146102545780638da5cb5b1461026757600080fd5b806301ffc9a7146101525780631180ef2e1461017a578063150b7a021461018f57806324886d46146101c6578063294b1693146101d9575b600080fd5b610165610160366004611a43565b610425565b60405190151581526020015b60405180910390f35b61018d610188366004611b34565b61045c565b005b6101ad61019d366004611c26565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610171565b61018d6101d4366004611b34565b6106f0565b6101ec6101e7366004611c92565b6108b6565b6040516101719190611d14565b61012d5461020d906001600160a01b031681565b6040516001600160a01b039091168152602001610171565b6101305461020d906001600160a01b031681565b61018d610247366004611d27565b610982565b61018d610a76565b61018d610262366004611b34565b610a8a565b6033546001600160a01b031661020d565b6102bc610286366004611d27565b60009081526101316020526040902060028101546003820154825460019093015460ff9092169390926001600160a01b03169190565b6040516101719493929190611d78565b6103126102da366004611d27565b6101316020526000908152604090208054600182015460028301546003909301546001600160a01b0390921692909160ff9091169084565b6040516101719493929190611daa565b61018d610330366004611ddd565b610e57565b61018d610343366004611e82565b611093565b61012f5461020d906001600160a01b031681565b6101ad61036a366004611e9f565b63bc197c8160e01b95945050505050565b61012e5461020d906001600160a01b031681565b61018d61039d366004611eef565b6110f0565b6103d26103b0366004611f3a565b6000918252610131602090815260408084209284526004909201905290205490565b604051908152602001610171565b61018d6103ee366004611d27565b61125b565b6101ad610401366004611f5c565b63f23a6e6160e01b95945050505050565b61018d610420366004611e82565b611349565b60006001600160e01b03198216630271189760e51b148061045657506301ffc9a760e01b6001600160e01b03198316145b92915050565b8051825114801561046e575060008151115b6104935760405162461bcd60e51b815260040161048a90611fc5565b60405180910390fd5b6000838152610131602052604090206001600282015460ff1660038111156104bd576104bd611d40565b146104da5760405162461bcd60e51b815260040161048a90611fe9565b6003600282015460ff1660038111156104f5576104f5611d40565b1480610575575061012e546040516331a9108f60e11b81526004810186905233916001600160a01b031690636352211e90602401602060405180830381865afa158015610546573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056a919061200d565b6001600160a01b0316145b6105915760405162461bcd60e51b815260040161048a90611fe9565b60005b83518110156106455760008382815181106105b1576105b161202a565b6020026020010151116105d65760405162461bcd60e51b815260040161048a90612040565b8281815181106105e8576105e861202a565b60200260200101518260040160008684815181106106085761060861202a565b60200260200101518152602001908152602001600020600082825461062d919061207a565b9091555081905061063d81612091565b915050610594565b5061012f54604051631759616b60e11b81526001600160a01b0390911690632eb2c2d69061067d9030903390889088906004016120ac565b600060405180830381600087803b15801561069757600080fd5b505af11580156106ab573d6000803e3d6000fd5b505050507f02e9fa1a9e688cb33ba14e43bb036cc0adbcf02f5bd5d14593aca38e2a80a9c98484846040516106e293929190612107565b60405180910390a150505050565b80518251148015610702575060008151115b61071e5760405162461bcd60e51b815260040161048a90611fc5565b6000838152610131602052604090206001600282015460ff16600381111561074857610748611d40565b146107655760405162461bcd60e51b815260040161048a90611fe9565b60005b83518110156108195760008382815181106107855761078561202a565b6020026020010151116107aa5760405162461bcd60e51b815260040161048a90612040565b8281815181106107bc576107bc61202a565b60200260200101518260040160008684815181106107dc576107dc61202a565b602002602001015181526020019081526020016000206000828254610801919061213c565b9091555081905061081181612091565b915050610768565b5061012f54604051631759616b60e11b81526001600160a01b0390911690632eb2c2d6906108519033903090889088906004016120ac565b600060405180830381600087803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b505050507fc563e421ed07e95a50b7f495447d2d15309c3bee854743f0f721c0c4a48955198484846040516106e293929190612107565b60008281526101316020526040812082516060929067ffffffffffffffff8111156108e3576108e3611a6d565b60405190808252806020026020018201604052801561090c578160200160208202803683370190505b50905060005b8451811015610979578260040160008683815181106109335761093361202a565b602002602001015181526020019081526020016000205482828151811061095c5761095c61202a565b60209081029190910101528061097181612091565b915050610912565b50949350505050565b60008181526101316020526040902060028082015460ff1660038111156109ab576109ab611d40565b146109c85760405162461bcd60e51b815260040161048a90611fe9565b61012e546040516331a9108f60e11b81526004810184905233916001600160a01b031690636352211e90602401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a36919061200d565b6001600160a01b031614610a5c5760405162461bcd60e51b815260040161048a90612154565b6002810180546001919060ff191682805b02179055505050565b610a7e6113c2565b610a88600061141c565b565b80518251148015610a9c575060008151115b610ab85760405162461bcd60e51b815260040161048a90611fc5565b6000838152610131602052604090206001600282015460ff166003811115610ae257610ae2611d40565b14610aff5760405162461bcd60e51b815260040161048a90611fe9565b6000848484604051602001610b169392919061219c565b60405160208183030381529060405280519060200120905081600301548114610b6d5760405162461bcd60e51b8152602060048201526009602482015268696c6c20617474727360b81b604482015260640161048a565b61012e546040516331a9108f60e11b81526004810187905233916001600160a01b031690636352211e90602401602060405180830381865afa158015610bb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdb919061200d565b6001600160a01b031614610c015760405162461bcd60e51b815260040161048a90612154565b60005b8451811015610cb5576000848281518110610c2157610c2161202a565b602002602001015111610c465760405162461bcd60e51b815260040161048a90612040565b838181518110610c5857610c5861202a565b6020026020010151836004016000878481518110610c7857610c7861202a565b602002602001015181526020019081526020016000206000828254610c9d919061207a565b90915550819050610cad81612091565b915050610c04565b5061012f54604051631ac8311560e21b81526001600160a01b0390911690636b20c45490610ceb903090889088906004016121c0565b600060405180830381600087803b158015610d0557600080fd5b505af1158015610d19573d6000803e3d6000fd5b5050505060028201805460ff1916600317905581546001830154604051632142170760e11b815230600482015233602482015260448101919091526001600160a01b03909116906342842e0e90606401600060405180830381600087803b158015610d8357600080fd5b505af1158015610d97573d6000803e3d6000fd5b505061012e54604051630852cd8d60e31b8152600481018990526001600160a01b0390911692506342966c689150602401600060405180830381600087803b158015610de257600080fd5b505af1158015610df6573d6000803e3d6000fd5b505083546001850154604080513381526001600160a01b039093166020840152820152606081018890527f3f693fff038bb8a046aa76d9516190ac7444f7d69cf952c4cbdc086fdef2d6fc9250608001905060405180910390a15050505050565b61012d54604051635c502c7f60e11b81526001600160a01b0387811660048301529091169063b8a058fe90602401602060405180830381865afa158015610ea2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec691906121e4565b610f035760405162461bcd60e51b815260206004820152600e60248201526d18d85b9b9bdd0818dbdb9d995c9d60921b604482015260640161048a565b604051632142170760e11b8152336004820152306024820152604481018590526001600160a01b038616906342842e0e90606401600060405180830381600087803b158015610f5157600080fd5b505af1158015610f65573d6000803e3d6000fd5b50506040516bffffffffffffffffffffffff19606089901b1660208201526034810187905260009250605401905060408051808303601f1901815290829052805160209091012061012e546340c10f1960e01b8352336004840152602483018290529092506001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610ff757600080fd5b505af115801561100b573d6000803e3d6000fd5b50505050600061101d8286868661146e565b80546001600160a01b0319166001600160a01b0389169081178255600182018890556040805133815260208101929092528101889052606081018490529091507fa24f03a00be68b18cc575757f35174a4777d40e14839913a42d8b56eb460039b9060800160405180910390a150505050505050565b61109b6113c2565b61013080546001600160a01b0319166001600160a01b0383169081179091556040519081527fdbebfba65bd6398fb722063efc10c99f624f9cd8ba657201056af918a676d5ee9060200160405180910390a150565b600054610100900460ff16158080156111105750600054600160ff909116105b8061112a5750303b15801561112a575060005460ff166001145b61118d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161048a565b6000805460ff1916600117905580156111b0576000805461ff0019166101001790555b6111b8611775565b6111c06117a5565b6111c86117a5565b61012f80546001600160a01b038087166001600160a01b03199283161790925561012e8054868416908316179055610130805482163317905561012d8054928516929091169190911790558015611255576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020016106e2565b50505050565b6000818152610131602052604090206001600282015460ff16600381111561128557611285611d40565b146112a25760405162461bcd60e51b815260040161048a90611fe9565b61012e546040516331a9108f60e11b81526004810184905233916001600160a01b031690636352211e90602401602060405180830381865afa1580156112ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611310919061200d565b6001600160a01b0316146113365760405162461bcd60e51b815260040161048a90612154565b6002818101805460ff1916600183610a6d565b6113516113c2565b6001600160a01b0381166113b65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161048a565b6113bf8161141c565b50565b6033546001600160a01b03163314610a885760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048a565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600082518451146114915760405162461bcd60e51b815260040161048a90611fc5565b5060008481526101316020526040812090600282015460ff1660038111156114bb576114bb611d40565b14806114df57506003600282015460ff1660038111156114dd576114dd611d40565b145b6114fb5760405162461bcd60e51b815260040161048a90611fe9565b61012e546040516331a9108f60e11b81526004810187905233916001600160a01b031690636352211e90602401602060405180830381865afa158015611545573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611569919061200d565b6001600160a01b03161461158f5760405162461bcd60e51b815260040161048a90612154565b60008585856040516020016115a69392919061219c565b60408051601f198184030181529190528051602090910120610130549091506115d9906001600160a01b031682856117cc565b61160f5760405162461bcd60e51b8152602060048201526007602482015266696c6c2073696760c81b604482015260640161048a565b60028201805460ff191660011790556003820181905560005b85518110156116c95760008582815181106116455761164561202a565b60200260200101511161166a5760405162461bcd60e51b815260040161048a90612040565b84818151811061167c5761167c61202a565b602002602001015183600401600088848151811061169c5761169c61202a565b602002602001015181526020019081526020016000208190555080806116c190612091565b915050611628565b5061012f5460405163d81d0a1560e01b81526001600160a01b039091169063d81d0a15906116ff903090899089906004016121c0565b600060405180830381600087803b15801561171957600080fd5b505af115801561172d573d6000803e3d6000fd5b505050507fccf96c97505992387fa12372d0b690ff46813059bdd576e31a63b2716f066dd886868660405161176493929190612107565b60405180910390a150949350505050565b600054610100900460ff1661179c5760405162461bcd60e51b815260040161048a90612206565b610a883361141c565b600054610100900460ff16610a885760405162461bcd60e51b815260040161048a90612206565b60008060006117db8585611910565b909250905060008160048111156117f4576117f4611d40565b1480156118125750856001600160a01b0316826001600160a01b0316145b1561182257600192505050611909565b600080876001600160a01b0316631626ba7e60e01b888860405160240161184a92919061227d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161188891906122b7565b600060405180830381855afa9150503d80600081146118c3576040519150601f19603f3d011682016040523d82523d6000602084013e6118c8565b606091505b50915091508180156118db575080516020145b801561190257508051630b135d3f60e11b9061190090830160209081019084016122d3565b145b9450505050505b9392505050565b6000808251604114156119475760208301516040840151606085015160001a61193b87828585611956565b9450945050505061194f565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561198d5750600090506003611a3a565b8460ff16601b141580156119a557508460ff16601c14155b156119b65750600090506004611a3a565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611a0a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611a3357600060019250925050611a3a565b9150600090505b94509492505050565b600060208284031215611a5557600080fd5b81356001600160e01b03198116811461190957600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611aac57611aac611a6d565b604052919050565b600082601f830112611ac557600080fd5b8135602067ffffffffffffffff821115611ae157611ae1611a6d565b8160051b611af0828201611a83565b9283528481018201928281019087851115611b0a57600080fd5b83870192505b84831015611b2957823582529183019190830190611b10565b979650505050505050565b600080600060608486031215611b4957600080fd5b83359250602084013567ffffffffffffffff80821115611b6857600080fd5b611b7487838801611ab4565b93506040860135915080821115611b8a57600080fd5b50611b9786828701611ab4565b9150509250925092565b6001600160a01b03811681146113bf57600080fd5b600082601f830112611bc757600080fd5b813567ffffffffffffffff811115611be157611be1611a6d565b611bf4601f8201601f1916602001611a83565b818152846020838601011115611c0957600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611c3c57600080fd5b8435611c4781611ba1565b93506020850135611c5781611ba1565b925060408501359150606085013567ffffffffffffffff811115611c7a57600080fd5b611c8687828801611bb6565b91505092959194509250565b60008060408385031215611ca557600080fd5b82359150602083013567ffffffffffffffff811115611cc357600080fd5b611ccf85828601611ab4565b9150509250929050565b600081518084526020808501945080840160005b83811015611d0957815187529582019590820190600101611ced565b509495945050505050565b6020815260006119096020830184611cd9565b600060208284031215611d3957600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60048110611d7457634e487b7160e01b600052602160045260246000fd5b9052565b60808101611d868287611d56565b60208201949094526001600160a01b03929092166040830152606090910152919050565b6001600160a01b03851681526020810184905260808101611dce6040830185611d56565b82606083015295945050505050565b600080600080600060a08688031215611df557600080fd5b8535611e0081611ba1565b945060208601359350604086013567ffffffffffffffff80821115611e2457600080fd5b611e3089838a01611ab4565b94506060880135915080821115611e4657600080fd5b611e5289838a01611ab4565b93506080880135915080821115611e6857600080fd5b50611e7588828901611bb6565b9150509295509295909350565b600060208284031215611e9457600080fd5b813561190981611ba1565b600080600080600060a08688031215611eb757600080fd5b8535611ec281611ba1565b94506020860135611ed281611ba1565b9350604086013567ffffffffffffffff80821115611e2457600080fd5b600080600060608486031215611f0457600080fd5b8335611f0f81611ba1565b92506020840135611f1f81611ba1565b91506040840135611f2f81611ba1565b809150509250925092565b60008060408385031215611f4d57600080fd5b50508035926020909101359150565b600080600080600060a08688031215611f7457600080fd5b8535611f7f81611ba1565b94506020860135611f8f81611ba1565b93506040860135925060608601359150608086013567ffffffffffffffff811115611fb957600080fd5b611e7588828901611bb6565b6020808252600a9082015269696c6c20706172616d7360b01b604082015260600190565b6020808252600a9082015269696c6c2073746174757360b01b604082015260600190565b60006020828403121561201f57600080fd5b815161190981611ba1565b634e487b7160e01b600052603260045260246000fd5b6020808252600a90820152691a5b1b08185b5bdd5b9d60b21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008282101561208c5761208c612064565b500390565b60006000198214156120a5576120a5612064565b5060010190565b6001600160a01b0385811682528416602082015260a0604082018190526000906120d890830185611cd9565b82810360608401526120ea8185611cd9565b838103608090940193909352505060008152602001949350505050565b8381526060602082015260006121206060830185611cd9565b82810360408401526121328185611cd9565b9695505050505050565b6000821982111561214f5761214f612064565b500190565b60208082526009908201526834b6361037bbb732b960b91b604082015260600190565b80516000906020808401838315611d0957815187529582019590820190600101611ced565b83815260006121b76121b16020840186612177565b84612177565b95945050505050565b6001600160a01b038416815260606020820181905260009061212090830185611cd9565b6000602082840312156121f657600080fd5b8151801515811461190957600080fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b8381101561226c578181015183820152602001612254565b838111156112555750506000910152565b82815260406020820152600082518060408401526122a2816060850160208701612251565b601f01601f1916919091016060019392505050565b600082516122c9818460208701612251565b9190910192915050565b6000602082840312156122e557600080fd5b505191905056fea2646970667358221220d65fc4780dc3aa3ec27271d5013f05047a448b953acc04aa17f443cc71d3830664736f6c634300080c0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): M4mNFTRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): M4mNFTRegistry;
}
export {};
