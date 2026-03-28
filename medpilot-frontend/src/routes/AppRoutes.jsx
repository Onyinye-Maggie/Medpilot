import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard"; // <- fixed path
import MedicationList from "../pages/Medications/MedicationList";
import DoseTracker from "../pages/Doses/DoseTracker";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/medications" element={<MedicationList />} />
      <Route path="/doses" element={<DoseTracker />} />
    </Routes>
  );
};

export default AppRoutes;