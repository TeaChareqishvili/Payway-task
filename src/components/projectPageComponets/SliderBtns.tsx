import leftArror from "../../assets/projects/leftarrow.png";
import rightArrow from "../../assets/projects/rightarrow.png";
import { useSwiper } from "swiper/react";

export default function SliderBtns() {
  const swiper = useSwiper();
  return (
    <div className="w-full lg:flex items-center justify-between absolute top-[40%] left-0 z-10 hidden">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-[50px] h-[50px] bg-[#384BFF94] rounded-full flex items-center justify-center cursor-pointer  hover:bg-[#11174a]  transition-all duration-200"
      >
        {" "}
        <img src={leftArror} alt="leftArros" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-[50px] h-[50px] bg-[#384BFF94] rounded-full flex items-center justify-center cursor-pointer  hover:bg-[#11174a]  transition-all duration-200"
      >
        {" "}
        <img src={rightArrow} alt="rightArrow" />
      </button>
    </div>
  );
}
