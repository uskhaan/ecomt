import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import MyStore from '../../screens/App/MyStore';

const Stack = createNativeStackNavigator();

function MyStoreStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="MyStoreScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyStoreScreen" component={MyStore} />
    </Stack.Navigator>
  );
}

export default MyStoreStack;
