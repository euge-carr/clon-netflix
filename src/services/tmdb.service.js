import { tmdbApi } from "../core/apis/tmdb.api";

export const getMovies = async () => {
    const movies = await tmdbApi.get();
    return movies.data;
};