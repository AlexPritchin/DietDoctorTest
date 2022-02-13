import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DoctorPlusScreen from '../screens/doctorPlus/DoctorPlusScreen';

const DoctorPlusStackNavigator = createStackNavigator();

export const DoctorPlusNavigator = () => {
  return (
    <DoctorPlusStackNavigator.Navigator>
      <DoctorPlusStackNavigator.Screen
        name="DoctorPlus"
        component={DoctorPlusScreen}
        options={{
            headerShown: false
        }}
      />
    </DoctorPlusStackNavigator.Navigator>
  );
};