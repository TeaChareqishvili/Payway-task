import LeadingText from "./LeadingText";
import curly from "../assets/curly.png";
import Team from "./Team";

export default function AboutUsPage() {
  return (
    <div className="w-full  pt-[115px] flex-1 pb-[89px] home-background">
      <div className="w-[86%] m-auto mt-[115px] flex flex-col">
        {" "}
        <p className=" font-Roboto-500 text-[20px] md:text-[24px] text-[#55EDFF] leading-[28px] mb-[30px] md:mb-[40px] md:ml-[24px]">
          # About Us
        </p>
        <h1 className="font-Roboto-500 flex items-center justify-start text-[22px] md:text-[40px] text-[#FBFBFB] mb-[24px] md:mb-[38px] ">
          <img
            className="hidden md:flex mr-[10px] w-[14px] h-[36px]"
            src={curly}
            alt="curly"
          />
          We have well experienced Team Player
        </h1>
        <LeadingText />
        <Team />
      </div>
    </div>
  );
}
