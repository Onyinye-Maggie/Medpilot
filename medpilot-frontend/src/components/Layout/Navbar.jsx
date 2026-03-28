import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div
      style={{
        height: "60px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={toggleSidebar}
        style={{
          fontSize: "22px",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      <h3>MedPilot</h3>
    </div>
  );
};

export default Navbar;