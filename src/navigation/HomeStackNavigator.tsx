import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: 'steelblue'
            },
            headerLeft: () => null
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};