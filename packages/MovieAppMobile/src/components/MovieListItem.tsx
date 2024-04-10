/*
This is the movie list item component
*/

import {MovieSummary} from '@assessment/datastore';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

type MovieListItemProps = {
  summary: MovieSummary;
};

const MovieListItem: React.FC<MovieListItemProps> = ({summary}) => {
  return (
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
