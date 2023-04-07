import React from 'react';
import {Button, View, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <View style={styles.globalmargin}>
      <HeaderTitle title="Alert" />
      <Button title="Show Alert" onPress={() => showAlert()} />
    </View>
  );
};
