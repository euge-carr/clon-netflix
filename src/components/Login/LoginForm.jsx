import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Input, useInput, Button, Container, Text } from "@nextui-org/react";

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

  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <form onSubmit={handleSubmit}>
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Text
          h2
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Iniciar Sesión
        </Text>
        <div>
          <Input
            type="email"
            name="email"
            required
            {...bindings}
            clearable
            shadow={false}
            onClearClick={reset}
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            label="Email"
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            required
            clearable
            color="default"
            label="Contraseña"
            placeholder="Contraseña"
          />
        </div>
        <div>
          <Button
            type="submit"
            color="gradient"
            auto
            css={{
              margin: "15px",
            }}
          >
            Iniciar Sesión
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default LoginForm;
