import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EatScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Eat</Text>
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

export default EatScreen;
