import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {appFonts, appIcons, colors, size, WP} from '../../utilities';
export const AppInput = ({
  multiline,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
  onBlur,
  blurOnSubmit,
  disableFullscreenUI,
  autoCapitalize,
  onSubmitEditing,
  returnKeyType,
  touched,
  error,
  maxLength,
  editable,
  rightIcon,
  rightText,
  numberofLines,
  onPressIn,
  onPressRighIco,
  width,
  label,
  name,
  bgColor,
  outlineColor,
  activeOutlineColor,
  height,
  bRadius,
  mode,
  label1,
  pV,
  shadowColor,
  activeOpacity,
  shadowOpacity,
  shadowRadius,
  elevation,
  selectionColor,
}) => {
  const [secure, setSecure] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        scrollEnabled={value?.length > 30 ? true : false}
        style={[
          styles.inputStyle,
          {
            width: width,
            backgroundColor: bgColor || colors.white,
            height: height,
            borderRadius: bRadius ? bRadius : 50,
            paddingVertical: pV,
            shadowColor: shadowColor || colors.sh1,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            activeOpacity: activeOpacity,
            shadowOpacity: shadowOpacity,
            shadowRadius: shadowRadius,
            elevation: elevation,
            fontSize: size.normal,
            // justifyContent: 'center',
            color: colors.white,
            fontFamily: appFonts.montserratRegular,
          },
        ]}
        label={label1}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        placeholderStyle={{
          fontSize: size.normal,
          justifyContent: 'center',
          color: colors.white,
          fontFamily: appFonts.montserratRegular,
        }}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        name={name}
        value={value}
        onBlur={onBlur}
        blurOnSubmit={blurOnSubmit}
        disableFullscreenUI={disableFullscreenUI}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        editable={editable}
        maxLength={maxLength}
        mode={mode || 'outlined'}
        outlineColor={outlineColor || colors.white}
        activeOutlineColor={activeOutlineColor || colors.white}
        theme={{
          roundness: bRadius || 24,
          colors: {},
          fonts: {},
        }}
        selectionColor={selectionColor}
        textColor={colors.white}
        dense={true}
        onPressIn={onPressIn}
        right={
          rightIcon && (
            <TextInput.Icon
              onPressIn={onPressRighIco}
              icon={
                !secureTextEntry
                  ? rightIcon
                  : () => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setSecure(!secure);
                          }}>
                          <Image
                            source={
                              secure ? appIcons.showIcon : appIcons.hideIcon
                            }
                            style={styles.rightIcon}
                          />
                        </TouchableOpacity>
                      );
                    }
              }
            />
          )
        }
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
    marginVertical: WP('1'),
  },

  inputStyle: {},

  errorStyle: {
    fontSize: size.tiny,
    color: colors.white,
    padding: 5,
    textAlign: 'left',
  },
  labelText: {
    fontSize: size.small,
    color: colors.b1,
    marginTop: 20,
    fontFamily: appFonts.poppinRegular,
  },
  rightIcon: {
    height: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: colors.g5,
  },
});
