import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { getDayOfWeekText } from '../helpers/DateHelpers';
import HomeScreen, { headerRightButtons } from '../screens/home/HomeScreen';
import SearchRecipesScreen from '../screens/home/SearchRecipesScreen';
import RecipesListScreen from '../screens/home/RecipesListScreen';

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={(props) => ({
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerLeft: () => null,
            headerTitle: () => (
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600'
                }}>
                    {getDayOfWeekText()}
                </Text>
            ),
            headerRight: () => (headerRightButtons(props.navigation))
        })}
      />
      <HomeStackNavigator.Screen
        name="SearchRecipes"
        component={SearchRecipesScreen}
        options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
        }}
      />
      <HomeStackNavigator.Screen
        name="RecipesList"
        component={RecipesListScreen}
        options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTitle: 'Recipes'
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};