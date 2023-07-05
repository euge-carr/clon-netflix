import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { HomeSEO } from "./HomeSEO";
import { Button, Container, Text, Card } from "@nextui-org/react";
import useSWR from "swr";
import { getMovies } from "../../../../services/tmdb.service";

const HomeView = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const { data: movies, error, isLoading: isLoadingMovies } = useSWR("getMovies", getMovies); 
  
  if (error) {
    return <div>Error al cargar las películas</div>;
  }

  if (isLoadingMovies){
    return <div>Cargando...</div>
  }

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
        <HomeSEO/>
      </div>
      <div>
        <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Body css={{ py: "$2" }}>
            <Text
              h4
              color="secondary"
            >
              Bienvenido {user?.email}!
            </Text>
          </Card.Body>
          <Card.Footer
            css={{ 
              display: "flex", 
              justifyContent: "center" 
            }}>
            <Button 
              color="gradient" 
              auto
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </Card.Footer>
      </Card>
    </div>
    <div>
      {movies.results.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </div>
  </Container>
  );
};

export default HomeView;