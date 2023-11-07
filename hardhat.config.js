require("@nomicfoundation/hardhat-toolbox");
// require('hardhat-ethernal');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  hardhat: {
    url: "http://localhost8545",
    accounts: ["0xf7B1dB7870177923DFe50059e48f2333Cf247bbF"]
  },
  mumbai_testnet: {
    url: "https://rpc-mumbai.maticvigil.com",
    accounts: ["0xf7B1dB7870177923DFe50059e48f2333Cf247bbF"]
  },
  solidity: {
   version: "0.8.19",
    settings: {
     optimizer: {
      enabled: true,
       runs: 200
    }
  }
},
ethernal: {
  apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJlYmFzZVVzZXJJZCI6InpMc3RVNEV4dVphOVlVQnFKNFN5Zm1nVHdyNTIiLCJhcGlLZXkiOiJWNFZSVDZBLUJIWDQyU0YtSlQwODRWQi0xWEE1QU0xXHUwMDAxIiwiaWF0IjoxNjk5MzI0MjQ2fQ.IgU0HUvymQkvskeC8aR_6TvuF8uDYR6yzcmxNw8rNMs"
}
};
