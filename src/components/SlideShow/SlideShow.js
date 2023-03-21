import React from 'react';
import {View, FlatList, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './SlideShow.style'
import movies_data from '../../../data/disneyPlusMoviesData.json';
import {useNavigation} from '@react-navigation/native';

function SlideShow({DetailScreen}) {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={movies_data}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('DetailScreen', item)}>
            <Image style={styles.image} source={{uri: item.cardImg}} />
          </TouchableWithoutFeedback>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default SlideShow;
