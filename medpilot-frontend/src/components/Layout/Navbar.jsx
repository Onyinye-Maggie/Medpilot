import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#1976d2",
        color: "white",
      }}
    >
      <button onClick={toggleSidebar} style={{ fontSize: "20px" }}>
        ☰
      </button>
      <div>
        <span style={{ marginRight: "15px" }}>Hello, {user?.name || "Guest"}</span>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;