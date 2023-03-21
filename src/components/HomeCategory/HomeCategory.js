import React from 'react';
import {View} from 'react-native';
import movies_data from '../../../data/disneyPlusMoviesData.json';
import styles from './HomeCategory.style';
import CategoryList from '../CategoryList/CategoryList';

var recommends = movies_data.filter(obj => {
  return obj.type === 'recommend';
});

var news = movies_data.filter(obj => {
  return obj.type === 'new';
});

var trendings = movies_data.filter(obj => {
  return obj.type === 'trending';
});

var originals = movies_data.filter(obj => {
  return obj.type === 'original';
});

function HomeCategory() {
  return (
    <View>
      <CategoryList data={recommends} title={'Recommended for you'} />
      <CategoryList data={news} title={'News'} />
      <CategoryList data={trendings} title={'Trending'} />
      <CategoryList data={originals} title={'Original'} />
    </View>
  );
}

export default HomeCategory;
