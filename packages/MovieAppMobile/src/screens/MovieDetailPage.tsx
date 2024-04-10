import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PaddedView from '../components/PaddedView';
import {useAppSelector} from '../hooks/ReduxToolKitHooks';
import LoadingLabel from '../components/LoadingLabel';
import ErrorLabel from '../components/ErrorLabel';

const MovieDetailPage: React.FC = () => {
  const movieDetails = useAppSelector(state => state.MovieDetails.movie);
  const loading = useAppSelector(state => state.MovieDetails.loading);
  const error = useAppSelector(state => state.MovieDetails.error);
  return (
    <PaddedView>
      <ScrollView contentContainerStyle={styles.container}>
        {loading && <LoadingLabel />}
        {error && <ErrorLabel error={error} />}
        {movieDetails && (
          <View>
            {movieDetails?.poster ? (
              <Image
                source={{uri: movieDetails?.poster}}
                style={styles.movieImage}
              />
            ) : (
              <Image
                source={require('../assets/no-poster.jpeg')}
                style={styles.movieImage}
              />
            )}
          </View>
        )}

        {movieDetails && (
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{movieDetails.name}</Text>
            <Text style={styles.description}>{movieDetails.description}</Text>
            <Text style={styles.rating}>
              Rating: <Text style={styles.boldText}>{movieDetails.rating}</Text>
            </Text>
            <Text style={styles.sectionTitle}>Actors:</Text>
            {movieDetails.actors.map((actor, index) => (
              <Text key={index} style={styles.listItem}>
                {actor}
              </Text>
            ))}
            <Text style={styles.sectionTitle}>Keywords:</Text>
            {movieDetails.keywords.map((keyword, index) => (
              <Text key={index} style={styles.listItem}>
                {keyword}
              </Text>
            ))}
            <Text style={styles.sectionTitle}>Genres:</Text>
            {movieDetails.genre.map((genre, index) => (
              <Text key={index} style={styles.listItem}>
                {genre}
              </Text>
            ))}
            <Text style={styles.sectionTitle}>
              {movieDetails.totalReviews} Reviews:
            </Text>
            {movieDetails.featuredReviews.map((review, index) => (
              <View key={index}>
                <Text style={styles.listItem}>{review.summary}</Text>
                <Text style={styles.listItem}>{review.text}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </PaddedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  movieImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default MovieDetailPage;
