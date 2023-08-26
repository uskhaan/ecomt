import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import 'react-native-gesture-handler';

import {Image} from 'react-native';
import {appIcons, colors} from '../../utilities';
import styles from './styles';
import HomeStack from '../Stacks/HomeStack';
import BrowseStack from '../Stacks/BrowseStack';
import MyStoreStack from '../Stacks/MyStoreStack';
import OrderHistoryStack from '../Stacks/OrderHistoryStack';
import ProfileStack from '../Stacks/ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.theme_color,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.grey,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.home}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.searchGrey}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Browse"
        component={BrowseStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.store}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Store"
        component={MyStoreStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.order}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Order History"
        component={OrderHistoryStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.profile}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
