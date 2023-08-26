import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const ProductDetailCard = ({
  mT,
  title,
  title1,
  title2,
  title3,
  title4,
  desc1,
  desc2,
  desc3,
  desc4,
}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      <TextComponent
        size={18}
        family={appFonts.montserratSemiBold}
        color={colors.black}
        text={title}
      />
      <View style={styles.innerCon}>
        {title1 && (
          <View style={styles.textCon}>
            <View style={styles.innerTextCon}>
              <TextComponent
                size={14}
                family={appFonts.montserratRegular}
                color={colors.grey}
                text={title1}
              />
            </View>
            <View style={styles.descTextCon}>
              <TextComponent
                size={14}
                family={appFonts.montserratRegular}
                color={colors.black}
                text={desc1}
                mL={WP('4')}
              />
            </View>
          </View>
        )}

        {title2 && (
          <View style={styles.textCon}>
            <View style={styles.innerTextCon}>
              <TextComponent
                size={14}
                family={appFonts.montserratRegular}
                color={colors.grey}
                text={title2}
              />
            </View>
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.black}
              text={desc2}
              mL={WP('4')}
            />
          </View>
        )}

        {title3 && (
          <View style={styles.textCon}>
            <View style={styles.innerTextCon}>
              <TextComponent
                size={14}
                family={appFonts.montserratRegular}
                color={colors.grey}
                text={title3}
              />
            </View>
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.black}
              text={desc3}
              mL={WP('4')}
            />
          </View>
        )}

        {title4 && (
          <View style={styles.textCon}>
            <View style={styles.innerTextCon}>
              <TextComponent
                size={14}
                family={appFonts.montserratRegular}
                color={colors.grey}
                text={title4}
              />
            </View>
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.black}
              text={desc4}
              mL={WP('4')}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: WP('4'),
    paddingBottom: WP('8'),
    paddingLeft: WP('8'),
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
  textCon: {
    flexDirection: 'row',
    marginTop: WP('4'),
  },
  innerTextCon: {width: WP('35')},
  descTextCon: {width: WP('50')},
  innerCon: {
    marginTop: WP('4'),
  },
});
