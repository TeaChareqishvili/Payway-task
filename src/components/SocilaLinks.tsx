import socialLinks from "./data";

export default function SociaLinks() {
  return (
    <div className=" flex items-center justify-center">
      {socialLinks.map((info) => (
        <div key={info.id}>
          <a
            href={info.address}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={info.id}
          >
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
