import { useContext } from "react";
import { AuthContext } from "../core/auth/context/AuthContext";

export const useAuth = () => {
  const { isLoggedIn, login, logout, user } = useContext(AuthContext);

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
};
