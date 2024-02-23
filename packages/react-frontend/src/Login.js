import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./context/AuthProvider";
import axios from 'axios';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const { value } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await value.onLogin(username, password);
      // The navigation logic should be handled within onLogin, 
      // so you don't need to manually navigate here.
    } catch (error) {
      // Handle errors if needed
      console.error(error);
      setLoginError("An error occurred during login. Please try again.");
    }
  };

  const handleLogout = () => {
    value.onLogout();
  };

  const handleCreateAccount = () => {
    // Navigate to the registration page
    navigate('/registration');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Scrapjam</h1>
        <label htmlFor="username" style={{ marginTop: '60px' }}>
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" style={{ marginBottom: '10px' }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
        {loginError && <p>{loginError}</p>}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>

        <button className="create-account-button" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
