var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};
System.register("utils/getProvider", ["ethers"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ethers_1, provider, getProvider;
    return {
        setters: [
            function (ethers_1_1) {
                ethers_1 = ethers_1_1;
            }
        ],
        execute: function () {
            provider = null;
            // todo Refactor for working without metamask.
            getProvider = () => {
                if (!window.ethereum) {
                    throw new Error("Provider not find");
                }
                if (!provider) {
                    provider = new ethers_1.providers.Web3Provider(window.ethereum);
                }
                return provider;
            };
            exports_1("default", getProvider);
        }
    };
});
System.register("types/metadata", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("sdk", ["utils/getProvider", "ethers", "./typechain-types", "ipfs-http-client", "uint8arrays"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var getProvider_1, ethers_2, typechain_types_1, ipfs_http_client_1, uint8arrays_1, ipfs, login, mintNFT, getNFTList;
    return {
        setters: [
            function (getProvider_1_1) {
                getProvider_1 = getProvider_1_1;
            },
            function (ethers_2_1) {
                ethers_2 = ethers_2_1;
            },
            function (typechain_types_1_1) {
                typechain_types_1 = typechain_types_1_1;
            },
            function (ipfs_http_client_1_1) {
                ipfs_http_client_1 = ipfs_http_client_1_1;
            },
            function (uint8arrays_1_1) {
                uint8arrays_1 = uint8arrays_1_1;
            }
        ],
        execute: function () {
            ipfs = ipfs_http_client_1.create({
                host: 'ipfs.infura.io',
                port: 5001,
                protocol: 'https'
            });
            // return address
            // TODO: maybe require user to sign some msg
            exports_3("login", login = async () => {
                const provider = await getProvider_1.default();
                const signer = provider.getSigner();
                return signer.getAddress();
            });
            exports_3("mintNFT", mintNFT = async (nftAddr, owner, imgUrl, metadata) => {
                const imgResult = await ipfs.add(ipfs_http_client_1.urlSource(imgUrl));
                metadata.image = "ipfs://" + imgResult.cid.toString();
                const metadataResult = await ipfs.add(JSON.stringify(metadata));
                const NFT = new ethers_2.Contract(nftAddr, typechain_types_1.ERC721Enumerable__factory.abi, getProvider_1.default().getSigner());
                await NFT.mint(owner, metadataResult.cid.toString());
            });
            // the nft contract should enumerable
            exports_3("getNFTList", getNFTList = async (nftAddr, owner) => {
                const NFT = new ethers_2.Contract(nftAddr, typechain_types_1.ERC721Enumerable__factory.abi, getProvider_1.default());
                const balance = await NFT.balanceOf(owner);
                const list = [];
                for (let i = 0; balance.gt(i); i++) {
                    const tokenId = await NFT.tokenOfOwnerByIndex(owner, i);
                    const uri = await NFT.tokenURI(tokenId);
                    const cid = uri.indexOf("ipfs://") > 0 ? uri.substring(7) : uri;
                    const resp = await ipfs.cat(cid);
                    let content = [];
                    try {
                        for (var resp_1 = __asyncValues(resp), resp_1_1; resp_1_1 = await resp_1.next(), !resp_1_1.done;) {
                            const chunk = await resp_1_1.value;
                            content.push(chunk);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (resp_1_1 && !resp_1_1.done && (_a = resp_1.return)) await _a.call(resp_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    let result = uint8arrays_1.concat(content);
                    let raw = Buffer.from(result).toString('utf-8');
                    list.push({
                        tokenId: tokenId,
                        uri: uri,
                        metadata: JSON.parse(raw)
                    });
                }
                return list;
                var e_1, _a;
            });
        }
    };
});
System.register("typechain-types/common", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            {
                Listener;
            }
            from;
            "@ethersproject/providers";
            {
                Event, EventFilter;
            }
            from;
            "ethers";
            TypedEvent < infer;
            U >  ? U : never;
            MinEthersFactory <
                infer;
            C,
                any
                    >
                    ? C
                    : never;
            MinEthersFactory(Parameters(never));
        }
    };
});
System.register("typechain-types/ERC1155Upgradeable", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC165", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC165Upgradeable", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC721", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC721Enumerable", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC721EnumerableUpgradeable", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC721HolderUpgradeable", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/ERC721Upgradeable", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC1155MetadataURIUpgradeable", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC1155ReceiverUpgradeable", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC1155Upgradeable", [], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC1271Upgradeable", [], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC165", [], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC165Upgradeable", [], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721", [], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721Enumerable", [], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721EnumerableUpgradeable", [], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721Metadata", [], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721MetadataUpgradeable", [], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721Receiver", [], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721ReceiverUpgradeable", [], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IERC721Upgradeable", [], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IM4mComponents", [], function (exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IM4mDAO", [], function (exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IM4mNFT", [], function (exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/IM4mNFTRegistry", [], function (exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/M4mComponent", [], function (exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/M4mDao", [], function (exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/M4mNFT", [], function (exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/M4mNFTRegistry", [], function (exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/OwnableUpgradeable", [], function (exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("typechain-types/SimpleM4mNFT", [], function (exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/OwnableUpgradeable__factory", ["ethers"], function (exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var ethers_3, _abi, OwnableUpgradeable__factory;
    return {
        setters: [
            function (ethers_3_1) {
                ethers_3 = ethers_3_1;
            }
        ],
        execute: function () {
            {
                OwnableUpgradeable,
                    OwnableUpgradeableInterface,
                ;
            }
            from;
            "../OwnableUpgradeable";
            _abi = [
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
                    name: "renounceOwnership",
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
            ];
            OwnableUpgradeable__factory = class OwnableUpgradeable__factory {
                static createInterface() {
                    return new ethers_3.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_3.Contract(address, _abi, signerOrProvider);
                }
            };
            OwnableUpgradeable__factory.abi = _abi;
            exports_37("OwnableUpgradeable__factory", OwnableUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC1271Upgradeable__factory", ["ethers"], function (exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var ethers_4, _abi, IERC1271Upgradeable__factory;
    return {
        setters: [
            function (ethers_4_1) {
                ethers_4 = ethers_4_1;
            }
        ],
        execute: function () {
            {
                IERC1271Upgradeable,
                    IERC1271UpgradeableInterface,
                ;
            }
            from;
            "../IERC1271Upgradeable";
            _abi = [
                {
                    inputs: [
                        {
                            internalType: "bytes32",
                            name: "hash",
                            type: "bytes32",
                        },
                        {
                            internalType: "bytes",
                            name: "signature",
                            type: "bytes",
                        },
                    ],
                    name: "isValidSignature",
                    outputs: [
                        {
                            internalType: "bytes4",
                            name: "magicValue",
                            type: "bytes4",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
            ];
            IERC1271Upgradeable__factory = class IERC1271Upgradeable__factory {
                static createInterface() {
                    return new ethers_4.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_4.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC1271Upgradeable__factory.abi = _abi;
            exports_38("IERC1271Upgradeable__factory", IERC1271Upgradeable__factory);
        }
    };
});
System.register("typechain-types/factories/ERC1155Upgradeable__factory", ["ethers"], function (exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var ethers_5, _abi, _bytecode, isSuperArgs, ERC1155Upgradeable__factory;
    return {
        setters: [
            function (ethers_5_1) {
                ethers_5 = ethers_5_1;
            }
        ],
        execute: function () {
            {
                ERC1155Upgradeable,
                    ERC1155UpgradeableInterface,
                ;
            }
            from;
            "../ERC1155Upgradeable";
            _abi = [
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "account",
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
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            indexed: false,
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "TransferBatch",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                    ],
                    name: "TransferSingle",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "string",
                            name: "value",
                            type: "string",
                        },
                        {
                            indexed: true,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                    ],
                    name: "URI",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
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
                            internalType: "address[]",
                            name: "accounts",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                    ],
                    name: "balanceOfBatch",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
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
                            name: "from",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "to",
                            type: "address",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                        },
                    ],
                    name: "safeBatchTransferFrom",
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
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
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
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
                    name: "uri",
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
            ];
            _bytecode = "0x608060405234801561001057600080fd5b506113c9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610bcb565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610c0e565b610225565b60405190151581526020016100a9565b6100e86100e3366004610c32565b610277565b6040516100a99190610c98565b610108610103366004610df7565b61030b565b005b61011d610118366004610ea1565b6103a2565b6040516100a99190610fa7565b610108610138366004610fba565b6104cc565b6100c561014b366004610ff6565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b610108610187366004611029565b6104db565b60006001600160a01b0383166101fd5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025657506001600160e01b031982166303a24d0760e21b145b8061027157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060606780546102869061108e565b80601f01602080910402602001604051908101604052809291908181526020018280546102b29061108e565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103275750610327853361014b565b61038e5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101f4565b61039b8585858585610562565b5050505050565b606081518351146104075760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f4565b6000835167ffffffffffffffff81111561042357610423610cab565b60405190808252806020026020018201604052801561044c578160200160208202803683370190505b50905060005b84518110156104c457610497858281518110610470576104706110c9565b602002602001015185838151811061048a5761048a6110c9565b602002602001015161018c565b8282815181106104a9576104a96110c9565b60209081029190910101526104bd816110f5565b9050610452565b509392505050565b6104d7338383610742565b5050565b6001600160a01b0385163314806104f757506104f7853361014b565b6105555760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101f4565b61039b8585858585610823565b81518351146105c45760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f4565b6001600160a01b0384166105ea5760405162461bcd60e51b81526004016101f490611110565b3360005b84518110156106d457600085828151811061060b5761060b6110c9565b602002602001015190506000858381518110610629576106296110c9565b60209081029190910181015160008481526065835260408082206001600160a01b038e16835290935291909120549091508181101561067a5760405162461bcd60e51b81526004016101f490611155565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906106b990849061119f565b92505081905550505050806106cd906110f5565b90506105ee565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516107249291906111b7565b60405180910390a461073a81878787878761094d565b505050505050565b816001600160a01b0316836001600160a01b031614156107b65760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f4565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166108495760405162461bcd60e51b81526004016101f490611110565b3361086281878761085988610aa9565b61039b88610aa9565b60008481526065602090815260408083206001600160a01b038a168452909152902054838110156108a55760405162461bcd60e51b81526004016101f490611155565b60008581526065602090815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906108e490849061119f565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610944828888888888610af4565b50505050505050565b6001600160a01b0384163b1561073a5760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061099190899089908890889088906004016111e5565b6020604051808303816000875af19250505080156109cc575060408051601f3d908101601f191682019092526109c991810190611243565b60015b610a79576109d8611260565b806308c379a01415610a1257506109ed61127c565b806109f85750610a14565b8060405162461bcd60e51b81526004016101f49190610c98565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f4565b6001600160e01b0319811663bc197c8160e01b146109445760405162461bcd60e51b81526004016101f490611306565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610ae357610ae36110c9565b602090810291909101015292915050565b6001600160a01b0384163b1561073a5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b38908990899088908890889060040161134e565b6020604051808303816000875af1925050508015610b73575060408051601f3d908101601f19168201909252610b7091810190611243565b60015b610b7f576109d8611260565b6001600160e01b0319811663f23a6e6160e01b146109445760405162461bcd60e51b81526004016101f490611306565b80356001600160a01b0381168114610bc657600080fd5b919050565b60008060408385031215610bde57600080fd5b610be783610baf565b946020939093013593505050565b6001600160e01b031981168114610c0b57600080fd5b50565b600060208284031215610c2057600080fd5b8135610c2b81610bf5565b9392505050565b600060208284031215610c4457600080fd5b5035919050565b6000815180845260005b81811015610c7157602081850181015186830182015201610c55565b81811115610c83576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610c2b6020830184610c4b565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610ce757610ce7610cab565b6040525050565b600067ffffffffffffffff821115610d0857610d08610cab565b5060051b60200190565b600082601f830112610d2357600080fd5b81356020610d3082610cee565b604051610d3d8282610cc1565b83815260059390931b8501820192828101915086841115610d5d57600080fd5b8286015b84811015610d785780358352918301918301610d61565b509695505050505050565b600082601f830112610d9457600080fd5b813567ffffffffffffffff811115610dae57610dae610cab565b604051610dc5601f8301601f191660200182610cc1565b818152846020838601011115610dda57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610e0f57600080fd5b610e1886610baf565b9450610e2660208701610baf565b9350604086013567ffffffffffffffff80821115610e4357600080fd5b610e4f89838a01610d12565b94506060880135915080821115610e6557600080fd5b610e7189838a01610d12565b93506080880135915080821115610e8757600080fd5b50610e9488828901610d83565b9150509295509295909350565b60008060408385031215610eb457600080fd5b823567ffffffffffffffff80821115610ecc57600080fd5b818501915085601f830112610ee057600080fd5b81356020610eed82610cee565b604051610efa8282610cc1565b83815260059390931b8501820192828101915089841115610f1a57600080fd5b948201945b83861015610f3f57610f3086610baf565b82529482019490820190610f1f565b96505086013592505080821115610f5557600080fd5b50610f6285828601610d12565b9150509250929050565b600081518084526020808501945080840160005b83811015610f9c57815187529582019590820190600101610f80565b509495945050505050565b602081526000610c2b6020830184610f6c565b60008060408385031215610fcd57600080fd5b610fd683610baf565b915060208301358015158114610feb57600080fd5b809150509250929050565b6000806040838503121561100957600080fd5b61101283610baf565b915061102060208401610baf565b90509250929050565b600080600080600060a0868803121561104157600080fd5b61104a86610baf565b945061105860208701610baf565b93506040860135925060608601359150608086013567ffffffffffffffff81111561108257600080fd5b610e9488828901610d83565b600181811c908216806110a257607f821691505b602082108114156110c357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611109576111096110df565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600082198211156111b2576111b26110df565b500190565b6040815260006111ca6040830185610f6c565b82810360208401526111dc8185610f6c565b95945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061121190830186610f6c565b82810360608401526112238186610f6c565b905082810360808401526112378185610c4b565b98975050505050505050565b60006020828403121561125557600080fd5b8151610c2b81610bf5565b600060033d11156112795760046000803e5060005160e01c5b90565b600060443d101561128a5790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156112ba57505050505090565b82850191508151818111156112d25750505050505090565b843d87010160208285010111156112ec5750505050505090565b6112fb60208286010187610cc1565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061138890830184610c4b565b97965050505050505056fea2646970667358221220b965db20e1235b064bf9d3fbcc66c5e9402aa156a5e59efd793a15ba54a19ef664736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            ERC1155Upgradeable__factory = class ERC1155Upgradeable__factory extends ethers_5.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "ERC1155Upgradeable";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_5.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_5.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC1155Upgradeable__factory.bytecode = _bytecode;
            ERC1155Upgradeable__factory.abi = _abi;
            exports_39("ERC1155Upgradeable__factory", ERC1155Upgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC1155MetadataURIUpgradeable__factory", ["ethers"], function (exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var ethers_6, _abi, IERC1155MetadataURIUpgradeable__factory;
    return {
        setters: [
            function (ethers_6_1) {
                ethers_6 = ethers_6_1;
            }
        ],
        execute: function () {
            {
                IERC1155MetadataURIUpgradeable,
                    IERC1155MetadataURIUpgradeableInterface,
                ;
            }
            from;
            "../IERC1155MetadataURIUpgradeable";
            _abi = [
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "account",
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
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            indexed: false,
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "TransferBatch",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                    ],
                    name: "TransferSingle",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "string",
                            name: "value",
                            type: "string",
                        },
                        {
                            indexed: true,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                    ],
                    name: "URI",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
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
                            internalType: "address[]",
                            name: "accounts",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                    ],
                    name: "balanceOfBatch",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
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
                            name: "from",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "to",
                            type: "address",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                        },
                    ],
                    name: "safeBatchTransferFrom",
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
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
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
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                    ],
                    name: "uri",
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
            ];
            IERC1155MetadataURIUpgradeable__factory = class IERC1155MetadataURIUpgradeable__factory {
                static createInterface() {
                    return new ethers_6.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_6.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC1155MetadataURIUpgradeable__factory.abi = _abi;
            exports_40("IERC1155MetadataURIUpgradeable__factory", IERC1155MetadataURIUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC1155ReceiverUpgradeable__factory", ["ethers"], function (exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var ethers_7, _abi, IERC1155ReceiverUpgradeable__factory;
    return {
        setters: [
            function (ethers_7_1) {
                ethers_7 = ethers_7_1;
            }
        ],
        execute: function () {
            {
                IERC1155ReceiverUpgradeable,
                    IERC1155ReceiverUpgradeableInterface,
                ;
            }
            from;
            "../IERC1155ReceiverUpgradeable";
            _abi = [
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "from",
                            type: "address",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
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
                            name: "operator",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "from",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
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
            ];
            IERC1155ReceiverUpgradeable__factory = class IERC1155ReceiverUpgradeable__factory {
                static createInterface() {
                    return new ethers_7.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_7.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC1155ReceiverUpgradeable__factory.abi = _abi;
            exports_41("IERC1155ReceiverUpgradeable__factory", IERC1155ReceiverUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC1155Upgradeable__factory", ["ethers"], function (exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var ethers_8, _abi, IERC1155Upgradeable__factory;
    return {
        setters: [
            function (ethers_8_1) {
                ethers_8 = ethers_8_1;
            }
        ],
        execute: function () {
            {
                IERC1155Upgradeable,
                    IERC1155UpgradeableInterface,
                ;
            }
            from;
            "../IERC1155Upgradeable";
            _abi = [
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "account",
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
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            indexed: false,
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "TransferBatch",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                    ],
                    name: "TransferSingle",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "string",
                            name: "value",
                            type: "string",
                        },
                        {
                            indexed: true,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                    ],
                    name: "URI",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
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
                            internalType: "address[]",
                            name: "accounts",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                    ],
                    name: "balanceOfBatch",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
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
                            name: "from",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "to",
                            type: "address",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                        },
                    ],
                    name: "safeBatchTransferFrom",
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
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
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
            ];
            IERC1155Upgradeable__factory = class IERC1155Upgradeable__factory {
                static createInterface() {
                    return new ethers_8.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_8.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC1155Upgradeable__factory.abi = _abi;
            exports_42("IERC1155Upgradeable__factory", IERC1155Upgradeable__factory);
        }
    };
});
System.register("typechain-types/factories/ERC721Upgradeable__factory", ["ethers"], function (exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var ethers_9, _abi, _bytecode, isSuperArgs, ERC721Upgradeable__factory;
    return {
        setters: [
            function (ethers_9_1) {
                ethers_9 = ethers_9_1;
            }
        ],
        execute: function () {
            {
                ERC721Upgradeable,
                    ERC721UpgradeableInterface,
                ;
            }
            from;
            "../ERC721Upgradeable";
            _abi = [
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
            _bytecode = "0x608060405234801561001057600080fd5b5061124c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610d5c565b610228565b60405190151581526020015b60405180910390f35b61010461027a565b6040516100f39190610dd1565b61012461011f366004610de4565b61030c565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610e19565b6103a6565b005b61014f61015f366004610e43565b6104bc565b61014f610172366004610e43565b6104ed565b610124610185366004610de4565b610508565b61019d610198366004610e7f565b61057f565b6040519081526020016100f3565b610104610606565b61014f6101c1366004610e9a565b610615565b61014f6101d4366004610eec565b610624565b6101046101e7366004610de4565b61065c565b6100e76101fa366004610fc8565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061025957506001600160e01b03198216635b5e139f60e01b145b8061027457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606065805461028990610ffb565b80601f01602080910402602001604051908101604052809291908181526020018280546102b590610ffb565b80156103025780601f106102d757610100808354040283529160200191610302565b820191906000526020600020905b8154815290600101906020018083116102e557829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b031661038a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b60006103b182610508565b9050806001600160a01b0316836001600160a01b0316141561041f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610381565b336001600160a01b038216148061043b575061043b81336101fa565b6104ad5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610381565b6104b78383610744565b505050565b6104c633826107b2565b6104e25760405162461bcd60e51b815260040161038190611036565b6104b78383836108a9565b6104b783838360405180602001604052806000815250610624565b6000818152606760205260408120546001600160a01b0316806102745760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610381565b60006001600160a01b0382166105ea5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610381565b506001600160a01b031660009081526068602052604090205490565b60606066805461028990610ffb565b610620338383610a45565b5050565b61062e33836107b2565b61064a5760405162461bcd60e51b815260040161038190611036565b61065684848484610b14565b50505050565b6000818152606760205260409020546060906001600160a01b03166106db5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610381565b60006106f260408051602081019091526000815290565b90506000815111610712576040518060200160405280600081525061073d565b8061071c84610b47565b60405160200161072d929190611087565b6040516020818303038152906040525b9392505050565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061077982610508565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152606760205260408120546001600160a01b031661082b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610381565b600061083683610508565b9050806001600160a01b0316846001600160a01b031614806108715750836001600160a01b03166108668461030c565b6001600160a01b0316145b806108a157506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166108bc82610508565b6001600160a01b0316146109205760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610381565b6001600160a01b0382166109825760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610381565b61098d600082610744565b6001600160a01b03831660009081526068602052604081208054600192906109b69084906110cc565b90915550506001600160a01b03821660009081526068602052604081208054600192906109e49084906110e3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610aa75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610381565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b1f8484846108a9565b610b2b84848484610c45565b6106565760405162461bcd60e51b8152600401610381906110fb565b606081610b6b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b955780610b7f8161114d565b9150610b8e9050600a8361117e565b9150610b6f565b60008167ffffffffffffffff811115610bb057610bb0610ed6565b6040519080825280601f01601f191660200182016040528015610bda576020820181803683370190505b5090505b84156108a157610bef6001836110cc565b9150610bfc600a86611192565b610c079060306110e3565b60f81b818381518110610c1c57610c1c6111a6565b60200101906001600160f81b031916908160001a905350610c3e600a8661117e565b9450610bde565b60006001600160a01b0384163b15610d3857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c899033908990889088906004016111bc565b6020604051808303816000875af1925050508015610cc4575060408051601f3d908101601f19168201909252610cc1918101906111f9565b60015b610d1e573d808015610cf2576040519150601f19603f3d011682016040523d82523d6000602084013e610cf7565b606091505b508051610d165760405162461bcd60e51b8152600401610381906110fb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108a1565b506001949350505050565b6001600160e01b031981168114610d5957600080fd5b50565b600060208284031215610d6e57600080fd5b813561073d81610d43565b60005b83811015610d94578181015183820152602001610d7c565b838111156106565750506000910152565b60008151808452610dbd816020860160208601610d79565b601f01601f19169290920160200192915050565b60208152600061073d6020830184610da5565b600060208284031215610df657600080fd5b5035919050565b80356001600160a01b0381168114610e1457600080fd5b919050565b60008060408385031215610e2c57600080fd5b610e3583610dfd565b946020939093013593505050565b600080600060608486031215610e5857600080fd5b610e6184610dfd565b9250610e6f60208501610dfd565b9150604084013590509250925092565b600060208284031215610e9157600080fd5b61073d82610dfd565b60008060408385031215610ead57600080fd5b610eb683610dfd565b915060208301358015158114610ecb57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610f0257600080fd5b610f0b85610dfd565b9350610f1960208601610dfd565b925060408501359150606085013567ffffffffffffffff80821115610f3d57600080fd5b818701915087601f830112610f5157600080fd5b813581811115610f6357610f63610ed6565b604051601f8201601f19908116603f01168101908382118183101715610f8b57610f8b610ed6565b816040528281528a6020848701011115610fa457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fdb57600080fd5b610fe483610dfd565b9150610ff260208401610dfd565b90509250929050565b600181811c9082168061100f57607f821691505b6020821081141561103057634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008351611099818460208801610d79565b8351908301906110ad818360208801610d79565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110de576110de6110b6565b500390565b600082198211156110f6576110f66110b6565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000600019821415611161576111616110b6565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261118d5761118d611168565b500490565b6000826111a1576111a1611168565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111ef90830184610da5565b9695505050505050565b60006020828403121561120b57600080fd5b815161073d81610d4356fea264697066735822122095fedbb7adfa20383ff12cc04dfb063c466f298fa778321317a64a9ad78f4b0f64736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            ERC721Upgradeable__factory = class ERC721Upgradeable__factory extends ethers_9.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "ERC721Upgradeable";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_9.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_9.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC721Upgradeable__factory.bytecode = _bytecode;
            ERC721Upgradeable__factory.abi = _abi;
            exports_43("ERC721Upgradeable__factory", ERC721Upgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/ERC721EnumerableUpgradeable__factory", ["ethers"], function (exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var ethers_10, _abi, ERC721EnumerableUpgradeable__factory;
    return {
        setters: [
            function (ethers_10_1) {
                ethers_10 = ethers_10_1;
            }
        ],
        execute: function () {
            {
                ERC721EnumerableUpgradeable,
                    ERC721EnumerableUpgradeableInterface,
                ;
            }
            from;
            "../ERC721EnumerableUpgradeable";
            _abi = [
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
            ];
            ERC721EnumerableUpgradeable__factory = class ERC721EnumerableUpgradeable__factory {
                static createInterface() {
                    return new ethers_10.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_10.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC721EnumerableUpgradeable__factory.abi = _abi;
            exports_44("ERC721EnumerableUpgradeable__factory", ERC721EnumerableUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721EnumerableUpgradeable__factory", ["ethers"], function (exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    var ethers_11, _abi, IERC721EnumerableUpgradeable__factory;
    return {
        setters: [
            function (ethers_11_1) {
                ethers_11 = ethers_11_1;
            }
        ],
        execute: function () {
            {
                IERC721EnumerableUpgradeable,
                    IERC721EnumerableUpgradeableInterface,
                ;
            }
            from;
            "../IERC721EnumerableUpgradeable";
            _abi = [
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
                            name: "balance",
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
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "ownerOf",
                    outputs: [
                        {
                            internalType: "address",
                            name: "owner",
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
                            name: "_approved",
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
            IERC721EnumerableUpgradeable__factory = class IERC721EnumerableUpgradeable__factory {
                static createInterface() {
                    return new ethers_11.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_11.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721EnumerableUpgradeable__factory.abi = _abi;
            exports_45("IERC721EnumerableUpgradeable__factory", IERC721EnumerableUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721MetadataUpgradeable__factory", ["ethers"], function (exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    var ethers_12, _abi, IERC721MetadataUpgradeable__factory;
    return {
        setters: [
            function (ethers_12_1) {
                ethers_12 = ethers_12_1;
            }
        ],
        execute: function () {
            {
                IERC721MetadataUpgradeable,
                    IERC721MetadataUpgradeableInterface,
                ;
            }
            from;
            "../IERC721MetadataUpgradeable";
            _abi = [
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
                            name: "balance",
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
                            name: "owner",
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
                            name: "_approved",
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
            IERC721MetadataUpgradeable__factory = class IERC721MetadataUpgradeable__factory {
                static createInterface() {
                    return new ethers_12.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_12.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721MetadataUpgradeable__factory.abi = _abi;
            exports_46("IERC721MetadataUpgradeable__factory", IERC721MetadataUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721ReceiverUpgradeable__factory", ["ethers"], function (exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    var ethers_13, _abi, IERC721ReceiverUpgradeable__factory;
    return {
        setters: [
            function (ethers_13_1) {
                ethers_13 = ethers_13_1;
            }
        ],
        execute: function () {
            {
                IERC721ReceiverUpgradeable,
                    IERC721ReceiverUpgradeableInterface,
                ;
            }
            from;
            "../IERC721ReceiverUpgradeable";
            _abi = [
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "from",
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
            ];
            IERC721ReceiverUpgradeable__factory = class IERC721ReceiverUpgradeable__factory {
                static createInterface() {
                    return new ethers_13.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_13.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721ReceiverUpgradeable__factory.abi = _abi;
            exports_47("IERC721ReceiverUpgradeable__factory", IERC721ReceiverUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721Upgradeable__factory", ["ethers"], function (exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var ethers_14, _abi, IERC721Upgradeable__factory;
    return {
        setters: [
            function (ethers_14_1) {
                ethers_14 = ethers_14_1;
            }
        ],
        execute: function () {
            {
                IERC721Upgradeable,
                    IERC721UpgradeableInterface,
                ;
            }
            from;
            "../IERC721Upgradeable";
            _abi = [
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
                            name: "balance",
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
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "ownerOf",
                    outputs: [
                        {
                            internalType: "address",
                            name: "owner",
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
                            name: "_approved",
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
            IERC721Upgradeable__factory = class IERC721Upgradeable__factory {
                static createInterface() {
                    return new ethers_14.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_14.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721Upgradeable__factory.abi = _abi;
            exports_48("IERC721Upgradeable__factory", IERC721Upgradeable__factory);
        }
    };
});
System.register("typechain-types/factories/ERC721HolderUpgradeable__factory", ["ethers"], function (exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    var ethers_15, _abi, _bytecode, isSuperArgs, ERC721HolderUpgradeable__factory;
    return {
        setters: [
            function (ethers_15_1) {
                ethers_15 = ethers_15_1;
            }
        ],
        execute: function () {
            {
                ERC721HolderUpgradeable,
                    ERC721HolderUpgradeableInterface,
                ;
            }
            from;
            "../ERC721HolderUpgradeable";
            _abi = [
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
            ];
            _bytecode = "0x608060405234801561001057600080fd5b506101af806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004e61003e36600461009d565b630a85bd0160e11b949350505050565b6040516001600160e01b0319909116815260200160405180910390f35b80356001600160a01b038116811461008257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156100b357600080fd5b6100bc8561006b565b93506100ca6020860161006b565b925060408501359150606085013567ffffffffffffffff808211156100ee57600080fd5b818701915087601f83011261010257600080fd5b81358181111561011457610114610087565b604051601f8201601f19908116603f0116810190838211818310171561013c5761013c610087565b816040528281528a602084870101111561015557600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea2646970667358221220f98c0471ee591da0d97bbe0792567ee5306a95c7ae672bed63147b3f3ff4157264736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            ERC721HolderUpgradeable__factory = class ERC721HolderUpgradeable__factory extends ethers_15.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "ERC721HolderUpgradeable";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_15.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_15.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC721HolderUpgradeable__factory.bytecode = _bytecode;
            ERC721HolderUpgradeable__factory.abi = _abi;
            exports_49("ERC721HolderUpgradeable__factory", ERC721HolderUpgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/ERC165Upgradeable__factory", ["ethers"], function (exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    var ethers_16, _abi, ERC165Upgradeable__factory;
    return {
        setters: [
            function (ethers_16_1) {
                ethers_16 = ethers_16_1;
            }
        ],
        execute: function () {
            {
                ERC165Upgradeable,
                    ERC165UpgradeableInterface,
                ;
            }
            from;
            "../ERC165Upgradeable";
            _abi = [
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
            ];
            ERC165Upgradeable__factory = class ERC165Upgradeable__factory {
                static createInterface() {
                    return new ethers_16.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_16.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC165Upgradeable__factory.abi = _abi;
            exports_50("ERC165Upgradeable__factory", ERC165Upgradeable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC165Upgradeable__factory", ["ethers"], function (exports_51, context_51) {
    "use strict";
    var __moduleName = context_51 && context_51.id;
    var ethers_17, _abi, IERC165Upgradeable__factory;
    return {
        setters: [
            function (ethers_17_1) {
                ethers_17 = ethers_17_1;
            }
        ],
        execute: function () {
            {
                IERC165Upgradeable,
                    IERC165UpgradeableInterface,
                ;
            }
            from;
            "../IERC165Upgradeable";
            _abi = [
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
            ];
            IERC165Upgradeable__factory = class IERC165Upgradeable__factory {
                static createInterface() {
                    return new ethers_17.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_17.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC165Upgradeable__factory.abi = _abi;
            exports_51("IERC165Upgradeable__factory", IERC165Upgradeable__factory);
        }
    };
});
System.register("typechain-types/factories/ERC721__factory", ["ethers"], function (exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    var ethers_18, _abi, _bytecode, isSuperArgs, ERC721__factory;
    return {
        setters: [
            function (ethers_18_1) {
                ethers_18 = ethers_18_1;
            }
        ],
        execute: function () {
            {
                ERC721, ERC721Interface;
            }
            from;
            "../ERC721";
            _abi = [
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
            _bytecode = "0x60806040523480156200001157600080fd5b50604051620014c9380380620014c98339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61123780620002926000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610d47565b610228565b60405190151581526020015b60405180910390f35b61010461027a565b6040516100f39190610dbc565b61012461011f366004610dcf565b61030c565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610e04565b6103a6565b005b61014f61015f366004610e2e565b6104bc565b61014f610172366004610e2e565b6104ed565b610124610185366004610dcf565b610508565b61019d610198366004610e6a565b61057f565b6040519081526020016100f3565b610104610606565b61014f6101c1366004610e85565b610615565b61014f6101d4366004610ed7565b6106da565b6101046101e7366004610dcf565b610712565b6100e76101fa366004610fb3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061025957506001600160e01b03198216635b5e139f60e01b145b8061027457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461028990610fe6565b80601f01602080910402602001604051908101604052809291908181526020018280546102b590610fe6565b80156103025780601f106102d757610100808354040283529160200191610302565b820191906000526020600020905b8154815290600101906020018083116102e557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661038a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103b182610508565b9050806001600160a01b0316836001600160a01b0316141561041f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610381565b336001600160a01b038216148061043b575061043b81336101fa565b6104ad5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610381565b6104b783836107fa565b505050565b6104c63382610868565b6104e25760405162461bcd60e51b815260040161038190611021565b6104b783838361095f565b6104b7838383604051806020016040528060008152506106da565b6000818152600260205260408120546001600160a01b0316806102745760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610381565b60006001600160a01b0382166105ea5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610381565b506001600160a01b031660009081526003602052604090205490565b60606001805461028990610fe6565b6001600160a01b03821633141561066e5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610381565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106e43383610868565b6107005760405162461bcd60e51b815260040161038190611021565b61070c84848484610aff565b50505050565b6000818152600260205260409020546060906001600160a01b03166107915760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610381565b60006107a860408051602081019091526000815290565b905060008151116107c857604051806020016040528060008152506107f3565b806107d284610b32565b6040516020016107e3929190611072565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061082f82610508565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166108e15760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610381565b60006108ec83610508565b9050806001600160a01b0316846001600160a01b031614806109275750836001600160a01b031661091c8461030c565b6001600160a01b0316145b8061095757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661097282610508565b6001600160a01b0316146109da5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610381565b6001600160a01b038216610a3c5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610381565b610a476000826107fa565b6001600160a01b0383166000908152600360205260408120805460019290610a709084906110b7565b90915550506001600160a01b0382166000908152600360205260408120805460019290610a9e9084906110ce565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610b0a84848461095f565b610b1684848484610c30565b61070c5760405162461bcd60e51b8152600401610381906110e6565b606081610b565750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b805780610b6a81611138565b9150610b799050600a83611169565b9150610b5a565b60008167ffffffffffffffff811115610b9b57610b9b610ec1565b6040519080825280601f01601f191660200182016040528015610bc5576020820181803683370190505b5090505b841561095757610bda6001836110b7565b9150610be7600a8661117d565b610bf29060306110ce565b60f81b818381518110610c0757610c07611191565b60200101906001600160f81b031916908160001a905350610c29600a86611169565b9450610bc9565b60006001600160a01b0384163b15610d2357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c749033908990889088906004016111a7565b6020604051808303816000875af1925050508015610caf575060408051601f3d908101601f19168201909252610cac918101906111e4565b60015b610d09573d808015610cdd576040519150601f19603f3d011682016040523d82523d6000602084013e610ce2565b606091505b508051610d015760405162461bcd60e51b8152600401610381906110e6565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610957565b506001949350505050565b6001600160e01b031981168114610d4457600080fd5b50565b600060208284031215610d5957600080fd5b81356107f381610d2e565b60005b83811015610d7f578181015183820152602001610d67565b8381111561070c5750506000910152565b60008151808452610da8816020860160208601610d64565b601f01601f19169290920160200192915050565b6020815260006107f36020830184610d90565b600060208284031215610de157600080fd5b5035919050565b80356001600160a01b0381168114610dff57600080fd5b919050565b60008060408385031215610e1757600080fd5b610e2083610de8565b946020939093013593505050565b600080600060608486031215610e4357600080fd5b610e4c84610de8565b9250610e5a60208501610de8565b9150604084013590509250925092565b600060208284031215610e7c57600080fd5b6107f382610de8565b60008060408385031215610e9857600080fd5b610ea183610de8565b915060208301358015158114610eb657600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610eed57600080fd5b610ef685610de8565b9350610f0460208601610de8565b925060408501359150606085013567ffffffffffffffff80821115610f2857600080fd5b818701915087601f830112610f3c57600080fd5b813581811115610f4e57610f4e610ec1565b604051601f8201601f19908116603f01168101908382118183101715610f7657610f76610ec1565b816040528281528a6020848701011115610f8f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fc657600080fd5b610fcf83610de8565b9150610fdd60208401610de8565b90509250929050565b600181811c90821680610ffa57607f821691505b6020821081141561101b57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008351611084818460208801610d64565b835190830190611098818360208801610d64565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110c9576110c96110a1565b500390565b600082198211156110e1576110e16110a1565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060001982141561114c5761114c6110a1565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261117857611178611153565b500490565b60008261118c5761118c611153565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111da90830184610d90565b9695505050505050565b6000602082840312156111f657600080fd5b81516107f381610d2e56fea264697066735822122049e2c468482617864dcf0c5bd8cffc40de27127b047212da54eef23a795a382c64736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            ERC721__factory = class ERC721__factory extends ethers_18.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "ERC721";
                }
                deploy(name_, symbol_, overrides) {
                    return super.deploy(name_, symbol_, overrides || {});
                }
                getDeployTransaction(name_, symbol_, overrides) {
                    return super.getDeployTransaction(name_, symbol_, overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_18.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_18.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC721__factory.bytecode = _bytecode;
            ERC721__factory.abi = _abi;
            exports_52("ERC721__factory", ERC721__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/ERC721Enumerable__factory", ["ethers"], function (exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    var ethers_19, _abi, ERC721Enumerable__factory;
    return {
        setters: [
            function (ethers_19_1) {
                ethers_19 = ethers_19_1;
            }
        ],
        execute: function () {
            {
                ERC721Enumerable,
                    ERC721EnumerableInterface,
                ;
            }
            from;
            "../ERC721Enumerable";
            _abi = [
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
            ];
            ERC721Enumerable__factory = class ERC721Enumerable__factory {
                static createInterface() {
                    return new ethers_19.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_19.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC721Enumerable__factory.abi = _abi;
            exports_53("ERC721Enumerable__factory", ERC721Enumerable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721Enumerable__factory", ["ethers"], function (exports_54, context_54) {
    "use strict";
    var __moduleName = context_54 && context_54.id;
    var ethers_20, _abi, IERC721Enumerable__factory;
    return {
        setters: [
            function (ethers_20_1) {
                ethers_20 = ethers_20_1;
            }
        ],
        execute: function () {
            {
                IERC721Enumerable,
                    IERC721EnumerableInterface,
                ;
            }
            from;
            "../IERC721Enumerable";
            _abi = [
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
                            name: "balance",
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
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "ownerOf",
                    outputs: [
                        {
                            internalType: "address",
                            name: "owner",
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
                            name: "_approved",
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
                            name: "tokenId",
                            type: "uint256",
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
            IERC721Enumerable__factory = class IERC721Enumerable__factory {
                static createInterface() {
                    return new ethers_20.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_20.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721Enumerable__factory.abi = _abi;
            exports_54("IERC721Enumerable__factory", IERC721Enumerable__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721Metadata__factory", ["ethers"], function (exports_55, context_55) {
    "use strict";
    var __moduleName = context_55 && context_55.id;
    var ethers_21, _abi, IERC721Metadata__factory;
    return {
        setters: [
            function (ethers_21_1) {
                ethers_21 = ethers_21_1;
            }
        ],
        execute: function () {
            {
                IERC721Metadata,
                    IERC721MetadataInterface,
                ;
            }
            from;
            "../IERC721Metadata";
            _abi = [
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
                            name: "balance",
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
                            name: "owner",
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
                            name: "_approved",
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
            IERC721Metadata__factory = class IERC721Metadata__factory {
                static createInterface() {
                    return new ethers_21.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_21.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721Metadata__factory.abi = _abi;
            exports_55("IERC721Metadata__factory", IERC721Metadata__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721__factory", ["ethers"], function (exports_56, context_56) {
    "use strict";
    var __moduleName = context_56 && context_56.id;
    var ethers_22, _abi, IERC721__factory;
    return {
        setters: [
            function (ethers_22_1) {
                ethers_22 = ethers_22_1;
            }
        ],
        execute: function () {
            {
                IERC721, IERC721Interface;
            }
            from;
            "../IERC721";
            _abi = [
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
                            name: "balance",
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
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "ownerOf",
                    outputs: [
                        {
                            internalType: "address",
                            name: "owner",
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
                            name: "_approved",
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
            IERC721__factory = class IERC721__factory {
                static createInterface() {
                    return new ethers_22.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_22.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721__factory.abi = _abi;
            exports_56("IERC721__factory", IERC721__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC721Receiver__factory", ["ethers"], function (exports_57, context_57) {
    "use strict";
    var __moduleName = context_57 && context_57.id;
    var ethers_23, _abi, IERC721Receiver__factory;
    return {
        setters: [
            function (ethers_23_1) {
                ethers_23 = ethers_23_1;
            }
        ],
        execute: function () {
            {
                IERC721Receiver,
                    IERC721ReceiverInterface,
                ;
            }
            from;
            "../IERC721Receiver";
            _abi = [
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "from",
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
            ];
            IERC721Receiver__factory = class IERC721Receiver__factory {
                static createInterface() {
                    return new ethers_23.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_23.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC721Receiver__factory.abi = _abi;
            exports_57("IERC721Receiver__factory", IERC721Receiver__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/ERC165__factory", ["ethers"], function (exports_58, context_58) {
    "use strict";
    var __moduleName = context_58 && context_58.id;
    var ethers_24, _abi, ERC165__factory;
    return {
        setters: [
            function (ethers_24_1) {
                ethers_24 = ethers_24_1;
            }
        ],
        execute: function () {
            {
                ERC165, ERC165Interface;
            }
            from;
            "../ERC165";
            _abi = [
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
            ];
            ERC165__factory = class ERC165__factory {
                static createInterface() {
                    return new ethers_24.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_24.Contract(address, _abi, signerOrProvider);
                }
            };
            ERC165__factory.abi = _abi;
            exports_58("ERC165__factory", ERC165__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IERC165__factory", ["ethers"], function (exports_59, context_59) {
    "use strict";
    var __moduleName = context_59 && context_59.id;
    var ethers_25, _abi, IERC165__factory;
    return {
        setters: [
            function (ethers_25_1) {
                ethers_25 = ethers_25_1;
            }
        ],
        execute: function () {
            {
                IERC165, IERC165Interface;
            }
            from;
            "../IERC165";
            _abi = [
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
            ];
            IERC165__factory = class IERC165__factory {
                static createInterface() {
                    return new ethers_25.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_25.Contract(address, _abi, signerOrProvider);
                }
            };
            IERC165__factory.abi = _abi;
            exports_59("IERC165__factory", IERC165__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IM4mComponents__factory", ["ethers"], function (exports_60, context_60) {
    "use strict";
    var __moduleName = context_60 && context_60.id;
    var ethers_26, _abi, IM4mComponents__factory;
    return {
        setters: [
            function (ethers_26_1) {
                ethers_26 = ethers_26_1;
            }
        ],
        execute: function () {
            {
                IM4mComponents,
                    IM4mComponentsInterface,
                ;
            }
            from;
            "../IM4mComponents";
            _abi = [
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "account",
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
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            indexed: false,
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "TransferBatch",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                    ],
                    name: "TransferSingle",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "string",
                            name: "value",
                            type: "string",
                        },
                        {
                            indexed: true,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                    ],
                    name: "URI",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
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
                            internalType: "address[]",
                            name: "accounts",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                    ],
                    name: "balanceOfBatch",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "value",
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
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "burnBatch",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
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
                        {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256",
                        },
                    ],
                    name: "mint",
                    outputs: [],
                    stateMutability: "nonpayable",
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
                            internalType: "uint256[]",
                            name: "tokenIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                    ],
                    name: "mintBatch",
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
                        {
                            internalType: "string",
                            name: "name",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "symbol",
                            type: "string",
                        },
                    ],
                    name: "prepareNewToken",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "registry",
                    outputs: [
                        {
                            internalType: "contract IM4mNFTRegistry",
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
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                        },
                    ],
                    name: "safeBatchTransferFrom",
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
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
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
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
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
            ];
            IM4mComponents__factory = class IM4mComponents__factory {
                static createInterface() {
                    return new ethers_26.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_26.Contract(address, _abi, signerOrProvider);
                }
            };
            IM4mComponents__factory.abi = _abi;
            exports_60("IM4mComponents__factory", IM4mComponents__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IM4mDAO__factory", ["ethers"], function (exports_61, context_61) {
    "use strict";
    var __moduleName = context_61 && context_61.id;
    var ethers_27, _abi, IM4mDAO__factory;
    return {
        setters: [
            function (ethers_27_1) {
                ethers_27 = ethers_27_1;
            }
        ],
        execute: function () {
            {
                IM4mDAO, IM4mDAOInterface;
            }
            from;
            "../IM4mDAO";
            _abi = [
                {
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "m4mTokenId",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "user",
                            type: "address",
                        },
                        {
                            internalType: "contract IERC721",
                            name: "nft",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "originalTokenId",
                            type: "uint256",
                        },
                    ],
                    name: "convertRecord",
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
                            internalType: "contract IERC721",
                            name: "origin",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "convertToM4mNFT",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "contract IERC721",
                            name: "nft",
                            type: "address",
                        },
                    ],
                    name: "convertibleList",
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
                    name: "m4mNFT",
                    outputs: [
                        {
                            internalType: "contract IM4mNFT",
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
                            internalType: "uint256",
                            name: "m4mTokenId",
                            type: "uint256",
                        },
                        {
                            internalType: "contract IERC721",
                            name: "origin",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "redeem",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "contract IERC721",
                            name: "nft",
                            type: "address",
                        },
                        {
                            internalType: "bool",
                            name: "enabled",
                            type: "bool",
                        },
                    ],
                    name: "setConvertibleList",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
            ];
            IM4mDAO__factory = class IM4mDAO__factory {
                static createInterface() {
                    return new ethers_27.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_27.Contract(address, _abi, signerOrProvider);
                }
            };
            IM4mDAO__factory.abi = _abi;
            exports_61("IM4mDAO__factory", IM4mDAO__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IM4mNFT__factory", ["ethers"], function (exports_62, context_62) {
    "use strict";
    var __moduleName = context_62 && context_62.id;
    var ethers_28, _abi, IM4mNFT__factory;
    return {
        setters: [
            function (ethers_28_1) {
                ethers_28 = ethers_28_1;
            }
        ],
        execute: function () {
            {
                IM4mNFT, IM4mNFTInterface;
            }
            from;
            "../IM4mNFT";
            _abi = [
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
                            name: "balance",
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
                    inputs: [],
                    name: "dao",
                    outputs: [
                        {
                            internalType: "contract IM4mDAO",
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
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "getApproved",
                    outputs: [
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
                    ],
                    name: "mint",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "nonpayable",
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
                            name: "num",
                            type: "uint256",
                        },
                    ],
                    name: "mintBatch",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address[]",
                            name: "to",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256",
                            name: "num",
                            type: "uint256",
                        },
                    ],
                    name: "mintBatch",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "to",
                            type: "address",
                        },
                    ],
                    name: "mintByRegistry",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
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
                    name: "ownerOf",
                    outputs: [
                        {
                            internalType: "address",
                            name: "owner",
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
                            internalType: "contract IM4mNFTRegistry",
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
                            name: "_approved",
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
            IM4mNFT__factory = class IM4mNFT__factory {
                static createInterface() {
                    return new ethers_28.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_28.Contract(address, _abi, signerOrProvider);
                }
            };
            IM4mNFT__factory.abi = _abi;
            exports_62("IM4mNFT__factory", IM4mNFT__factory);
        }
    };
});
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
System.register("typechain-types/factories/IM4mNFTRegistry__factory", ["ethers"], function (exports_63, context_63) {
    "use strict";
    var __moduleName = context_63 && context_63.id;
    var ethers_29, _abi, IM4mNFTRegistry__factory;
    return {
        setters: [
            function (ethers_29_1) {
                ethers_29 = ethers_29_1;
            }
        ],
        execute: function () {
            {
                IM4mNFTRegistry,
                    IM4mNFTRegistryInterface,
                ;
            }
            from;
            "../IM4mNFTRegistry";
            _abi = [
                {
                    inputs: [
                        {
                            internalType: "uint256[]",
                            name: "componentIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "sig",
                            type: "bytes",
                        },
                    ],
                    name: "assembleM4mNFT",
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
                        {
                            internalType: "uint256[]",
                            name: "componentIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "sig",
                            type: "bytes",
                        },
                    ],
                    name: "assembleOriginalM4mNFT",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "m4mNFT",
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
                    name: "operator",
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
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256[]",
                            name: "componentIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "sig",
                            type: "bytes",
                        },
                    ],
                    name: "splitM4mNFT",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
            ];
            IM4mNFTRegistry__factory = class IM4mNFTRegistry__factory {
                static createInterface() {
                    return new ethers_29.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_29.Contract(address, _abi, signerOrProvider);
                }
            };
            IM4mNFTRegistry__factory.abi = _abi;
            exports_63("IM4mNFTRegistry__factory", IM4mNFTRegistry__factory);
        }
    };
});
System.register("typechain-types/factories/M4mComponent__factory", ["ethers"], function (exports_64, context_64) {
    "use strict";
    var __moduleName = context_64 && context_64.id;
    var ethers_30, _abi, _bytecode, isSuperArgs, M4mComponent__factory;
    return {
        setters: [
            function (ethers_30_1) {
                ethers_30 = ethers_30_1;
            }
        ],
        execute: function () {
            {
                M4mComponent, M4mComponentInterface;
            }
            from;
            "../M4mComponent";
            _abi = [
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "account",
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
                            indexed: true,
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            indexed: false,
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "TransferBatch",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: true,
                            internalType: "address",
                            name: "operator",
                            type: "address",
                        },
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
                            indexed: false,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                    ],
                    name: "TransferSingle",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "string",
                            name: "value",
                            type: "string",
                        },
                        {
                            indexed: true,
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                    ],
                    name: "URI",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
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
                            internalType: "address[]",
                            name: "accounts",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                    ],
                    name: "balanceOfBatch",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "value",
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
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                        {
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "values",
                            type: "uint256[]",
                        },
                    ],
                    name: "burnBatch",
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
                        {
                            internalType: "contract IM4mNFTRegistry",
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
                            name: "account",
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
                        {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256",
                        },
                    ],
                    name: "mint",
                    outputs: [],
                    stateMutability: "nonpayable",
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
                            internalType: "uint256[]",
                            name: "tokenIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                    ],
                    name: "mintBatch",
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
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "_name",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "_symbol",
                            type: "string",
                        },
                    ],
                    name: "prepareNewToken",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "registry",
                    outputs: [
                        {
                            internalType: "contract IM4mNFTRegistry",
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
                            internalType: "uint256[]",
                            name: "ids",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                        },
                    ],
                    name: "safeBatchTransferFrom",
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
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
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
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
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
                            name: "",
                            type: "uint256",
                        },
                    ],
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
                            name: "",
                            type: "uint256",
                        },
                    ],
                    name: "uri",
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
            ];
            _bytecode = "0x608060405234801561001057600080fd5b50612565806100206000396000f3fe608060405234801561001057600080fd5b50600436106101355760003560e01c8063715018a6116100b8578063bd85b0391161007c578063bd85b039146102a5578063d81d0a15146102c5578063e985e9c5146102d8578063f242432a14610314578063f2fde38b14610327578063f5298aca1461033a57600080fd5b8063715018a61461023b5780637ab4339d146102435780637b103999146102565780638da5cb5b14610281578063a22cb4651461029257600080fd5b8063156e29f6116100ff578063156e29f6146101cf5780632eb2c2d6146101e25780634e1273f4146101f55780634e41a1fb146102155780636b20c4541461022857600080fd5b8062ad800c1461013a578062fdd58e1461016357806301ffc9a7146101845780630577486d146101a75780630e89341c146101bc575b600080fd5b61014d610148366004611a33565b61034d565b60405161015a9190611a99565b60405180910390f35b610176610171366004611ac8565b6103e7565b60405190815260200161015a565b610197610192366004611b0a565b610480565b604051901515815260200161015a565b6101ba6101b5366004611bde565b6104d2565b005b61014d6101ca366004611a33565b610587565b6101ba6101dd366004611c4b565b61061b565b6101ba6101f0366004611d15565b6106b3565b610208610203366004611dc3565b61074a565b60405161015a9190611ecb565b61014d610223366004611a33565b610874565b6101ba610236366004611ede565b61088d565b6101ba61097a565b6101ba610251366004611f4a565b6109b0565b60cc54610269906001600160a01b031681565b6040516001600160a01b03909116815260200161015a565b6097546001600160a01b0316610269565b6101ba6102a0366004611f9c565b610a96565b6101766102b3366004611a33565b60cb6020526000908152604090205481565b6101ba6102d3366004611ede565b610aa5565b6101976102e6366004611fcf565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b6101ba610322366004611ffd565b610ba6565b6101ba610335366004612066565b610c2d565b6101ba610348366004611c4b565b610cc8565b60c9602052600090815260409020805461036690612083565b80601f016020809104026020016040519081016040528092919081815260200182805461039290612083565b80156103df5780601f106103b4576101008083540402835291602001916103df565b820191906000526020600020905b8154815290600101906020018083116103c257829003601f168201915b505050505081565b60006001600160a01b0383166104585760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806104b157506001600160e01b031982166303a24d0760e21b145b806104cc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6097546001600160a01b031633146104fc5760405162461bcd60e51b815260040161044f906120be565b600083815260cb6020526040902054156105425760405162461bcd60e51b8152602060048201526007602482015266195e1a5cdd195960ca1b604482015260640161044f565b600083815260c96020908152604090912083516105619285019061199a565b50600083815260ca6020908152604090912082516105819284019061199a565b50505050565b60606067805461059690612083565b80601f01602080910402602001604051908101604052809291908181526020018280546105c290612083565b801561060f5780601f106105e45761010080835404028352916020019161060f565b820191906000526020600020905b8154815290600101906020018083116105f257829003601f168201915b50505050509050919050565b60cc546001600160a01b031633146106655760405162461bcd60e51b815260206004820152600d60248201526c6f6e6c7920726567697374727960981b604482015260640161044f565b61066e82610d5f565b600082815260cb60205260408120805483929061068c908490612109565b925050819055506106ae83838360405180602001604052806000815250610e33565b505050565b6001600160a01b0385163314806106cf57506106cf85336102e6565b6107365760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b606482015260840161044f565b6107438585858585610f05565b5050505050565b606081518351146107af5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b606482015260840161044f565b6000835167ffffffffffffffff8111156107cb576107cb611b27565b6040519080825280602002602001820160405280156107f4578160200160208202803683370190505b50905060005b845181101561086c5761083f85828151811061081857610818612121565b602002602001015185838151811061083257610832612121565b60200260200101516103e7565b82828151811061085157610851612121565b602090810291909101015261086581612137565b90506107fa565b509392505050565b60ca602052600090815260409020805461036690612083565b6001600160a01b0383163314806108a957506108a983336102e6565b6108f55760405162461bcd60e51b815260206004820181905260248201527f63616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564604482015260640161044f565b60005b815181101561096e5781818151811061091357610913612121565b602002602001015160cb600085848151811061093157610931612121565b6020026020010151815260200190815260200160002060008282546109569190612152565b9091555081905061096681612137565b9150506108f8565b506106ae8383836110a4565b6097546001600160a01b031633146109a45760405162461bcd60e51b815260040161044f906120be565b6109ae6000611223565b565b600054610100900460ff166109cb5760005460ff16156109cf565b303b155b610a325760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161044f565b600054610100900460ff16158015610a54576000805461ffff19166101011790555b610a5d83611275565b610a656112a5565b60cc80546001600160a01b0319166001600160a01b03841617905580156106ae576000805461ff0019169055505050565b610aa13383836112d5565b5050565b60cc546001600160a01b03163314610aef5760405162461bcd60e51b815260206004820152600d60248201526c6f6e6c7920726567697374727960981b604482015260640161044f565b60005b8251811015610b8a57610b1d838281518110610b1057610b10612121565b6020026020010151610d5f565b818181518110610b2f57610b2f612121565b602002602001015160cb6000858481518110610b4d57610b4d612121565b602002602001015181526020019081526020016000206000828254610b729190612109565b90915550819050610b8281612137565b915050610af2565b506106ae838383604051806020016040528060008152506113b6565b6001600160a01b038516331480610bc25750610bc285336102e6565b610c205760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b606482015260840161044f565b6107438585858585611502565b6097546001600160a01b03163314610c575760405162461bcd60e51b815260040161044f906120be565b6001600160a01b038116610cbc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161044f565b610cc581611223565b50565b6001600160a01b038316331480610ce45750610ce483336102e6565b610d305760405162461bcd60e51b815260206004820181905260248201527f63616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564604482015260640161044f565b600082815260cb602052604081208054839290610d4e908490612152565b909155506106ae9050838383611623565b600081815260c9602052604081208054610d7890612083565b80601f0160208091040260200160405190810160405280929190818152602001828054610da490612083565b8015610df15780601f10610dc657610100808354040283529160200191610df1565b820191906000526020600020905b815481529060010190602001808311610dd457829003601f168201915b505050505090506000815111610aa15760405162461bcd60e51b815260206004820152600760248201526637379030ba3a3960c91b604482015260640161044f565b6001600160a01b038416610e595760405162461bcd60e51b815260040161044f90612169565b33610e7381600087610e6a88611729565b61074388611729565b60008481526065602090815260408083206001600160a01b038916845290915281208054859290610ea5908490612109565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461074381600087878787611774565b8151835114610f265760405162461bcd60e51b815260040161044f906121aa565b6001600160a01b038416610f4c5760405162461bcd60e51b815260040161044f906121f2565b3360005b8451811015611036576000858281518110610f6d57610f6d612121565b602002602001015190506000858381518110610f8b57610f8b612121565b60209081029190910181015160008481526065835260408082206001600160a01b038e168352909352919091205490915081811015610fdc5760405162461bcd60e51b815260040161044f90612237565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061101b908490612109565b925050819055505050508061102f90612137565b9050610f50565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611086929190612281565b60405180910390a461109c8187878787876118d0565b505050505050565b6001600160a01b0383166110ca5760405162461bcd60e51b815260040161044f906122af565b80518251146110eb5760405162461bcd60e51b815260040161044f906121aa565b604080516020810190915260009081905233905b83518110156111c457600084828151811061111c5761111c612121565b60200260200101519050600084838151811061113a5761113a612121565b60209081029190910181015160008481526065835260408082206001600160a01b038c16835290935291909120549091508181101561118b5760405162461bcd60e51b815260040161044f906122f2565b60009283526065602090815260408085206001600160a01b038b16865290915290922091039055806111bc81612137565b9150506110ff565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611215929190612281565b60405180910390a450505050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661129c5760405162461bcd60e51b815260040161044f90612336565b610cc58161198b565b600054610100900460ff166112cc5760405162461bcd60e51b815260040161044f90612336565b6109ae33611223565b816001600160a01b0316836001600160a01b031614156113495760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b606482015260840161044f565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166113dc5760405162461bcd60e51b815260040161044f90612169565b81518351146113fd5760405162461bcd60e51b815260040161044f906121aa565b3360005b845181101561149a5783818151811061141c5761141c612121565b60200260200101516065600087848151811061143a5761143a612121565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002060008282546114829190612109565b9091555081905061149281612137565b915050611401565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516114eb929190612281565b60405180910390a4610743816000878787876118d0565b6001600160a01b0384166115285760405162461bcd60e51b815260040161044f906121f2565b33611538818787610e6a88611729565b60008481526065602090815260408083206001600160a01b038a1684529091529020548381101561157b5760405162461bcd60e51b815260040161044f90612237565b60008581526065602090815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906115ba908490612109565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461161a828888888888611774565b50505050505050565b6001600160a01b0383166116495760405162461bcd60e51b815260040161044f906122af565b336116798185600061165a87611729565b61166387611729565b5050604080516020810190915260009052505050565b60008381526065602090815260408083206001600160a01b0388168452909152902054828110156116bc5760405162461bcd60e51b815260040161044f906122f2565b60008481526065602090815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061176357611763612121565b602090810291909101015292915050565b6001600160a01b0384163b1561109c5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906117b89089908990889088908890600401612381565b6020604051808303816000875af19250505080156117f3575060408051601f3d908101601f191682019092526117f0918101906123c6565b60015b6118a0576117ff6123e3565b806308c379a0141561183957506118146123ff565b8061181f575061183b565b8060405162461bcd60e51b815260040161044f9190611a99565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606482015260840161044f565b6001600160e01b0319811663f23a6e6160e01b1461161a5760405162461bcd60e51b815260040161044f90612489565b6001600160a01b0384163b1561109c5760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061191490899089908890889088906004016124d1565b6020604051808303816000875af192505050801561194f575060408051601f3d908101601f1916820190925261194c918101906123c6565b60015b61195b576117ff6123e3565b6001600160e01b0319811663bc197c8160e01b1461161a5760405162461bcd60e51b815260040161044f90612489565b8051610aa19060679060208401905b8280546119a690612083565b90600052602060002090601f0160209004810192826119c85760008555611a0e565b82601f106119e157805160ff1916838001178555611a0e565b82800160010185558215611a0e579182015b82811115611a0e5782518255916020019190600101906119f3565b50611a1a929150611a1e565b5090565b5b80821115611a1a5760008155600101611a1f565b600060208284031215611a4557600080fd5b5035919050565b6000815180845260005b81811015611a7257602081850181015186830182015201611a56565b81811115611a84576000602083870101525b50601f01601f19169290920160200192915050565b602081526000611aac6020830184611a4c565b9392505050565b6001600160a01b0381168114610cc557600080fd5b60008060408385031215611adb57600080fd5b8235611ae681611ab3565b946020939093013593505050565b6001600160e01b031981168114610cc557600080fd5b600060208284031215611b1c57600080fd5b8135611aac81611af4565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715611b6357611b63611b27565b6040525050565b600082601f830112611b7b57600080fd5b813567ffffffffffffffff811115611b9557611b95611b27565b604051611bac601f8301601f191660200182611b3d565b818152846020838601011115611bc157600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611bf357600080fd5b83359250602084013567ffffffffffffffff80821115611c1257600080fd5b611c1e87838801611b6a565b93506040860135915080821115611c3457600080fd5b50611c4186828701611b6a565b9150509250925092565b600080600060608486031215611c6057600080fd5b8335611c6b81611ab3565b95602085013595506040909401359392505050565b600067ffffffffffffffff821115611c9a57611c9a611b27565b5060051b60200190565b600082601f830112611cb557600080fd5b81356020611cc282611c80565b604051611ccf8282611b3d565b83815260059390931b8501820192828101915086841115611cef57600080fd5b8286015b84811015611d0a5780358352918301918301611cf3565b509695505050505050565b600080600080600060a08688031215611d2d57600080fd5b8535611d3881611ab3565b94506020860135611d4881611ab3565b9350604086013567ffffffffffffffff80821115611d6557600080fd5b611d7189838a01611ca4565b94506060880135915080821115611d8757600080fd5b611d9389838a01611ca4565b93506080880135915080821115611da957600080fd5b50611db688828901611b6a565b9150509295509295909350565b60008060408385031215611dd657600080fd5b823567ffffffffffffffff80821115611dee57600080fd5b818501915085601f830112611e0257600080fd5b81356020611e0f82611c80565b604051611e1c8282611b3d565b83815260059390931b8501820192828101915089841115611e3c57600080fd5b948201945b83861015611e63578535611e5481611ab3565b82529482019490820190611e41565b96505086013592505080821115611e7957600080fd5b50611e8685828601611ca4565b9150509250929050565b600081518084526020808501945080840160005b83811015611ec057815187529582019590820190600101611ea4565b509495945050505050565b602081526000611aac6020830184611e90565b600080600060608486031215611ef357600080fd5b8335611efe81611ab3565b9250602084013567ffffffffffffffff80821115611f1b57600080fd5b611f2787838801611ca4565b93506040860135915080821115611f3d57600080fd5b50611c4186828701611ca4565b60008060408385031215611f5d57600080fd5b823567ffffffffffffffff811115611f7457600080fd5b611f8085828601611b6a565b9250506020830135611f9181611ab3565b809150509250929050565b60008060408385031215611faf57600080fd5b8235611fba81611ab3565b915060208301358015158114611f9157600080fd5b60008060408385031215611fe257600080fd5b8235611fed81611ab3565b91506020830135611f9181611ab3565b600080600080600060a0868803121561201557600080fd5b853561202081611ab3565b9450602086013561203081611ab3565b93506040860135925060608601359150608086013567ffffffffffffffff81111561205a57600080fd5b611db688828901611b6a565b60006020828403121561207857600080fd5b8135611aac81611ab3565b600181811c9082168061209757607f821691505b602082108114156120b857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561211c5761211c6120f3565b500190565b634e487b7160e01b600052603260045260246000fd5b600060001982141561214b5761214b6120f3565b5060010190565b600082821015612164576121646120f3565b500390565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6040815260006122946040830185611e90565b82810360208401526122a68185611e90565b95945050505050565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906123bb90830184611a4c565b979650505050505050565b6000602082840312156123d857600080fd5b8151611aac81611af4565b600060033d11156123fc5760046000803e5060005160e01c5b90565b600060443d101561240d5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561243d57505050505090565b82850191508151818111156124555750505050505090565b843d870101602082850101111561246f5750505050505090565b61247e60208286010187611b3d565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b0386811682528516602082015260a0604082018190526000906124fd90830186611e90565b828103606084015261250f8186611e90565b905082810360808401526125238185611a4c565b9897505050505050505056fea264697066735822122015d73cc1168518190f0746599a0826eeb078aae8017a800c110c33d29ef7444b64736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            M4mComponent__factory = class M4mComponent__factory extends ethers_30.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "M4mComponent";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_30.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_30.Contract(address, _abi, signerOrProvider);
                }
            };
            M4mComponent__factory.bytecode = _bytecode;
            M4mComponent__factory.abi = _abi;
            exports_64("M4mComponent__factory", M4mComponent__factory);
        }
    };
});
System.register("typechain-types/factories/M4mDao__factory", ["ethers"], function (exports_65, context_65) {
    "use strict";
    var __moduleName = context_65 && context_65.id;
    var ethers_31, _abi, _bytecode, isSuperArgs, M4mDao__factory;
    return {
        setters: [
            function (ethers_31_1) {
                ethers_31 = ethers_31_1;
            }
        ],
        execute: function () {
            {
                M4mDao, M4mDaoInterface;
            }
            from;
            "../M4mDao";
            _abi = [
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "address",
                            name: "owner",
                            type: "address",
                        },
                        {
                            indexed: false,
                            internalType: "contract IERC721",
                            name: "origin",
                            type: "address",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "m4mTokenId",
                            type: "uint256",
                        },
                    ],
                    name: "ConvertToM4mNFT",
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
                            internalType: "address",
                            name: "owner",
                            type: "address",
                        },
                        {
                            indexed: false,
                            internalType: "contract IERC721",
                            name: "origin",
                            type: "address",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                        {
                            indexed: false,
                            internalType: "uint256",
                            name: "m4mTokenId",
                            type: "uint256",
                        },
                    ],
                    name: "Redeem",
                    type: "event",
                },
                {
                    anonymous: false,
                    inputs: [
                        {
                            indexed: false,
                            internalType: "contract IERC721",
                            name: "nft",
                            type: "address",
                        },
                        {
                            indexed: false,
                            internalType: "bool",
                            name: "enabled",
                            type: "bool",
                        },
                    ],
                    name: "SetConvertibleList",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "",
                            type: "address",
                        },
                        {
                            internalType: "contract IERC721",
                            name: "",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
                    name: "convertRecord",
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
                            internalType: "contract IERC721",
                            name: "origin",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "convertToM4mNFT",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "contract IERC721",
                            name: "",
                            type: "address",
                        },
                    ],
                    name: "convertibleList",
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
                            internalType: "contract IM4mNFT",
                            name: "_m4mNFT",
                            type: "address",
                        },
                    ],
                    name: "initialize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "m4mNFT",
                    outputs: [
                        {
                            internalType: "contract IM4mNFT",
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
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "m4mTokenId",
                            type: "uint256",
                        },
                        {
                            internalType: "contract IERC721",
                            name: "origin",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "redeem",
                    outputs: [],
                    stateMutability: "nonpayable",
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
                            internalType: "contract IERC721",
                            name: "nft",
                            type: "address",
                        },
                        {
                            internalType: "bool",
                            name: "enabled",
                            type: "bool",
                        },
                    ],
                    name: "setConvertibleList",
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
            ];
            _bytecode = "0x608060405234801561001057600080fd5b50610af4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063be22f35e11610071578063be22f35e1461015f578063c068541f14610172578063c4d66de814610185578063d878016114610198578063f2fde38b146101ab578063fa19054a146101be57600080fd5b8063150b7a02146100ae578063715018a6146100ea57806388d0cafa146100f45780638da5cb5b14610107578063b8a058fe1461012c575b600080fd5b6100cc6100bc366004610837565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020015b60405180910390f35b6100f26101fb565b005b6100f2610102366004610917565b61023a565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016100e1565b61014f61013a366004610943565b60976020526000908152604090205460ff1681565b60405190151581526020016100e1565b609854610114906001600160a01b031681565b6100f2610180366004610967565b6103a2565b6100f2610193366004610943565b61042f565b6100f26101a63660046109a5565b610514565b6100f26101b9366004610943565b6106c8565b61014f6101cc3660046109dd565b609960209081526000948552604080862082529385528385208152918452828420909152825290205460ff1681565b6033546001600160a01b0316331461022e5760405162461bcd60e51b815260040161022590610a25565b60405180910390fd5b6102386000610763565b565b604051632142170760e11b8152336004820152306024820152604481018290526001600160a01b038316906342842e0e90606401600060405180830381600087803b15801561028857600080fd5b505af115801561029c573d6000803e3d6000fd5b50506098546040516335313c2160e11b8152336004820152600093506001600160a01b039091169150636a627842906024016020604051808303816000875af11580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103119190610a5a565b6000818152609960209081526040808320338085529083528184206001600160a01b038916808652908452828520888652845293829020805460ff19166001179055815190815291820192909252908101849052606081018290529091507fa24f03a00be68b18cc575757f35174a4777d40e14839913a42d8b56eb460039b906080015b60405180910390a1505050565b6033546001600160a01b031633146103cc5760405162461bcd60e51b815260040161022590610a25565b6001600160a01b038216600081815260976020908152604091829020805460ff19168515159081179091558251938452908301527f1922e8a0af2e5c11ae62b29f0916b049b7e95b88e79c2342e8c4f0b20d455c33910160405180910390a15050565b600054610100900460ff1661044a5760005460ff161561044e565b303b155b6104b15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610225565b600054610100900460ff161580156104d3576000805461ffff19166101011790555b6104db6107b5565b6104e36107e5565b609880546001600160a01b0319166001600160a01b0384161790558015610510576000805461ff00191690555b5050565b600083815260996020908152604080832033845282528083206001600160a01b0386168452825280832084845290915290205460ff166105825760405162461bcd60e51b81526020600482015260096024820152681b9bc81c9958dbdc9960ba1b6044820152606401610225565b604051632142170760e11b8152306004820152336024820152604481018290526001600160a01b038316906342842e0e90606401600060405180830381600087803b1580156105d057600080fd5b505af11580156105e4573d6000803e3d6000fd5b5050609854604051630852cd8d60e31b8152600481018590526001600160a01b0390911692506342966c689150602401600060405180830381600087803b15801561062e57600080fd5b505af1158015610642573d6000803e3d6000fd5b5050506000848152609960209081526040808320338085529083528184206001600160a01b038816808652908452828520878652845293829020805460ff19169055815190815291820192909252908101839052606081018590527f3f693fff038bb8a046aa76d9516190ac7444f7d69cf952c4cbdc086fdef2d6fc9150608001610395565b6033546001600160a01b031633146106f25760405162461bcd60e51b815260040161022590610a25565b6001600160a01b0381166107575760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610225565b61076081610763565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166107dc5760405162461bcd60e51b815260040161022590610a73565b61023833610763565b600054610100900460ff166102385760405162461bcd60e51b815260040161022590610a73565b6001600160a01b038116811461076057600080fd5b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561084d57600080fd5b84356108588161080c565b935060208501356108688161080c565b925060408501359150606085013567ffffffffffffffff8082111561088c57600080fd5b818701915087601f8301126108a057600080fd5b8135818111156108b2576108b2610821565b604051601f8201601f19908116603f011681019083821181831017156108da576108da610821565b816040528281528a60208487010111156108f357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561092a57600080fd5b82356109358161080c565b946020939093013593505050565b60006020828403121561095557600080fd5b81356109608161080c565b9392505050565b6000806040838503121561097a57600080fd5b82356109858161080c565b91506020830135801515811461099a57600080fd5b809150509250929050565b6000806000606084860312156109ba57600080fd5b8335925060208401356109cc8161080c565b929592945050506040919091013590565b600080600080608085870312156109f357600080fd5b843593506020850135610a058161080c565b92506040850135610a158161080c565b9396929550929360600135925050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215610a6c57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220ec79918cec500cbc43eed14b3b4300c30032e3ab55cde99d38bc1fd55d971c0164736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            M4mDao__factory = class M4mDao__factory extends ethers_31.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "M4mDao";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_31.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_31.Contract(address, _abi, signerOrProvider);
                }
            };
            M4mDao__factory.bytecode = _bytecode;
            M4mDao__factory.abi = _abi;
            exports_65("M4mDao__factory", M4mDao__factory);
        }
    };
});
System.register("typechain-types/factories/M4mNFT__factory", ["ethers"], function (exports_66, context_66) {
    "use strict";
    var __moduleName = context_66 && context_66.id;
    var ethers_32, _abi, _bytecode, isSuperArgs, M4mNFT__factory;
    return {
        setters: [
            function (ethers_32_1) {
                ethers_32 = ethers_32_1;
            }
        ],
        execute: function () {
            {
                M4mNFT, M4mNFTInterface;
            }
            from;
            "../M4mNFT";
            _abi = [
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
                    inputs: [],
                    name: "dao",
                    outputs: [
                        {
                            internalType: "contract IM4mDAO",
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
                            internalType: "contract IM4mNFTRegistry",
                            name: "_registry",
                            type: "address",
                        },
                        {
                            internalType: "contract IM4mDAO",
                            name: "_dao",
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
                    ],
                    name: "mint",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "nonpayable",
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
                            name: "num",
                            type: "uint256",
                        },
                    ],
                    name: "mintBatch",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address[]",
                            name: "to",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256",
                            name: "num",
                            type: "uint256",
                        },
                    ],
                    name: "mintBatch",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "to",
                            type: "address",
                        },
                    ],
                    name: "mintByRegistry",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
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
                            internalType: "contract IM4mNFTRegistry",
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
            ];
            _bytecode = "0x608060405234801561001057600080fd5b506120f3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80634f6ccce7116100f957806395d89b4111610097578063b88d4fde11610071578063b88d4fde1461037b578063c87b56dd1461038e578063e985e9c5146103a1578063f2fde38b146103dd57600080fd5b806395d89b411461034d578063a22cb46514610355578063b6afc4dc1461036857600080fd5b806370a08231116100d357806370a082311461030e578063715018a6146103215780637b103999146103295780638da5cb5b1461033c57600080fd5b80634f6ccce7146102d55780636352211e146102e85780636a627842146102fb57600080fd5b8063248b71fc116101665780634162169f116101405780634162169f1461028957806342842e0e1461029c57806342966c68146102af578063463fd1af146102c257600080fd5b8063248b71fc146102505780632f745c591461026357806340e61e841461027657600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063081812fc146101eb578063095ea7b31461021657806318160ddd1461022b57806323b872dd1461023d575b600080fd5b6101c16101bc366004611a5c565b6103f0565b60405190151581526020015b60405180910390f35b6101de61041b565b6040516101cd9190611ad1565b6101fe6101f9366004611ae4565b6104ad565b6040516001600160a01b0390911681526020016101cd565b610229610224366004611b12565b610547565b005b60cb545b6040519081526020016101cd565b61022961024b366004611b3e565b61065d565b61022f61025e366004611b12565b61068f565b61022f610271366004611b12565b6106f7565b61022f610284366004611b7f565b61078d565b60fd546101fe906001600160a01b031681565b6102296102aa366004611b3e565b6107ba565b6102296102bd366004611ae4565b6107d5565b6102296102d0366004611c3b565b610836565b61022f6102e3366004611ae4565b61093e565b6101fe6102f6366004611ae4565b6109d1565b61022f610309366004611b7f565b610a48565b61022f61031c366004611b7f565b610ac5565b610229610b4c565b60fc546101fe906001600160a01b031681565b6033546001600160a01b03166101fe565b6101de610b82565b610229610363366004611cb3565b610b91565b61022f610376366004611cf1565b610ba0565b610229610389366004611da9565b610c53565b6101de61039c366004611ae4565b610c85565b6101c16103af366004611e29565b6001600160a01b039182166000908152609c6020908152604080832093909416825291909152205460ff1690565b6102296103eb366004611b7f565b610d60565b60006001600160e01b0319821663780e9d6360e01b1480610415575061041582610df8565b92915050565b60606097805461042a90611e57565b80601f016020809104026020016040519081016040528092919081815260200182805461045690611e57565b80156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b5050505050905090565b6000818152609960205260408120546001600160a01b031661052b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152609b60205260409020546001600160a01b031690565b6000610552826109d1565b9050806001600160a01b0316836001600160a01b031614156105c05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610522565b336001600160a01b03821614806105dc57506105dc81336103af565b61064e5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610522565b6106588383610e48565b505050565b610668335b82610eb6565b6106845760405162461bcd60e51b815260040161052290611e92565b610658838383610fad565b6033546000906001600160a01b031633146106bc5760405162461bcd60e51b815260040161052290611ee3565b5060cb5460005b828110156106f0576106de846106d98385611f2e565b611154565b806106e881611f46565b9150506106c3565b5092915050565b600061070283610ac5565b82106107645760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610522565b506001600160a01b0391909116600090815260c960209081526040808320938352929052205490565b60fc546000906001600160a01b031633146107a757600080fd5b5060cb546107b58282611154565b919050565b61065883838360405180602001604052806000815250610c53565b6107de33610662565b61082a5760405162461bcd60e51b815260206004820181905260248201527f63616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665646044820152606401610522565b6108338161116e565b50565b600054610100900460ff166108515760005460ff1615610855565b303b155b6108b85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610522565b600054610100900460ff161580156108da576000805461ffff19166101011790555b6108e2611215565b83516108f59060fb9060208701906119ad565b5060fc80546001600160a01b038086166001600160a01b03199283161790925560fd8054928516929091169190911790558015610938576000805461ff00191690555b50505050565b600061094960cb5490565b82106109ac5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610522565b60cb82815481106109bf576109bf611f61565b90600052602060002001549050919050565b6000818152609960205260408120546001600160a01b0316806104155760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610522565b6000610a5c6033546001600160a01b031690565b6001600160a01b0316336001600160a01b03161480610a85575060fd546001600160a01b031633145b6107a75760405162461bcd60e51b81526020600482015260116024820152706f6e6c79206f776e6572206f722064616f60781b6044820152606401610522565b60006001600160a01b038216610b305760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610522565b506001600160a01b03166000908152609a602052604090205490565b6033546001600160a01b03163314610b765760405162461bcd60e51b815260040161052290611ee3565b610b806000611285565b565b60606098805461042a90611e57565b610b9c3383836112d7565b5050565b6033546000906001600160a01b03163314610bcd5760405162461bcd60e51b815260040161052290611ee3565b81835114610c095760405162461bcd60e51b8152602060048201526009602482015268696c6c20706172616d60b81b6044820152606401610522565b5060cb5460005b828110156106f057610c41848281518110610c2d57610c2d611f61565b602002602001015182846106d99190611f2e565b80610c4b81611f46565b915050610c10565b610c5d3383610eb6565b610c795760405162461bcd60e51b815260040161052290611e92565b610938848484846113a6565b6000818152609960205260409020546060906001600160a01b0316610d045760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610522565b6000610d0e6113d9565b90506000815111610d2e5760405180602001604052806000815250610d59565b80610d38846113e8565b604051602001610d49929190611f77565b6040516020818303038152906040525b9392505050565b6033546001600160a01b03163314610d8a5760405162461bcd60e51b815260040161052290611ee3565b6001600160a01b038116610def5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610522565b61083381611285565b60006001600160e01b031982166380ac58cd60e01b1480610e2957506001600160e01b03198216635b5e139f60e01b145b8061041557506301ffc9a760e01b6001600160e01b0319831614610415565b6000818152609b6020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e7d826109d1565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152609960205260408120546001600160a01b0316610f2f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610522565b6000610f3a836109d1565b9050806001600160a01b0316846001600160a01b03161480610f755750836001600160a01b0316610f6a846104ad565b6001600160a01b0316145b80610fa557506001600160a01b038082166000908152609c602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610fc0826109d1565b6001600160a01b0316146110245760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610522565b6001600160a01b0382166110865760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610522565b6110918383836114e6565b61109c600082610e48565b6001600160a01b0383166000908152609a602052604081208054600192906110c5908490611fa6565b90915550506001600160a01b0382166000908152609a602052604081208054600192906110f3908490611f2e565b909155505060008181526099602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610b9c82826040518060200160405280600081525061159e565b6000611179826109d1565b9050611187816000846114e6565b611192600083610e48565b6001600160a01b0381166000908152609a602052604081208054600192906111bb908490611fa6565b909155505060008281526099602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600054610100900460ff166112805760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610522565b610b80335b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156113395760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610522565b6001600160a01b038381166000818152609c6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6113b1848484610fad565b6113bd848484846115d1565b6109385760405162461bcd60e51b815260040161052290611fbd565b606060fb805461042a90611e57565b60608161140c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611436578061142081611f46565b915061142f9050600a83612025565b9150611410565b60008167ffffffffffffffff81111561145157611451611b9c565b6040519080825280601f01601f19166020018201604052801561147b576020820181803683370190505b5090505b8415610fa557611490600183611fa6565b915061149d600a86612039565b6114a8906030611f2e565b60f81b8183815181106114bd576114bd611f61565b60200101906001600160f81b031916908160001a9053506114df600a86612025565b945061147f565b6001600160a01b0383166115415761153c8160cb8054600083815260cc60205260408120829055600182018355919091527fa7ce836d032b2bf62b7e2097a8e0a6d8aeb35405ad15271e96d3b0188a1d06fb0155565b611564565b816001600160a01b0316836001600160a01b0316146115645761156483826116cf565b6001600160a01b03821661157b576106588161176c565b826001600160a01b0316826001600160a01b03161461065857610658828261181b565b6115a8838361185f565b6115b560008484846115d1565b6106585760405162461bcd60e51b815260040161052290611fbd565b60006001600160a01b0384163b156116c457604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061161590339089908890889060040161204d565b6020604051808303816000875af1925050508015611650575060408051601f3d908101601f1916820190925261164d9181019061208a565b60015b6116aa573d80801561167e576040519150601f19603f3d011682016040523d82523d6000602084013e611683565b606091505b5080516116a25760405162461bcd60e51b815260040161052290611fbd565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610fa5565b506001949350505050565b600060016116dc84610ac5565b6116e69190611fa6565b600083815260ca6020526040902054909150808214611739576001600160a01b038416600090815260c960209081526040808320858452825280832054848452818420819055835260ca90915290208190555b50600091825260ca602090815260408084208490556001600160a01b03909416835260c981528383209183525290812055565b60cb5460009061177e90600190611fa6565b600083815260cc602052604081205460cb80549394509092849081106117a6576117a6611f61565b906000526020600020015490508060cb83815481106117c7576117c7611f61565b600091825260208083209091019290925582815260cc909152604080822084905585825281205560cb8054806117ff576117ff6120a7565b6001900381819060005260206000200160009055905550505050565b600061182683610ac5565b6001600160a01b03909316600090815260c960209081526040808320868452825280832085905593825260ca9052919091209190915550565b6001600160a01b0382166118b55760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610522565b6000818152609960205260409020546001600160a01b03161561191a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610522565b611926600083836114e6565b6001600160a01b0382166000908152609a6020526040812080546001929061194f908490611f2e565b909155505060008181526099602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546119b990611e57565b90600052602060002090601f0160209004810192826119db5760008555611a21565b82601f106119f457805160ff1916838001178555611a21565b82800160010185558215611a21579182015b82811115611a21578251825591602001919060010190611a06565b50611a2d929150611a31565b5090565b5b80821115611a2d5760008155600101611a32565b6001600160e01b03198116811461083357600080fd5b600060208284031215611a6e57600080fd5b8135610d5981611a46565b60005b83811015611a94578181015183820152602001611a7c565b838111156109385750506000910152565b60008151808452611abd816020860160208601611a79565b601f01601f19169290920160200192915050565b602081526000610d596020830184611aa5565b600060208284031215611af657600080fd5b5035919050565b6001600160a01b038116811461083357600080fd5b60008060408385031215611b2557600080fd5b8235611b3081611afd565b946020939093013593505050565b600080600060608486031215611b5357600080fd5b8335611b5e81611afd565b92506020840135611b6e81611afd565b929592945050506040919091013590565b600060208284031215611b9157600080fd5b8135610d5981611afd565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611bdb57611bdb611b9c565b604052919050565b600067ffffffffffffffff831115611bfd57611bfd611b9c565b611c10601f8401601f1916602001611bb2565b9050828152838383011115611c2457600080fd5b828260208301376000602084830101529392505050565b600080600060608486031215611c5057600080fd5b833567ffffffffffffffff811115611c6757600080fd5b8401601f81018613611c7857600080fd5b611c8786823560208401611be3565b9350506020840135611c9881611afd565b91506040840135611ca881611afd565b809150509250925092565b60008060408385031215611cc657600080fd5b8235611cd181611afd565b915060208301358015158114611ce657600080fd5b809150509250929050565b60008060408385031215611d0457600080fd5b823567ffffffffffffffff80821115611d1c57600080fd5b818501915085601f830112611d3057600080fd5b8135602082821115611d4457611d44611b9c565b8160051b9250611d55818401611bb2565b8281529284018101928181019089851115611d6f57600080fd5b948201945b84861015611d995785359350611d8984611afd565b8382529482019490820190611d74565b9997909101359750505050505050565b60008060008060808587031215611dbf57600080fd5b8435611dca81611afd565b93506020850135611dda81611afd565b925060408501359150606085013567ffffffffffffffff811115611dfd57600080fd5b8501601f81018713611e0e57600080fd5b611e1d87823560208401611be3565b91505092959194509250565b60008060408385031215611e3c57600080fd5b8235611e4781611afd565b91506020830135611ce681611afd565b600181811c90821680611e6b57607f821691505b60208210811415611e8c57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115611f4157611f41611f18565b500190565b6000600019821415611f5a57611f5a611f18565b5060010190565b634e487b7160e01b600052603260045260246000fd5b60008351611f89818460208801611a79565b835190830190611f9d818360208801611a79565b01949350505050565b600082821015611fb857611fb8611f18565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b6000826120345761203461200f565b500490565b6000826120485761204861200f565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061208090830184611aa5565b9695505050505050565b60006020828403121561209c57600080fd5b8151610d5981611a46565b634e487b7160e01b600052603160045260246000fdfea264697066735822122010fedab8fa8c0e9a6c2117e970385f1eba6b306f793356eda5ed55a533a1c70a64736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            M4mNFT__factory = class M4mNFT__factory extends ethers_32.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "M4mNFT";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_32.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_32.Contract(address, _abi, signerOrProvider);
                }
            };
            M4mNFT__factory.bytecode = _bytecode;
            M4mNFT__factory.abi = _abi;
            exports_66("M4mNFT__factory", M4mNFT__factory);
        }
    };
});
System.register("typechain-types/factories/M4mNFTRegistry__factory", ["ethers"], function (exports_67, context_67) {
    "use strict";
    var __moduleName = context_67 && context_67.id;
    var ethers_33, _abi, _bytecode, isSuperArgs, M4mNFTRegistry__factory;
    return {
        setters: [
            function (ethers_33_1) {
                ethers_33 = ethers_33_1;
            }
        ],
        execute: function () {
            {
                M4mNFTRegistry,
                    M4mNFTRegistryInterface,
                ;
            }
            from;
            "../M4mNFTRegistry";
            _abi = [
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
                            internalType: "address",
                            name: "newOperator",
                            type: "address",
                        },
                    ],
                    name: "SetOperator",
                    type: "event",
                },
                {
                    inputs: [
                        {
                            internalType: "uint256[]",
                            name: "componentIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "sig",
                            type: "bytes",
                        },
                    ],
                    name: "assembleM4mNFT",
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
                        {
                            internalType: "uint256[]",
                            name: "componentIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "sig",
                            type: "bytes",
                        },
                    ],
                    name: "assembleOriginalM4mNFT",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "components",
                    outputs: [
                        {
                            internalType: "contract IM4mComponents",
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
                            internalType: "contract IM4mComponents",
                            name: "_components",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "_m4mNFT",
                            type: "address",
                        },
                    ],
                    name: "initialize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "m4mNFT",
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
                    name: "operator",
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
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "newOperator",
                            type: "address",
                        },
                    ],
                    name: "setOperator",
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
                        {
                            internalType: "uint256[]",
                            name: "componentIds",
                            type: "uint256[]",
                        },
                        {
                            internalType: "uint256[]",
                            name: "amounts",
                            type: "uint256[]",
                        },
                        {
                            internalType: "bytes",
                            name: "sig",
                            type: "bytes",
                        },
                    ],
                    name: "splitM4mNFT",
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
            ];
            _bytecode = "0x608060405234801561001057600080fd5b506110ed806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063b3ab15fb11610071578063b3ab15fb14610161578063ba62fbe414610174578063be22f35e14610187578063d1eefc481461019a578063ed17e248146101ad578063f2fde38b146101c057600080fd5b8063150b7a02146100b9578063485cc955146100f5578063570ca7351461010a578063715018a6146101355780638da5cb5b1461013d578063aa21142c1461014e575b600080fd5b6100d76100c7366004610c04565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020015b60405180910390f35b610108610103366004610c70565b6101d3565b005b60995461011d906001600160a01b031681565b6040516001600160a01b0390911681526020016100ec565b6101086102de565b6033546001600160a01b031661011d565b61010861015c366004610d29565b610314565b61010861016f366004610db1565b610452565b60985461011d906001600160a01b031681565b60975461011d906001600160a01b031681565b6101086101a8366004610dce565b6104d0565b6101086101bb366004610dce565b61060a565b6101086101ce366004610db1565b610710565b600054610100900460ff166101ee5760005460ff16156101f2565b303b155b61025a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff1615801561027c576000805461ffff19166101011790555b6102846107ab565b61028c6107db565b609880546001600160a01b038086166001600160a01b0319928316179092556097805492851692821692909217909155609980549091163317905580156102d9576000805461ff00191690555b505050565b6033546001600160a01b031633146103085760405162461bcd60e51b815260040161025190610e54565b6103126000610802565b565b60008383604051602001610329929190610ebc565b60408051601f19818403018152919052805160209091012060995490915061035b906001600160a01b03168284610854565b6103775760405162461bcd60e51b815260040161025190610ed9565b609854604051631ac8311560e21b81526001600160a01b0390911690636b20c454906103ab90339088908890600401610f27565b600060405180830381600087803b1580156103c557600080fd5b505af11580156103d9573d6000803e3d6000fd5b505060975460405163103987a160e21b81523360048201526001600160a01b0390911692506340e61e8491506024016020604051808303816000875af1158015610427573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044b9190610f67565b5050505050565b6033546001600160a01b0316331461047c5760405162461bcd60e51b815260040161025190610e54565b609980546001600160a01b0319166001600160a01b0383169081179091556040519081527fdbebfba65bd6398fb722063efc10c99f624f9cd8ba657201056af918a676d5ee9060200160405180910390a150565b609754604051632142170760e11b8152336004820152306024820152604481018690526001600160a01b03909116906342842e0e90606401600060405180830381600087803b15801561052257600080fd5b505af1158015610536573d6000803e3d6000fd5b505050506000838360405160200161054f929190610ebc565b60408051601f198184030181529190528051602090910120609954909150610581906001600160a01b03168284610854565b61059d5760405162461bcd60e51b815260040161025190610ed9565b60985460405163d81d0a1560e01b81526001600160a01b039091169063d81d0a15906105d190339088908890600401610f27565b600060405180830381600087803b1580156105eb57600080fd5b505af11580156105ff573d6000803e3d6000fd5b505050505050505050565b6000838360405160200161061f929190610ebc565b60408051601f198184030181529190528051602090910120609954909150610651906001600160a01b03168284610854565b61066d5760405162461bcd60e51b815260040161025190610ed9565b609854604051631ac8311560e21b81526001600160a01b0390911690636b20c454906106a190339088908890600401610f27565b600060405180830381600087803b1580156106bb57600080fd5b505af11580156106cf573d6000803e3d6000fd5b5050609754604051632142170760e11b8152306004820152336024820152604481018990526001600160a01b0390911692506342842e0e91506064016105d1565b6033546001600160a01b0316331461073a5760405162461bcd60e51b815260040161025190610e54565b6001600160a01b03811661079f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610251565b6107a881610802565b50565b600054610100900460ff166107d25760405162461bcd60e51b815260040161025190610f80565b61031233610802565b600054610100900460ff166103125760405162461bcd60e51b815260040161025190610f80565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080600061086385856109a2565b9092509050600081600481111561087c5761087c610fcb565b14801561089a5750856001600160a01b0316826001600160a01b0316145b156108aa5760019250505061099b565b600080876001600160a01b0316631626ba7e60e01b88886040516024016108d2929190611011565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610910919061104b565b600060405180830381855afa9150503d806000811461094b576040519150601f19603f3d011682016040523d82523d6000602084013e610950565b606091505b5091509150818015610963575080516020145b801561099457508051630b135d3f60e11b906109889083016020908101908401611067565b6001600160e01b031916145b9450505050505b9392505050565b6000808251604114156109d95760208301516040840151606085015160001a6109cd87828585610a12565b94509450505050610a0b565b825160401415610a0357602083015160408401516109f8868383610aff565b935093505050610a0b565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610a495750600090506003610af6565b8460ff16601b14158015610a6157508460ff16601c14155b15610a725750600090506004610af6565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610ac6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610aef57600060019250925050610af6565b9150600090505b94509492505050565b6000806001600160ff1b03831681610b1c60ff86901c601b611091565b9050610b2a87828885610a12565b935093505050935093915050565b6001600160a01b03811681146107a857600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610b8c57610b8c610b4d565b604052919050565b600082601f830112610ba557600080fd5b813567ffffffffffffffff811115610bbf57610bbf610b4d565b610bd2601f8201601f1916602001610b63565b818152846020838601011115610be757600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215610c1a57600080fd5b8435610c2581610b38565b93506020850135610c3581610b38565b925060408501359150606085013567ffffffffffffffff811115610c5857600080fd5b610c6487828801610b94565b91505092959194509250565b60008060408385031215610c8357600080fd5b8235610c8e81610b38565b91506020830135610c9e81610b38565b809150509250929050565b600082601f830112610cba57600080fd5b8135602067ffffffffffffffff821115610cd657610cd6610b4d565b8160051b610ce5828201610b63565b9283528481018201928281019087851115610cff57600080fd5b83870192505b84831015610d1e57823582529183019190830190610d05565b979650505050505050565b600080600060608486031215610d3e57600080fd5b833567ffffffffffffffff80821115610d5657600080fd5b610d6287838801610ca9565b94506020860135915080821115610d7857600080fd5b610d8487838801610ca9565b93506040860135915080821115610d9a57600080fd5b50610da786828701610b94565b9150509250925092565b600060208284031215610dc357600080fd5b813561099b81610b38565b60008060008060808587031215610de457600080fd5b84359350602085013567ffffffffffffffff80821115610e0357600080fd5b610e0f88838901610ca9565b94506040870135915080821115610e2557600080fd5b610e3188838901610ca9565b93506060870135915080821115610e4757600080fd5b50610c6487828801610b94565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008151602080840160005b83811015610eb157815187529582019590820190600101610e95565b509495945050505050565b6000610ed1610ecb8386610e89565b84610e89565b949350505050565b602080825260079082015266696c6c2073696760c81b604082015260600190565b805180835260209283019260009190808401838315610eb157815187529582019590820190600101610e95565b6001600160a01b0384168152606060208201819052600090610f4b90830185610efa565b8281036040840152610f5d8185610efa565b9695505050505050565b600060208284031215610f7957600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b60005b83811015610ffc578181015183820152602001610fe4565b8381111561100b576000848401525b50505050565b8281526040602082015260008251806040840152611036816060850160208701610fe1565b601f01601f1916919091016060019392505050565b6000825161105d818460208701610fe1565b9190910192915050565b60006020828403121561107957600080fd5b81516001600160e01b03198116811461099b57600080fd5b600082198211156110b257634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220a3b5f5cb906adf10ffcf42a5941c95c5325e917f81efc92091613e2ef7550a5364736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            M4mNFTRegistry__factory = class M4mNFTRegistry__factory extends ethers_33.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "M4mNFTRegistry";
                }
                deploy(overrides) {
                    return super.deploy(overrides || {});
                }
                getDeployTransaction(overrides) {
                    return super.getDeployTransaction(overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_33.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_33.Contract(address, _abi, signerOrProvider);
                }
            };
            M4mNFTRegistry__factory.bytecode = _bytecode;
            M4mNFTRegistry__factory.abi = _abi;
            exports_67("M4mNFTRegistry__factory", M4mNFTRegistry__factory);
        }
    };
});
System.register("typechain-types/factories/SimpleM4mNFT__factory", ["ethers"], function (exports_68, context_68) {
    "use strict";
    var __moduleName = context_68 && context_68.id;
    var ethers_34, _abi, _bytecode, isSuperArgs, SimpleM4mNFT__factory;
    return {
        setters: [
            function (ethers_34_1) {
                ethers_34 = ethers_34_1;
            }
        ],
        execute: function () {
            {
                SimpleM4mNFT, SimpleM4mNFTInterface;
            }
            from;
            "../SimpleM4mNFT";
            _abi = [
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
            _bytecode = "0x60806040523480156200001157600080fd5b5060405162001b3d38038062001b3d8339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000288565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b602082108114156200028257634e487b7160e01b600052602260045260246000fd5b50919050565b6118a580620002986000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b8578063b88d4fde1161007c578063b88d4fde1461028e578063c87b56dd146102a1578063d0def521146102b4578063d204c45e146102c7578063d55f9273146102da578063e985e9c5146102e357600080fd5b806370a082311461022a5780637e4831d31461023d57806395d89b411461024a578063a22cb46514610252578063ac8d856c1461026557600080fd5b806323b872dd116100ff57806323b872dd146101cb5780632f745c59146101de57806342842e0e146101f15780634f6ccce7146102045780636352211e1461021757600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a3660046112e3565b61031f565b60405190151581526020015b60405180910390f35b61016c61034a565b60405161015b9190611354565b61018c610187366004611367565b6103dc565b6040516001600160a01b03909116815260200161015b565b6101b76101b236600461139c565b610476565b005b6008545b60405190815260200161015b565b6101b76101d93660046113c6565b61058c565b6101bd6101ec36600461139c565b6105bd565b6101b76101ff3660046113c6565b610653565b6101bd610212366004611367565b61066e565b61018c610225366004611367565b610701565b6101bd610238366004611402565b610778565b600b5461014f9060ff1681565b61016c6107ff565b6101b761026036600461141d565b61080e565b61018c610273366004611367565b600d602052600090815260409020546001600160a01b031681565b6101b761029c3660046114e5565b6108d3565b61016c6102af366004611367565b61090b565b6101b76102c2366004611561565b610946565b6101b76102d5366004611561565b6109ad565b6101bd600a5481565b61014f6102f13660046115c3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b14806103445750610344826109b9565b92915050565b606060008054610359906115f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610385906115f6565b80156103d25780601f106103a7576101008083540402835291602001916103d2565b820191906000526020600020905b8154815290600101906020018083116103b557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661045a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061048182610701565b9050806001600160a01b0316836001600160a01b031614156104ef5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610451565b336001600160a01b038216148061050b575061050b81336102f1565b61057d5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610451565b6105878383610a09565b505050565b6105963382610a77565b6105b25760405162461bcd60e51b815260040161045190611631565b610587838383610b6e565b60006105c883610778565b821061062a5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610451565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b610587838383604051806020016040528060008152506108d3565b600061067960085490565b82106106dc5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610451565b600882815481106106ef576106ef611682565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103445760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610451565b60006001600160a01b0382166107e35760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610451565b506001600160a01b031660009081526003602052604090205490565b606060018054610359906115f6565b6001600160a01b0382163314156108675760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610451565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108dd3383610a77565b6108f95760405162461bcd60e51b815260040161045190611631565b61090584848484610d19565b50505050565b6060600c60008381526020019081526020016000206040516020016109309190611698565b6040516020818303038152906040529050919050565b61095282600a54610d4c565b600a546000908152600c60209081526040909120825161097492840190611231565b50600a80546000908152600d6020526040812080546001600160a01b03191633179055815491906109a483611763565b91905055505050565b61095282600a54610e9a565b60006001600160e01b031982166380ac58cd60e01b14806109ea57506001600160e01b03198216635b5e139f60e01b145b8061034457506301ffc9a760e01b6001600160e01b0319831614610344565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a3e82610701565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610af05760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610451565b6000610afb83610701565b9050806001600160a01b0316846001600160a01b03161480610b365750836001600160a01b0316610b2b846103dc565b6001600160a01b0316145b80610b6657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610b8182610701565b6001600160a01b031614610be95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610451565b6001600160a01b038216610c4b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610451565b610c56838383610eb8565b610c61600082610a09565b6001600160a01b0383166000908152600360205260408120805460019290610c8a90849061177e565b90915550506001600160a01b0382166000908152600360205260408120805460019290610cb8908490611795565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610d24848484610b6e565b610d3084848484610f70565b6109055760405162461bcd60e51b8152600401610451906117ad565b6001600160a01b038216610da25760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610451565b6000818152600260205260409020546001600160a01b031615610e075760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610451565b610e1360008383610eb8565b6001600160a01b0382166000908152600360205260408120805460019290610e3c908490611795565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610eb482826040518060200160405280600081525061106e565b5050565b6001600160a01b038316610f1357610f0e81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610f36565b816001600160a01b0316836001600160a01b031614610f3657610f3683826110a1565b6001600160a01b038216610f4d576105878161113e565b826001600160a01b0316826001600160a01b0316146105875761058782826111ed565b60006001600160a01b0384163b1561106357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fb49033908990889088906004016117ff565b6020604051808303816000875af1925050508015610fef575060408051601f3d908101601f19168201909252610fec9181019061183c565b60015b611049573d80801561101d576040519150601f19603f3d011682016040523d82523d6000602084013e611022565b606091505b5080516110415760405162461bcd60e51b8152600401610451906117ad565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b66565b506001949350505050565b6110788383610d4c565b6110856000848484610f70565b6105875760405162461bcd60e51b8152600401610451906117ad565b600060016110ae84610778565b6110b8919061177e565b60008381526007602052604090205490915080821461110b576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906111509060019061177e565b6000838152600960205260408120546008805493945090928490811061117857611178611682565b90600052602060002001549050806008838154811061119957611199611682565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806111d1576111d1611859565b6001900381819060005260206000200160009055905550505050565b60006111f883610778565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b82805461123d906115f6565b90600052602060002090601f01602090048101928261125f57600085556112a5565b82601f1061127857805160ff19168380011785556112a5565b828001600101855582156112a5579182015b828111156112a557825182559160200191906001019061128a565b506112b19291506112b5565b5090565b5b808211156112b157600081556001016112b6565b6001600160e01b0319811681146112e057600080fd5b50565b6000602082840312156112f557600080fd5b8135611300816112ca565b9392505050565b6000815180845260005b8181101561132d57602081850181015186830182015201611311565b8181111561133f576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006113006020830184611307565b60006020828403121561137957600080fd5b5035919050565b80356001600160a01b038116811461139757600080fd5b919050565b600080604083850312156113af57600080fd5b6113b883611380565b946020939093013593505050565b6000806000606084860312156113db57600080fd5b6113e484611380565b92506113f260208501611380565b9150604084013590509250925092565b60006020828403121561141457600080fd5b61130082611380565b6000806040838503121561143057600080fd5b61143983611380565b91506020830135801515811461144e57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561148a5761148a611459565b604051601f8501601f19908116603f011681019082821181831017156114b2576114b2611459565b816040528093508581528686860111156114cb57600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156114fb57600080fd5b61150485611380565b935061151260208601611380565b925060408501359150606085013567ffffffffffffffff81111561153557600080fd5b8501601f8101871361154657600080fd5b6115558782356020840161146f565b91505092959194509250565b6000806040838503121561157457600080fd5b61157d83611380565b9150602083013567ffffffffffffffff81111561159957600080fd5b8301601f810185136115aa57600080fd5b6115b98582356020840161146f565b9150509250929050565b600080604083850312156115d657600080fd5b6115df83611380565b91506115ed60208401611380565b90509250929050565b600181811c9082168061160a57607f821691505b6020821081141561162b57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b66697066733a2f2f60c81b8152600060076000845481600182811c9150808316806116c457607f831692505b60208084108214156116e457634e487b7160e01b86526022600452602486fd5b8180156116f8576001811461170d5761173e565b60ff1986168a890152848a018801965061173e565b60008b81526020902060005b868110156117345781548c82018b0152908501908301611719565b505087858b010196505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156117775761177761174d565b5060010190565b6000828210156117905761179061174d565b500390565b600082198211156117a8576117a861174d565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061183290830184611307565b9695505050505050565b60006020828403121561184e57600080fd5b8151611300816112ca565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220c3474a1ec3608dfedfd18fb21c4d5b1d9befa325cd81fa87d1dd54055b6fb3ac64736f6c634300080c0033";
            isSuperArgs = (xs) => xs.length > 1;
            SimpleM4mNFT__factory = class SimpleM4mNFT__factory extends ethers_34.ContractFactory {
                constructor(...args) {
                    if (isSuperArgs(args)) {
                        super(...args);
                    }
                    else {
                        super(_abi, _bytecode, args[0]);
                    }
                    this.contractName = "SimpleM4mNFT";
                }
                deploy(name_, symbol_, overrides) {
                    return super.deploy(name_, symbol_, overrides || {});
                }
                getDeployTransaction(name_, symbol_, overrides) {
                    return super.getDeployTransaction(name_, symbol_, overrides || {});
                }
                attach(address) {
                    return super.attach(address);
                }
                connect(signer) {
                    return super.connect(signer);
                }
                static createInterface() {
                    return new ethers_34.utils.Interface(_abi);
                }
                static connect(address, signerOrProvider) {
                    return new ethers_34.Contract(address, _abi, signerOrProvider);
                }
            };
            SimpleM4mNFT__factory.bytecode = _bytecode;
            SimpleM4mNFT__factory.abi = _abi;
            exports_68("SimpleM4mNFT__factory", SimpleM4mNFT__factory);
        }
    };
});
System.register("typechain-types/index", ["typechain-types/factories/OwnableUpgradeable__factory", "typechain-types/factories/IERC1271Upgradeable__factory", "typechain-types/factories/ERC1155Upgradeable__factory", "typechain-types/factories/IERC1155MetadataURIUpgradeable__factory", "typechain-types/factories/IERC1155ReceiverUpgradeable__factory", "typechain-types/factories/IERC1155Upgradeable__factory", "typechain-types/factories/ERC721Upgradeable__factory", "typechain-types/factories/ERC721EnumerableUpgradeable__factory", "typechain-types/factories/IERC721EnumerableUpgradeable__factory", "typechain-types/factories/IERC721MetadataUpgradeable__factory", "typechain-types/factories/IERC721ReceiverUpgradeable__factory", "typechain-types/factories/IERC721Upgradeable__factory", "typechain-types/factories/ERC721HolderUpgradeable__factory", "typechain-types/factories/ERC165Upgradeable__factory", "typechain-types/factories/IERC165Upgradeable__factory", "typechain-types/factories/ERC721__factory", "typechain-types/factories/ERC721Enumerable__factory", "typechain-types/factories/IERC721Enumerable__factory", "typechain-types/factories/IERC721Metadata__factory", "typechain-types/factories/IERC721__factory", "typechain-types/factories/IERC721Receiver__factory", "typechain-types/factories/ERC165__factory", "typechain-types/factories/IERC165__factory", "typechain-types/factories/IM4mComponents__factory", "typechain-types/factories/IM4mDAO__factory", "typechain-types/factories/IM4mNFT__factory", "typechain-types/factories/IM4mNFTRegistry__factory", "typechain-types/factories/M4mComponent__factory", "typechain-types/factories/M4mDao__factory", "typechain-types/factories/M4mNFT__factory", "typechain-types/factories/M4mNFTRegistry__factory", "typechain-types/factories/SimpleM4mNFT__factory"], function (exports_69, context_69) {
    "use strict";
    var __moduleName = context_69 && context_69.id;
    return {
        setters: [
            function (OwnableUpgradeable__factory_1_1) {
                exports_69({
                    "OwnableUpgradeable__factory": OwnableUpgradeable__factory_1_1["OwnableUpgradeable__factory"]
                });
            },
            function (IERC1271Upgradeable__factory_1_1) {
                exports_69({
                    "IERC1271Upgradeable__factory": IERC1271Upgradeable__factory_1_1["IERC1271Upgradeable__factory"]
                });
            },
            function (ERC1155Upgradeable__factory_1_1) {
                exports_69({
                    "ERC1155Upgradeable__factory": ERC1155Upgradeable__factory_1_1["ERC1155Upgradeable__factory"]
                });
            },
            function (IERC1155MetadataURIUpgradeable__factory_1_1) {
                exports_69({
                    "IERC1155MetadataURIUpgradeable__factory": IERC1155MetadataURIUpgradeable__factory_1_1["IERC1155MetadataURIUpgradeable__factory"]
                });
            },
            function (IERC1155ReceiverUpgradeable__factory_1_1) {
                exports_69({
                    "IERC1155ReceiverUpgradeable__factory": IERC1155ReceiverUpgradeable__factory_1_1["IERC1155ReceiverUpgradeable__factory"]
                });
            },
            function (IERC1155Upgradeable__factory_1_1) {
                exports_69({
                    "IERC1155Upgradeable__factory": IERC1155Upgradeable__factory_1_1["IERC1155Upgradeable__factory"]
                });
            },
            function (ERC721Upgradeable__factory_1_1) {
                exports_69({
                    "ERC721Upgradeable__factory": ERC721Upgradeable__factory_1_1["ERC721Upgradeable__factory"]
                });
            },
            function (ERC721EnumerableUpgradeable__factory_1_1) {
                exports_69({
                    "ERC721EnumerableUpgradeable__factory": ERC721EnumerableUpgradeable__factory_1_1["ERC721EnumerableUpgradeable__factory"]
                });
            },
            function (IERC721EnumerableUpgradeable__factory_1_1) {
                exports_69({
                    "IERC721EnumerableUpgradeable__factory": IERC721EnumerableUpgradeable__factory_1_1["IERC721EnumerableUpgradeable__factory"]
                });
            },
            function (IERC721MetadataUpgradeable__factory_1_1) {
                exports_69({
                    "IERC721MetadataUpgradeable__factory": IERC721MetadataUpgradeable__factory_1_1["IERC721MetadataUpgradeable__factory"]
                });
            },
            function (IERC721ReceiverUpgradeable__factory_1_1) {
                exports_69({
                    "IERC721ReceiverUpgradeable__factory": IERC721ReceiverUpgradeable__factory_1_1["IERC721ReceiverUpgradeable__factory"]
                });
            },
            function (IERC721Upgradeable__factory_1_1) {
                exports_69({
                    "IERC721Upgradeable__factory": IERC721Upgradeable__factory_1_1["IERC721Upgradeable__factory"]
                });
            },
            function (ERC721HolderUpgradeable__factory_1_1) {
                exports_69({
                    "ERC721HolderUpgradeable__factory": ERC721HolderUpgradeable__factory_1_1["ERC721HolderUpgradeable__factory"]
                });
            },
            function (ERC165Upgradeable__factory_1_1) {
                exports_69({
                    "ERC165Upgradeable__factory": ERC165Upgradeable__factory_1_1["ERC165Upgradeable__factory"]
                });
            },
            function (IERC165Upgradeable__factory_1_1) {
                exports_69({
                    "IERC165Upgradeable__factory": IERC165Upgradeable__factory_1_1["IERC165Upgradeable__factory"]
                });
            },
            function (ERC721__factory_1_1) {
                exports_69({
                    "ERC721__factory": ERC721__factory_1_1["ERC721__factory"]
                });
            },
            function (ERC721Enumerable__factory_1_1) {
                exports_69({
                    "ERC721Enumerable__factory": ERC721Enumerable__factory_1_1["ERC721Enumerable__factory"]
                });
            },
            function (IERC721Enumerable__factory_1_1) {
                exports_69({
                    "IERC721Enumerable__factory": IERC721Enumerable__factory_1_1["IERC721Enumerable__factory"]
                });
            },
            function (IERC721Metadata__factory_1_1) {
                exports_69({
                    "IERC721Metadata__factory": IERC721Metadata__factory_1_1["IERC721Metadata__factory"]
                });
            },
            function (IERC721__factory_1_1) {
                exports_69({
                    "IERC721__factory": IERC721__factory_1_1["IERC721__factory"]
                });
            },
            function (IERC721Receiver__factory_1_1) {
                exports_69({
                    "IERC721Receiver__factory": IERC721Receiver__factory_1_1["IERC721Receiver__factory"]
                });
            },
            function (ERC165__factory_1_1) {
                exports_69({
                    "ERC165__factory": ERC165__factory_1_1["ERC165__factory"]
                });
            },
            function (IERC165__factory_1_1) {
                exports_69({
                    "IERC165__factory": IERC165__factory_1_1["IERC165__factory"]
                });
            },
            function (IM4mComponents__factory_1_1) {
                exports_69({
                    "IM4mComponents__factory": IM4mComponents__factory_1_1["IM4mComponents__factory"]
                });
            },
            function (IM4mDAO__factory_1_1) {
                exports_69({
                    "IM4mDAO__factory": IM4mDAO__factory_1_1["IM4mDAO__factory"]
                });
            },
            function (IM4mNFT__factory_1_1) {
                exports_69({
                    "IM4mNFT__factory": IM4mNFT__factory_1_1["IM4mNFT__factory"]
                });
            },
            function (IM4mNFTRegistry__factory_1_1) {
                exports_69({
                    "IM4mNFTRegistry__factory": IM4mNFTRegistry__factory_1_1["IM4mNFTRegistry__factory"]
                });
            },
            function (M4mComponent__factory_1_1) {
                exports_69({
                    "M4mComponent__factory": M4mComponent__factory_1_1["M4mComponent__factory"]
                });
            },
            function (M4mDao__factory_1_1) {
                exports_69({
                    "M4mDao__factory": M4mDao__factory_1_1["M4mDao__factory"]
                });
            },
            function (M4mNFT__factory_1_1) {
                exports_69({
                    "M4mNFT__factory": M4mNFT__factory_1_1["M4mNFT__factory"]
                });
            },
            function (M4mNFTRegistry__factory_1_1) {
                exports_69({
                    "M4mNFTRegistry__factory": M4mNFTRegistry__factory_1_1["M4mNFTRegistry__factory"]
                });
            },
            function (SimpleM4mNFT__factory_1_1) {
                exports_69({
                    "SimpleM4mNFT__factory": SimpleM4mNFT__factory_1_1["SimpleM4mNFT__factory"]
                });
            }
        ],
        execute: function () {
            type;
            {
                OwnableUpgradeable;
            }
            from;
            "./OwnableUpgradeable";
            type;
            {
                IERC1271Upgradeable;
            }
            from;
            "./IERC1271Upgradeable";
            type;
            {
                ERC1155Upgradeable;
            }
            from;
            "./ERC1155Upgradeable";
            type;
            {
                IERC1155MetadataURIUpgradeable;
            }
            from;
            "./IERC1155MetadataURIUpgradeable";
            type;
            {
                IERC1155ReceiverUpgradeable;
            }
            from;
            "./IERC1155ReceiverUpgradeable";
            type;
            {
                IERC1155Upgradeable;
            }
            from;
            "./IERC1155Upgradeable";
            type;
            {
                ERC721Upgradeable;
            }
            from;
            "./ERC721Upgradeable";
            type;
            {
                ERC721EnumerableUpgradeable;
            }
            from;
            "./ERC721EnumerableUpgradeable";
            type;
            {
                IERC721EnumerableUpgradeable;
            }
            from;
            "./IERC721EnumerableUpgradeable";
            type;
            {
                IERC721MetadataUpgradeable;
            }
            from;
            "./IERC721MetadataUpgradeable";
            type;
            {
                IERC721ReceiverUpgradeable;
            }
            from;
            "./IERC721ReceiverUpgradeable";
            type;
            {
                IERC721Upgradeable;
            }
            from;
            "./IERC721Upgradeable";
            type;
            {
                ERC721HolderUpgradeable;
            }
            from;
            "./ERC721HolderUpgradeable";
            type;
            {
                ERC165Upgradeable;
            }
            from;
            "./ERC165Upgradeable";
            type;
            {
                IERC165Upgradeable;
            }
            from;
            "./IERC165Upgradeable";
            type;
            {
                ERC721;
            }
            from;
            "./ERC721";
            type;
            {
                ERC721Enumerable;
            }
            from;
            "./ERC721Enumerable";
            type;
            {
                IERC721Enumerable;
            }
            from;
            "./IERC721Enumerable";
            type;
            {
                IERC721Metadata;
            }
            from;
            "./IERC721Metadata";
            type;
            {
                IERC721;
            }
            from;
            "./IERC721";
            type;
            {
                IERC721Receiver;
            }
            from;
            "./IERC721Receiver";
            type;
            {
                ERC165;
            }
            from;
            "./ERC165";
            type;
            {
                IERC165;
            }
            from;
            "./IERC165";
            type;
            {
                IM4mComponents;
            }
            from;
            "./IM4mComponents";
            type;
            {
                IM4mDAO;
            }
            from;
            "./IM4mDAO";
            type;
            {
                IM4mNFT;
            }
            from;
            "./IM4mNFT";
            type;
            {
                IM4mNFTRegistry;
            }
            from;
            "./IM4mNFTRegistry";
            type;
            {
                M4mComponent;
            }
            from;
            "./M4mComponent";
            type;
            {
                M4mDao;
            }
            from;
            "./M4mDao";
            type;
            {
                M4mNFT;
            }
            from;
            "./M4mNFT";
            type;
            {
                M4mNFTRegistry;
            }
            from;
            "./M4mNFTRegistry";
            type;
            {
                SimpleM4mNFT;
            }
            from;
            "./SimpleM4mNFT";
        }
    };
});
System.register("types/nft", [], function (exports_70, context_70) {
    "use strict";
    var __moduleName = context_70 && context_70.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
