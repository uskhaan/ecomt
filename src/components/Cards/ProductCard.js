import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  HP,
  size,
  WP,
} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';
export const ProductCard = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={appImages.fruitsImage} style={styles.imgStyle} />
      <View style={styles.innerCon}>
        <TextComponent
          size={14}
          family={appFonts.montserratMedium}
          color={colors.grey3}
          text={'Fish'}
          tA={'left'}
        />
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
          <TextComponent
            size={14}
            family={appFonts.montserratSemiBold}
            color={colors.theme_color}
            text={`$${'25'}`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: HP('24'),
    // height: 200,
    width: WP('40'),
    borderRadius: 10,
    borderColor: colors.grey1,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  imgStyle: {
    height: WP('30'),
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  innerCon: {
    padding: WP('3'),
  },
  lowerCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  storeImgStyle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  storeCon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
