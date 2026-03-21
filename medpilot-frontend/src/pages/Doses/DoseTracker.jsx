import React, { useState } from "react";
import { medications as mockMeds } from "../../utils/mockData";
import ConfirmDoseModal from "../../components/Doses/ConfirmDoseModal";

const DoseTracker = () => {
  const [logs, setLogs] = useState([]);
  const [confirmModal, setConfirmModal] = useState({ medication: null, action: null });

  const handleClick = (med, action) => {
    setConfirmModal({ medication: med, action }); // open modal
  };

  const handleConfirm = () => {
    const { medication, action } = confirmModal;
    const newLog = {
      id: Date.now(),
      medication: medication.name,
      status: action,
      time: new Date().toLocaleTimeString(),
    };
    setLogs([newLog, ...logs]);
    setConfirmModal({ medication: null, action: null });
  };

  const handleCancel = () => setConfirmModal({ medication: null, action: null });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dose Tracker</h2>

      {/* Medications list */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {mockMeds.map((med) => (
          <div
            key={med.id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              width: "250px",
            }}
          >
            <h3>{med.name}</h3>
            <p>{med.dosage}</p>
            <p>Schedule: {med.schedule.join(", ")}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => handleClick(med, "Taken")}
                style={{ padding: "5px 10px", background: "green", color: "#fff", border: "none", borderRadius: "5px" }}
              >
                Taken
              </button>
              <button
                onClick={() => handleClick(med, "Skipped")}
                style={{ padding: "5px 10px", background: "red", color: "#fff", border: "none", borderRadius: "5px" }}
              >
                Skipped
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dose logs */}
      <h3 style={{ marginTop: "30px" }}>Dose Logs</h3>
      {logs.length === 0 ? (
        <p>No doses recorded yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {logs.map((log) => (
            <div
              key={log.id}
              style={{ background: "#f1f1f1", padding: "8px 12px", borderRadius: "5px" }}
            >
              {log.medication} - <strong>{log.status}</strong> at {log.time}
            </div>
          ))}
        </div>
      )}

      {/* Confirm modal */}
      {confirmModal.medication && (
        <ConfirmDoseModal
          medication={confirmModal.medication}
          action={confirmModal.action}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default DoseTracker;