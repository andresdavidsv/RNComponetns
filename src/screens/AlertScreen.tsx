import React from 'react';
import {Button, View, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';
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
  const showPrompt = () => {
    // Alert.prompt(
    //   'Are you ok?',
    //   'These actions are irreversible',
    //   (value: string) => console.log({value}),
    //   'plain-text',
    //   'Hello World',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalmargin}>
      <HeaderTitle title="Alert" />
      <View style={{height: 10}} />
      <Button title="Show Alert" onPress={() => showAlert()} />
      <Button title="Show Prompt" onPress={() => showPrompt()} />
    </View>
  );
};
