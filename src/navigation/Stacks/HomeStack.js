import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../../screens/App/Home';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeStack;
