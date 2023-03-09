import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './CategoryList.style';
import {useNavigation} from '@react-navigation/native';

function CategoryList(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList
        data={props.data}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('DetailScreen', item)}>
            <Image style={styles.categories} source={{uri: item.categoryImg}} />
          </TouchableWithoutFeedback>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CategoryList;
