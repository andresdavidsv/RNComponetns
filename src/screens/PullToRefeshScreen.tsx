import React, {useContext, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefeshScreen = () => {
  const {
    theme: {colors, dividerColor, dark},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Finish');
      setRefreshing(false);
      setData('Hello World');
    }, 1500);
  };
  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          title="Refreshing"
          tintColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.globalmargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
