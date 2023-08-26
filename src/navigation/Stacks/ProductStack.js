import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ProductDetail from '../../screens/App/ProductDetail';

const Stack = createNativeStackNavigator();

function ProductStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ProductDetailScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductDetailScreen" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default ProductStack;
