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
export const TransactionCard = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftCon}>
        <Image style={styles.img} source={appImages.fruitsImage} />
        <View style={styles.firstCon}>
          <TextComponent
            text={'Coca Cola'}
            family={appFonts.montserratMedium}
            size={14}
            color={colors.black}
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
        </View>
      </View>
      <View style={styles.rightCon}>
        <TextComponent
          text={'Payment confirmed'}
          family={appFonts.montserratMedium}
          size={10}
          color={colors.theme_color}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: WP('4'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightCon: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.theme_color,
    paddingHorizontal: WP('5'),
    paddingVertical: WP('2'),
  },
  leftCon: {
    flexDirection: 'row',
  },
  img: {
    height: 37,
    width: 37,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  firstCon: {
    marginLeft: 15,
    justifyContent: 'center',
  },

  priceCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
