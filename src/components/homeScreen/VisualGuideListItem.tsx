import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import VisualGuideItem from '../../models/VisualGuideItemModel';

interface Props {
  dataItem: VisualGuideItem;
}

const VisualGuideListItem: React.FC<Props> = ({ dataItem }) => {
  return (
    <View
      style={[
        styles.mainView,
        {
          backgroundColor: dataItem.backgroundColor,
        },
      ]}
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
    width: 200,
    borderRadius: 10,
    marginRight: 15,
  },
  imageView: {
    height: '70%',
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
    fontWeight: '400',
  },
});

export default VisualGuideListItem;
