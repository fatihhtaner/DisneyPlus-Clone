import React from 'react';
import {Image, SafeAreaView, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './DownloadScreen.style'

function DownloadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Downloads</Text>
        </View>
        <View style={styles.image_container}>
          <Image
            source={require('../../assets/download.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text}>You have no downloads</Text>
          <Text style={styles.description}>
            Movies and series you download will appear here.
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default DownloadScreen;
