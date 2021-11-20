const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const mainnetContractABI = require('./contract-abi.json');
const rinkebyContractABI = require('./rinkeby-contract-abi.json');
const mainnetContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const rinkebyContractAddress = process.env.NEXT_PUBLIC_RINKEBY_CONTRACT_ADDRESS;
const mainnetAlchemyKey = process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY;
const rinkebyAlchemyKey = process.env.NEXT_PUBLIC_RINKEBY_ALCHEMY_KEY;

export const createMinter = (mainnet = true) => {
  let contractAddress = mainnetContractAddress;
  let contractABI = mainnetContractABI;
  let alchemyKey = mainnetAlchemyKey;
  if (!mainnet) {
    contractAddress = rinkebyContractAddress;
    contractABI = rinkebyContractABI;
    alchemyKey = rinkebyAlchemyKey;
  }
  const web3 = createAlchemyWeb3(alchemyKey);
  const minter = {};
  minter.mintNFT = async (count = 1) => {
    const totalMintCost = (count * 0.03).toFixed(2);
    const [selectedAddress] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const nonce = await web3.eth.getTransactionCount(selectedAddress, 'latest'); //get latest nonce
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    const hexd = parseInt(web3.utils.toWei(totalMintCost, 'ether')).toString(
      16
    );
    const txData = window.contract.methods.mint().encodeABI();

    // let gasEstimate = 50000 * count;
    // try {
    //   gasEstimate = await web3.eth.estimateGas({
    //     to: contractAddress,
    //     from: selectedAddress,
    //     value: web3.utils.toWei(totalMintCost, 'ether'),
    //     data: txData,
    //   });
    //   console.log(gasEstimate);
    // } catch (e) {
    //   console.log('Insufficient funds');
    // }
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: selectedAddress, // must match user's active address.
      value: hexd,
      nonce: `${nonce}`,
      // gas: `${parseInt(gasEstimate).toString(16)}`,
      data: txData, //make smart contractcall to NFT,
    };
    console.log(JSON.stringify(transactionParameters));

    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      return {
        success: true,
        txHash,
      };
    } catch (error) {
      return {
        success: false,
        errMsg: error.message,
      };
    }
  };
  minter.mintNFT = async (count = 1) => {
    const nftContract = new web3.eth.Contract(contractABI, contractAddress);
    const currentNFTPrice = web3.utils.toWei(String(count * 0.03), 'ether');
    const [selectedAddress] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    // Gas estimation
    let gasEstimate;
    try {
      gasEstimate = await nftContract.methods
        .mint()
        .estimateGas({ from: selectedAddress, value: currentNFTPrice });
    } catch (error) {
      console.log('gas estimate: ', error);
      alert(
        `Insufficient funds to Mint ${count} NFT you need ${String(
          count * 0.03
        )} ETH`
      );
      return {
        success: false,
        errMsg: error.message,
      };
    }
    try {
      const {transactionHash: txHash} = await nftContract.methods.mint().send({
        from: selectedAddress,
        value: currentNFTPrice,
        gasLimit: gasEstimate,
      });
      return { success: true, txHash };
    } catch (error) {
      return { success: false, errMsg: error.message };
    }
  };

  return minter;
};
