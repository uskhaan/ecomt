import React from 'react';
import {Image, View} from 'react-native';
import {AppButton, HomeHeader, TextComponent} from '../../../components';
import {
  WP,
  appFonts,
  appImages,
  colors,
  commonstyles,
} from '../../../utilities';
import styles from './styles';

const StoreProfile = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader title={'My Store'} search={false} />

      <Image source={appImages.storeImage} style={styles.image} />

      <TextComponent
        text={'You Dont Have a Store ?'}
        family={appFonts.montserratSemiBold}
        size={18}
        color={colors.black}
        tA={'center'}
        mV={WP('10')}
      />
      <AppButton
        title={'Create Store'}
        // onPress={() => {
        //   navigation?.navigate('WelcomeScreen2');
        // }}
        height={48}
        width={WP('60')}
      />
    </View>
  );
};

export default StoreProfile;
