import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../utilities";

export const SocialButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 65,
    width: 70,
    borderWidth: 0.5,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderColor: colors.theme_color,
  },
});
