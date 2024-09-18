import Logo from "../assets/logo.png";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="w-full absolute top-0 left-0 py-[85px]">
      <div className="w-[84%] m-auto flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <Navigation />
      </div>
    </div>
  );
}
