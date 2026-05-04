import Nav from "./Nav";

import logo from "../../../assets/logo.svg";

import { MdDensityMedium } from "react-icons/md";

import "./header.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
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
          <button
            className="header-hamburguer"
            aria-label="Open menu"
            onClick={toggleSidebar}
          >
            <MdDensityMedium />
          </button>
          <Nav />
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
