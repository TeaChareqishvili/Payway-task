import { socialLinks } from "../data";
import { SocialLinksProps } from "../../Interface";

export default function SociaLinks({
  justifyContent,
  display,
}: SocialLinksProps) {
  return (
    <div
      style={{ justifyContent: justifyContent }}
      className=" flex items-center justify-end"
    >
      {socialLinks.map((info) => (
        <div
          style={{ justifyContent: justifyContent, display: display }}
          key={info.id}
          className=" items-center  w-full  md:w-auto "
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
