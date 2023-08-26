import React from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  WP,
  appFonts,
  colors,
  commonstyles,
  spacing,
} from '../../../../utilities';
import {
  AddressCard,
  AppHeader,
  BotTabCard,
  CartCard,
  FloatingLabelInput,
  PriceCard,
} from '../../../../components';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import {FloatingLabelInp} from '../../../../components/Inputs/FloatingLabelInp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddNewAddress = () => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Add a new address'} />

      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? null : 'padding'}
        style={{flex: 1}}>
        <View style={[commonstyles.main]}>
          <AddressCard addLocation={true} />
          <ScrollView
            contentContainerStyle={spacing.pb10}
            showsVerticalScrollIndicator={false}
            style={[commonstyles.contentContainer()]}>
            <FloatingLabelInp
              mT={WP('10')}
              name="email"
              // value={values.email}
              // error={errors.email}
              // touched={touched.email}
              // onChangeText={handleChange('email')}
              keyboardType={'email-address'}
              label={'Email'}
              placeholder={'Enter Email'}
            />
            <FloatingLabelInp
              mT={WP('4')}
              name="email"
              // value={values.email}
              // error={errors.email}
              // touched={touched.email}
              // onChangeText={handleChange('email')}
              keyboardType={'phone-pad'}
              label={'Phone'}
              placeholder={'Enter Phone'}
            />
            <FloatingLabelInp
              mT={WP('4')}
              name="email"
              // value={values.email}
              // error={errors.email}
              // touched={touched.email}
              // onChangeText={handleChange('email')}
              label={'Street Address'}
              placeholder={'Enter Street Address'}
            />
            <FloatingLabelInp
              mT={WP('4')}
              name="email"
              // value={values.email}
              // error={errors.email}
              // touched={touched.email}
              // onChangeText={handleChange('email')}
              label={'City'}
              placeholder={'Enter City'}
            />
            <FloatingLabelInp
              mT={WP('4')}
              name="email"
              // value={values.email}
              // error={errors.email}
              // touched={touched.email}
              // onChangeText={handleChange('email')}
              label={'State'}
              placeholder={'Enter State'}
            />
            <FloatingLabelInp
              mT={WP('4')}
              name="email"
              // value={values.email}
              // error={errors.email}
              // touched={touched.email}
              // onChangeText={handleChange('email')}
              keyboardType={'number-pad'}
              label={'Zipcode'}
              placeholder={'Enter Zipcode'}
            />
          </ScrollView>
        </View>
        <View style={styles.botTabCon}>
          <BotTabCard title={'Save'} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddNewAddress;
