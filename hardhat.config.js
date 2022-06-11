require("@nomiclabs/hardhat-waffle"); 
require("dotenv").config({ path: "./.env" });  

const privateKey =process.env.REACT_APP_BOBA_PRIVATE_KEY_1;
const ALCHEMY_API_KEY = "pqr-VAfSii011IkFlqrZTxCgzK5fWegs";
const projectId = "0625a19e9662496eac15a4d713be4eb9";
const HARMONY_PRIVATE_KEY = process.env.REACT_APP_HARMONY_PRIVATE_KEY; 

module.exports = {
  solidity: "0.8.4",
  networks: {
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${HARMONY_PRIVATE_KEY}`]
    },
  },
};