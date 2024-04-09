import { MovieSearchResult } from "../types/api-responses/movie-search-result";
import TMovieSummary from "../types/movie-summary";

/*
    This is a helper file that contains the functions for movie API
*/

/**
 * This function processes the search results and returns an array of TMovieSummary objects.
 * @param {MovieSearchResult} result - The search result object
 * @returns {TMovieSummary[]}An array of TMovieSummary objects
 */
export function processSearchResults(
  result: MovieSearchResult
): TMovieSummary[] {
  return result.description.map((summary) => {
    return {
      "#IMDB_ID": summary["#IMDB_ID"],
      "#TITLE": summary["#TITLE"],
      "#YEAR": summary["#YEAR"],
      "#RANK": summary["#RANK"],
      "#ACTORS": summary["#ACTORS"].split(",").map((actor) => actor.trim()),
      "#AKA": summary["#AKA"],
      "#IMG_POSTER": summary["#IMG_POSTER"] ?? null,
      "#IMDB_URL": summary["#IMDB_URL"],
    };
  });
}
