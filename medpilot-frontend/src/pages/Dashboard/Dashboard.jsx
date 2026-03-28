import React, { useContext } from "react";
import { MedicationsContext } from "../../context/MedicationsContext";

const Dashboard = () => {
  const { medications } = useContext(MedicationsContext);

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Total Medications: {medications.length}</h3>

      {/* Example: Today's doses */}
      {medications.map((med, index) => (
        <div key={index}>
          {med.name} - {med.times?.join(", ")}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;