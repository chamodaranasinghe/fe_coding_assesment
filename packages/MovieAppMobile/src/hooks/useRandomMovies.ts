/*
This hook will be used to generate random movies using the API and dispatch the action to store the movies in the redux store
*/

import {generateRandomMovies} from '@assessment/datastore';
import {useAppDispatch} from './ReduxToolKitHooks';
import {
  setRandomMovies,
  setRandomMoviesError,
  setRandomMoviesLoading,
} from '../reducers/RandomMovieReducer';

/*
A reusable hook to generate random movies and dispatch the action to store the movies in the redux store
can be used in home component to load random movies
can be used in search bar component to load random movies when user click cancel on search bar
*/

const useRandomMovies = () => {
  //TODO write unit tests for the hooks
  const dispatch = useAppDispatch();
  const randomMovies = async () => {
    dispatch(setRandomMoviesLoading(true));
    dispatch(setRandomMoviesError(null));
    try {
      const generated = await generateRandomMovies();
      dispatch(setRandomMoviesLoading(false));
      dispatch(setRandomMovies(generated));
      dispatch(setRandomMoviesError(null));
    } catch (error) {
      dispatch(setRandomMovies([]));
      dispatch(setRandomMoviesError('Error fetching random movies'));
    } finally {
      dispatch(setRandomMoviesLoading(false));
    }
  };
  return {randomMovies};
};

export default useRandomMovies;
