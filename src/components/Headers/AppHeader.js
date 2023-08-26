import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, appIcons, appImages, colors, size} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {TextComponent} from '../Text/TextComponent';
import {SearchInput} from '../Inputs/SearchInput';
import {FilterComponent} from '../../components';

export const AppHeaderFun = ({title, onPressBack, onPressSearch, filters}) => {
  const navigation = useNavigation();
  return (
    <View>
      <MyStatusBar
        backgroundColor={colors.theme_color}
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <View style={styles.upperCon}>
          <TouchableOpacity
            onPress={onPressBack ? onPressBack : () => navigation.goBack()}>
            <Ionicons
              color={colors.white}
              style={{}}
              name={'arrow-back'}
              size={30}
            />
          </TouchableOpacity>
          <TextComponent
            text={title}
            family={appFonts.montserratBold}
            size={24}
            color={colors.white}
          />
          {onPressSearch ? (
            <TouchableOpacity>
              <Image style={styles.icon} source={appIcons.searchGrey} />
            </TouchableOpacity>
          ) : (
            <View style={styles.spacer} />
          )}
        </View>

        {filters && (
          <View style={styles.filterCon}>
            <FilterComponent />
          </View>
        )}
      </View>
    </View>
  );
};
export const AppHeader = React.memo(AppHeaderFun);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme_color,
    paddingHorizontal: WP('4'),
    paddingTop: WP('2'),
    paddingBottom: WP('5'),
  },
  upperCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  spacer: {height: 25, width: 25},
  filterCon: {marginTop: WP('10')},
});
