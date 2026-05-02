import Nav from "./Nav";

import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logotipo" href="/">
          <img className="header-logotipo__img" src={logo} alt="" />
        </a>
        <Nav className="header-nav" />
      </div>
    </header>
  );
};

export default Header;
