import React from "react";
import { Children } from "react";
import { StyleSheet, View } from "react-native";
import { SkypeIndicator } from "react-native-indicators";
import Modal from "react-native-modal";
import { colors } from "../../utilities";

export const Loader = ({ loading, children }) => {
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={loading}
      hasBackdrop={false}
      statusBarTranslucent
      style={styles.container}
      coverScreen={true}
    >
      <SkypeIndicator color={colors.theme_color} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    backgroundColor: colors.w1,
  },
});
