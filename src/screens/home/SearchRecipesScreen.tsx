import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Tags from 'react-native-tags';

import {
  RecipeTypesFilter,
  RecipeDifficultyFilter,
  RecipeIngredientFilter,
} from '../../resources/constants';
import { recipes } from '../../data/HomeScreensDummyData';
import {
  CheckedFilters,
  getFilteredRecipesLength,
} from '../../utils/RecipesDataFunctions';
import RecipesFilterTagView from '../../components/recipes/RecipesFilterTagView';

interface Props {
  navigation: StackNavigationProp<any>;
}

const SearchRecipesScreen: React.FC<Props> = ({ navigation }) => {
  const [checkedTypeFilters, setCheckedTypeFilters] = useState<number[]>([]);
  const [checkedDifficultyFilters, setCheckedDifficultyFilters] = useState<
    number[]
  >([]);
  const [checkedIngredientFilters, setCheckedIngredientFilters] = useState<
    number[]
  >([]);
  const [filteredRecipesLength, setFilteredRecipesLength] = useState<number>(
    recipes.length
  );

  useEffect(() => {
    let newFilteredRecipesLength = getFilteredRecipesLength(getFiltersObject());
    setFilteredRecipesLength(newFilteredRecipesLength);
  }, [checkedTypeFilters, checkedDifficultyFilters, checkedIngredientFilters]);

  const getNewFiltersArrayWithFilterStateChanged = (
    oldFiltersArray: number[],
    filterTagToChangeStateIndex: number
  ) => {
    let newFiltersArray = [...oldFiltersArray];
    if (oldFiltersArray.includes(filterTagToChangeStateIndex)) {
      newFiltersArray = oldFiltersArray.filter(
        item => item !== filterTagToChangeStateIndex
      );
    } else {
      newFiltersArray.push(filterTagToChangeStateIndex);
    }
    return newFiltersArray;
  };

  const getFiltersObject = () => {
    let filtersObject: CheckedFilters = {
      type: checkedTypeFilters,
      difficulty: checkedDifficultyFilters,
      ingredient: checkedIngredientFilters,
    };
    return filtersObject;
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.filtersContentView}>
        <View style={styles.typeFiltersTitleView}>
          <Text style={styles.filtersTitle}>Type</Text>
        </View>
        <View style={styles.filtersView}>
          <Tags
            style={{
              height: '100%',
            }}
            initialTags={RecipeTypesFilter}
            readonly
            deleteTagOnPress={false}
            onTagPress={index => {
              setCheckedTypeFilters(
                getNewFiltersArrayWithFilterStateChanged(
                  checkedTypeFilters,
                  index
                )
              );
            }}
            renderTag={({ tag, index, onPress }) => {
              let tagChecked = checkedTypeFilters.includes(index);
              return (
                <RecipesFilterTagView
                  key={index}
                  title={tag}
                  checked={tagChecked}
                  onPress={onPress}
                />
              );
            }}
          />
        </View>
        <View style={styles.difficultyAndIngredientFiltersTitleView}>
          <Text style={styles.filtersTitle}>Difficulty</Text>
        </View>
        <View style={styles.filtersView}>
          <Tags
            style={{
              height: '100%',
            }}
            initialTags={RecipeDifficultyFilter}
            readonly
            deleteTagOnPress={false}
            onTagPress={index => {
              setCheckedDifficultyFilters(
                getNewFiltersArrayWithFilterStateChanged(
                  checkedDifficultyFilters,
                  index
                )
              );
            }}
            renderTag={({ tag, index, onPress }) => {
              let tagChecked = checkedDifficultyFilters.includes(index);
              return (
                <RecipesFilterTagView
                  key={index}
                  title={tag}
                  checked={tagChecked}
                  onPress={onPress}
                />
              );
            }}
          />
        </View>
        <View style={styles.difficultyAndIngredientFiltersTitleView}>
          <Text style={styles.filtersTitle}>Ingredient</Text>
        </View>
        <View style={styles.filtersView}>
          <Tags
            style={{
              height: '100%',
            }}
            initialTags={RecipeIngredientFilter}
            readonly
            deleteTagOnPress={false}
            onTagPress={index => {
              setCheckedIngredientFilters(
                getNewFiltersArrayWithFilterStateChanged(
                  checkedIngredientFilters,
                  index
                )
              );
            }}
            renderTag={({ tag, index, onPress }) => {
              let tagChecked = checkedIngredientFilters.includes(index);
              return (
                <RecipesFilterTagView
                  key={index}
                  title={tag}
                  checked={tagChecked}
                  onPress={onPress}
                />
              );
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RecipesList', {
            checkedFilters: getFiltersObject(),
          });
        }}
      >
        <View style={styles.buttonView}>
          <Text style={styles.mainText}>
            Show {filteredRecipesLength} recipes
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  filtersContentView: {
    marginTop: 110,
  },
  typeFiltersTitleView: {
    marginLeft: 15,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  filtersView: {
    height: 35,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  difficultyAndIngredientFiltersTitleView: {
    marginTop: 30,
    marginLeft: 15,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 35,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: 'mediumseagreen',
  },
  mainText: {
    fontWeight: '600',
    color: 'white',
  },
});

export default SearchRecipesScreen;
