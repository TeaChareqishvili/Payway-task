import burger from "../assets/burger.png";
import { NavLink } from "react-router-dom";

export default function Burger() {
  return (
    <div className="lg:hidden  absolute right-0 w-[86px] ">
      <NavLink to="/mobileMenu">
        <img
          className="cursor-pointer w-[22px] h-[17px]"
          src={burger}
          alt="burger-menu"
        />
      </NavLink>
    </div>
  );
}
