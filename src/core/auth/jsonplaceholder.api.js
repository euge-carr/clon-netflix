import axios from "axios";

export const jsonPlaceHolderApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=e44277a572d1f0c2b1e29b4f1ad5c401&language=es-ES&page=1",
});

