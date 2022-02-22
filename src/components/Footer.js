import Attribution from "./Attribution";
import {
  GrFacebook,
  GrTwitter,
  GrPinterest,
  GrInstagram,
} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <img src="images/logo.svg" alt="" />
      <span>Features</span>
      <ul>
        <li>
          <a href="#">Link Shortening</a>
        </li>
        <li>
          <a href="#">Branded Links</a>
        </li>
        <li>
          <a href="#">Analytics</a>
        </li>
      </ul>
      <span>Resources</span>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Developers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
      <span>Company</span>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <GrFacebook />
      <GrTwitter />
      <GrPinterest />
      <GrInstagram />
      <Attribution />
    </footer>
  );
};

export default Footer;
