import React from "react";

const Navbar = ({ toggleSidebar }) => (
  <div
    style={{
      padding: "10px 20px",
      background: "#fff",
      borderBottom: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    }}
  >
    <h2 style={{ margin: 0 }}>MedPilot</h2>
    <button
      onClick={toggleSidebar}
      style={{
        fontSize: "20px",
        cursor: "pointer",
        background: "none",
        border: "none",
      }}
    >
      ☰
    </button>
  </div>
);

export default Navbar;