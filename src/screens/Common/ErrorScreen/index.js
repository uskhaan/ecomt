import React from 'react';
import {Alert} from 'react-native';
import {Image, Text, View} from 'react-native';
import {AppButton, AuthHeader} from '../../../components/TextComponent';
import {
  appIcons,
  checkConnected,
  commonstyles,
  networkText,
} from '../../../utilities';
import styles from './styles';
const ErrorScreen = ({route, navigation}) => {
  //on Reload
  const onReload = async () => {
    const check = await checkConnected();
    if (check) {
      navigation?.goBack();
    } else {
      Alert.alert('Error', networkText);
    }
  };
  return (
    <View style={commonstyles.main()}>
      <View style={commonstyles.contentContainer}>
        {/* <AuthHeader /> */}
        <View style={styles.mainContainer}>
          <Image style={styles.imgStyle} source={appIcons.cancel} />
          <Text style={styles.h1}>
            {route?.params?.title || 'Error Occured'}
          </Text>
          <Text style={styles.h2}>
            {route?.params?.message || 'Something went wrong!'}
          </Text>
          <AppButton
            onPress={() => {
              onReload();
            }}
            width={'60%'}
            title={'Reload'}
          />
        </View>
      </View>
    </View>
  );
};

export default ErrorScreen;
