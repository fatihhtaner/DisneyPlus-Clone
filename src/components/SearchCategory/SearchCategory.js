import React from 'react';
import {View} from 'react-native';
import styles from './SearchCategory.style';
import SearchBox from '../SearchBox/SearchBox';

function SearchCategory() {
  return (
    <View style={styles.category_container}>
      <SearchBox title="Originals" image="ios-star" />
      <SearchBox title="Movies" image="ios-film" />
      <SearchBox title="Series" image="ios-desktop" />
    </View>
  );
}

export default SearchCategory;
