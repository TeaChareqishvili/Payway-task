import back from "../assets/projects/backarrow.png";
import { NavLink } from "react-router-dom";

export default function BackBtn() {
  return (
    <div className="w-full flex items-center justify-center">
      {" "}
      <NavLink
        to="/"
        className=" hidden md:flex items-center justify-center bg-[#384BFF] p-[18px] w-[180px] text-[12px] text-[#ffffff] rounded-lg"
      >
        <img className="mr-[18px]" src={back} alt="backarrow" />
        Back
      </NavLink>
    </div>
  );
}
