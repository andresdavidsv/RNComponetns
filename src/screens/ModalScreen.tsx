import React, {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';

export const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.globalmargin}>
      <HeaderTitle title="ModalScreen" />
      <Button title="Open modal" onPress={() => setModalVisible(true)} />
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{fontSize: 20, fontWeight: '300', marginBottom: 20}}>
              Body Modal
            </Text>
            <Button
              title="Close modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
