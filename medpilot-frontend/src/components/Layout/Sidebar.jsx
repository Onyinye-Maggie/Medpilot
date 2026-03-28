import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Pill,
  ClipboardList,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = ({ collapsed }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Medications",
      path: "/medications",
      icon: <Pill size={20} />,
    },
    {
      name: "Dose Tracker",
      path: "/doses",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div
      style={{
        width: collapsed ? "70px" : "230px",
        height: "100vh",
        background: "#00AD85",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        padding: "20px 10px",
      }}
    >
      {/* TOP SECTION */}
      <div>
        <h2 style={{ textAlign: collapsed ? "center" : "left" }}>
          {collapsed ? "M" : "MedPilot"}
        </h2>

        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path} style={{ marginBottom: "15px" }}>
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#fff",
                    background: isActive
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                  }}
                >
                  {/* ✅ ICON */}
                  {item.icon}

                  {/* TEXT (hidden when collapsed) */}
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* BOTTOM SECTION */}
      <div>
        {/* USER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              background: "#fff",
            }}
          />
          {!collapsed && <span>John Doe</span>}
        </div>

        {/* LOGOUT */}
        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#E74C3C",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <LogOut size={18} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;