# Polygon Network Configration

https://github.com/Student-Desk/sd/blob/master/hardhat.config.js

```javascript

require("@nomiclabs/hardhat-waffle"); 
require("dotenv").config({ path: "./.env" });  

const privateKey =process.env.REACT_APP_BOBA_PRIVATE_KEY_1;
const ALCHEMY_API_KEY = "pqr-VAfSii011IkFlqrZTxCgzK5fWegs";
const projectId = "0625a19e9662496eac15a4d713be4eb9";

module.exports = {
  solidity: "0.8.4",
  networks: {
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};

```
