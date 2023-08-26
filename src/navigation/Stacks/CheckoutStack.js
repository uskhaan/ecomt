import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import MyCart from '../../screens/App/Checkout/MyCart';
import AddNewAddress from '../../screens/App/Checkout/AddNewAddress';
import PaymentOption from '../../screens/App/Checkout/PaymentOption';
import OrderDetails from '../../screens/App/Checkout/OrderDetails';

const Stack = createNativeStackNavigator();

function CheckoutStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="MyCartScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyCartScreen" component={MyCart} />
      <Stack.Screen name="AddNewAddressScreen" component={AddNewAddress} />
      <Stack.Screen name="PaymentOptionScreen" component={PaymentOption} />
      <Stack.Screen name="OrderDetailsScreen" component={OrderDetails} />
    </Stack.Navigator>
  );
}

export default CheckoutStack;
