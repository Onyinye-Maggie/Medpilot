import React from "react";

const DeleteMedicationModal = ({ medication, onClose, onDelete }) => {
  if (!medication) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", width: "400px", textAlign: "center" }}>
        <h3>Delete Medication</h3>
        <p>Are you sure you want to delete <strong>{medication.name}</strong>?</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <button onClick={onClose} style={{ padding: "5px 10px", cursor: "pointer" }}>Cancel</button>
          <button
            onClick={() => { onDelete(medication.id); onClose(); }}
            style={{
              padding: "5px 15px",
              background: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMedicationModal;