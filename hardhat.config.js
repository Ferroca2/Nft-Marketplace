require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337
    },
    rinkeby:{
      url: "https://rinkeby.infura.io/v3/90fdeb84217c428da3ecd28b3e527442",
      accounts: [privateKey]
    },
    mainnet:{
      url: "https://mainnet.infura.io/v3/90fdeb84217c428da3ecd28b3e527442",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
