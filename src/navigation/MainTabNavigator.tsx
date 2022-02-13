import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import { HomeNavigator } from './HomeStackNavigator';
import { EatNavigator } from './EatStackNavigator';
import { DoctorPlusNavigator } from './DoctorPlusStackNavigator';
import { GetConnectedNavigator } from './GetConnectedStackNavigator';

const MainTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <MainTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Eat':
              iconName = 'pizza';
              break;
            case 'DoctorPlus':
              iconName = 'stats';
              break;
            case 'GetConnected':
              iconName = 'contacts';
              break;
          
            default:
              iconName = 'home';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <MainTabNavigator.Screen
        name="Home"
        component={HomeNavigator}
      />
      <MainTabNavigator.Screen
        name="Eat"
        component={EatNavigator}
      />
      <MainTabNavigator.Screen
        name="DoctorPlus"
        component={DoctorPlusNavigator}
      />
      <MainTabNavigator.Screen
        name="GetConnected"
        component={GetConnectedNavigator}
      />
    </MainTabNavigator.Navigator>
  );
};