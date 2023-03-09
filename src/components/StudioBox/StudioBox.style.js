import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 13,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});