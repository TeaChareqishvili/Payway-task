import { NavLink } from "react-router-dom";
import { NavigationProps } from "../../Interface";

const Navigation: React.FC<NavigationProps> = ({
  flexDirection,
  marginBottom,
}) => {
  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#55EDFF] text-[20px] md:mr-[19px] ml-[19px]  font-Roboto-400"
      : "text-white text-[20px] hover:text-[#55EDFF]  md:mr-[19px] ml-[19px]  font-Roboto-400 ";

  return (
    <nav>
      <div
        style={{
          flexDirection: flexDirection as React.CSSProperties["flexDirection"],
        }}
        className="container mx-auto  flex  justify-around"
      >
        <NavLink
          style={{ marginBottom: marginBottom }}
          to="/"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Home
        </NavLink>
        <NavLink
          style={{ marginBottom: marginBottom }}
          to="/services"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Services
        </NavLink>
        <NavLink
          style={{ marginBottom: marginBottom }}
          to="/projects"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Projects
        </NavLink>
        <NavLink
          style={{ marginBottom: marginBottom }}
          to="/partners"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          Partners
        </NavLink>
        <NavLink
          style={{ marginBottom: marginBottom }}
          to="/about"
          className={({ isActive }) => getLinkClassName({ isActive })}
        >
          About Us
        </NavLink>
        <NavLink
          style={{ marginBottom: marginBottom }}
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
