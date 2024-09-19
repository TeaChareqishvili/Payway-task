import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import { sliderdata } from "./data";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import SliderBtns from "./SliderBtns";

export default function Slider() {
  return (
    <Swiper
      slidesPerView="auto"
      className=" flex items-center  w-full overflow-hidden relative lg:mb-[66px]"
      keyboard={true}
      pagination={true}
      modules={[Mousewheel, Keyboard, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {sliderdata.map((item) => (
        <SwiperSlide
          key={item.id}
          className="lg:ml-[24px] max-w-[364px] w-full mr-[10px] "
        >
          <img className="mr-[10px]" src={item.image} alt="project-image" />
        </SwiperSlide>
      ))}
      <SliderBtns />
    </Swiper>
  );
}
