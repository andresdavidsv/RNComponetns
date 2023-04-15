import {View, Text, SectionList} from 'react-native';
import React, {useContext} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Homes {
  home: string;
  data: string[];
}

const homes: Homes[] = [
  {
    home: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    home: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    home: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalmargin, flex: 1}}>
      <SectionList
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={`Homes: ${homes.length}`} />
        )}
        sections={homes}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.home} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
