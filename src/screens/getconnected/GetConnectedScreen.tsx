import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GetConnectedScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Get Connected</Text>
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

export default GetConnectedScreen;
