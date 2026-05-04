import { NavLink } from "react-router-dom";

const NavSidebar = ({ onClose }) => {
  const SidebarLink = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `${isActive ? "current" : ""}`}
      onClick={onClose}
    >
      {children}
    </NavLink>
  );
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <SidebarLink to="/">Home</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/about">About</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/menu">Menu</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/bookings">Reservations</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/order-online">Order online</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/login">Login</SidebarLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavSidebar;
