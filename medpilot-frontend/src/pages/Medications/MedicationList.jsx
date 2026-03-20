import { useState } from "react";
import { medications as initialData } from "../../utils/mockData";
import EditMedicationModal from "../../components/Medications/EditMedicationModal";
import DeleteMedicationModal from "../../components/Medications/DeleteMedicationModal";
const MedicationList = () => {
  const [meds, setMeds] = useState(initialData);

  // Modals
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  // Add Medication Form State
  const [form, setForm] = useState({ name: "", dosage: "", schedule: "" });
  const [errors, setErrors] = useState({});

  // --- Validation ---
  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.dosage) errs.dosage = "Dosage is required";
    if (!form.schedule) errs.schedule = "Schedule required (comma-separated)";
    return errs;
  };

  // --- Handlers ---
  const handleAdd = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);

    const newMed = {
      id: Date.now(),
      name: form.name,
      dosage: form.dosage,
      schedule: form.schedule.split(",").map((t) => t.trim()),
    };

    setMeds([newMed, ...meds]);
    setAddModalOpen(false);
    setForm({ name: "", dosage: "", schedule: "" });
    setErrors({});
  };

  const handleEditSave = (updatedMed) => {
    setMeds(meds.map((m) => (m.id === updatedMed.id ? updatedMed : m)));
  };

  const handleDelete = (id) => {
    setMeds(meds.filter((m) => m.id !== id));
  };

  return (
    <div>
      <h2>Medications</h2>
      <button
        onClick={() => setAddModalOpen(true)}
        style={{
          marginBottom: "20px",
          padding: "8px 15px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        + Add Medication
      </button>

      {/* --- Add Modal --- */}
      {addModalOpen && (
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
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              width: "400px",
            }}
          >
            <h3>Add Medication</h3>
            <form
              onSubmit={handleAdd}
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
                placeholder="Schedule (comma-separated, e.g., 08:00, 20:00)"
                value={form.schedule}
                onChange={(e) => setForm({ ...form, schedule: e.target.value })}
              />
              {errors.schedule && <span style={{ color: "red" }}>{errors.schedule}</span>}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <button type="button" onClick={() => setAddModalOpen(false)}>
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
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- Edit Modal --- */}
      {editModal && (
        <EditMedicationModal
          medication={editModal}
          onClose={() => setEditModal(null)}
          onSave={handleEditSave}
        />
      )}

      {/* --- Delete Modal --- */}
      {deleteModal && (
        <DeleteMedicationModal
          medication={deleteModal}
          onClose={() => setDeleteModal(null)}
          onDelete={handleDelete}
        />
      )}

      {/* --- Medication Cards --- */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {meds.map((med) => (
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
                onClick={() => setEditModal(med)}
                style={{
                  padding: "5px 10px",
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteModal(med)}
                style={{
                  padding: "5px 10px",
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
        ))}
      </div>
    </div>
  );
};

export default MedicationList;