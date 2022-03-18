import ButtonLink from "./ButtonLink";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Shortly logo" />
      <button className="navigation-menu">
        <img src={menu} alt="" />
      </button>
      <ul className="nav-links">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <ButtonLink content="Sign Up" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
