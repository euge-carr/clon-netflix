import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import LoginForm from "../../../../components/Login/LoginForm";
import { LoginSEO } from "./LoginSEO";

const LoginView = () => {
  const { login } = useAuth();

  return (
    <div>
      <LoginSEO />
      <LoginForm />
    </div>
  );
};

export default LoginView;
