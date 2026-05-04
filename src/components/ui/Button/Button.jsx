import { Link } from "react-router-dom";
import "./button.css";

const Button = ({
  children,
  variant,
  to,
  type = "button",
  onClick,
  cls = "",
}) => {
  const className = `button ${variant} ${cls}`;
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
