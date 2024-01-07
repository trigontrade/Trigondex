import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    "lancerplaid": {
      url: "https://lancerplaid-rpc.eu-north-2.gateway.fm",
      chainId: 1548612888,
      gasPrice: 0
    }
  }
};

export default config;
    
