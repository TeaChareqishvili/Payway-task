import curly from "../../assets/curly.png";
import LeadingText from "../commonComponents/LeadingText";
import ServicesLayout from "./ServicesLayout";

export default function HomePage() {
  return (
    <div className="w-full home-background pt-[115px] flex-1 pb-[89px]">
      <div className="w-[86%] m-auto mt-[115px] flex flex-col">
        {" "}
        <p className=" font-Roboto-500 text-[20px] md:text-[24px] text-[#55EDFF] leading-[28px] mb-[30px] md:mb-[40px] md:ml-[24px]">
          # Services
        </p>
        <h1 className="flex items-center justify-start font-Roboto-500 text-[22px] md:text-[40px] text-[#FBFBFB] mb-[24px] md:mb-[38px] ">
          <img
            className="hidden md:flex mr-[10px] w-[14px] h-[36px]"
            src={curly}
            alt="curly"
          />
          Web Development
        </h1>
        <LeadingText />
        <ServicesLayout />
      </div>
    </div>
  );
}
