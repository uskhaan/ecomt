import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Profile from '../../screens/App/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
