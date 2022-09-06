import Logo from "../images/logo.png";
import "../components-style/Footer.css";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img className="logo" src={Logo} alt="logo" />
            <div className="social-container">
              <a href="https://www.github.com/mohamed-montaser1">
                <FaGithub className="github" />
              </a>
              <a href="https://www.facebook.com/OWEBD7">
                <FaFacebook className="facebook" />
              </a>
              <a href="https://www.youtube.com/channel/UCFs4x3B29OjSugCfAbCnwiw">
                <FaYoutube className="youtube" />
              </a>
              <a href="https://www.twitter.com/Mastro_Coding">
                <FaTwitter className="twitter" />
              </a>
            </div>
            <p className="copy-right">
              &copy;{new Date().getFullYear()} created by mohamed montaser
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
