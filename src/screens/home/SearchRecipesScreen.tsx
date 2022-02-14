import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any>;
}

const SearchRecipesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecipesList');
          }}
        >
          <Text>Show recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchRecipesScreen;
