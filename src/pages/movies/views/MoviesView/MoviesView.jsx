import React from "react";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json());

const MoviesView = () => {

  const { data: movies, error, isLoading: isLoadingMovies } = useSWR(
    'https://api.themoviedb.org/3/movie/popular?api_key=e44277a572d1f0c2b1e29b4f1ad5c401&language=es-ES&page=1', 
    fetcher
  );
  
  if (error) {
    return <div>Error al cargar las películas</div>;
  }

  if (isLoadingMovies){
    return <div>Cargando...</div>
  }

  return (
    <div>
      {movies.results.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </div>
  );
};

export default MoviesView;