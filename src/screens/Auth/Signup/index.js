import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  AppButton,
  AppInput,
  AuthFooter,
  TextComponent,
} from '../../../components';
import {MyStatusBar} from '../../../components/Bar/MyStatusBar';
import {
  WP,
  appFonts,
  colors,
  commonstyles,
  signUpVS,
  signupFormFields,
  spacing,
} from '../../../utilities';
import styles from './styles';

const Signup = ({navigation}) => {
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
            validationSchema={signUpVS}
            initialValues={signupFormFields}
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
                  text={'Welcome to tradly'}
                  family={appFonts.montserratMedium}
                  size={24}
                  tA={'center'}
                  mT={WP('30')}
                />
                <TextComponent
                  color={colors.white}
                  text={'Signup to your account'}
                  family={appFonts.montserratRegular}
                  size={16}
                  tA={'center'}
                  mT={WP('15')}
                  mB={WP('5')}
                />
                <AppInput
                  name="firstname"
                  value={values.firstname}
                  error={errors.firstname}
                  touched={touched.firstname}
                  onChangeText={handleChange('firstname')}
                  placeholder={'First Name'}
                  bgColor={colors.theme_color}
                  activeOutlineColor={colors.white}
                  outlineColor={colors.white}
                  height={48}
                  placeholderTextColor={colors.white}
                />
                <AppInput
                  name="lastname"
                  value={values.lastname}
                  error={errors.lastname}
                  touched={touched.lastname}
                  onChangeText={handleChange('lastname')}
                  placeholder={'Last Name'}
                  bgColor={colors.theme_color}
                  activeOutlineColor={colors.white}
                  outlineColor={colors.white}
                  height={48}
                  placeholderTextColor={colors.white}
                />

                <AppInput
                  name="email"
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChangeText={handleChange('email')}
                  placeholder={'Email ID/Phone Number'}
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
                <AppInput
                  name="repassword"
                  value={values.repassword}
                  error={errors.repassword}
                  touched={touched.repassword}
                  onChangeText={handleChange('repassword')}
                  placeholder={'Re-enter Password'}
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
                    title={'Create'}
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
                  title={'Already have an account? '}
                  subtitle={'Sign in'}
                  marginVertical={WP('5')}
                  h1Family={appFonts.montserratRegular}
                  h1Size={18}
                  h1color={colors.white}
                  h2Family={appFonts.montserratSemiBold}
                  h2Size={18}
                  h2color={colors.white}
                  onPress={() => navigation?.navigate('Login')}
                />
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Signup;
