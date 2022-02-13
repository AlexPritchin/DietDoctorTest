import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EatScreen from '../screens/eat/EatScreen';

const EatStackNavigator = createStackNavigator();

export const EatNavigator = () => {
  return (
    <EatStackNavigator.Navigator>
      <EatStackNavigator.Screen
        name="Eat"
        component={EatScreen}
        options={{
            headerShown: false
        }}
      />
    </EatStackNavigator.Navigator>
  );
};