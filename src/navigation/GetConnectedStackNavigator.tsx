import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetConnectedScreen from '../screens/getConnected/GetConnectedScreen';

const GetConnectedStackNavigator = createStackNavigator();

export const GetConnectedNavigator = () => {
  return (
    <GetConnectedStackNavigator.Navigator>
      <GetConnectedStackNavigator.Screen
        name="Get Connected"
        component={GetConnectedScreen}
        options={{
            headerShown: false
        }}
      />
    </GetConnectedStackNavigator.Navigator>
  );
};