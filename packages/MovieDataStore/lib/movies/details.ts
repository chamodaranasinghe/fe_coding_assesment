/*
    This file is used to get the details of a movie by making a request to the API with the IMDB ID.
*/

import { httpGet, RemoteTaskType } from "../http/api";
import { DetailsResult } from "../types/api-responses/movie-details";
import MovieDetails from "../types/movie-details";
import MovieInfo from "../types/movie-details";
import { processMovieDetails } from "./helper";

/**
 * This function gets the details of a movie by making a request to the API with the IMDB ID.
 * @param {string} imdbID - The IMDB ID of the movie
 * @returns {Promise<MovieInfo>} A promise that resolves to a TMovieInfo object
 */
export async function getMovieDetails(imdbID: string): Promise<MovieInfo> {
  const response = await httpGet(RemoteTaskType.Info, imdbID);
  if (response.status === "success") {
    return processMovieDetails(response.data as unknown as DetailsResult);
  } else {
    throw new Error("Failed to get movie details");
  }
}
