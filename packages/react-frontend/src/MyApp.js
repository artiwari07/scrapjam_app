import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import Register from './Register';
import { AuthProvider } from "./context/AuthProvider";

const MyApp = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/registration" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default MyApp;
