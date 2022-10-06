require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// to deploy, we need private key

// module.exports = {
//   defaultNetwork: "goerli",
//   networks: {
//     hardhat: {},
//     goerli: {
//       url: process.env.URL,
//       accounts: process.env.PRIVATE_KEY,
//     },
//   },
//   solidity: {
//     version: "0.8.9",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     artifacts: "./artifacts",
//   },
// };
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "Goerli",
  networks: {
    hardhat: {},
    Goerli: {
      url: API_URL,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
};
