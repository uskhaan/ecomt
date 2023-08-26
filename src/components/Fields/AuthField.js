import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appFonts, colors, size } from "../../utilities";

export const AuthField = ({
  title,
  fontFamily = appFonts.poppinMedium,
  color = colors.b2,
  fontSize = size.h6,
  marginVertical,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginVertical: marginVertical,
        },
      ]}
    >
      <Text
        style={[
          styles.h1,
          { fontFamily: fontFamily, fontSize: fontSize, color: color },
        ]}
      >
        {title || ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  h1: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.h6,
    color: colors.b2,
  },
});
