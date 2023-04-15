import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors, currentTheme},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalmargin}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity
        onPress={currentTheme === 'dark' ? setLightTheme : setDarkTheme}
        activeOpacity={0.8}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
          {currentTheme === 'dark' ? 'Light' : 'Dark'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
