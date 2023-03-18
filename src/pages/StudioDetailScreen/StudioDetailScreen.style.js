import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  logo_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  categories: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
    resizeMode: 'contain',
    marginLeft: 10,
    margin: 5,
    borderRadius: 5,
  },
});
