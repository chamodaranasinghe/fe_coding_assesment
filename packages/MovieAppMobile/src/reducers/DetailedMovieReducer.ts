import {MovieDetails} from '@assessment/datastore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RandomMovieState {
  loading: boolean;
  movie: MovieDetails | null;
  error: string | null;
}

let initialState: RandomMovieState = {
  loading: false,
  movie: null,
  error: null,
};

const movieDetailSlice = createSlice({
  name: 'MovieDetail',
  initialState: initialState,
  reducers: {
    setMovieDetail: (state, action: PayloadAction<MovieDetails>) => {
      state.movie = action.payload;
    },
    setMovieDetailLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMovieDetailError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {setMovieDetail, setMovieDetailLoading, setMovieDetailError} =
  movieDetailSlice.actions;
export default movieDetailSlice.reducer;
