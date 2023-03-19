import React from 'react';
import {FlatList, TouchableWithoutFeedback, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './MovieData.style'

function MovieData(props) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('DetailScreen', item)}>
          <Image style={styles.categories} source={{uri: item.cardImg}} />
        </TouchableWithoutFeedback>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default MovieData;
