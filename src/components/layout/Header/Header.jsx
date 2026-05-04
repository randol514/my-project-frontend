import Nav from "./Nav";

import logo from "../../../assets/logo.svg";

import { MdDensityMedium } from "react-icons/md";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <Link className="header-logotipo" to="/">
          <img
            className="header-logotipo__img"
            src={logo}
            alt="Little Lemon | Authentic Mediterranean Cuisine in Chicago"
            width={250}
            height={69}
          />
        </Link>
        <button className="header-hamburguer" aria-label="Open menu">
          <MdDensityMedium />
        </button>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
