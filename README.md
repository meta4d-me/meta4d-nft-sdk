# meta4d-nft-sdk

## APIs

### Connect

connect wallet and register callbacks;

```
window.M4M.connect({
            handleAccountsChanged: onAccountsChanged,
            handleChainChanged: onChainChanged,
            handleDisconnect: onDisconnect,
            handleError: onError,
          });
```

### Login

sign and login

```
window.M4M.login(window.M4M.Connector_Types.Injected).then((res) => {
          console.log(res);
    })
```

### Get wallet info

get chain and address

```
window.M4M.getInfo().then((res) => {console.log(res)})
```

### Mint nft

mint nft with ipfs hash.

```
function mint() {
      window.M4M.mintNFT(
        "0xBda6C92e43331924b69FEdeAcCfd6425a64859d4",
        "ipfs:/testtesttest"
      ).then((res) => {
        console.log(res);
        })
```

### Prepare component

Register nft for new component

```
window.M4M.prepareComponent({
        chain_name: "mumbai",
        // code of equipment, should be string of number
        component_id: "50",
        description: "test prepare",
        // full name of component
        name: "Blink Blade",
        // abbrevation of name
        symbol: "BB",
        // ipfs hash
        uri: "ipfs://test.bb",
        // attributes that compliant Opense
        attrs: [
          {
            trait_type: "position",
            value: "head",
          },
        ],
      }).then((res) => {
        console.log(res);
      });
```

### Get initialization params

Get initialization params. Call api to get initialization params of your original NFT. Then use the returned initialization params to convert your NFT to M4M nft.

```
axios.get('https://web3api.meta4d.me/api/v1/m4m-nft/initialization?original_addr=0x1a8a1dfd9063eae42a2b8339966fbea388430ca4&&original_token_id=3&&chain_name=mumbai')

```

### Approve nft for all

Should call your nft's approve method before other operations.

```
window.M4M.approveForAll(
        "erc721", // could be erc721 or erc1155
        "0x1a8a1dfd9063eae42a2b8339966fbea388430ca4", // your nft's contract address
        "0xc9d7d33f679000d7621ea381569259eb599ab1c4" // approve to target address
      ).then((approveRes) => {
        console.log("approve res: ", approveRes);
      });
```

### Convert NFT

convert your original NFT to M4m nft. Use params from the "initialization" api.
```
window.M4M.convertNFT({
        originalNFT: "0x1a8a1dfd9063eae42a2b8339966fbea388430ca4",
        originalTokenId: 3,
        componentIds: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        amounts: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        sig: "0x4c1ec472960def88fdefe32965db61f6ca766dc84a6621c699ebd48fd44234ed144aa6b4e183ceae9569abbb91239603a7ec401a84a4434f066fe8c0b9d858651b",
      }).then((res) => {
        console.log(res);
      });
```

### Split NFT

Split your M4M nft and get components nft back to your address.

```
window.M4M.splitM4mNFT({
        m4mNFTId:
          "33899455588519104296850095412402338483695997375173037772559902670018227898376", // get from api initialization
        componentIds: [31, 32, 33, 34, 35],
        amounts: [1, 1, 1, 1, 1],
      }).then((res) => {
        console.log(res);
      });
```

### Assemble NFT

Assemble your components nft to your M4M nft.

```
 window.M4M.assembleM4mNFT({
        m4mNFTId:
          "33899455588519104296850095412402338483695997375173037772559902670018227898376", // get from api initialization
        componentIds: [31, 32, 33, 34, 35],
        amounts: [1, 1, 1, 1, 1],
      }).then((res) => {
        console.log(res);
      });
```

### Redeem NFT

Burn your M4M nft and redeem your original nft back.

```
 window.M4M.redeemNFT({
        m4mNFTId:
          "33899455588519104296850095412402338483695997375173037772559902670018227898376", // get from api initialization
        componentIds: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        amounts: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      }).then((res) => {
        console.log(res);
      });
```