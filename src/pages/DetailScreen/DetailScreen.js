import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './DetailScreen.style';
import PlayButton from '../../components/Buttons/PlayButton/PlayButton'

function Detail() {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}>
        <Image
          source={{uri: route.params.backgroundImg}}
          style={styles.background_image}
        />
        <Image
          source={{uri: route.params.titleImg}}
          style={styles.logo_container}
        />
        <PlayButton text={'Play'}/>
        <Text style={styles.subTitle}>{route.params.subTitle}</Text>
        <Text>{route.params.description}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Detail;