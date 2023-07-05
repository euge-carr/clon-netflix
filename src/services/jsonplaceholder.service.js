import { jsonPlaceHolderApi } from "../core/auth/jsonplaceholder.api";

export const getMovies = async () => {
    const movies = await jsonPlaceHolderApi.get();
    return movies.data;
};