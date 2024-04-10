/*
This is loading label used throughout the app
*/

import React from 'react';

import {Text, StyleSheet} from 'react-native';

const LoadingLabel: React.FC = () => {
  return <Text style={styles.loadingLabel}>{'Loading..'}</Text>;
};

const styles = StyleSheet.create({
  loadingLabel: {
    color: 'blue',
    fontSize: 16,
  },
});

export default LoadingLabel;
