import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './StudioDetailScreen.style';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

function StudioDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params.background);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={route.params.background}
        style={styles.imageBackground}>
        <FlatList
          data={route.params.data}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('DetailScreen', item)}>
              <Image
                style={styles.categories}
                source={{uri: item.categoryImg}}
              />
            </TouchableWithoutFeedback>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
}

export default StudioDetailScreen;
