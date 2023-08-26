import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {appFonts, colors, size} from '../../utilities';

export const AppButton = ({
  leftIcon,
  title,
  onPress,
  bgColor = colors.theme_color,
  icon,
  shadowColor,
  height,
  width,
  image,
  marginVertical,
  borderRadius,
  titleColor = colors.white,
  titleFamily,
  titleSize,
  marginTop,
  borderWidth = 0,
  borderColor,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,

        {
          backgroundColor: bgColor,
          shadowColor: shadowColor,
          width: width || '100%',
          height: height || 48,
          marginVertical: marginVertical || 0,
          borderRadius: borderRadius || 24,
          marginTop: marginTop || 0,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      {loading ? (
        <SkypeIndicator size={25} color={colors.w1} />
      ) : (
        <>
          {leftIcon && (
            <FontAwesome style={{marginRight: 15}} name={leftIcon} size={25} />
          )}

          <Text
            style={[
              styles.title,
              {
                color: titleColor,
                fontSize: titleSize || 18,
                fontFamily: titleFamily || appFonts.montserratSemiBold,
              },
            ]}>
            {title}
          </Text>
          {image && <Image source={icon} style={[styles.iconStyle]} />}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    shadowColor: colors.theme_color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  title: {
    letterSpacing: 1,
  },
  iconStyle: {
    marginLeft: 10,
    height: 12,
    width: 12,
  },
  iconStyle1: {
    marginRight: 10,
    resizeMode: 'contain',
  },
});
