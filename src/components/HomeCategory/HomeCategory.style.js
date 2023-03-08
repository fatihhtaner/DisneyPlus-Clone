import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  categories: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
    resizeMode: 'contain',
    marginLeft: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color: '#a8a7a2',
  },
});
