import {MovieSummary} from '@assessment/datastore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SearchMovieState {
  loading: boolean;
  list: MovieSummary[];
  error: string | null;
  isActive: boolean;
}

let initialState: SearchMovieState = {
  loading: false,
  list: [],
  error: null,
  isActive: false,
};

const searchMovieSlice = createSlice({
  name: 'SearchMovies',
  initialState: initialState,
  reducers: {
    setSearchMovies: (state, action: PayloadAction<MovieSummary[]>) => {
      state.list = action.payload;
    },
    setSearchMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSearchMoviesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSearchIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const {
  setSearchMovies,
  setSearchMoviesLoading,
  setSearchMoviesError,
  setSearchIsActive,
} = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
