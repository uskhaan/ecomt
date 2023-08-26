import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AppButton, AppInput, TextComponent} from '../../../components';
import {MyStatusBar} from '../../../components/Bar/MyStatusBar';
import {
  WP,
  appFonts,
  colors,
  commonstyles,
  sendOTPFormFields,
  sendOTPVS,
  spacing,
} from '../../../utilities';
import styles from './styles';

const SendOTP = ({navigation}) => {
  // Login Handler
  const onSubmit = async values => {
    // onLogin(values);
  };

  return (
    <View style={commonstyles.main}>
      <MyStatusBar
        backgroundColor={colors.theme_color}
        barStyle={'light-content'}
      />
      <View style={commonstyles.contentContainer(colors.theme_color)}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Formik
            validationSchema={sendOTPVS}
            initialValues={sendOTPFormFields}
            onSubmit={values => {
              onSubmit(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <View style={styles.formikInner}>
                <TextComponent
                  color={colors.white}
                  text={'Verify your phone number'}
                  family={appFonts.montserratMedium}
                  size={24}
                  tA={'center'}
                  mT={WP('30')}
                />
                <TextComponent
                  color={colors.white}
                  text={'We have sent you an SMS with a code to\nenter number'}
                  family={appFonts.montserratRegular}
                  size={16}
                  tA={'center'}
                  mT={WP('10')}
                  mB={WP('5')}
                />

                <AppInput
                  name="phone"
                  value={values.phone}
                  error={errors.phone}
                  touched={touched.phone}
                  onChangeText={handleChange('phone')}
                  placeholder={'Mobile Number'}
                  bgColor={colors.theme_color}
                  activeOutlineColor={colors.white}
                  outlineColor={colors.white}
                  keyboardType={'phone-pad'}
                  height={48}
                  placeholderTextColor={colors.white}
                />

                <View style={spacing.mt10}>
                  <AppButton
                    borderRadius={24}
                    bgColor={colors.white}
                    title={'Next'}
                    onPress={handleSubmit}
                    titleFamily={appFonts.montserratMedium}
                    titleSize={16}
                    titleColor={colors.theme_color}
                  />
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default SendOTP;
