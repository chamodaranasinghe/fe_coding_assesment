/*
    This is the main page of the application. It will have a search bar on top, a list of all random movies in the beginning
    Onces user searches for a movie, it will show the search results. User can click on any movie to see the details of the movie.
*/

import React, {useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import PaddedView from '../components/PaddedView';
import useRandomMovies from '../hooks/useRandomMovies';
import RandomMovieList from '../components/RandomMovieList';
import SearchMovieList from '../components/SearchMovieList';
import {useAppSelector} from '../hooks/ReduxToolKitHooks';

const HomePage: React.FC = () => {
  const {randomMovies} = useRandomMovies();
  const searchIsActive = useAppSelector(state => state.SearchMovies.isActive);

  useEffect(() => {
    randomMovies();
    //need to load on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PaddedView>
      <SearchBar />

      {searchIsActive ? <SearchMovieList /> : <RandomMovieList />}
    </PaddedView>
  );
};

export default HomePage;
