import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  back_button: {
    height: Dimensions.get('window').height / 33,
    width: Dimensions.get('window').width / 18,
    borderRadius: 64,
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  back_image: {
    height: Dimensions.get('window').height / 33,
    width: Dimensions.get('window').width / 18,
    borderRadius: 64,
    resizeMode: 'center',
  },
});