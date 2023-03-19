import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 6,
    marginLeft: 10,
    marginRight: 10,
  },
  gradient: {
    borderRadius: 15,
  },
});
