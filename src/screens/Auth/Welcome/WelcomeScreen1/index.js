import React, {useState} from 'react';
import {StatusBar, View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  appFonts,
  appImages,
  colors,
  commonstyles,
  size,
  spacing,
} from '../../../../utilities';
import styles from './styles';
import {AppButton, DotsComponent, TextComponent} from '../../../../components';

const WelcomeScreen1 = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  // Redux State
  const dispatch = useDispatch();

  return (
    <View style={[styles.main]}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.innerCon}>
        <View style={styles.topHeader}>
          <View style={styles.headerInner}>
            <Image source={appImages.welcomeImage1} style={styles.Image} />
          </View>
        </View>
        <View style={[styles.footerCon, spacing.pb10]}>
          <TextComponent
            color={colors.theme_color}
            family={appFonts.montserratMedium}
            size={20}
            text={'Empowering Artisans\nFarmers and Micro Business'}
            tA={'center'}
            lHeight={30}
          />
          <View style={spacing.my10}>
            <DotsComponent
              color1={colors.theme_color}
              color2={colors.theme_color_light}
              color3={colors.theme_color_light}
            />
          </View>
          <AppButton
            title={'Next'}
            onPress={() => {
              navigation?.navigate('WelcomeScreen2');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen1;
