import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './BackButton.style'
import {useNavigation} from '@react-navigation/native'

function BackButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.back_button}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/images/button/548-5485584_icon-back-ios-png-clipart-png-download-svg.png')}
          style={styles.back_image}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default BackButton;