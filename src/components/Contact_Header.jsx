import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Times from "../images/times-icon.svg";
import {
  FaBars,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaUser,
  FaHome,
  FaFile,
  FaServicestack,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

import "../components-style/Contact-Header.css";
const Contact_Header = () => {
  var s = false;
  const openMenuHandler = () => {
    const ul = document.querySelector(".navbar .navbar-nav");
    const timesBtn = document.querySelector(".times-container");
    if (!s) {
      ul.style.right = "0";
      const timesBtn = document.querySelector(".times-container");
      timesBtn.style.display = "block";
      s = true;
    } else if (s) {
      const timesBtn = document.querySelector(".times-container");
      timesBtn.style.display = "none";
      ul.style.right = "-17rem";
      s = false;
    }
  };
  const closeMenuHandler = () => {
    const ul = document.querySelector(".navbar .navbar-nav");
    ul.style.right = "-17rem";
  };

  return (
    <>
      {/* Start Global Thing In Website */}
      <p className="social-media" data-aos="fade-up">
        Follow Me On
        <a href="https://github.com/mohamed-montaser1" target={"_blank"}>
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100075235905830"
          target={"_blank"}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCFs4x3B29OjSugCfAbCnwiw"
          target={"_blank"}
        >
          <FaYoutube />
        </a>
        <a href="https://www.twitter.com/Mastro_Coding" target={"_blank"}>
          <FaTwitter />
        </a>
      </p>
      <div className="website-section-container">
        <div className="header-section-shortcut">
          <a href="#header">
            <FaHome />
          </a>
          <div className="tool-tip">Home</div>
        </div>
        <div className="contact-section-shortcut">
          <a href="#contact">
            <FaPhone />
          </a>
          <div className="tool-tip">contact me</div>
        </div>
      </div>
      {/* End Global Thing In Website */}
      <header id="header" className="contact-header">
        {/* Start Navbar */}
        <nav className="navbar navbar-expand-lg" data-aos="fade-in">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="logo" src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={openMenuHandler}
            >
              <FaBars className="navbar-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <div className="times-container" onClick={closeMenuHandler}>
                  <img src={Times} alt="" />
                </div>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/Contact"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        {/* Start Landing */}
        <div className="landing">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-up">
                <h1 data-aos="fade-in" className="main-text">
                  Contact Me
                </h1>
                <p data-aos="fade-in">Iam FullStack Developer</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Landing */}
      </header>
      <div className="custom-shape-divider-bottom-1662378084">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};
export default Contact_Header;
