import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "./context/AuthProvider";
import './Login.css';

 export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { value } = useAuth();
  const handleSubmit = (e) => {
      e.preventDefault();
      value.username = username;
      value.password = password;
      return value.onLogin();
  }

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
        <button className="create-account-button" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
 };

export default Login;