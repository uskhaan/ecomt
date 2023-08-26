import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import OrderHistory from '../../screens/App/OrderHistory';

const Stack = createNativeStackNavigator();

function OrderHistoryStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="OrderHistoryScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistory} />
    </Stack.Navigator>
  );
}

export default OrderHistoryStack;
