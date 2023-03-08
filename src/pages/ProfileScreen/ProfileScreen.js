import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './ProfileScreen.style'

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        style={{flex: 1}}>
        <Text>Profile</Text>
        <Image source={require('../../assets/images/profiles/elsa.jpg')}/>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default ProfileScreen;
