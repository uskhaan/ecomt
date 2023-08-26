import NetInfo from '@react-native-community/netinfo';
import {Alert, PermissionsAndroid, Platform, Share} from 'react-native';

const checkConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};
const capitalizeFirstLetter = string => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};
const responseValidator = response => {
  Alert.alert('Error', response?.message || 'Something went wrong!');
};

export {checkConnected, responseValidator, capitalizeFirstLetter};
