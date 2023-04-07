import React from 'react';
import {View, FlatList} from 'react-native';

import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
  const itemSeparetor = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalmargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={() => itemSeparetor()}
      />
    </View>
  );
};
