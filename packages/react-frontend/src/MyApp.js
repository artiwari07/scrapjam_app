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
import ProtectedRoute from "./utils/ProtectedRoute";
import "./pages.css";

const LogoutButton = () => {
  const { value } = useAuth();
  const { onLogout } = value;
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      logout
    </button>
  );
};

const MyApp = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="header">
          <div className="ScrapJam_title"> </div>
          {/* <div className="about"> about </div> */}
          <div className="tutorial"> tutorial </div>
          <LogoutButton />
          <div className="header_rec"> </div>
        </div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route
            path="/entries"
            element={
              // <ProtectedRoute>
                <Entries />
              // {/* </ProtectedRoute> */}
            }
          />

          <Route
            path="/entry/:id"
            element={
              // <ProtectedRoute>
                <Entry />
              // {/* </ProtectedRoute> */}
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default MyApp;
