import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a className="footer-logotipo" href="/">
          <img src={logo} alt="" className="footer-logotipo__img" />
        </a>
        <div className="footer-details">
          <div className="footer-details__item">
            <div>Doormat Navigation</div>
            <nav>
              <ul>
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
          </div>
          <div className="footer-details__item">
            <div>Contact</div>
            <nav>
              <ul>
                <li>
                  <a href="https://www.google.com/maps">Address</a>
                </li>
                <li>
                  <a href="tel:999999">phone number</a>
                </li>
                <li>
                  <a href="mailto:email.com">email</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-details__item">
            <div>Social Media Links</div>
            <nav>
              <ul>
                <li>
                  <a href="http://facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="http://instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="http://youtube.com/">Youtube</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
