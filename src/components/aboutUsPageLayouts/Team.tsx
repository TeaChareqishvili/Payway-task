import { TeamData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import Pagination from "./Pagination";

const itemsPerPage = 4;

export default function Team() {
  const [currentPage, setCurrentPage] = useState(1);

  // get total pages from data
  const totalPages = Math.ceil(TeamData.length / itemsPerPage);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // calculate and get item for current page
  const currentItems = TeamData.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );
  return (
    <div className="w-full relative">
      <p className=" font-Roboto-500 hidden md:flex text-[24px] text-[#28C840] ml-[24px] mt-[24px] mb-[38px]">
        # our team
      </p>
      <Swiper
        slidesPerView="auto"
        className=" flex items-center  w-full overflow-hidden  mb-[66px]"
        keyboard={true}
      >
        {currentItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="md:ml-[24px] mr-[24px] md:mr-[0] max-w-[282px] w-full relative  cursor-pointer hover overflow-hidden "
          >
            <img src={item.image} alt="project-image" />
            <div className="absolute bottom-0 left-0 bg-[#2D46C680] w-full px-[14px] py-[18px] rounded-b-lg cover">
              <p className="font-Roboto-500 text-[18px] text-[#FBFBFB] leading-[18px] mb-[8px]">
                {item.name}
              </p>
              <p className="font-Roboto-400 text-[14px] text-[#FBFBFB] leading-[18px]">
                {item.position}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex items-center justify-center lg:items-end lg:justify-end">
        {" "}
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
}
