import sampleSearchResult from "./sample-movie-search-result.json";
import sampleDetailsResult from "./sample-movie-details-result.json";
import {
  processMovieDetails,
  processSearchResults,
} from "../lib/movies/helper";
import { MovieSearchResult } from "../lib/types/api-responses/movie-search-result";
import { DetailsResult } from "../lib/types/api-responses/movie-details";
import exp from "constants";

describe("Helper", () => {
  it("should process search result json response correctly", () => {
    const response = sampleSearchResult as MovieSearchResult;
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

  it("should process details result json response correctly", () => {
    const response = sampleDetailsResult as unknown as DetailsResult;
    expect(processMovieDetails(response)).toEqual({
      id: "tt5433138",
      name: "F9",
      description:
        "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia&apos;s estranged brother.",
      featuredReviews: [
        {
          summary: "Enough. Red light. Stop",
          text: "Just utter garbage. To say this movie was written and made by a 12 year old is an insult to a 12 year old. This franchise needs to end now.",
        },
      ],
      genre: ["Action", "Crime", "Thriller"],
      keywords: [
        "fast and furious franchise",
        "car",
        "gunfight",
        "shootout",
        "gun battle",
      ],
      actors: ["Vin Diesel", "Michelle Rodriguez", "Jordana Brewster"],
      poster:
        "https://m.media-amazon.com/images/M/MV5BMzllNmFmMjUtNDViYS00MzZiLThiOGUtMTU5OWM0NGY4ZGMxXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
      rating: 5.2,
      totalReviews: 2444,
    });
  });
});
