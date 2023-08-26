import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  CartCard,
  DeliveryAddressCard,
  HomeHeader,
  TextComponent,
  TrackOrderComponent,
} from '../../../../components';
import {
  WP,
  appFonts,
  appImages,
  colors,
  commonstyles,
  spacing,
} from '../../../../utilities';
import styles from './styles';

const OrderDetails = () => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader
        title={'Order Details'}
        onPressCross={() => console.log('Pressed Close')}
      />

      <ScrollView
        contentContainerStyle={spacing.pb10}
        showsVerticalScrollIndicator={false}>
        <View style={styles.doneCon}>
          <Image style={styles.doneImg} source={appImages.doneImage} />

          <TextComponent
            color={colors.black}
            text={'Thanks for Order'}
            family={appFonts.montserratBold}
            size={24}
            mT={WP('4')}
          />
        </View>

        <TrackOrderComponent />
        <DeliveryAddressCard mT={WP('4')} />
        <TouchableOpacity style={{marginVertical: WP('4')}}>
          <TextComponent
            color={colors.black}
            text={'Back to Home'}
            family={appFonts.montserratSemiBold}
            size={14}
            tA={'center'}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
