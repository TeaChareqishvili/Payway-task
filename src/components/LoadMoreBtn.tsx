import more from "../assets/plus.png";
import { LoadMoreBtnTypes } from "../Interface";

export default function LoadMorebtn({
  handleClick,
  showMore,
}: LoadMoreBtnTypes) {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        onClick={handleClick}
        className="font-Roboto-500 w-[152px] md:w-[180px] bg-[#384BFF] rounded-lg p-[17px] text-[16px] text-[#FFFFFF] flex items-center justify-center hover:bg-[#11174a]  transition-all duration-200"
      >
        {" "}
        <img className="mr-[9px] " src={more} alt="more" />{" "}
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
