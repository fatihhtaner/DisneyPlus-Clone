import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  back_button: {
    height: Dimensions.get('window').height / 33,
    width: Dimensions.get('window').width / 18,
    borderRadius: 64,
    marginLeft: 12,
    marginTop: 25,
  },
  back_image: {
    height: Dimensions.get('window').height / 33,
    width: Dimensions.get('window').width / 18,
    borderRadius: 64,
    resizeMode: 'center',
  },
  title_container: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    marginTop: 15,
    marginLeft: 12,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    marginRight: 12,
    marginTop: 20,
    fontSize: 15,
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
