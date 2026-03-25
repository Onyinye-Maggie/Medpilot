import React, { useState } from "react";
import { medications as mockMeds } from "../../utils/mockData";
import AddMedicationModal from "../../components/Medications/AddMedicationModal";
import EditMedicationModal from "../../components/Medications/EditMedicationModal";
import DeleteMedicationModal from "../../components/Medications/DeleteMedicationModal";

const MedicationList = () => {
  const [meds, setMeds] = useState(mockMeds);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  // Add medication
  const handleAdd = (newMed) => {
    setMeds([newMed, ...meds]);
  };

  // Edit medication
  const handleEditSave = (updatedMed) => {
    setMeds(meds.map((m) => (m.id === updatedMed.id ? updatedMed : m)));
  };

  // Delete medication
  const handleDeleteConfirm = () => {
    setMeds(meds.filter((m) => m.id !== deleteModal.id));
    setDeleteModal(null);
  };

  return (
    <div>
      <h2>Medications</h2>
      <button
        onClick={() => setAddModalOpen(true)}
        style={{
          padding: "8px 15px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        + Add Medication
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {meds.map((med) => (
          <div
            key={med.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>{med.name}</h3>
              <p>{med.dosage}</p>
              <p>Schedule: {med.schedule.join(", ")}</p>
            </div>
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
                  background: "#d32f2f",
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

      {/* Modals */}
      {addModalOpen && <AddMedicationModal onAdd={handleAdd} onClose={() => setAddModalOpen(false)} />}
      {editModal && (
        <EditMedicationModal
          medication={editModal}
          onSave={handleEditSave}
          onClose={() => setEditModal(null)}
        />
      )}
      {deleteModal && (
        <DeleteMedicationModal
          medication={deleteModal}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteModal(null)}
        />
      )}
    </div>
  );
};

export default MedicationList;