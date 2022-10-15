const sdk = require("../dist/m4m-web3-server.cjs");

async function main() {
  const sig = await sdk.signWithWallet("hello world");
  console.log("sig:", sig);

  const url =
    "https://web3api.meta4d.me/api/v1/m4m-nft/initialization?original_addr=0x1a8a1dfd9063eae42a2b8339966fbea388430ca4&&original_token_id=3&&chain_name=mumbai";
  const res = await sdk.axiosRequest({ url, method: "GET" });
  console.log("Response:", res);

  const url2 = "https://apiv2-test.platwin.io/api/v1/favorite-nft";
  const data = {
    chain_name: "rinkeby",
    addr: "0x2c4591A433FEDDeb2de7B4047E0b7389A3225faC",
    contract: "0x4b2b1f6f2accf4bcdd53fc65e1e4a4ef2b289399",
    token_id: "1",
    fav: 1,
  };
  const res2 = await sdk.axiosRequest({
    url: url2,
    method: "POST",
    data,
  });
  console.log("Response2:", res2);
}

main()
  .then(() => {
    console.log("Done");
    process.exit();
  })
  .catch((e) => {
    console.log(e);
  });
