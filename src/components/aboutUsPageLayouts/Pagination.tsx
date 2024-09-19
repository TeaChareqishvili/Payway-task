import RightArrows from "../../assets/aboutus/paginationRight.png";
import LeftArrows from "../../assets/aboutus/paginationLeft.png";
import left from "../../assets/aboutus/leftarrowP.png";
import right from "../../assets/aboutus/rightarrowP.png";
import { useState } from "react";
import { PaginationProps } from "../../Interface";

export default function Pagination({
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // go to first page

  const goToFirst = () => {
    setCurrentPage(1);
    onPageChange(1);
  };

  // fo to last page
  const goToLast = () => {
    setCurrentPage(totalPages);
    onPageChange(totalPages);
  };

  // next page
  const goToNext = () => {
    setCurrentPage((prev) => {
      const nextPage = prev + 1 > totalPages ? totalPages : prev + 1;
      onPageChange(nextPage);
      return nextPage;
    });
  };

  // previous page
  const goToPrevious = () => {
    setCurrentPage((prev) => {
      const prevPage = prev - 1 < 1 ? 1 : prev - 1;
      onPageChange(prevPage);
      return prevPage;
    });
  };

  // function to change page
  const handleClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <img
        src={LeftArrows}
        alt="First page"
        className="cursor-pointer "
        onClick={goToFirst}
      />
      <img
        src={left}
        alt="Previous page"
        className="cursor-pointer  ml-[18px] "
        onClick={goToPrevious}
      />
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-[10px] py-[8px] w-[45px] rounded-lg text-[#FFFFFF] text-[18px] font-Roboto-600 font-bold ${
            currentPage === i + 1 ? "bg-[#384BFF] " : "transparent"
          }`}
          onClick={() => handleClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <img
        src={right}
        alt="Next page"
        className="cursor-pointer  mr-[18px]"
        onClick={goToNext}
      />
      <img
        src={RightArrows}
        alt="Last page"
        className="cursor-pointer "
        onClick={goToLast}
      />
    </div>
  );
}
