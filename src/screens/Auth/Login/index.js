import {Formik} from 'formik';
import React, {useState} from 'react';
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

const Login = ({navigation}) => {
  // Login Handler
  const onSubmit = async values => {
    navigation?.replace('App');
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
                  text={'Welcome to Ecomt'}
                  family={appFonts.montserratMedium}
                  size={24}
                  tA={'center'}
                  mT={WP('30')}
                />
                <TextComponent
                  color={colors.white}
                  text={'Login to your account'}
                  family={appFonts.montserratRegular}
                  size={16}
                  tA={'center'}
                  mT={WP('20')}
                  mB={WP('10')}
                />

                <AppInput
                  name="email"
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChangeText={handleChange('email')}
                  placeholder={'Email/Mobile Number'}
                  bgColor={colors.theme_color}
                  activeOutlineColor={colors.white}
                  outlineColor={colors.white}
                  keyboardType={'email-address'}
                  height={48}
                  placeholderTextColor={colors.white}
                />
                <AppInput
                  name="password"
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  onChangeText={handleChange('password')}
                  placeholder={'Password'}
                  bgColor={colors.theme_color}
                  activeOutlineColor={colors.white}
                  outlineColor={colors.white}
                  height={48}
                  placeholderTextColor={colors.white}
                  secureTextEntry={true}
                />

                <View style={spacing.mt10}>
                  <AppButton
                    borderRadius={24}
                    bgColor={colors.white}
                    title={'Login'}
                    onPress={handleSubmit}
                    titleFamily={appFonts.montserratMedium}
                    titleSize={16}
                    titleColor={colors.theme_color}
                  />
                </View>

                <AuthFooter
                  title={'Forgot password?'}
                  marginVertical={WP('5')}
                  h1Family={appFonts.montserratRegular}
                  h1Size={18}
                  h1color={colors.white}
                />

                <AuthFooter
                  title={'Don’t have an account? '}
                  subtitle={'Sign up'}
                  marginVertical={WP('5')}
                  h1Family={appFonts.montserratRegular}
                  h1Size={18}
                  h1color={colors.white}
                  h2Family={appFonts.montserratSemiBold}
                  h2Size={18}
                  h2color={colors.white}
                  onPress={() => navigation?.navigate('Signup')}
                />
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;
