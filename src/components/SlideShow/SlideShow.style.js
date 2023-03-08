import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    margin: 10,
    marginTop: 1,
    borderRadius: 5,
  },
});