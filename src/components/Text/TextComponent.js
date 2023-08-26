import React from 'react';
import {StyleSheet, Text} from 'react-native';
export const TextComponent = ({
  family,
  size,
  color,
  mV,
  mH,
  mT,
  mB,
  mR,
  mL,
  tA,
  lHeight,
  text,
  maxWidth,
  textDec,
}) => (
  <Text
    style={{
      fontFamily: family,
      fontSize: size,
      color: color,
      marginVertical: mV,
      marginHorizontal: mH,
      lineHeight: lHeight,
      textAlign: tA,
      marginTop: mT,
      marginLeft: mL,
      marginRight: mR,
      marginBottom: mB,
      maxWidth: maxWidth,
      textDecorationLine: textDec,
    }}>
    {text}
  </Text>
);
const styles = StyleSheet.create({});
