import { ServiceData } from "../data";

export default function ServiceCards() {
  return (
    <div className=" w-full flex flex-col items-center justify-center mb-[54px] lg:ml-[25px] lg:flex-row lg:justify-between ">
      {ServiceData.map((item) => (
        <div
          key={item.id}
          className="bg-[#FBFBFB] mb-[38px] lg:mb-[0] rounded-lg px-[18px] py-[18px] lg:mr-[24px] cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-110"
        >
          <div className="flex items-center justify-between mb-[11px]">
            <div
              style={{ backgroundColor: item.background }}
              className="w-[74px] h-[74px] flex items-center justify-center"
            >
              {" "}
              <img src={item.image} alt="icon" />
            </div>

            <p className="font-Roboto-600 text-[60px] text-[#3730A3] opacity-10">
              {item.number}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className=" font-Roboto-600 font-bold text-[22px] text-[#000000] leading-[25px] mb-[5px]">
              {item.title}
            </h3>
            <p className=" font-Roboto-600 font-bold text-[12px] text-[#000000] leading-[14px] mb-[5px]">
              {item.text}
            </p>
            <img src={item.arrow} alt="more-arrow" />
          </div>
        </div>
      ))}
    </div>
  );
}
