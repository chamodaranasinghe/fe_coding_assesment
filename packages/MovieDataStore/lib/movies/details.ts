/*
    This file is used to get the details of a movie by making a request to the API with the IMDB ID.
*/

import { httpGet, RemoteTaskType } from "../http/api";
import MovieInfo from "../types/movie-details";

export async function getMovieDetails(imdbID: string): Promise<MovieInfo> {
  const response = await httpGet(RemoteTaskType.Info, imdbID);
  if (response.status === "success") {
    return response.data as MovieInfo;
  } else {
    throw new Error("Failed to get movie details");
  }
}
