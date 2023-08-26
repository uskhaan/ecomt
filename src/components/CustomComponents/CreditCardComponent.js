import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CreditCard} from '../../components';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const CreditCardComponent = props => {
  return (
    <View style={[styles.container, {marginTop: props?.mT}]}>
      {props?.creditCardName ? (
        <View>
          <CreditCard />
          <View style={styles.bullets}></View>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            ...styles.addCardButton,
          }}>
          <MaterialCommunityIcons name={'plus'} color={colors.grey} size={25} />
          <TextComponent
            text={'Add Payment Method'}
            family={appFonts.montserratRegular}
            size={14}
            color={colors.grey}
            mT={25}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    padding: WP('10'),
  },

  bullets: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // display: 'flex',
    // justifyContent: 'flex-start',
    flexDirection: 'row',
    // paddingHorizontal: 10,
    // paddingTop: 5,
    alignSelf: 'center',
  },
  addCardButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.grey,
    padding: WP('10'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
