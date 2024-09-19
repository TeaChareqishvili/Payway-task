import { socialLinks } from "./data";

export default function SociaLinks() {
  return (
    <div className=" flex items-center justify-end">
      {socialLinks.map((info) => (
        <div
          key={info.id}
          className="flex items-center justify-between w-full md:block md:w-auto "
        >
          <a href={info.address} target="_blank" rel="noopener noreferrer">
            <img
              className="w-[20px] h-[20px] mr-[15px] ml-[15px] hover:scale-150 transition-all duration-200"
              src={info.icon}
              alt={`${info.id} icon`}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
