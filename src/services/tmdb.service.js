import { tmdbApi, tmdbPaths } from "../core/apis/tmdb.api";

export const getPopularMovies = async () => {
    const movies = await tmdbApi.get(tmdbPaths.movies);
    return movies.data;
};