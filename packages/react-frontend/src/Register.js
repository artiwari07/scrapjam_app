// Register.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:8000/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Registration successful
          // Navigate to the login page
          navigate("/login");
        } else {
          // Registration failed
          console.error("Registration failed:", data.error);
          // Display an error message to the user
          alert("Registration failed: " + data.error);
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("Registration failed:", error);
        // Display an alert on network or other errors
        alert("Registration failed: " + error.message);
      });
  };

  return (
    <div className="background-login">
      <div className="container2">
        <div className="form-container2">
          <div className="header-scrapjam">
            {" "}
            <div class="logo"></div>{" "}
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Create Account button */}
          <button
            className="create-account-button"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
          <div></div>
          {/* Link to the login page */}
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
