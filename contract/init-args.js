import {NEAR} from "near-units";

const price = NEAR.parse("1 N").toJSON();

const metadata = {
    base_uri: "https://bafybeibjr2fflyjni3xrwx5w4shtn6xlil3zpm4p2h23pdg5ijfjzlzfdu.ipfs.nftstorage.link",
    name: "CyCloClan NFT",
    symbol: "Cyclops",
    spec: "nft-1.0.0",
    logo: "https://cycloclan.com/assets/images/logo.png"
};


const sale = {
    price,
    mint_rate_limit: 3,
    public_sale_start: Date.now() + 1000 * 3600,
    is_premint_over: true,
    royalties: {
        percent: 500,
        accounts: {
            "pitkunait.testnet": 10000,
        },
    },
};


const initialArgs = {
    owner_id: "gagagdasfd.testnet",
    metadata,
    size: 10,
    sale,
    price,
};

console.log(JSON.stringify(initialArgs))