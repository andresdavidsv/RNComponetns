import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageProps,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageProps>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoad={() => finishLoading()}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};
