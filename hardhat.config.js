require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

// require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/8e11a19fe098469392b19b40406368be", 
      accounts: ["0xc67895594f1d7c1ac573eb21d2b035e9a8b21d57c36891e2528070b7862fc039"],

    }
  },

  etherscan: {
    apiKey: "VZE5FEZHCGEA8YE6INP2ESZVXEHVA576DX",
  }
};
