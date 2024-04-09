import sample from "./sample-movie-search-result.json";
import { generateRandomMovies } from "../lib/movies/random";
import { MovieSearchResult } from "../lib/types/api-responses/movie-search-result";
import { processSearchResults } from "../lib/movies/helper";

describe("Random Movies", () => {
  it("should process json response correctly", () => {
    const response = sample as MovieSearchResult;
    expect(response.ok).toBe(true);
    expect(processSearchResults(response).length).toBe(
      response.description.length
    );
    expect(processSearchResults(response)[0]).toEqual({
      "#IMDB_ID": "tt13210838",
      "#TITLE": "The Gentlemen",
      "#YEAR": 2024,
      "#RANK": 4,
      "#ACTORS": ["Theo James", "Kaya Scodelario"],
      "#AKA": "The Gentlemen (2024) ",
      "#IMG_POSTER":
        "https://m.media-amazon.com/images/M/MV5BOGJjODQxYWUtYjlkOC00NzJiLTgyZjUtY2Q3Y2FhZGVlODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      "#IMDB_URL": "https://imdb.com/title/tt13210838",
    });
  });

  it("should generate 10 random movies", async () => {
    const generatedMovies = await generateRandomMovies(10);
    expect(generatedMovies.length).toBe(10);
  });
});
