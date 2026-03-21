import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ collapsed }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Medications", path: "/medications" },
    { name: "Dose Tracker", path: "/doses" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "70px" : "200px",
        transition: "width 0.3s",
        background: "#1976d2",
        color: "#fff",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.path} style={{ margin: "20px 0" }}>
            <Link
              to={item.path}
              style={{
                color: location.pathname === item.path ? "#ffeb3b" : "#fff",
                textDecoration: "none",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                fontSize: collapsed ? "0" : "16px",
                transition: "0.3s",
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;