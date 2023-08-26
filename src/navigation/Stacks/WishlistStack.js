import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Wishlist from '../../screens/App/Wishlist';

const Stack = createNativeStackNavigator();

function WishlistStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="WishlistScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WishlistScreen" component={Wishlist} />
    </Stack.Navigator>
  );
}

export default WishlistStack;
