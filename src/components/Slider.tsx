import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderdata } from "./data";

import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      slidesPerView="auto"
      className=" flex items-center  w-full overflow-hidden"
      keyboard={true}
      pagination={true}
      modules={[Mousewheel, Keyboard, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {sliderdata.map((item) => (
        <SwiperSlide key={item.id} className="ml-[24px] max-w-[364px] w-full  ">
          <img src={item.image} alt="project-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
