import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Pill, ClipboardList } from "lucide-react";

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
  ];

  return (
    <div
      style={{
        width: collapsed ? "70px" : "220px",
        transition: "width 0.3s",
        background: "#1976d2",
        color: "#fff",
        height: "100vh",
        padding: "20px 10px",
        boxSizing: "border-box",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.path} style={{ margin: "20px 0" }}>
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "#fff",
                  background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                  transition: "0.2s",
                }}
              >
                {/* Icon always visible */}
                <span>{item.icon}</span>

                {/* Text hides when collapsed */}
                {!collapsed && (
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;