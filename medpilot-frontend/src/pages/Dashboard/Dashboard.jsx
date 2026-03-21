import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Medications", value: 2 },
    { title: "Doses Taken Today", value: 3 },
    { title: "Doses Skipped Today", value: 1 },
    { title: "Adherence %", value: "75%" },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
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
            <h3 style={{ margin: 0 }}>{stat.title}</h3>
            <p style={{ fontSize: "24px", margin: "10px 0 0 0" }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;