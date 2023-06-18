import React from "react";
import { useAuth } from "../../../hooks/useAuth";

const HomeView = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>HOME</h1>
      <h3>Bienvenido {user?.email}</h3>

      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomeView;