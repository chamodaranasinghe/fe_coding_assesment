/*
    Movie search bar in react native
*/

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useAppDispatch} from '../hooks/ReduxToolKitHooks';
import {
  setSearchIsActive,
  setSearchMovies,
  setSearchMoviesError,
  setSearchMoviesLoading,
} from '../reducers/SearchMovieReducer';
import {searchMovies} from '@assessment/datastore';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const search = async (searchText: string) => {
    dispatch(setSearchMoviesLoading(true));
    dispatch(setSearchMoviesError(null));
    dispatch(setSearchIsActive(true));
    try {
      const searchedMovies = await searchMovies(searchText);
      dispatch(setSearchMovies(searchedMovies));
      dispatch(setSearchMoviesError(null));
    } catch (error) {
      dispatch(setSearchMoviesError('Error searching movies'));
      dispatch(setSearchMovies([]));
    } finally {
      dispatch(setSearchMoviesLoading(false));
    }
  };

  const handleSearch = (e: {nativeEvent: {text: string}}) => {
    search(e.nativeEvent.text);
  };

  return (
    <View>
      <TextInput
        keyboardType="web-search"
        onSubmitEditing={handleSearch}
        style={styles.searchBar}
        placeholder="Search for a movie"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
