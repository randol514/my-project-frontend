import { AiOutlineClose } from "react-icons/ai";

import NavSidebar from "./NavSidebar";

const Sidebar = ({ isOpen, onClose }) => {
  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside
        className={`sidebar ${isOpen ? "show" : ""}`}
        onClick={handleSidebarClick}
      >
        <div className="sidebar-container">
          <div className="sidebar-content">
            <button
              className="sidebar-burger"
              onClick={onClose}
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
            <NavSidebar onClose={onClose} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
