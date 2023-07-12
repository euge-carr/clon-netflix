import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { HomeSEO } from "./HomeSEO";
import { Button, Container, Text, Card } from "@nextui-org/react";
import useSWR from "swr";
import { getPopularMovies } from "../../../../services/tmdb.service";
import SwiperComponent from "../../../../components/Swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import CardGeneric from "../../../../components/CardGeneric/CardGeneric";

const HomeView = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const { data: movies, error, isLoading: isLoadingMovies } = useSWR("getMovies", getPopularMovies); 
  
  
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
      height: "80vh",
    }}>
      <div>
        <HomeSEO/>
      </div>
      <div>
        <Card css={{ p: "$6", mw: "400px" , mb:"$18"}}>
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
      <SwiperComponent
      >
      {movies.results.map((movie) => (
        <SwiperSlide key={movie.id}>
          <CardGeneric movie={movie.title} ></CardGeneric>
        </SwiperSlide>
      ))
      
      
      
      /*{
          return <div key={movie.id}>{movie.title}</div>;
        })*/}
      </SwiperComponent>
      
      </div>
  </Container>
  );
};

export default HomeView;