import React from 'react';
import {View, Text} from 'react-native';
import SearchCategory from '../SearchCategory/SearchCategory';
import styles from './ShowExplore.style';

function ShowExplore() {
  return (
    <View>
      <View style={styles.title_container}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <SearchCategory />
    </View>
  );
}

export default ShowExplore;
