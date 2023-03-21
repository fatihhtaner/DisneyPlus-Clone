import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import HomeCategory from '../../components/HomeCategory';
import styles from './HomeScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import SlideShow from '../../components/SlideShow/SlideShow';
import Studios from '../../components/Studios/Studios';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}>
        <ScrollView>
          <View style={styles.logo_container}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo/disney.png')}
            />
          </View>
          <SlideShow />
          <Studios />
          <HomeCategory />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default HomeScreen;
