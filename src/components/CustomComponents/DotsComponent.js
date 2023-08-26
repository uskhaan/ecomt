import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export const DotsComponent = ({color1, color2, color3}) => (
  <View style={styles.mainCon}>
    <View style={[styles.ellipse, {backgroundColor: color1}]}></View>
    <View style={[styles.ellipse, {backgroundColor: color2}]}></View>
    <View style={[styles.ellipse, {backgroundColor: color3}]}></View>
  </View>
);
const styles = StyleSheet.create({
  mainCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipse: {
    height: 12,
    width: 12,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});
