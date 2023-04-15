import React, {useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Text,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalmargin}>
            <HeaderTitle title="Text Input" />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Input Name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Input Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              placeholderTextColor={dividerColor}
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subscribe</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Input Phone"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
            />
          </View>
          <View style={{height: 100}} />
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
