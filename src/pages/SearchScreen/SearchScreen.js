import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './SearchScreen.style'

function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        start={{x: 0, y: 0}}
        style={{flex:1}}>
        <Text>Profile</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default SearchScreen;
