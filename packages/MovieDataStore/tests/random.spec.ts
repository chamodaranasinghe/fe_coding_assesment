import { generateRandomMovies } from "../lib/movies/random";

describe("Random Movies", () => {
  it("should generate 10 random movies", async () => {
    const generatedMovies = await generateRandomMovies(10);
    expect(generatedMovies.length).toBe(10);
  });
});
