import React, { useState } from "react";
import StatusBadge from "../../components/UI/StatusBadge";

const initialDoses = [
  {
    id: 1,
    medication: "Paracetamol",
    time: "8:00 AM",
    status: "upcoming",
  },
  {
    id: 2,
    medication: "Vitamin C",
    time: "12:00 PM",
    status: "taken",
  },
  {
    id: 3,
    medication: "Ibuprofen",
    time: "6:00 PM",
    status: "missed",
  },
];

const DoseTracker = () => {
  const [doses, setDoses] = useState(initialDoses);

  const markAsTaken = (id) => {
    setDoses((prev) =>
      prev.map((dose) =>
        dose.id === id ? { ...dose, status: "taken" } : dose
      )
    );
  };

  const markAsMissed = (id) => {
    setDoses((prev) =>
      prev.map((dose) =>
        dose.id === id ? { ...dose, status: "missed" } : dose
      )
    );
  };

  return (
    <div>
      <h2>Dose Tracker</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {doses.map((dose) => (
          <div
            key={dose.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{dose.medication}</h3>
            <p>{dose.time}</p>

            {/* ✅ THIS IS WHERE StatusBadge IS USED */}
            <StatusBadge status={dose.status} />

            {/* Actions */}
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <button
                onClick={() => markAsTaken(dose.id)}
                style={{
                  background: "#2ECC71",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Take
              </button>

              <button
                onClick={() => markAsMissed(dose.id)}
                style={{
                  background: "#E74C3C",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Skip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoseTracker;