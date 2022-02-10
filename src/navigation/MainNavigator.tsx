import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroAuthScreen from '../screens/auth/IntroAuthScreen';

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <MainStackNavigator.Screen
        name="IntroAuth"
        component={IntroAuthScreen}
      />
    </MainStackNavigator.Navigator>
  );
};