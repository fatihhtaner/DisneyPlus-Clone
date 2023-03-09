import React from 'react';
import {
  SafeAreaView,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';
import styles from './StudioDetailScreen.style';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

function StudioDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri: route.params}}>
        <FlatList
          data={route.params}
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
    </SafeAreaView>
  );
}

export default StudioDetailScreen;
