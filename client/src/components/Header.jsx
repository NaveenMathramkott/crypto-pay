import Icon from "../assets/icon.png";

const NavBarItem = ({ title }) => (
  <li className="mx-4 cursor-pointer hover:border-b-2">{title}</li>
);
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
      <div>
        <ul className="text-white lg:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
      <button className="w-20 h-10 rounded-[20px]  bg-[color:var(--button-primary)] text-white hover:bg-[var(--button-secondary)]">
        Login
      </button>
    </div>
  );
};

export default Header;
