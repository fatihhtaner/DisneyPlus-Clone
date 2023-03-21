import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from 'react-native';
import styles from './ExploreScreen.style';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../components/Buttons/BackButton/BackButton'

function ExploreScreen(props) {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        start={{x: 0, y: 0}}
        style={{flex: 1}}>
        <BackButton />

        <View style={styles.title_container}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.text}>Highlights</Text>
        </View>
        <FlatList
          data={route.params.data}
          numColumns={3}
          key={3}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('DetailScreen', item)}>
              <Image
                style={styles.categories}
                source={{uri: item.categoryImg}}
              />
            </TouchableWithoutFeedback>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default ExploreScreen;
