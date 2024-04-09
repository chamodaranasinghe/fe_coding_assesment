/*
    Very straightforward, we just need to call the API with the search query
*/

import { httpGet, RemoteTaskType } from "../http/api";
import { MovieSearchResult } from "../types/api-responses/movie-search-result";
import TMovieSummary from "../types/movie-summary";
import { processSearchResults } from "./helper";

/**
 * This function searches for movies with the given query.
 * @param {string} query - The query to search for
 * @returns {TMovieSummary[]} An array of TMovieSummary objects or an empty array if no results are found
 */
export async function searchMovies(query: string): Promise<TMovieSummary[]> {
  const response = await httpGet(RemoteTaskType.Search, query);
  if (response.status === "success") {
    const result = response.data as MovieSearchResult;
    return processSearchResults(result);
  } else {
    return [];
  }
}
