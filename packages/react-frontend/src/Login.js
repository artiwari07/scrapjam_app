import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import your CSS file

 export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform the login API call
    fetch('http://localhost:8000/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Authentication successful
          // You may perform additional actions here if needed
  
          // Navigate to the landing page or handle the successful login as needed
          navigate('/landing');
        } else {
          // Authentication failed
          console.error('Login failed:', data.error);
          // You may display an error message to the user
          alert('Login failed: ' + data.error);
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Login failed:', error);
        // Display an alert on network or other errors
        alert('Login failed: ' + error.message);
      });
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
  
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
  
        <button className="create-account-button" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
 };

export default Login;