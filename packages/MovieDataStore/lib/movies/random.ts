/*
    This file is used to generate 10 random movies using the httpGet function from the api.ts file.
    The API return only 8 results per request, so we need to make more requests to get 10 movies.
    There is a fixed array of movie names that are used to generate the random movies.
    The function should return an array of 10 random movies.
*/

import { httpGet, RemoteTaskType } from "../http/api";
import { MovieSearchResult } from "../types/api-responses/movie-search-result";
import { MovieSummary } from "../types/movie-summary";

import { processSearchResults } from "./helper";

const names: string[] = [
  "Inception",
  "Redemption",
  "Shawshank",
  "Godfather",
  "Fiction",
  "Dark",
  "Knight",
  "Forrest",
  "Matrix",
  "List",
  "Fight",
  "Lord",
  "Empire",
  "Silence",
  "Green",
  "The",
  "Ring",
  "Departed",
  "Gladiator",
  "Prestige",
  "Interstellar",
];

/**
 * This function generates random movies by making requests to the API with random movie names.
 * @param {number} amount - The amount of random movies to generate
 * @returns {TMovieSummary[]} An array of TMovieSummary objects
 */
export async function generateRandomMovies(
  amount: number = 10
): Promise<MovieSummary[]> {
  let uniqueMovies = new Set<MovieSummary>();
  while (uniqueMovies.size < amount) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const response = await httpGet(RemoteTaskType.Search, randomName);
    if (response.status === "success") {
      const result = response.data as MovieSearchResult;
      const movies = processSearchResults(result);
      movies.forEach((movie) => uniqueMovies.add(movie));
    } else {
      throw new Error(`Error fetching movies for ${randomName}`);
    }
  }
  //return only the amount of movies requested from start to amount
  //TODO: Uniqueness is not working. Fix the Bug
  return Array.from(uniqueMovies).slice(0, amount);
}
