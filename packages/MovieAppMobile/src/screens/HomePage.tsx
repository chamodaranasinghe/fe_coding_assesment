/*
    This is the main page of the application. It will have a search bar on top, a list of all random movies in the beginning
    Onces user searches for a movie, it will show the search results. User can click on any movie to see the details of the movie.
*/

import React from 'react';
import SearchBar from '../components/SearchBar';
import PaddedView from '../components/PaddedView';

const HomePage: React.FC = () => {
  return (
    <PaddedView>
      <SearchBar />
    </PaddedView>
  );
};

export default HomePage;
