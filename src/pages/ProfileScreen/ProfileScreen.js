import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ProfileScreen.style';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1e2a', '#292c3c', '#292c3c', '#1a1e2a']}
        style={{flex: 1}}>
        <Image
          source={require('../../assets/images/profiles/darth-vader.png')}
          style={styles.image}
        />
        <View style={styles.edit_button}>
          <Text style={styles.edit}>Edit Profile</Text>
        </View>
        <Text style={styles.text}>WatchList</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.text}>App Settings</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.text}>Account</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.text}>Legal</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.text}>Help</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.text}>Log Out</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default ProfileScreen;
