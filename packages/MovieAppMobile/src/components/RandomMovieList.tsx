/*
    This shows the ransom movies list
*/

import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../hooks/ReduxToolKitHooks';
import ErrorLabel from './ErrorLabel';
import LoadingLabel from './LoadingLabel';
import MovieListItem from './MovieListItem';

const RandomMovieList: React.FC = () => {
  const randomMovies = useAppSelector(state => state.RandomMovies.list);
  const isLoading = useAppSelector(state => state.RandomMovies.loading);
  const error = useAppSelector(state => state.RandomMovies.error);
  return (
    <View style={styles.container}>
      {isLoading && <LoadingLabel />}
      {error && <ErrorLabel error={error} />}
      <FlatList
        contentContainerStyle={styles.list}
        data={randomMovies}
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

export default RandomMovieList;
