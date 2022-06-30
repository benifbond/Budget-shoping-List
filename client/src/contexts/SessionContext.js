import { createContext, useEffect, useState } from "react";
import { apiBase, checkToken } from "../utils/helper";

const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const apiWithToken = apiBase(token);

  const authenticateUser = (responseToken) => {
    setToken(responseToken);
    localStorage.setItem("authToken", responseToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken();
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  const verifyAuth = async () => {
    try {
      const tokenFromStorage = localStorage.getItem("authToken");

      const response = await checkToken(tokenFromStorage);
      if (response.errorMessage) {
        throw new Error();
      }
      setToken(tokenFromStorage);
      setIsAuthenticated(true);
    } catch (error) {
      localStorage.removeItem("authToken");
    }
    setIsVerified(true);
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        token,
        verifyAuth,
        apiWithToken,
        isAuthenticated,
        authenticateUser,
        logout,
        isVerified,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionContextProvider };
