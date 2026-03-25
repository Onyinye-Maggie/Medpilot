import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", taken: 3, skipped: 1 },
  { day: "Tue", taken: 4, skipped: 0 },
  { day: "Wed", taken: 2, skipped: 2 },
  { day: "Thu", taken: 5, skipped: 1 },
  { day: "Fri", taken: 3, skipped: 1 },
];

const AdherenceChart = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "350px", // ensures chart parent is never 0
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>Weekly Adherence</h3>

      {/* This wrapper guarantees ResponsiveContainer has height */}
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="taken" fill="#1976d2" />
            <Bar dataKey="skipped" fill="#d32f2f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdherenceChart;