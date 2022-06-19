import getProvider from "./utils/getProvider";
import {Contract} from "ethers";
import {ERC721Enumerable, ERC721Enumerable__factory, SimpleM4mNFT} from "./typechain-types";
import {create, urlSource} from 'ipfs-http-client';
import {concat} from "uint8arrays";
import {Metadata} from "./types/metadata";

const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
})

// return address
// TODO: maybe require user to sign some msg
export const login = async () => {
    const provider = await getProvider();
    const signer = provider.getSigner();
    return signer.getAddress();
}

export const mintNFT = async (nftAddr: string, owner: string, imgUrl: string, metadata: Metadata) => {
    const imgResult = await ipfs.add(urlSource(imgUrl));
    metadata.image = "ipfs://" + imgResult.cid.toString();
    const metadataResult = await ipfs.add(JSON.stringify(metadata));
    const NFT = new Contract(nftAddr, ERC721Enumerable__factory.abi, getProvider().getSigner()) as SimpleM4mNFT;
    await NFT.mint(owner, metadataResult.cid.toString());
}

// the nft contract should enumerable
export const getNFTList = async (nftAddr: string, owner: string) => {
    const NFT = new Contract(nftAddr, ERC721Enumerable__factory.abi, getProvider()) as ERC721Enumerable;
    const balance = await NFT.balanceOf(owner);
    const list = [];
    for (let i = 0; balance.gt(i); i++) {
        const tokenId = await NFT.tokenOfOwnerByIndex(owner, i);
        const uri = await NFT.tokenURI(tokenId);
        const cid = uri.indexOf("ipfs://") > 0 ? uri.substring(7) : uri;
        const resp = await ipfs.cat(cid);
        let content = [];
        for await (const chunk of resp) {
            content.push(chunk);
        }
        let result = concat(content);
        let raw = Buffer.from(result).toString('utf-8');
        list.push({
            tokenId: tokenId,
            uri: uri,
            metadata: JSON.parse(raw)
        })
    }
    return list;
}