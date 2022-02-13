import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

import { getDayGreeting } from '../../helpers/DateHelpers';
import { visualGuides, discoverAndLearn } from '../../data/HomeScreensDummyData';
import VisualGuideListItem from '../../components/homeScreen/VisualGuideListItem';
import DiscoverListItem from '../../components/homeScreen/DiscoverListItem';

const HomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topTextView}>
          <Text style={styles.topText}>{getDayGreeting()}</Text>
      </View>
      <View style={styles.scrollView}>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
              <View>
                  <Text style={styles.visualGuidesTitle}>Visual guides</Text>
              </View>
              <View style={styles.visualGuidesListView}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={visualGuides}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(itemData) => (<VisualGuideListItem dataItem={itemData.item} />)}
                  />
              </View>
              <View style={styles.discoverTitleView}>
                  <Text style={styles.discoverTitle}>Discover and learn</Text>
              </View>
              <View style={styles.discoverListView}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={discoverAndLearn}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(itemData) => (<DiscoverListItem dataItem={itemData.item} />)}
                  />
              </View>
          </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
  topTextView: {
    marginTop: 90,
    marginLeft: 15
  },
  topText: {
      color: 'white',
      fontSize: 42,
      fontWeight: '500'
  },
  scrollView: {
      marginTop: 25,
      marginBottom: 140,
      paddingHorizontal: 15,
      paddingTop: 20,
      backgroundColor: 'white',
      borderTopLeftRadius: 22
  },
  visualGuidesTitle: {
      fontSize: 22,
      fontWeight: '500'
  },
  visualGuidesListView: {
      marginTop: 15
  },
  discoverTitleView: {
      marginTop: 50
  },
  discoverTitle: {
      fontSize: 22,
      fontWeight: '500'
  },
  discoverListView: {
      marginTop: 15,
      marginBottom: 30
  }
});

export default HomeScreen;