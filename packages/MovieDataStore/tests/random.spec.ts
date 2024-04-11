import { generateRandomMovies } from "../lib/movies/random";
import { MovieSummary } from "../lib/types/movie-summary";

describe("Random Movies", () => {
  let generatedMovies: MovieSummary[] = [];
  it("should generate 10 random movies", async () => {
    generatedMovies = await generateRandomMovies(10);
    expect(generatedMovies.length).toBe(10);
  });

  it("generated 10 movies should be unique", async () => {
    const uniqueMovies = Object.values(
      generatedMovies.reduce(
        (acc, obj) => ({ ...acc, [obj["#IMDB_ID"]]: obj }),
        {}
      )
    );
    expect(uniqueMovies.length).toBe(10);
  });
});
