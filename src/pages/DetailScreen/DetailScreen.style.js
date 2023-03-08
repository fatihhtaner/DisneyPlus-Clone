import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  play_button: {
    color: 'white',
  },
  background_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo_container: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  subTitle: {
    color: '#a8a7a2',
  },
});
