import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './DetailScreen.style';
import BackButton from '../../components/Buttons/BackButton/BackButton'

function Detail() {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}>
        <BackButton />
        <Image
          source={{uri: route.params.backgroundImg}}
          style={styles.background_image}
        />
        <Image
          source={{uri: route.params.titleImg}}
          style={styles.logo_container}
        />
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.play_button}>
            <Image source={require('../../assets/icons/play-icon-black.png')} />
            <Text style={styles.play_button_text}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.add_button}>
            <Image
              source={require('../../assets/images/button/plus.png')}
              style={styles.add_image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.download_button}>
            <Image
              source={require('../../assets/images/button/download-icon-black-0.jpg')}
              style={styles.download_image}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>{route.params.subTitle}</Text>
        <Text style={styles.description}>{route.params.description}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Detail;
