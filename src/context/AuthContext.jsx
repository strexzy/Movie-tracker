import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {},
  );
  const [errorAuthMessage, setErrorAuthMessage] = useState("");

  const authorizeUser = async (username, password) => {
    const url = "http://localhost:4000/api/login";
    try {
      const response = await axios.post(url, { username, password });
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setIsAuth(true);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorAuthMessage(errorResponse.message);
    }
  };

  const registerUser = async (username, email, password, confirmPassword) => {
    const url = "http://localhost:4000/api/register";
    try {
      const response = await axios.post(url, {
        username,
        email,
        password,
        confirmPassword,
      });
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setIsAuth(true);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorAuthMessage(errorResponse.message);
    }
  };

  const logoutUser = () => {
    setIsAuth(false);
    setUser({});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  const isTokenExpired = (token) => {
    if (!token) return true;

    try {
      const { exp } = jwtDecode(token);
      if (!exp) return true;

      const now = Date.now() / 1000;
      return exp < now;
    } catch (e) {
      return true;
    }
  };

  useEffect(() => {
    const tokenStatus = isTokenExpired(sessionStorage.getItem("token"));
    if (!tokenStatus && sessionStorage.getItem("user")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        authorizeUser,
        registerUser,
        logoutUser,
        errorAuthMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
