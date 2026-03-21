import React, { useState, useEffect } from "react";

const EditMedicationModal = ({ medication, onClose, onSave }) => {
  const [form, setForm] = useState({ name: "", dosage: "", schedule: "" });
  const [errors, setErrors] = useState({});

  // Populate form when medication changes
  useEffect(() => {
    if (medication) {
      setForm({
        name: medication.name,
        dosage: medication.dosage,
        schedule: medication.schedule.join(", "),
      });
    }
  }, [medication]); // ✅ Properly closed useEffect

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.dosage) errs.dosage = "Dosage is required";
    if (!form.schedule) errs.schedule = "Schedule is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    onSave({
      ...medication,
      name: form.name,
      dosage: form.dosage,
      schedule: form.schedule.split(",").map((t) => t.trim()),
    });
    onClose();
  };

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
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", width: "400px" }}>
        <h3>Edit Medication</h3>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

          <input
            type="text"
            placeholder="Dosage"
            value={form.dosage}
            onChange={(e) => setForm({ ...form, dosage: e.target.value })}
          />
          {errors.dosage && <span style={{ color: "red" }}>{errors.dosage}</span>}

          <input
            type="text"
            placeholder="Schedule (comma-separated)"
            value={form.schedule}
            onChange={(e) => setForm({ ...form, schedule: e.target.value })}
          />
          {errors.schedule && <span style={{ color: "red" }}>{errors.schedule}</span>}

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
            <button type="button" onClick={onClose} style={{ padding: "5px 10px", cursor: "pointer" }}>
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "5px 15px",
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMedicationModal;