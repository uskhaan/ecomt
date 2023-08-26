import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, colors} from '../../utilities';
import {AppButton} from '../../components';

export const BotTabCard = ({title}) => {
  return (
    <View style={styles.container}>
      <AppButton title={title} width={'90%'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
    paddingTop: WP('4'),
    alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: colors.sh1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
    height: '100%',
  },
});
