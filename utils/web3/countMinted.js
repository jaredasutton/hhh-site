const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const mainnetContractABI = require('./contract-abi.json');
const rinkebyContractABI = require('./rinkeby-contract-abi.json');
const mainnetContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const rinkebyContractAddress = process.env.NEXT_PUBLIC_RINKEBY_CONTRACT_ADDRESS;
const mainnetAlchemyKey = process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY;
const rinkebyAlchemyKey = process.env.NEXT_PUBLIC_RINKEBY_ALCHEMY_KEY;

export const countMinted = async (mainnet = true) => {
  let contractAddress = mainnetContractAddress;
  let contractABI = mainnetContractABI;
  let alchemyKey = mainnetAlchemyKey;
  if (!mainnet) {
    contractAddress = rinkebyContractAddress;
    contractABI = rinkebyContractABI;
    alchemyKey = rinkebyAlchemyKey;
  }
  const web3 = createAlchemyWeb3(alchemyKey);
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  // await contract.methods.
};
