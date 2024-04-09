export type MovieDetails = {
  id: string;
  name: string;
  description: string;
  poster: string | null;
  actors: string[];
  keywords: string[];
  genre: string[];
  rating: number;
  totalReviews: number;
  featuredReviews: FeaturedReview[];
};

export type FeaturedReview = {
  summary: string;
  text: string;
};
