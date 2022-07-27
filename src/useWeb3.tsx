import { ethers } from "ethers";

const requestBalance = "eth_getBalance";
const requestAccount = "eth_requestAccounts";

export const useWeb3 = () => {
  const ethereum = (window as any).ethereum;
  const provider = new ethers.providers.Web3Provider(ethereum);

  const verifyWalletExtension = () => {
    const hasWallet = !!ethereum;
    console.log(hasWallet);
  };

  const getWalletAddress = async () => {
    try {
      const response = await ethereum.request({ method: requestAccount });
      alert(response[0]);
    } catch (error) {
      return error;
    }
  };

  const getWalletBalance = async (address: string) => {
    try {
      const response = await ethereum.request({
        method: requestBalance,
        params: [address, "latest"],
      });
      const accountBalanceFormated = ethers.utils.formatEther(response);
      return console.log(accountBalanceFormated + " ETHERS");
    } catch (error) {
      return error;
      /*  toast.error('Error occured when trying to receive account balance') */
    }
  };

  const createPayment = async (wallet: string, amount: number) => {
    try {
      const signer = provider.getSigner();
      ethers.utils.getAddress(wallet);
      const tx = await signer.sendTransaction({
        to: wallet,
        value: ethers.utils.parseEther(amount.toString()),
      });
      console.log("ok", tx);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentBlock = async () => {
    try {
      const blockNumber: number = await provider.getBlockNumber();
      const blockInfo = await provider.getBlock(blockNumber);
      console.log(blockInfo);
    } catch (error) {
      return error;
    }
  };

  const signNonce = async () => {
    const message = `Welcome to Final Forecast! \n\nThis request will not trigger a blockchain transaction or cost any gas fees. \n\nYour authentication status will reset after 24 hours. \n\n\nWallet Address: ${"authenticatedUser.walletID"} \nNONCE: ${Math.random()}`;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = provider.getSigner();
    try {
      const signature = await wallet.signMessage(message);
      console.log(signature);
      /*  login({ message, signature, walletID: authenticatedUser.walletID }); */
    } catch (error) {
      console.log("Error occured during wallet authentication", error);
    }
  };

  return {
    verifyWalletExtension,
    signNonce,
    getWalletBalance,
    getCurrentBlock,
    getWalletAddress,
    createPayment,
  };
};
