import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import LoginForm from '../../../components/LoginForm'


const LoginView = () => {
  const { login } = useAuth();

  return (
    <div>
      <div>
        <h1>Iniciar Sesión</h1>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginView;