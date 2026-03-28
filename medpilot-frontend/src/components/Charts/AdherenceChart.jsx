import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdherenceChart = () => {
  // Example weekly adherence data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Doses Taken",
        data: [3, 2, 4, 3, 5, 4, 3],
        backgroundColor: "#2ECC71", // taken doses
      },
      {
        label: "Missed Doses",
        data: [1, 2, 0, 1, 0, 1, 2],
        backgroundColor: "#E74C3C", // missed doses
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Weekly Adherence" },
    },
    maintainAspectRatio: false, // allows flexible height
  };

  return (
    <div style={{ height: "300px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AdherenceChart;