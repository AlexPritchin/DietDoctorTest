import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { recipes } from '../../data/HomeScreensDummyData';
import RecipesListItem from '../../components/recipes/RecipesListItem';

const RecipesListScreen = () => {
  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.mainFlatList}
        data={recipes}
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
    marginBottom: 3
  },
});

export default RecipesListScreen;
