import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {GenericStyles} from '../styles/GenericStyles';
import {colors} from '../../utilities';

const OTPInput = function (props) {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    refCallback,
    ...remainingProps
  } = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {LeftComponent}
      <TextInput
        {...remainingProps}
        style={[styles.textInputStyle, {flex: 1}, style]}
        ref={refCallback}
      />
      {RightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderColor: colors.grey,
    borderBottomWidth: 1,
    padding: 8,
  },
  textInputStyle: {
    padding: 0,
  },
});

OTPInput.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

export default OTPInput;
