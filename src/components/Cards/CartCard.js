import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, appImages, colors} from '../../utilities';
import {Image} from 'react-native';
import {TextComponent} from '../Text/TextComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CartCard = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCon}>
        <Image style={styles.img} source={appImages.fruitsImage} />
        <View style={styles.firstCon}>
          <TextComponent
            text={'Coca Cola'}
            family={appFonts.montserratMedium}
            size={14}
            color={colors.grey}
          />

          <View style={styles.priceCon}>
            <TextComponent
              text={`$${'25'}`}
              family={appFonts.montserratBold}
              size={16}
              color={colors.theme_color}
            />

            <TextComponent
              text={`${'50'}% Off`}
              family={appFonts.montserratMedium}
              size={12}
              color={colors.grey}
              mL={5}
            />
          </View>
          <View
            style={{
              backgroundColor: colors.grey1,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 20,
              justifyContent: 'space-between',
              padding: 2,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.white,
                padding: WP('0.5'),
                borderRadius: 20,
              }}>
              <MaterialCommunityIcons
                name={'minus'}
                color={colors.black}
                size={15}
              />
            </TouchableOpacity>
            <TextComponent
              text={1}
              family={appFonts.montserratSemiBold}
              size={14}
              color={colors.black}
              mH={WP('2')}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.theme_color,
                padding: WP('0.5'),
                borderRadius: 20,
              }}>
              <MaterialCommunityIcons
                name={'plus'}
                color={colors.white}
                size={15}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.lineStyle} />

      <TouchableOpacity>
        <TextComponent
          text={'Remove'}
          family={appFonts.montserratMedium}
          size={14}
          color={colors.grey}
          tA={'center'}
          mV={WP('3')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: WP('8'),
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

  leftCon: {
    flexDirection: 'row',
    paddingHorizontal: WP('4'),
  },
  img: {
    height: 102,
    width: 102,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  firstCon: {
    marginLeft: 15,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  priceCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey4,
    marginTop: 10,
  },
});
