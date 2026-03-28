import React, { useState, useContext } from "react";
import AddMedicationModal from "../../components/Medications/AddMedicationModal";
import { MedicationsContext } from "../../context/MedicationsContext";

const MedicationList = () => {
  const { medications, addMedication } = useContext(MedicationsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>My Medications</h1>

      <button onClick={() => setIsModalOpen(true)}>
        Add Medication
      </button>

      <ul>
        {medications.map((med, index) => (
          <li key={index}>
            {med.name} - {med.dosage}
          </li>
        ))}
      </ul>

      <AddMedicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addMedication} // 🔥 IMPORTANT
      />
    </div>
  );
};

export default MedicationList;