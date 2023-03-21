import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  category_container: {
    position: 'absolute',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    bottom: 0,
  },
  title: {
    color: '#a8a7a2',
    marginLeft: 12,
    marginBottom: 5,
    fontSize: 16,
  },
  logo_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  categories: {
    width: Dimensions.get('window').width / 3.4,
    height: Dimensions.get('window').height / 5,
    resizeMode: 'center',
    marginLeft: 10,
    margin: 2,
    borderRadius: 5,
  },
});
