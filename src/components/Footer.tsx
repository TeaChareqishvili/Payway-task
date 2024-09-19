import Frame from "../assets/Frame.png";
import SociaLinks from "./SocilaLinks";

export default function Footer() {
  return (
    <div className="w-full footer-background py-[63px] h-[331px] md:h-[160px] ">
      <div className="w-[84%] m-auto  flex-col items-start justify-start md:flex-row md:justify-between md:items-center grid grid-cols-1 md:grid-cols-3">
        <div className=" order-1 flex flex-col items-start justify-start">
          <button className="font-Roboto-400 text-[#FBF6FF] text-[16px] md:text-[14px] underline bg-transparent border-none cursor-pointer mb-[20px] md:mb-[10px] hover:text-[#55EDFF] transition-all duration-200">
            Privacy policy
          </button>
          <button className="font-Roboto-400 text-[#FBF6FF] text-[16px] md:text-[14px] underline bg-transparent border-none cursor-pointer hover:text-[#55EDFF] transition-all duration-200">
            Cookie & privacy preferences
          </button>
        </div>
        <div className=" order-3 md:order-2 flex items-center justify-center">
          <img className="mr-[3px]" src={Frame} alt="C" />
          <p className=" font-Roboto-400 text-[16px] md:text-[14px] text-[#FBF6FF]">
            Copyright Devspace
          </p>
        </div>
        <div className="order-2 md:order-3 w-full  my-[62px] md:my-[0]">
          {" "}
          <SociaLinks justifyContent="justify-end" display="block" />
        </div>
      </div>
    </div>
  );
}
