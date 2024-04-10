import {MovieSummary} from '@assessment/datastore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RandomMovieState {
  list: MovieSummary[];
}

let initialState: RandomMovieState = {
  list: [],
};

const randomMovieSlice = createSlice({
  name: 'RandomMovies',
  initialState: initialState,
  reducers: {
    setRandomMovies: (state, action: PayloadAction<MovieSummary[]>) => {
      state.list = action.payload;
    },
  },
});

export const {setRandomMovies} = randomMovieSlice.actions;
export default randomMovieSlice.reducer;
