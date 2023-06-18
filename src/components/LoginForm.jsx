import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());

    login({
      email: data.email.toString(),
    });

    navigate("/", {
      replace: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" name="email" required />
      </div>
      <div>
        <input type="password" name="password" required />
      </div>

      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
};

export default LoginForm;