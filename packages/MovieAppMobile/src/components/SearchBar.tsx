/*
    Movie search bar in react native
*/

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View>
      <TextInput style={styles.searchBar} placeholder="Search for a movie" />
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
