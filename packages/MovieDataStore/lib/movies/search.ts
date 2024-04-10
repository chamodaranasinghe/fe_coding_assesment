/*
    Very straightforward, we just need to call the API with the search query
*/

import { httpGet, RemoteTaskType } from "../http/api";
import { MovieSearchResult } from "../types/api-responses/movie-search-result";
import { MovieSummary } from "../types/movie-summary";
import { processSearchResults } from "./helper";

/**
 * This function searches for movies with the given query.
 * @param {string} query - The query to search for
 * @returns {TMovieSummary[]} An array of TMovieSummary objects or an empty array if no results are found
 */
export async function searchMovies(query: string): Promise<MovieSummary[]> {
  const response = await httpGet(RemoteTaskType.Search, query);
  if (response.status === "success") {
    const result = response.data as MovieSearchResult;
    return processSearchResults(result);
  } else if (response.status === "error") {
    throw new Error(`Error fetching movies for ${query}`);
  } else if (response.status === "network-error") {
    throw new Error(`Network error fetching movies for ${query}`);
  } else {
    return [];
  }
}
