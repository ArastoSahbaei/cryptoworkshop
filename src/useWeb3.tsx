import { ethers } from "ethers";
import ABI from "./ABI";

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

  const getCount = async () => {
    const contract = new ethers.Contract(
      "0x5310aee3c63Bbb7C6dB290F19178c80C17c7cA15",
      ABI.counterContract,
      provider
    );
    try {
      const response = await contract.getCount();
      console.log(response.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const increment = async () => {
    const contract = new ethers.Contract(
      "0x5310aee3c63Bbb7C6dB290F19178c80C17c7cA15",
      ABI.counterContract,
      provider.getSigner()
    );
    try {
      const response = await contract.increment();
      console.log(response.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const insertNumber = async (number: number) => {
    const contract = new ethers.Contract(
      "0x5310aee3c63Bbb7C6dB290F19178c80C17c7cA15",
      ABI.counterContract,
      provider.getSigner()
    );
    try {
      const response = await contract.insertNumber(number);
      console.log(response.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const candidates = async () => {
    const contract = new ethers.Contract(
      "0x8157155a7ad92f5a2301bfDA7F6a2E2897091fC1",
      ABI.election,
      provider
    );
    try {
      const response = await contract.candidates(1);
      const response2 = await contract.candidates(2);
      const response3 = await contract.candidates(3);
      const real = [
        { name: response.name, votes: parseInt(response.voteCount._hex, 16) },
        { name: response2.name, votes: parseInt(response2.voteCount._hex, 16) },
        { name: response3.name, votes: parseInt(response3.voteCount._hex, 16) },
      ];
      console.log(real);
      return real;
    } catch (error) {
      console.log(error);
    }
  };

  const vote = async (number: number) => {
    const contract = new ethers.Contract(
      "0x8157155a7ad92f5a2301bfDA7F6a2E2897091fC1",
      ABI.election,
      provider.getSigner()
    );
    try {
      const response = await contract.vote(number);
      console.log(response.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signNonce,
    createPayment,
    getCurrentBlock,
    getWalletAddress,
    getWalletBalance,
    verifyWalletExtension,
    getCount,
    increment,
    insertNumber,
    candidates,
    vote,
  };
};
