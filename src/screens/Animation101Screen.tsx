import React, {useContext} from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {opacity, postion, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          backgroundColor: colors.primary,
          transform: [{translateY: postion}],
        }}
      />
      <Button
        title="FadeIn"
        color={colors.primary}
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button color={colors.primary} title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
