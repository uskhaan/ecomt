import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, appImages, colors} from '../../utilities';
import {Image} from 'react-native';
import {TextComponent} from '../Text/TextComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const AddressCard = ({noAddress, addLocation, mT, changeAddress}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      {noAddress && (
        <TouchableOpacity style={styles.addAddrCon}>
          <MaterialCommunityIcons
            name={'plus'}
            color={colors.black}
            size={15}
          />
          <TextComponent
            text={'Add New Address'}
            family={appFonts.montserratMedium}
            size={14}
            color={colors.black}
          />
        </TouchableOpacity>
      )}

      {addLocation && (
        <TouchableOpacity style={styles.addAddrCon}>
          <MaterialIcons name={'my-location'} color={colors.blue} size={20} />
          <TextComponent
            text={'Use current location'}
            family={appFonts.montserratMedium}
            size={16}
            color={colors.blue}
            mL={7}
          />
        </TouchableOpacity>
      )}

      {changeAddress && (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextComponent
            text={'Deliver to Ecomt Team, 75119\nKualalumpur, Malaysia'}
            family={appFonts.montserratMedium}
            size={14}
            color={colors.grey}
          />

          <TouchableOpacity style={styles.button}>
            <TextComponent
              size={12}
              family={appFonts.montserratMedium}
              color={colors.white}
              text={'Change'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: WP('4'),
    backgroundColor: colors.white,
    shadowColor: colors.sh1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  addAddrCon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('7'),
    paddingVertical: WP('1'),
    borderRadius: 24,
  },
});
