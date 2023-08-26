import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const PayOptionsComponent = ({label, selected, onChange, mT}) => {
  const handleClick = () => {
    onChange();
  };

  return (
    <View style={[styles.container, {marginTop: mT}]}>
      <View style={styles.buttonCon}>
        <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
          {selected ? (
            <MaterialIcons
              name="radio-button-checked"
              size={20}
              color={colors.theme_color}
            />
          ) : (
            <MaterialIcons
              name="radio-button-unchecked"
              size={20}
              color={colors.grey1}
            />
          )}
        </TouchableOpacity>
        <TextComponent
          text={label}
          family={appFonts.montserratSemiBold}
          size={16}
          color={colors.grey}
          mL={10}
        />
      </View>
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  buttonCon: {
    flexDirection: 'row',
    marginHorizontal: WP('4'),
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey1,
    marginTop: 10,
  },
});
