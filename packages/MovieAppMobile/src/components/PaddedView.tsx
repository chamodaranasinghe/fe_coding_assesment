/*
    This is a padded view component which will add padding to the children components
*/

import React from 'react';

import {View, StyleSheet} from 'react-native';

type PaddedViewProps = {children: React.ReactNode};

const PaddedView: React.FC<PaddedViewProps> = ({children}) => {
  return <View style={styles.paddedView}>{children}</View>;
};

const styles = StyleSheet.create({
  paddedView: {
    padding: 10,
  },
});

export default PaddedView;
