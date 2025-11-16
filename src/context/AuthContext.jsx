import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const authorizeUser = async (username, password) => {
    const url = "http://localhost:4000/api/login";
    try {
      const response = await axios.post(url, { username, password });
      setUser(response.data.user);
      setIsAuth(true);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMessage(errorResponse.message);
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
      setUser(response.data);
      setIsAuth(true);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMessage(errorResponse.message);
    }
  };

  const logoutUser = () => {
    setIsAuth(false);
    setUser({});
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        authorizeUser,
        registerUser,
        logoutUser,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// Endpoints:
// POST http://localhost:4000//api/register { username, email, password, confirmPassword }
// POST http://localhost:4000/api/login { username, password }
// GET /api/me (Authorization: Bearer <token>)

// Ответ при успешной аутентификации (пример):
// {
// "user": {
// "id": 1,
// "username": "ivan",
// "email": "ivan@example.com",
// "display_name": "Ivan",
// "created_at": "2025-11-14T12:00:00.000Z"
// },
// "token": "<jwt>"
// }
