import { useState } from "react";
import { Election } from "./Election";
import { useWeb3 } from "./useWeb3";

export const App = () => {
  const [address, setAddress] = useState<any>("")
  const [amount, setAmount] = useState<any>(0)
  const [number, setNumber] = useState<any>(0)
  const { getCurrentBlock, verifyWalletExtension, getWalletAddress, createPayment, getWalletBalance, signNonce, getCount, increment, insertNumber } = useWeb3();

  return (
    <>
    <h1>Tillgängliga funktioner med Ethers.js</h1>
      <div onClick={() => verifyWalletExtension()}>1. Verify Wallet Extension</div>
    <hr />
      <div onClick={() => getWalletAddress()}>2. Get Browser Wallet Address</div>
    <hr />
      <div onClick={() => getWalletBalance('0x9a69335A2608c9Dd7aFeBd46Fd88bFaaD6D75288')}>3. Get Wallet Balance</div>
    <hr />
      <div onClick={() => console.log(getCurrentBlock())}>4. Get Current Block</div>
    <hr />
      <div onClick={() => console.log(signNonce())}>5. Sign "Nonce"</div>
    <hr />
      <input placeholder='send to this address' onChange={event => setAddress(event.target.value)}/> <br />
      <input placeholder='amount of Ether to send' onChange={event => setAmount(event.target.value)}/>
      <div onClick={() => createPayment(address, amount)}>6. Create Payment</div>
    <hr />
    <h1>Smart Contract</h1>
      <div onClick={() => getCount()}>1. getCount()</div>
    <hr />
      <div onClick={() => increment()}>2. increment()</div>
    <hr />
      <input onChange={event => setNumber(event.target.value)}/> <br/>
      <div onClick={() => insertNumber(number)}>3. insertNumber()</div>
    <hr />
    <Election />
    </>
  );
};
  