import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext({});

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "LOGOUT":
      return { ...state, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [state, dispatch] = useReducer(authReducer, {
    token: cookies.token || null,
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://scrapjam.azurewebsites.net/account/login",
        {
          userid: value.username,
          password: value.password,
        },
      );

      if (response.data.success) {
        const token = response.data.token;

        // Set the token as an HttpOnly cookie
        setCookie("token", token, { path: "/" });

        // Use dispatch to set the token in the context
        dispatch({ type: "SET_TOKEN", payload: token });

        console.log("Login successful");
        navigate("/entries");
        console.log("After navigation");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleLogout = () => {
    // Clear the token from cookies
    removeCookie("token", { path: "/" });
    navigate("/login");
  };

  const value = {
    token: state.token,
    username: "",
    password: "",
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={{ value, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
