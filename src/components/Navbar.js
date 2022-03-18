import { useState } from "react";
import ButtonLink from "./ButtonLink";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import close from "../images/close.svg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
    document.querySelector("body").classList.toggle("lock-scroll");
  };

  const closeMenu = (e) => {
    if (window.innerWidth < 376) {
      setNavOpen(false);
      document.querySelector("body").classList.toggle("lock-scroll");
    }
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Shortly logo" />
      <button className="navigation-menu" onClick={handleToggle}>
        <img src={navOpen ? close : menu} alt="" />
      </button>
      <div className={`nav-links-wrapper ${navOpen && "open"}`}>
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={closeMenu}>
              Resources
            </a>
          </li>
        </ul>
        <ul className="nav-links login" onClick={closeMenu}>
          <li>
            <a href="#" className="nav-link" onClick={closeMenu}>
              Login
            </a>
          </li>
          <li>
            <ButtonLink content="Sign Up" onClick={closeMenu} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
