import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {WP, appFonts, appImages, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';
import {TouchableOpacity} from 'react-native';

export const ProductTitleCard = ({onPressFollow, mT}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      {onPressFollow ? (
        <View style={styles.lowerCon}>
          <View style={styles.storeCon}>
            <Image
              source={appImages.fruitsImage}
              style={styles.storeImgStyle}
            />
            <TextComponent
              size={14}
              family={appFonts.montserratMedium}
              color={colors.grey}
              text={'Tradly'}
              mL={5}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <TextComponent
              size={12}
              family={appFonts.montserratMedium}
              color={colors.white}
              text={'Follow'}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextComponent
            text={'Coca Cola'}
            family={appFonts.montserratBold}
            size={18}
            color={colors.grey}
          />

          <View style={styles.priceCon}>
            <TextComponent
              text={`$${'25'}`}
              family={appFonts.montserratBold}
              size={18}
              color={colors.theme_color}
            />

            <TextComponent
              text={`$${'50'}`}
              family={appFonts.montserratMedium}
              size={14}
              color={colors.grey}
              mL={5}
              textDec={'line-through'}
            />
            <TextComponent
              text={`${'50'}% Off`}
              family={appFonts.montserratMedium}
              size={14}
              color={colors.grey}
              mL={5}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: WP('5'),
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
    // shadowColor: colors.sh1,
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // activeOpacity: 0.7,
    // shadowOpacity: 0.25,
    // shadowRadius: 16,
    // elevation: 6,
  },

  priceCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  lowerCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeImgStyle: {
    height: 32,
    width: 32,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  storeCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('6'),
    paddingVertical: WP('1.2'),
    borderRadius: 24,
  },
});
