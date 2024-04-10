/*
    This is a reusable hook to fetch movie details from the API.
    This hook handles loading, fetching, and error states.
*/

import {getMovieDetails} from '@assessment/datastore';
import {useAppDispatch} from './ReduxToolKitHooks';
import {
  setMovieDetail,
  setMovieDetailError,
  setMovieDetailLoading,
} from '../reducers/DetailedMovieReducer';

const useMovieDetails = (movieId: string) => {
  const dispatch = useAppDispatch();
  const loadMovieDetails = async () => {
    dispatch(setMovieDetail(null));
    dispatch(setMovieDetailLoading(true));
    try {
      const movieDetails = await getMovieDetails(movieId);
      dispatch(setMovieDetail(movieDetails));
    } catch (e) {
      dispatch(setMovieDetail(null));
      dispatch(setMovieDetailError('Failed to fetch movie details'));
    } finally {
      dispatch(setMovieDetailLoading(false));
    }
  };
  return {loadMovieDetails};
};

export default useMovieDetails;
