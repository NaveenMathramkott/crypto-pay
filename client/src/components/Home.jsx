import { useState } from "react";
import Nft3D from "./Nft3D";
import TransactionForm from "./TransactionForm";

const Home = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-white text-4xl">
          Send Crypto <br /> across the world
        </h1>
        <p className="text-slate-400 text-lg">
          Buy, Sell & Trade Cryptocurrency Easily and Securely
        </p>
        <div className="py-3">
          <button className="p-2 text-white bg-[color:var(--button-primary)] hover:bg-[var(--button-secondary)] rounded-sm mr-2">
            Connect Wallet
          </button>
          <button className="px-2 py-1 text-white border-solid  border-gray-700 border-2 ">
            Learn More
          </button>
        </div>
      </div>
      <div>{walletConnected ? <TransactionForm /> : <Nft3D />}</div>
    </div>
  );
};

export default Home;
