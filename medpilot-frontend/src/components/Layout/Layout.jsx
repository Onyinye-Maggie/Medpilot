import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar");
    return saved ? JSON.parse(saved) : false;
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem("sidebar", JSON.stringify(newState));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      
      {/* Sidebar */}
      <div
        style={{
          position: isMobile ? "fixed" : "relative",
          zIndex: 1000,
        }}
      >
        <Sidebar collapsed={isMobile ? collapsed : collapsed} />
      </div>

      {/* Overlay for mobile */}
      {isMobile && !collapsed && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
        />
      )}

      {/* Main */}
      <div style={{ flex: 1 }}>
        <Navbar toggleSidebar={toggleSidebar} />
        <main style={{ padding: "15px" }}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;