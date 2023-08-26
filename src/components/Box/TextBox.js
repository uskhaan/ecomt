import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { appFonts, colors, size, WP } from "../../utilities";

export const TextBox = ({
  onChangeText,
  value,
  placeholder,
  touched,
  blurOnSubmit,
  onBlur,
  onSubmitEditing,
  editable,
  keyboardType,
  error,
  height,
  conStyle,
  borderRadius,
  numberOfLines,
  borderColor,
  placeholderTextColor,
  bgColor,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: borderRadius,
          borderColor: borderColor,
          backgroundColor: bgColor,
        },
      ]}
    >
      <TextInput
        style={[styles.textarea, { height: height }]}
        onChangeText={onChangeText}
        value={value}
        maxLength={500}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || colors.g3}
        underlineColorAndroid={"transparent"}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        numberOfLines={numberOfLines || 12}
        multiline={true}
      />
      {touched && error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },

  textarea: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: appFonts.comfortaaLight,
    justifyContent: "flex-start",
    lineHeight: 21,
    textAlignVertical: "top",
  },

  errorStyle: {
    fontSize: size.xxxtiny,
    color: colors.error,
    padding: 5,
    textAlign: "right",
  },
});
