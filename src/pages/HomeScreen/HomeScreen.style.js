import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 8,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  studios_container: {
    flex: 1,
  },
});