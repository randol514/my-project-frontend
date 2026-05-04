import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
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
            Menu
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
            to="/login"
            className={({ isActive }) => clsx("", { current: isActive })}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
