/*
This is the movie list item component
*/

import {MovieSummary} from '@assessment/datastore';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import useMovieDetails from '../hooks/useMovieDetails';

type MovieListItemProps = {
  summary: MovieSummary;
};

const MovieListItem: React.FC<MovieListItemProps> = ({summary}) => {
  const navigation = useNavigation();
  const {loadMovieDetails} = useMovieDetails(summary['#IMDB_ID']);
  const handlePress = () => {
    loadMovieDetails();
    navigation.navigate('MovieDetailPage' as never);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {summary['#IMG_POSTER'] ? (
          <Image
            source={{uri: summary['#IMG_POSTER'] ?? ''}}
            style={styles.thumbImage}
          />
        ) : (
          <Image
            source={require('../assets/no-poster.jpeg')}
            style={styles.thumbImage}
          />
        )}

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{summary['#TITLE']}</Text>
          <Text style={styles.year}>{summary['#YEAR']}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    height: 'auto',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  thumbImage: {
    width: 50,
    height: 70,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  year: {
    fontSize: 16,
    fontWeight: '200',
  },
});

export default MovieListItem;
