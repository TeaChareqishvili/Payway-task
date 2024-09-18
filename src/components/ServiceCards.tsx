import { ServiceData } from "./data";

export default function ServiceCards() {
  return (
    <div className=" w-full flex items-center justify-between mb-[54px] ml-[25px] ">
      {ServiceData.map((item) => (
        <div
          key={item.id}
          className="bg-[#FBFBFB] rounded-lg px-[18px] py-[18px] mr-[24px] cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-110"
        >
          <div className="flex items-center justify-between mb-[11px]">
            <div
              style={{ backgroundColor: item.background }}
              className="w-[74px] h-[74px] flex items-center justify-center"
            >
              {" "}
              <img src={item.image} alt="icon" />
            </div>

            <p className="text-[60px] text-[#3730A3] opacity-10">
              {item.number}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-[22px] text-[#000000] leading-[25px] mb-[5px]">
              {item.title}
            </h3>
            <p className="text-[12px] text-[#000000] leading-[14px] mb-[5px]">
              {item.text}
            </p>
            <img src={item.arrow} alt="more-arrow" />
          </div>
        </div>
      ))}
    </div>
  );
}
