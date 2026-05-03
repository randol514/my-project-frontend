import logo from "../../../assets/logo-white.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <a className="footer-logotipo" href="/">
          <img src={logo} alt="" className="footer-logotipo__img" />
        </a>
        <nav className="footer-nav">
          <div className="footer-subtitle">NAVIGATION</div>
          <ul className="footer-nav__list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/nenu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
        <div className="footer-contact">
          <div className="footer-subtitle">CONTACT</div>
          <address className="footer-contact__address">
            <p>
              <BsGeoAlt />
              678 Pisa Ave, Chicago, IL 60611
            </p>
            <a href="tel:(312) 593-2744">
              <BsTelephone />
              (312) 593-2744
            </a>
            <a href="mailto:customer@littlelemon.com">
              <BsEnvelope />
              customer@littlelemon.com
            </a>
          </address>
        </div>
        <div className="footer-social">
          <div className="footer-subtitle">CONNECT WITH US</div>
          <div className="footer-social__list">
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="http://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="http://youtube.com/" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
