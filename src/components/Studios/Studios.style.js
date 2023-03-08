import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  logo_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 13,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});
