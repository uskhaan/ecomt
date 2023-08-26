import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, appImages, colors} from '../../utilities';
import {Image} from 'react-native';
import {TextComponent} from '../Text/TextComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const PriceCard = ({title, mT}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      <View style={styles.firstCon}>
        <TextComponent
          text={'Price Details'}
          family={appFonts.montserratSemiBold}
          size={18}
          color={colors.black}
        />
      </View>
      <View style={[styles.priceCon, {marginTop: WP('5')}]}>
        <TextComponent
          text={`Price (${1} item)`}
          family={appFonts.montserratMedium}
          size={14}
          color={colors.black}
        />
        <TextComponent
          text={`$${25}`}
          family={appFonts.montserratMedium}
          size={14}
          color={colors.black}
        />
      </View>

      <View style={[styles.priceCon, , {marginTop: WP('3')}]}>
        <TextComponent
          text={`Delivery Fee`}
          family={appFonts.montserratMedium}
          size={14}
          color={colors.black}
        />
        <TextComponent
          text={`info`}
          family={appFonts.montserratMedium}
          size={14}
          color={colors.black}
        />
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.priceCon}>
        <TextComponent
          text={'Total Amount'}
          family={appFonts.montserratSemiBold}
          size={18}
          color={colors.black}
        />
        <TextComponent
          text={`$${25}`}
          family={appFonts.montserratSemiBold}
          size={18}
          color={colors.black}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: WP('4'),
    backgroundColor: colors.white,
    shadowColor: colors.sh1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },

  priceCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: WP('2'),
    paddingHorizontal: WP('4'),
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey4,
    marginTop: 10,
  },
  firstCon: {
    paddingHorizontal: WP('4'),
  },
});
