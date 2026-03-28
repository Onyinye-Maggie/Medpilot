import React, { useState } from "react";

const AddMedicationModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [times, setTimes] = useState([""]);
  const [frequency, setFrequency] = useState("daily");
  const [status, setStatus] = useState("upcoming");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  // Add another time slot
  const addTimeField = () => {
    setTimes([...times, ""]);
  };

  // Update time
  const updateTime = (value, index) => {
    const updated = [...times];
    updated[index] = value;
    setTimes(updated);
  };

  const handleSave = () => {
    if (!name || !dosage || times.some((t) => !t)) {
      setError("All fields are required");
      return;
    }

    setError("");

    onSave({
      name,
      dosage,
      times,
      frequency,
      status,
    });

    // Reset
    setName("");
    setDosage("");
    setTimes([""]);
    setFrequency("daily");
    setStatus("upcoming");

    onClose();
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        style={overlayStyle}
      />

      {/* MODAL */}
      <div style={modalStyle}>
        <h2 style={{ marginBottom: "20px" }}>Add Medication</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* NAME */}
        <Input
          label="Medication Name"
          value={name}
          setValue={setName}
        />

        {/* DOSAGE */}
        <Input
          label="Dosage"
          value={dosage}
          setValue={setDosage}
        />

        {/* TIMES */}
        <div style={{ marginBottom: "15px" }}>
          <label>Time(s)</label>

          {times.map((time, i) => (
            <input
              key={i}
              type="time"
              value={time}
              onChange={(e) => updateTime(e.target.value, i)}
              style={inputStyle}
            />
          ))}

          <button onClick={addTimeField} style={linkBtn}>
            + Add another time
          </button>
        </div>

        {/* FREQUENCY */}
        <div style={{ marginBottom: "15px" }}>
          <label>Frequency</label>
          <div style={chipContainer}>
            {["daily", "weekly"].map((f) => (
              <Chip
                key={f}
                label={f}
                active={frequency === f}
                onClick={() => setFrequency(f)}
              />
            ))}
          </div>
        </div>

        {/* STATUS */}
        <div style={{ marginBottom: "20px" }}>
          <label>Status</label>
          <div style={chipContainer}>
            <Chip label="upcoming" active={status === "upcoming"} onClick={() => setStatus("upcoming")} color="#00AD85" />
            <Chip label="taken" active={status === "taken"} onClick={() => setStatus("taken")} color="#2ECC71" />
            <Chip label="missed" active={status === "missed"} onClick={() => setStatus("missed")} color="#E74C3C" />
          </div>
        </div>

        {/* ACTIONS */}
        <div style={actionsStyle}>
          <button onClick={onClose} style={cancelBtn}>
            Cancel
          </button>

          <button onClick={handleSave} style={saveBtn}>
            Save Medication
          </button>
        </div>
      </div>
    </>
  );
};

export default AddMedicationModal;



const Input = ({ label, value, setValue }) => (
  <div style={{ marginBottom: "15px" }}>
    <label>{label}</label>
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={inputStyle}
    />
  </div>
);

const Chip = ({ label, active, onClick, color = "#00AD85" }) => (
  <button
    onClick={onClick}
    style={{
      padding: "6px 12px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      background: active ? color : "#eee",
      color: active ? "#fff" : "#333",
      textTransform: "capitalize",
    }}
  >
    {label}
  </button>
);


const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  zIndex: 999,
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "420px",
  zIndex: 1000,
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ddd",
};

const chipContainer = {
  display: "flex",
  gap: "10px",
  marginTop: "10px",
};

const actionsStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
};

const cancelBtn = {
  padding: "8px 15px",
  background: "#ccc",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const saveBtn = {
  padding: "8px 15px",
  background: "#00AD85",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const linkBtn = {
  background: "none",
  border: "none",
  color: "#00AD85",
  cursor: "pointer",
  marginTop: "5px",
};