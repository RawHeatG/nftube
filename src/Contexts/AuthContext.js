import { createContext, useContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage?.getItem("nftubeLogin"))
  );
  const [authError, setAuthError] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  console.log("Token: ", currentUser?.token);

  currentUser?.token
    ? (axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${currentUser?.token}`)
    : delete axios.defaults.headers.common["Authorization"];

  const setUserandNavigate = (response) => {
    const user = response.data.data;
    localStorage?.setItem("nftubeLogin", JSON.stringify(user));
    setCurrentUser(user);
    state?.from ? navigate(state.from) : navigate("/");
  };

  async function loginUserWithCredentials(username, password) {
    try {
      const user = { username: username, password: password };
      const response = await axios.post(`${API_URL}/login`, { user });
      response.data.success ? setUserandNavigate(response) : setAuthError(true);
    } catch (error) {
      console.error("Error occured during login", error);
      setAuthError(true);
    }
  }

  async function signupUserWithCredentials(name, username, email, password) {
    try {
      const user = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      const response = await axios.post(`${API_URL}/signup`, { user });
      response.data.success ? setUserandNavigate(response) : setAuthError(true);
    } catch (error) {
      console.error("Error occured during signup", error);
      setAuthError(true);
    }
  }

  function logoutUser() {
    try {
      localStorage.removeItem("nftubeLogin");
      setCurrentUser();
    } catch (err) {
      console.error("Error while logging out", err);
      setAuthError(true);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loginUserWithCredentials,
        signupUserWithCredentials,
        logoutUser,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
