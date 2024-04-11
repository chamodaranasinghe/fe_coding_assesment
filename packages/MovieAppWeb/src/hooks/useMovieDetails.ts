/*
    This is a reusable hook to fetch movie details from the API.
    This hook handles loading, fetching, and error states.
*/

import { getMovieDetails } from "@assessment/datastore";
import { useAppDispatch } from "./ReduxHooks";
import {
  setMovieDetail,
  setMovieDetailError,
  setMovieDetailLoading,
} from "../reducers/DetailedMovieReducer";

/**
 * A reusable hook to fetch movie details from the API
 * @param {string} movieId - The  ID of the movie
 */

const useMovieDetails = (movieId: string) => {
  //TODO write unit tests for the hooks
  const dispatch = useAppDispatch();
  const loadMovieDetails = async () => {
    dispatch(setMovieDetail(null));
    dispatch(setMovieDetailLoading(true));
    dispatch(setMovieDetailError(null));
    try {
      const movieDetails = await getMovieDetails(movieId);
      dispatch(setMovieDetail(movieDetails));
      dispatch(setMovieDetailError(null));
    } catch (e) {
      dispatch(setMovieDetail(null));
      dispatch(setMovieDetailError("Failed to fetch movie details"));
    } finally {
      dispatch(setMovieDetailLoading(false));
    }
  };
  return { loadMovieDetails };
};

export default useMovieDetails;
