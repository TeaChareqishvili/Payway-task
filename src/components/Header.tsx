import Logo from "../assets/logo.png";
import Burger from "./Burger";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="w-full absolute top-0 left-0 py-[85px]">
      <div className="w-[86%] md:w-[84%] m-auto flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="hidden lg:flex">
          {" "}
          <Navigation flexDirection="row" marginBottom="0" />
        </div>{" "}
        <Burger />
      </div>
    </div>
  );
}
