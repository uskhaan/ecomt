import React from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';
import {WP, colors, commonstyles, spacing} from '../../../../utilities';
import {
  AddressCard,
  AppHeader,
  BotTabCard,
  CartCard,
  PriceCard,
} from '../../../../components';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';

const MyCart = () => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'My Cart'} noAddress={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? null : 'padding'}
        style={{flex: 1}}>
        <View style={[commonstyles.main]}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            style={[]}
            contentContainerStyle={styles.itemContainerCon}
            horizontal={false}
            renderItem={({item, index}) => {
              return <CartCard />;
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={<View style={styles.itemSeparator} />}
            ListFooterComponent={<PriceCard />}
            ListFooterComponentStyle={styles.listFooter}
            ListHeaderComponent={<AddressCard changeAddress={true} />}
            ListHeaderComponentStyle={styles.listHeader}
          />
        </View>
        <View style={styles.botTabCon}>
          <BotTabCard title={'Continue to Payment'} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MyCart;
