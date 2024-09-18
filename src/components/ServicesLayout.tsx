import ServiceCards from "./ServiceCards";

export default function ServicesLayout() {
  return (
    <div className="w-full  mt-[24px] flex flex-col items-start justify-start">
      <h1 className="text-[#FBFBFB] hidden md:flex text-[40px] leading-[46px] ml-[25px] mb-[38px]">
        More Services
      </h1>
      <ServiceCards />
    </div>
  );
}
