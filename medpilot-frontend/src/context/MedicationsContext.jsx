import React, { createContext, useState } from "react";

export const MedicationsContext = createContext();

export const MedicationsProvider = ({ children }) => {
  const [medications, setMedications] = useState([]);

  const addMedication = (med) => {
    setMedications((prev) => [...prev, med]);
  };

  return (
    <MedicationsContext.Provider value={{ medications, addMedication }}>
      {children}
    </MedicationsContext.Provider>
  );
};