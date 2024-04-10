/*
    This shows the ransom movies list
*/

import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../hooks/ReduxToolKitHooks';
import ErrorLabel from './ErrorLabel';
import LoadingLabel from './LoadingLabel';
import MovieListItem from './MovieListItem';

const SearchMovieList: React.FC = () => {
  const searchedMovies = useAppSelector(state => state.SearchMovies.list);
  const isLoading = useAppSelector(state => state.SearchMovies.loading);
  const error = useAppSelector(state => state.SearchMovies.error);
  return (
    <View style={styles.container}>
      {isLoading && <LoadingLabel />}
      {error && <ErrorLabel error={error} />}
      <FlatList
        contentContainerStyle={styles.list}
        data={searchedMovies}
        keyExtractor={item => item['#IMDB_ID']}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              /* Handle movie press */
            }}>
            <MovieListItem summary={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  list: {
    paddingBottom: 110,
  },
});

export default SearchMovieList;
