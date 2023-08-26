import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appFonts, colors, size} from '../../utilities';

export const AuthFooter = ({
  title,
  marginVertical,
  subtitle,
  onPress,
  h1Family,
  h1Size,
  h1color,
  h2Family,
  h2Size,
  h2color,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginVertical: marginVertical,
        },
      ]}>
      <Text
        style={[
          styles.h1,
          {fontFamily: h1Family, fontSize: h1Size, color: h1color},
        ]}>
        {title || ''}
        <Text
          onPress={onPress}
          style={[
            styles.h2,
            {fontFamily: h2Family, fontSize: h2Size, color: h2color},
          ]}>
          {subtitle}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  h1: {
    textAlign: 'center',
  },
  h2: {
    textAlign: 'center',
  },
});
