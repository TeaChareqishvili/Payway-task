import Frame from "../assets/Frame.png";
import SociaLinks from "./SocilaLinks";

export default function Footer() {
  return (
    <div className="w-full footer-background py-[63px]">
      <div className="w-[84%] m-auto flex items-center justify-between">
        <div className="flex flex-col items-start justify-start">
          <button className="text-[#FBF6FF] text-[16px] md:text-[14px] underline bg-transparent border-none cursor-pointer mb-[20px] md:mb-[10px] hover:text-[#55EDFF] transition-all duration-200">
            Privacy policy
          </button>
          <button className="text-[#FBF6FF] text-[16px] md:text-[14px] underline bg-transparent border-none cursor-pointer hover:text-[#55EDFF] transition-all duration-200">
            Cookie & privacy preferences
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img className="mr-[3px]" src={Frame} alt="C" />
          <p className=" text-[16px] md:text-[14px] text-[#FBF6FF]">
            Copyright Devspace
          </p>
        </div>
        <SociaLinks />
      </div>
    </div>
  );
}
