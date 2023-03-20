import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 10,
  },
  play_button: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginLeft: 10,
  },
  play_button_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  add_button: {
    width: Dimensions.get('window').width / 17,
    height: Dimensions.get('window').height / 30,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 15,
    height: Dimensions.get('window').height / 15,
  },
  button_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.75,
  },
  download_button: {
    width: Dimensions.get('window').width / 17,
    height: Dimensions.get('window').height / 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  download_image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 15,
    height: Dimensions.get('window').height / 15,
  },
  description: {
    color: 'white',
    margin: 10,
  },
});
