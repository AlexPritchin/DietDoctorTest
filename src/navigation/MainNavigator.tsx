import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroAuthScreen from '../screens/auth/IntroAuthScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { TabNavigator } from './MainTabNavigator';

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="IntroAuth"
        component={IntroAuthScreen}
        options={{
            headerShown: false
        }}
      />
      <MainStackNavigator.Screen
        name="Log in"
        component={LoginScreen}
        options={{
            headerTransparent: true,
            headerTintColor: 'white',
            headerBackTitleVisible: false
        }}
      />
      <MainStackNavigator.Screen
        name="Main tab"
        component={TabNavigator}
        options={{
          headerShown: false
        }}
      />
    </MainStackNavigator.Navigator>
  );
};