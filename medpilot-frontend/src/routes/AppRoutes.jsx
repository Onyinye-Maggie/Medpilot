import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout/Layout";

const Dashboard = () => <h1>Dashboard Page</h1>;
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
                <Medications />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/doses"
          element={
            <ProtectedRoute>
              <Layout>
                <Doses />
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