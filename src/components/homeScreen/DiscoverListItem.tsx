import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import DiscoverItem from '../../models/DiscoverItemModel';

interface Props {
  dataItem: DiscoverItem;
}

const DiscoverListItem: React.FC<Props> = ({ dataItem }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image
            style={styles.image}
          source={{
            uri: dataItem.imageURL,
          }}
          resizeMode={'contain'}
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
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: 'powderblue'
  },
  imageView: {
    height: '55%',
    width: '100%',
    marginTop: 20,
  },
  image: {
      height: '100%',
      width: '100%'
  },
  titleView: {
    marginTop: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: '400',
  },
});

export default DiscoverListItem;
