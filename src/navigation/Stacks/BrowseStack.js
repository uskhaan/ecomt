import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Browse from '../../screens/App/Browse';

const Stack = createNativeStackNavigator();

function BrowseStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="BrowseScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BrowseScreen" component={Browse} />
    </Stack.Navigator>
  );
}

export default BrowseStack;
