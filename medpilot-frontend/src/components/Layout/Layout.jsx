import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) setShowSidebar(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setShowSidebar(!showSidebar);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F7FA" }}>
      
      {/* OVERLAY (mobile only) */}
      {isMobile && showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
        />
      )}

      {/* SIDEBAR */}
      <div
        style={{
          position: isMobile ? "fixed" : "relative",
          transform:
            isMobile && !showSidebar ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 0.3s ease",
          zIndex: 1000,
        }}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, width: "100%" }}>
        <Navbar toggleSidebar={toggleSidebar} />

        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;