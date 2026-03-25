import React from "react";
import AdherenceChart from "../../components/Dashboard/AdherenceChart";

const Dashboard = () => {
  const stats = [
    { title: "Total Medications", value: 5 },
    { title: "Doses Taken Today", value: 3 },
    { title: "Doses Skipped Today", value: 1 },
    { title: "Adherence %", value: "75%" },
  ];

  return (
    <div style={{ padding: "20px 20px 50px 20px" }}>
      <h2>Dashboard</h2>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.title}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "16px", color: "#555" }}>{stat.title}</h3>
            <p style={{ fontSize: "24px", margin: "10px 0 0 0", fontWeight: "bold" }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Adherence Chart */}
      <AdherenceChart />
    </div>
  );
};

export default Dashboard;