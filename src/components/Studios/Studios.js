import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Studios.style';
import disney_logo from '../../assets/images/logo/disney.png';
import marvel_logo from '../../assets/images/logo/marvel.png';
import ng_logo from '../../assets/images/logo/national-geographic.png';
import pixar_logo from '../../assets/images/logo/pixar.png';
import star_wars_logo from '../../assets/images/logo/star-wars.png';
import {useNavigation} from '@react-navigation/native';

function Studios() {
  const navigation = useNavigation();

  return (
    <View style={styles.logo_container}>
      <LinearGradient colors={['#0e1d49', '#1f4693']}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('DetailScreen')}>
          <Image source={disney_logo} style={styles.logo} />
        </TouchableWithoutFeedback>
      </LinearGradient>
      <LinearGradient colors={['#0e1d49', '#1f4693']}>
        <Image source={pixar_logo} style={styles.logo} />
      </LinearGradient>
      <LinearGradient colors={['#0e1d49', '#1f4693']}>
        <Image source={marvel_logo} style={styles.logo} />
      </LinearGradient>
      <LinearGradient colors={['#0e1d49', '#1f4693']}>
        <Image source={star_wars_logo} style={styles.logo} />
      </LinearGradient>
      <LinearGradient colors={['#0e1d49', '#1f4693']}>
        <Image source={ng_logo} style={styles.logo} />
      </LinearGradient>
    </View>
  );
}

export default Studios;
