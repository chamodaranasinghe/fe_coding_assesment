import { DetailsResult } from "../types/api-responses/movie-details";
import { MovieSearchResult } from "../types/api-responses/movie-search-result";
import MovieDetails from "../types/movie-details";
import MovieSummary from "../types/movie-summary";

/*
    This is a helper file that contains the functions for movie API
*/

/**
 * This function processes the search results and returns an array of TMovieSummary objects.
 * @param {MovieSearchResult} result - The search result object
 * @returns {MovieSummary[]}An array of TMovieSummary objects
 */
export function processSearchResults(
  result: MovieSearchResult
): MovieSummary[] {
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

/**
 * This function processes the movie details and returns a TMovieDetails object.
 * @param {DetailsResult} details - The movie details object
 * @returns {MovieDetails} A TMovieDetails object
 */
export function processMovieDetails(details: DetailsResult): MovieDetails {
  return {
    id: details.imdbId,
    name: details.short.name,
    description: details.short.description, // this is in MD format
    poster: details.short.image ?? null,
    actors: details.short.actor.map((actor) => actor?.name!),
    keywords: details.short.keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    genre: details.short.genre.map((genre) => genre),
    rating: details.short.aggregateRating.ratingValue,
    totalReviews: details.main.reviews.total,
    featuredReviews: details.main.featuredReviews.edges.map((review) => {
      return {
        summary: review.node.summary.originalText,
        text: review.node.text.originalText.plaidHtml,
      };
    }),
  };
}
