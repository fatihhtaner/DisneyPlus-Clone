import React from 'react';
import {View} from 'react-native';
import styles from './SearchCategory.style';
import SearchBox from '../SearchBox/SearchBox';
import movies_data from '../../disneyPlusMoviesData.json'

var movie = movies_data.filter(obj => {
  return obj.category === 'Movie';
});
var original = movies_data.filter(obj => {
  return obj.category === 'Original';
});
var series = movies_data.filter(obj => {
  return obj.category === 'Series';
});

function SearchCategory() {
  return (
    <View style={styles.category_container}>
      <SearchBox title="Originals" image="ios-star" data={original}/>
      <SearchBox title="Movies" image="ios-film" data={movie}/>
      <SearchBox title="Series" image="ios-desktop" data={series}/>
    </View>
  );
}

export default SearchCategory;
