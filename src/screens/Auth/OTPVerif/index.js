import {Formik} from 'formik';
import React, {useState, useRef} from 'react';
import {Alert, Platform, StatusBar, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  LoginVs,
  WP,
  appFonts,
  appIcons,
  colors,
  commonstyles,
  loginFormFields,
  spacing,
} from '../../../utilities';
import styles from './styles';
import {
  AppButton,
  AppInput,
  AuthFooter,
  TextComponent,
} from '../../../components';
import {MyStatusBar} from '../../../components/Bar/MyStatusBar';
import OTPInput from '../../../components/Inputs/OTPInput';

const OTPVerif = ({navigation}) => {
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const isAndroid = Platform.OS === 'android';

  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        }
      }
    };
  };

  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  // Login Handler
  const onSubmit = async values => {
    onLogin(values);
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
            validationSchema={LoginVs}
            initialValues={loginFormFields}
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
                  text={'Phone Verification'}
                  family={appFonts.montserratMedium}
                  size={24}
                  tA={'center'}
                  mT={WP('30')}
                />
                <TextComponent
                  color={colors.white}
                  text={'Enter your OTP code here'}
                  family={appFonts.montserratRegular}
                  size={16}
                  tA={'center'}
                  mT={WP('7')}
                  mB={WP('20')}
                />

                <View
                  style={[
                    {flexDirection: 'row', alignItems: 'center', marginTop: 12},
                  ]}>
                  {[
                    firstTextInputRef,
                    secondTextInputRef,
                    thirdTextInputRef,
                    fourthTextInputRef,
                  ].map((textInputRef, index) => (
                    <OTPInput
                      containerStyle={[{flex: 1, marginRight: 12}]}
                      value={otpArray[index]}
                      onKeyPress={onOtpKeyPress(index)}
                      onChangeText={onOtpChange(index)}
                      keyboardType={'numeric'}
                      maxLength={1}
                      style={[styles.otpText, {textAlign: 'center'}]}
                      autoFocus={index === 0 ? true : undefined}
                      refCallback={refCallback(textInputRef)}
                      key={index}
                    />
                  ))}
                </View>
                <TextComponent
                  color={colors.white}
                  text={'Didn’t you received any code?'}
                  family={appFonts.montserratRegular}
                  size={18}
                  tA={'center'}
                  mT={WP('20')}
                />
                <TextComponent
                  color={colors.white}
                  text={'Resent new code'}
                  family={appFonts.montserratRegular}
                  size={18}
                  tA={'center'}
                  mT={WP('2')}
                  mB={WP('7')}
                />
                <View style={spacing.mt10}>
                  <AppButton
                    borderRadius={24}
                    bgColor={colors.white}
                    title={'Verify'}
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

export default OTPVerif;
