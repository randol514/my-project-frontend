import { Link } from "react-router-dom";

import "./button.css";

const Button = ({ children, variant, to, cls }) => {
  return (
    <Link to={to} className={`button ${cls} ${variant} `}>
      {children}
    </Link>
  );
};

export default Button;
