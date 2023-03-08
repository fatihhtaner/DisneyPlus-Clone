import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title_container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#a8a7a2',
    justifyContent: 'center',
  },
  image_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    tintColor: '#a8a7a2',
    alignItems: 'center',
  },
  text_container: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  description: {
    fontSize: 18,
    color: '#a8a7a2',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});
