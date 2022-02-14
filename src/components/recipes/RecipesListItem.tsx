import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Recipe from '../../models/RecipeModel';

interface Props {
  dataItem: Recipe;
}

const RecipesListItem: React.FC<Props> = ({ dataItem }) => {
  return (
    <View
      style={styles.mainView}
    >
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: dataItem.imageURL,
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{dataItem.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 280,
    borderRadius: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: 'gray'
  },
  imageView: {
    height: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleView: {
    marginTop: 10,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default RecipesListItem;
