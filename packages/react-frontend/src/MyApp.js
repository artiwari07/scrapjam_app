// MyApp.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Entries from "./Entries";
import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Entry from "./Entry";
import "./LogoutButton.css";
import ProtectedRoute from "./utils/ProtectedRoute";

const LogoutButton = () => {
  const { value } = useAuth(); // Ensure you are extracting the correct property
  const { onLogout } = value;
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

const MyApp = () => {
  return (
    <Router>
      <AuthProvider>
        <LogoutButton />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route
            path="/entries"
            element={
              <ProtectedRoute>
                <Entries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entry"
            element={
              <ProtectedRoute>
                <Entry />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default MyApp;
