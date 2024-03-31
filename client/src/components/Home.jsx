import Nft3D from "./Nft3D";

const Home = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-white text-4xl">
          Send Crypto <br /> across the world
        </h2>
        <p className="text-slate-400 text-xl">
          Buy, Sell & Trade Cryptocurrency Easily and Securely
        </p>
        <button className="w-[130px] py-1 text-white bg-[color:var(--button-primary)]">
          Connect Wallet
        </button>
        <button>Learn More</button>
      </div>
      <div>
        <Nft3D />
      </div>
    </div>
  );
};

export default Home;
