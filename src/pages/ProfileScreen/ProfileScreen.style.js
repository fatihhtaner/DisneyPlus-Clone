import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1e2a',
  },
  edit_button: {
    backgroundColor: 'gray',
    width: deviceWidth / 3,
    height: deviceHeight / 20,
    alignSelf: 'center',
  },
  edit: {
    margin:5,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  lineStyle: {
    borderWidth: 0.7,
    borderColor: 'white',
    margin: 10,
  },
  image: {
    width: deviceWidth / 3,
    height: deviceHeight / 4,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  text: {
    color: '#a8a7a2',
    fontSize: 18,
    margin: 10,
  },
});
