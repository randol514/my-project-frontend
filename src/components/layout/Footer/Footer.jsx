import logo from "../../../assets/logo-white.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs";

import "./footer.css";
import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <Link className="footer-logotipo" to="/">
          <img
            src={logo}
            alt="Little Lemon | Authentic Mediterranean Cuisine in Chicago"
            className="footer-logotipo__img"
          />
        </Link>
        <nav className="footer-nav">
          <div className="footer-subtitle">NAVIGATION</div>
          <ul className="footer-nav__list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => clsx("", { current: isActive })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => clsx("", { current: isActive })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => clsx("", { current: isActive })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookings"
                className={({ isActive }) => clsx("", { current: isActive })}
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-online"
                className={({ isActive }) => clsx("", { current: isActive })}
              >
                Order online
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-online"
                className={({ isActive }) => clsx("", { current: isActive })}
              >
                Login
              </NavLink>
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
