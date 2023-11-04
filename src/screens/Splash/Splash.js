import React, {useEffect} from 'react';
import {Image, SafeAreaView, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {appImages, colors} from '../../utilities';
import styles from './styles';

const Splash = ({navigation}) => {
  const dispatch = useDispatch(null);

  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    try {
      setTimeout(() => {
        navigation?.replace('Auth');
      }, 500);
    } catch (error) {}
  };

  return (
    <SafeAreaView style={[styles.main]}>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={appImages.appLogo}
        style={styles.imageStyles}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Splash;
