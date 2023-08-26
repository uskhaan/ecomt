import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, appIcons, appImages, colors} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {FilterComponent} from '../CustomComponents/FilterComponent';
import {SearchInput} from '../Inputs/SearchInput';
import {TextComponent} from '../Text/TextComponent';

export const HomeHeaderFun = ({title, filters, search, onPressCross}) => {
  const navigation = useNavigation();
  return (
    <View>
      <MyStatusBar
        backgroundColor={colors.theme_color}
        barStyle={'light-content'}
      />
      <View
        style={[
          styles.container,
          {paddingVertical: search ? WP('2') : WP('7')},
        ]}>
        <View style={styles.upperCon}>
          <TextComponent
            text={title}
            family={appFonts.montserratBold}
            size={24}
            color={colors.white}
          />
          {onPressCross ? (
            <TouchableOpacity onPress={onPressCross}>
              <Image source={appIcons.close} style={[styles.icon]} />
            </TouchableOpacity>
          ) : (
            <View style={styles.iconCon}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Wishlist');
                }}>
                <Image source={appIcons.heart} style={styles.icon}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={appIcons.cart}
                  style={[styles.icon, {marginLeft: 20}]}></Image>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {search && (
          <View style={styles.searchCon}>
            <SearchInput />
          </View>
        )}

        {filters && (
          <View style={styles.filterCon}>
            <FilterComponent />
          </View>
        )}
      </View>
    </View>
  );
};
export const HomeHeader = React.memo(HomeHeaderFun);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme_color,
    paddingHorizontal: WP('4'),
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
  },
  iconCon: {
    flexDirection: 'row',
  },
  searchCon: {
    marginTop: WP('2'),
  },
  filterCon: {marginTop: WP('3')},
});
