import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const RecipesFilterTagView: React.FC<Props> = ({
  title,
  checked,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.mainView,
          checked ? styles.mainViewChecked : styles.mainViewUnchecked,
        ]}
      >
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  mainViewUnchecked: {
    backgroundColor: 'gainsboro',
  },
  mainViewChecked: {
    borderWidth: 1,
    borderColor: 'mediumseagreen',
  },
  titleText: {
    fontSize: 12,
  },
});

export default RecipesFilterTagView;
