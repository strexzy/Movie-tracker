import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = false;
  const [user, setUser] = useState({});

  const authorizeUser = async (email, password) => {
    const url = "mok api with users";
    try {
      const response = await axios.get(url);
      setUser(response.data);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider vlaue={{ isAuth, user, authorizeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
