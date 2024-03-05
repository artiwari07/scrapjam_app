// MyApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Entries from './Entries';
import Entry from './Entry';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './context/AuthProvider';
import { useNavigate } from "react-router-dom";
import './LogoutButton.css';

const LogoutButton = () => {
  const { value } = useAuth(); // Ensure you are extracting the correct property
  const { onLogout } = value;
  const navigate = useNavigate();
  const handleLogout = () => {
    
    onLogout();
    navigate('/login');
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
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/entry" element={<Entry />} />
      </Routes>
    </Router>
  );
};

export default MyApp;
