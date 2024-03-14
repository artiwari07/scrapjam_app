import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError] = useState("");
  const navigate = useNavigate();

  const { value } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    value.username = username;
    value.password = password;
    return value.onLogin();
  };

  const handleCreateAccount = () => {
    navigate("/registration");
  };

  return (
    <div className="background-login">
      <div className="container2">
        <div className="form-container2">
          <div className="footer-login"></div>
          <div className="header-scrapjam">
            {" "}
            <div class="logo"></div>{" "}
          </div>
          <div>{" "}</div><div>{" "}</div>

          <div className="user-pass">
            <label htmlFor="username" style={{ marginTop: "60px" }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password" style={{ marginBottom: "10px" }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-button2" onClick={handleSubmit}>
            Login
          </button>
          {loginError && <p>{loginError}</p>}
          <div></div>
          <button
            className="create-account-button2"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>

          <div className="seaweed"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
