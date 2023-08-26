import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CategoryDetail from '../../screens/App/CategoryDetail';

const Stack = createNativeStackNavigator();

function CategoryStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="CategoryDetScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CategoryDetScreen" component={CategoryDetail} />
    </Stack.Navigator>
  );
}

export default CategoryStack;
