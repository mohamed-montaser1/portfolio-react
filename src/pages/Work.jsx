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

import Portfolio_Header from "../components/Portfolio-Header";
import Portfolio_Content from "../components/Portfolio_Content";
import Footer from "../components/Footer";
const PortfolioPage = () => {
  return (
    <>
      <Portfolio_Header />
      <Portfolio_Content />
      <Footer />
    </>
  );
};
export default PortfolioPage;
