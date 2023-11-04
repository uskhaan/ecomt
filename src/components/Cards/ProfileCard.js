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
export const ProfileCard = ({profileImg = false, onPressInvite}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCon}>
        <Image style={styles.profImg} source={appImages.fruitsImage} />
        <View style={styles.textCon}>
          <TextComponent
            size={14}
            family={appFonts.montserratBold}
            color={colors.white}
            text={'Ecomt Team'}
          />
          <TextComponent
            size={12}
            family={appFonts.montserratMedium}
            color={colors.white}
            text={'+1 9998887776'}
            mT={5}
          />
          <TextComponent
            size={12}
            family={appFonts.montserratMedium}
            color={colors.white}
            text={'info@ecomt.co'}
            mT={5}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: WP('65'),
    backgroundColor: colors.theme_color,
    paddingHorizontal: WP('4'),
  },
  profileCon: {
    flexDirection: 'row',
  },
  profImg: {
    height: 64,
    width: 64,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  textCon: {
    marginLeft: 10,
  },
});
