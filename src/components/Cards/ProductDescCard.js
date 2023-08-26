import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const ProductDescCard = ({mT}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      <TextComponent
        size={14}
        family={appFonts.montserratRegular}
        color={colors.grey}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis. Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In '
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: WP('7'),
    paddingHorizontal: WP('8'),
    backgroundColor: colors.white,
    borderRadius: 8,
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
});
