import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appFonts, colors, size} from '../../utilities';
import {TextInput} from 'react-native';
export const FloatingLabelInp = ({
  secureTextEntry,
  value,
  onChangeText,
  touched,
  error,
  label,
  placeholder,
  keyboardType,
  mT,
}) => {
  const [secure, setSecure] = useState(secureTextEntry);

  return (
    <View style={{marginTop: mT}}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        selectionColor={colors.black}
        keyboardType={keyboardType}
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
  errorStyle: {
    fontSize: size.tiny,
    color: 'red',
    padding: 5,
    textAlign: 'left',
  },
  labelText: {
    fontSize: 14,
    color: colors.grey,
    // marginTop: 20,
    fontFamily: appFonts.montserratRegular,
  },
  input: {
    height: 40,
    borderColor: colors.grey5,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
