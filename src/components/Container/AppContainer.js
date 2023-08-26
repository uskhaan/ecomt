import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors, WP } from "../../utilities";

export const AppContainer = ({
  children,
  bgColor = colors.w1,
  paddingHorizontal = WP("5"),
}) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <View
        style={[
          styles.contentContainer,
          { paddingHorizontal: paddingHorizontal },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP("5"),
  },
});
