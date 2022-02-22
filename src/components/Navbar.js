import ButtonLink from "./ButtonLink";

const Navbar = () => {
  return (
    <nav>
      <img src="images/logo.svg" alt="" />
      <ul>
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
      <ul>
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
