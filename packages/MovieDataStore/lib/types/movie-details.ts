type MovieDetails = {
  id: string;
  name: string;
  description: string;
  poster: string | null;
  director: string;
  actors: string[];
  keywords: string[];
  rating: number;
  totalReviews: number;
  featuredReview: string;
};

export default MovieDetails;
