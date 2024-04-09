export type MovieSearchResult = {
  ok: boolean;
  description: Summary[];
  error_code: number;
};

export type Summary = {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER"?: string | undefined;
  photo_width: number;
  photo_height: number;
};
