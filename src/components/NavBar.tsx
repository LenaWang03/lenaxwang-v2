import { NavLink } from "react-router-dom";
import navbarLogo from "../imgs/CatLogo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img
            alt="logo"
            src={navbarLogo}
            width="80"
          />
          <p>Lena Wang</p>
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
