import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen1 from '../../screens/Auth/Welcome/WelcomeScreen1';
import WelcomeScreen2 from '../../screens/Auth/Welcome/WelcomeScreen2';
import WelcomeScreen3 from '../../screens/Auth/Welcome/WelcomeScreen3';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import OTPVerif from '../../screens/Auth/OTPVerif';
import SendOTP from '../../screens/Auth/SendOTP';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      {/* <Stack.Screen name="OTPVerif" component={OTPVerif} />
      <Stack.Screen name="SendOTP" component={SendOTP} /> */}
    </Stack.Navigator>
  );
}

export default AuthStack;
