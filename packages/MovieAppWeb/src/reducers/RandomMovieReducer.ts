import {MovieSummary} from '@assessment/datastore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RandomMovieState {
  loading: boolean;
  list: MovieSummary[];
  error: string | null;
}

const initialState: RandomMovieState = {
  loading: false,
  list: [],
  error: null,
};

const randomMovieSlice = createSlice({
  name: 'RandomMovies',
  initialState: initialState,
  reducers: {
    setRandomMovies: (state, action: PayloadAction<MovieSummary[]>) => {
      state.list = action.payload;
    },
    setRandomMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setRandomMoviesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {setRandomMovies, setRandomMoviesLoading, setRandomMoviesError} =
  randomMovieSlice.actions;
export default randomMovieSlice.reducer;
