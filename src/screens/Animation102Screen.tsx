import {View, StyleSheet} from 'react-native';
import React from 'react';

interface Props {}

export const Animation102Screen = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.purpleBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
