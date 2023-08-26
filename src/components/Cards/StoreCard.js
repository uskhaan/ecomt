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

export const StoreCard = ({profileImg = false, onPressInvite}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={appImages.fruitsImage} style={styles.imgStyle} />
      <View style={styles.innerCon}>
        <View style={styles.storeCon}>
          <Image source={appImages.fruitsImage} style={styles.storeImgStyle} />
        </View>
        <TextComponent
          size={14}
          family={appFonts.montserratMedium}
          color={colors.grey3}
          text={'Tradly Store'}
          mT={WP('2')}
          mB={WP('3')}
        />
        <TouchableOpacity style={styles.button}>
          <TextComponent
            size={12}
            family={appFonts.montserratMedium}
            color={colors.white}
            text={'Follow'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('40'),
    borderRadius: 10,
    borderColor: colors.grey1,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  imgStyle: {
    height: WP('20'),
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  innerCon: {
    paddingHorizontal: WP('3'),
    paddingBottom: WP('3'),
    alignItems: 'center',
  },
  storeCon: {
    position: 'relative',
    marginTop: -32,
  },
  storeImgStyle: {
    height: 64,
    width: 64,
    borderRadius: 50,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.white,
  },
  button: {
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: WP('1'),
    paddingHorizontal: WP('5'),
    borderRadius: 24,
  },
});
