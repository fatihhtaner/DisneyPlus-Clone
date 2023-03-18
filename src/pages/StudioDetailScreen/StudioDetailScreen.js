import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Text
} from 'react-native';
import styles from './StudioDetailScreen.style';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

function StudioDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={route.params.background}
        style={styles.imageBackground}>
        <View style={styles.category_container}>
          <Text style={styles.title}>Featured</Text>
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
        </View>
      </ImageBackground>
    </View>
  );
}

export default StudioDetailScreen;
