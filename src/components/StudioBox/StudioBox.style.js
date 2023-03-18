import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  logo: {
    flex: 1,
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 13,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});