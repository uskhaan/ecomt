import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const DeliveryAddressCard = ({mT}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      <TextComponent
        family={appFonts.montserratSemiBold}
        color={colors.black}
        text={'Delivery Address'}
        size={16}
        mL={WP('4')}
      />
      <View style={styles.lineStyle} />
      <TextComponent
        family={appFonts.montserratMedium}
        color={colors.grey8}
        text={'Ecomt team'}
        size={14}
        mL={WP('4')}
      />
      <TextComponent
        family={appFonts.montserratMedium}
        color={colors.grey6}
        text={'Flat Number 512, Eden Garden, Rewari'}
        size={12}
        mL={WP('4')}
        mT={10}
      />
      <View style={{flexDirection: 'row', marginLeft: WP('4'), marginTop: 10}}>
        <TextComponent
          family={appFonts.montserratMedium}
          color={colors.grey6}
          text={'Mobile:'}
          size={12}
        />
        <TextComponent
          family={appFonts.montserratMedium}
          color={colors.grey9}
          text={'9876543210'}
          size={12}
          mL={5}
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
  lineStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey7,
    marginVertical: 10,
  },
});
