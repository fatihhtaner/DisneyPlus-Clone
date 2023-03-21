import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image_container: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  search: {
    backgroundColor: 'white',
    margin: 10,
    marginTop: 30,
    borderRadius: 5,
  },
});
