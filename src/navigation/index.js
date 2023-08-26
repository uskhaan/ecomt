import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import Splash from '../screens/Splash';
import BottomTab from './BottomTabs/BottomTab';
import AuthStack from './Stacks/AuthStack';
import CategoryStack from './Stacks/CategoryStack';
import CheckoutStack from './Stacks/CheckoutStack';
import WishlistStack from './Stacks/WishlistStack';
import ProductStack from './Stacks/ProductStack';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="Auth" component={AuthStack} />
        <AppStack.Screen name="App" component={BottomTab} />
        <AppStack.Screen name="Category" component={CategoryStack} />
        <AppStack.Screen name="Wishlist" component={WishlistStack} />
        <AppStack.Screen name="Checkout" component={CheckoutStack} />
        <AppStack.Screen name="Product" component={ProductStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainAppNav;
