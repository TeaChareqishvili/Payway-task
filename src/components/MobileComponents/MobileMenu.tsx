import robot from "../../assets/backgrounds/robot.png";
import MobileNavigation from "./MobileNavigation";
import Logo from "../../assets/logo.png";
import burger from "../../assets/burger.png";
import { NavLink } from "react-router-dom";
import SociaLinks from "../commonComponents/SocilaLinks";

export default function MobileMenu() {
  return (
    <div className="w-full  mobile-background fixed top-0 left-0 h-full  flex items-start justify-center px-[36px] py-[84px]">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <img src={Logo} alt="logo" />
          <NavLink to="/">
            {" "}
            <img src={burger} alt="burger" />
          </NavLink>
        </div>{" "}
        <h1 className="text-[28px]  font-Roboto-500 font-bold text-[#FAFAFA] leading-[32px]  pt-[200px]">
          Custom Product & <br></br> Software Development <br></br> Focused On
          Your <br></br> Success
        </h1>
        <img className="my-[60px]" src={robot} alt="robot" />
        <button className="bg-[#FAFAFA] text-[#05004C] uppercase font-Roboto-500 font-bold text-[24px] p-[15px] px-[] w-[230px] rounded-lg cursor-pointer">
          dev it
        </button>
        <div className="w-full  mt-[150px]">
          {" "}
          <SociaLinks justifyContent="space-between" display="flex" />
        </div>
      </div>{" "}
      <MobileNavigation />
    </div>
  );
}
