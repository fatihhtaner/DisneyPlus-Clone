import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SearchBox.style';
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'

function SearchBox(props) {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#141a22', '#141a22']} style={styles.gradient}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('ExploreScreen', {
            data: props.data,
            title: props.title
          })
        }>
        <View style={styles.image_container}>
          <Icon name={props.image} color={'white'} size={30} />
          <Text style={{color: 'white'}}>{props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

export default SearchBox;
