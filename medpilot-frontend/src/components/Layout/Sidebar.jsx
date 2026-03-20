import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Medications", path: "/medications" },
    { name: "Dose Tracker", path: "/doses" },
    { name: "Refills", path: "/refills" },
  ];

  return (
    <aside
      style={{
        width: isOpen ? "220px" : "60px",
        transition: "width 0.3s",
        background: "#1e1e2f",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px 10px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "30px", textAlign: isOpen ? "left" : "center" }}>
        {isOpen ? "MedPilot" : "MP"}
      </h2>

      <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
        {links.map((link) => (
          <li key={link.path} style={{ marginBottom: "15px" }}>
            <Link
              to={link.path}
              style={{
                color: location.pathname === link.path ? "#1976d2" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 12px",
                borderRadius: "5px",
                background: location.pathname === link.path ? "#fff" : "transparent",
                color: location.pathname === link.path ? "#1976d2" : "#fff",
                fontWeight: location.pathname === link.path ? "bold" : "normal",
                transition: "0.2s",
              }}
            >
              {isOpen ? link.name : link.name.charAt(0)}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleSidebar}
        style={{
          padding: "8px",
          border: "none",
          borderRadius: "5px",
          background: "#1976d2",
          color: "#fff",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        {isOpen ? "Collapse" : "Expand"}
      </button>
    </aside>
  );
};

export default Sidebar;