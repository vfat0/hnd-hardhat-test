import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
import * as dotenv from 'dotenv';
dotenv.config();

const TESTNET_URL = "https://api.s0.b.hmny.io"
const MAINNET_URL = "https://api.harmony.one"
//const TESTNET_URL = "https://babel-api.testnet.iotex.io"
//const MAINNET_URL = "https://babel-api.mainnet.iotex.io"

const config : HardhatUserConfig = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: MAINNET_URL,
      },
      accounts: [{privateKey: process.env.PK!, balance: "10000000000000000000"}]
    },
    testnet: {
      url: TESTNET_URL,
      accounts: [process.env.PK!]
    },
    mainnet: {
      url: MAINNET_URL,
      accounts: [process.env.PK!]
    }
  }
}

export default config;