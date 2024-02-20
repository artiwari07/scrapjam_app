import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import Register from './Register';

const MyApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default MyApp;
