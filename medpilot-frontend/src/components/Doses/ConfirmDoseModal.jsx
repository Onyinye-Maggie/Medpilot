import React from "react";

const ConfirmDoseModal = ({ medication, action, onConfirm, onCancel }) => {
  if (!medication || !action) return null;

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
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", width: "400px" }}>
        <h3>Confirm Dose</h3>
        <p>
          Are you sure you want to mark <strong>{medication.name}</strong> as{" "}
          <strong>{action}</strong>?
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
          <button onClick={onCancel} style={{ padding: "5px 10px" }}>
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "5px 15px",
              background: action === "Taken" ? "green" : "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDoseModal;