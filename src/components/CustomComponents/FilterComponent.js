import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, appIcons, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';
export const FilterComponent = ({}) => (
  <View style={styles.searchCon}>
    <TouchableOpacity style={styles.button}>
      <Image style={styles.symbol} source={appIcons.sort} />
      <TextComponent
        text={'Sort by'}
        family={appFonts.montserratMedium}
        size={14}
        color={colors.white}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Image style={styles.symbol} source={appIcons.locBlip} />
      <TextComponent
        text={'Location'}
        family={appFonts.montserratMedium}
        size={14}
        color={colors.white}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Image style={styles.symbol} source={appIcons.category} />
      <TextComponent
        text={'Category'}
        family={appFonts.montserratMedium}
        size={14}
        color={colors.white}
      />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  searchCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: WP('1'),
    paddingVertical: WP('2'),
    borderWidth: 1,
    borderColor: colors.white,
    width: WP('85') / 3,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  symbol: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    tintColor: colors.white,
    marginRight: 5,
  },
});
