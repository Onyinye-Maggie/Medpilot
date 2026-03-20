import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout/Layout";
import MedicationList from "../pages/Medications/MedicationList";
import DoseTracker from "../pages/Doses/DoseTracker";

const Dashboard = () => {
  const cards = [
    { title: "Medications", value: 12 },
    { title: "Doses Taken Today", value: 8 },
    { title: "Refills Pending", value: 2 },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            flex: "1 1 200px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>{card.title}</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};
const Medications = () => <h1>Medications Page</h1>;
const Doses = () => <h1>Dose Tracker Page</h1>;
const Refills = () => <h1>Refills Page</h1>;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

       <Route
  path="/medications"
  element={
    <ProtectedRoute>
      <Layout>
        <MedicationList />
      </Layout>
    </ProtectedRoute>
  }
/>

<Route
  path="/doses"
  element={
    <ProtectedRoute>
      <Layout>
        <DoseTracker />
      </Layout>
    </ProtectedRoute>
  }
/>
        <Route
          path="/refills"
          element={
            <ProtectedRoute>
              <Layout>
                <Refills />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;