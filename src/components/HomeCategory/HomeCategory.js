import React from 'react';
import {
  FlatList,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import movies_data from '../../disneyPlusMoviesData.json';
import styles from './HomeCategory.style';
import {useNavigation} from '@react-navigation/native';

var recommends = movies_data.filter(obj => {
  return obj.type === 'recommend';
});

var news = movies_data.filter(obj => {
  return obj.type === 'new';
});

var trendings = movies_data.filter(obj => {
  return obj.type === 'trending';
});

var originals = movies_data.filter(obj => {
  return obj.type === 'original';
});

function HomeCategory() {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text style={styles.text}>Originals</Text>
        <FlatList
          data={originals}
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
      <View>
        <Text style={styles.text}>Recommended For You</Text>
        <FlatList
          data={recommends}
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
      <View>
        <Text style={styles.text}>News</Text>
        <FlatList
          data={news}
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
      <View>
        <Text style={styles.text}>Trending</Text>
        <FlatList
          data={trendings}
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
      <View>
        <Text style={styles.text}>Originals</Text>
        <FlatList
          data={originals}
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
    </View>
  );
}


export default HomeCategory;
