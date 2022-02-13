import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { getDayOfWeekText } from '../helpers/DateHelpers';
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
            headerTransparent: true,
            headerLeft: () => null,
            headerTitle: (props) => (
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600'
                }}>
                    {getDayOfWeekText()}
                </Text>
            )
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};