import LoadMorebtn from "./LoadMoreBtn";
import ServiceCards from "./ServiceCards";
import { useState } from "react";

export default function ServicesLayout() {
  const [showMore, setShowMore] = useState(false);

  // function to toggle button for cards show more/less
  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full  mt-[24px] flex flex-col items-start justify-start">
      <h1 className=" font-Roboto-500 text-[#FBFBFB] hidden md:flex text-[40px] leading-[46px] ml-[25px] mb-[38px]">
        More Services
      </h1>
      <ServiceCards />
      {showMore && <ServiceCards />}

      <LoadMorebtn handleClick={handleClick} showMore={showMore} />
    </div>
  );
}
