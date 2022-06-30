import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isVerified } = useContext(SessionContext);

  if (!isVerified) {
    return <p> loading</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/user/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
