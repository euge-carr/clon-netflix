import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { HomeSEO } from "./HomeSEO";
import { Button, Container, Text, Card, Grid, Row } from "@nextui-org/react";
import useSWR from "swr";
import axios from "axios";

const getMovies = async () => {
  const movies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=e44277a572d1f0c2b1e29b4f1ad5c401&language=es-ES&page=1");
  return movies.data;
};

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
        <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  <HomeSEO/>
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
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