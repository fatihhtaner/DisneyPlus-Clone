import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  categories: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'cover',
    margin: 15,
    borderRadius: 5,
  },
});