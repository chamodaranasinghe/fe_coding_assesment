/*
This is error label used throughout the app
*/

import React from 'react';

import {Text, StyleSheet} from 'react-native';

type ErrorLabelProps = {error: string};

const ErrorLabel: React.FC<ErrorLabelProps> = ({error}) => {
  return <Text style={styles.errorLabel}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorLabel: {
    color: 'red',
    fontSize: 16,
  },
});

export default ErrorLabel;
