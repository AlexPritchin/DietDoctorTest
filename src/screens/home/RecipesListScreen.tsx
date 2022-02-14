import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { HomeStackParamList } from '../../navigation/HomeStackNavigator';
import { recipes } from '../../data/HomeScreensDummyData';
import Recipe from '../../models/RecipeModel';
import { getFilteredRecipes } from '../../utils/RecipesDataFunctions';
import RecipesListItem from '../../components/recipes/RecipesListItem';

type RecipesListScreenRouteProp = RouteProp<HomeStackParamList, 'RecipesList'>;

interface Props {
  route: RecipesListScreenRouteProp;
}

const RecipesListScreen: React.FC<Props> = ({ route }) => {
  const [recipesListToDisplay, setRecipesListToDisplay] = useState<Recipe[]>(
    []
  );

  useEffect(() => {
    let filteredRecipes = getFilteredRecipes(route.params.checkedFilters);
    setRecipesListToDisplay(filteredRecipes);
  }, []);

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.mainFlatList}
        data={recipesListToDisplay}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => <RecipesListItem dataItem={itemData.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainFlatList: {
    marginTop: 95,
    marginHorizontal: 15,
    marginBottom: 3,
  },
});

export default RecipesListScreen;
