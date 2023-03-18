import React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import styles from './StudioBox.style';

function StudioBox(props) {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#0e1d49', '#1f4693']}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('StudioDetailScreen', {
            data: props.data,
            background: props.background,
          })
        }>
        <Image source={props.logo} style={styles.logo} />
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

export default StudioBox;
