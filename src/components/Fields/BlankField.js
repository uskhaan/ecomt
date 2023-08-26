import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { colors, size } from "../../utilities";

const BlankField = ({ title, btnText, showBtn, onPress }) => {
  const { userInfo } = useSelector((state) => state?.auth);
  return (
    <View style={style.textContainer}>
      <Text style={style.h1}>{title} </Text>
      {!userInfo && (
        <TouchableOpacity onPress={onPress} style={style.btnConatiner}>
          <Text style={style.btnText}>{btnText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BlankField;

const style = StyleSheet.create({
  btnConatiner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.theme_color,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  btnText: {
    fontSize: size.xsmall,
    color: colors.w1,
  },
  h1: {
    fontSize: 20,
    color: colors.b1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
