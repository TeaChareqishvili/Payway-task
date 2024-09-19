import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#55EDFF] text-[20px] md:mr-[19px] ml-[19px]  font-Roboto-400"
      : "text-white text-[20px] hover:text-[#55EDFF]  md:mr-[19px] ml-[19px]  font-Roboto-400 ";

  return (
    <nav className="">
      <div className="container mx-auto flex justify-around">
        <NavLink
          to="/"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Projects
        </NavLink>
        <NavLink
          to="/partners"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Partners
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
