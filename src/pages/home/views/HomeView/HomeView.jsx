import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { HomeSEO } from "./HomeSEO";
import { Button, Container, Text } from "@nextui-org/react";

const HomeView = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Container
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
    <div>
      <h1><HomeSEO/></h1>
      <Text
        h4
        color="secondary"
      >
        Bienvenido {user?.email}!
      </Text>
      <Button 
        color="gradient" 
        auto
        onClick={handleLogout}
      >
        Cerrar Sesión
      </Button>
    </div>
    </Container>
  );
};

export default HomeView;