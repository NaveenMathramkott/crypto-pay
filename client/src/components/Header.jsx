import Icon from "../assets/icon.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <div className="flex justify-start items-center">
        <img
          src={Icon}
          alt={"app Icon"}
          style={{ height: "50px", width: "70px" }}
        />
        <h3 className="font-bold text-slate-300">CRYPTO-PAY</h3>
      </div>
      <button className="w-20 h-10 rounded-[20px]  bg-[color:var(--button-primary)] text-white">
        Login
      </button>
    </div>
  );
};

export default Header;
