import { useState } from "react";
import { medications } from "../../utils/mockData";

const DoseTracker = () => {
  const [logs, setLogs] = useState([]);

  const handleAction = (medName, status) => {
    const newLog = {
      id: Date.now(),
      medication: medName,
      status,
      time: new Date().toLocaleTimeString(),
    };

    setLogs([newLog, ...logs]);
  };

  return (
    <div>
      <h2>Dose Tracker</h2>

      {medications.map((med) => (
        <div
          key={med.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{med.name}</h3>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => handleAction(med.name, "Taken")}
              style={{
                background: "green",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Taken
            </button>

            <button
              onClick={() => handleAction(med.name, "Skipped")}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Skipped
            </button>
          </div>
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>Logs</h3>

      {logs.map((log) => (
        <div key={log.id}>
          {log.medication} - {log.status} at {log.time}
        </div>
      ))}
    </div>
  );
};

export default DoseTracker;