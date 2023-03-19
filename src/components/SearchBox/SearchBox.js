import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SearchBox.style';
import LinearGradient from 'react-native-linear-gradient'

function SearchBox(props) {
  return (
    <LinearGradient colors={['#141a22', '#141a22']} style={styles.gradient}>
      <View style={styles.image_container}>
        <Icon name={props.image} color={'white'} size={30} />
        <Text style={{color: 'white'}}>{props.title}</Text>
      </View>
    </LinearGradient>
  );
}

export default SearchBox;
