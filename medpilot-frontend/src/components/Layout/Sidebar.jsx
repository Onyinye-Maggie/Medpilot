import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      style={{
        width: isOpen ? "200px" : "60px",
        transition: "width 0.3s",
        background: "#eeeeee",
        padding: "20px 10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/medications">Medications</Link>
        </li>
        <li>
          <Link to="/doses">Dose Tracker</Link>
        </li>
        <li>
          <Link to="/refills">Refills</Link>
        </li>
      </ul>
      <button onClick={toggleSidebar} style={{ marginTop: "20px" }}>
        {isOpen ? "Collapse" : "Expand"}
      </button>
    </aside>
  );
};

export default Sidebar;