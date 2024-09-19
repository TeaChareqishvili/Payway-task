import curly from "../../assets/curly.png";
import BackBtn from "./BackBtn";
import LeadingText from "../commonComponents/LeadingText";
import Slider from "./Slider";

export default function ProjectPage() {
  return (
    <div className="w-full  pt-[115px] flex-1 lg:pb-[89px] project-background">
      <div className="w-[86%] m-auto mt-[115px] flex flex-col">
        {" "}
        <p className=" font-Roboto-500 text-[20px] md:text-[24px] text-[#55EDFF] leading-[28px] mb-[30px] md:mb-[40px] lg:ml-[24px]">
          # Our Projects
        </p>
        <h1 className=" font-Roboto-500 flex items-center justify-start text-[22px] md:text-[40px] text-[#FBFBFB] mb-[24px] md:mb-[38px] ">
          <img
            className="hidden md:flex mr-[10px] w-[14px] h-[36px]"
            src={curly}
            alt="curly"
          />
          Our Project1
        </h1>
        <LeadingText />
        <Slider />
        <BackBtn />
      </div>
    </div>
  );
}
