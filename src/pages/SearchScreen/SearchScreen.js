import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './SearchScreen.style';
import ShowExplore from '../../components/ShowExplore/ShowExplore';
import movie_data from '../../disneyPlusMoviesData.json';
import MovieData from '../../components/MovieData/MovieData';

function SearchScreen(props) {
  const [list, setList] = useState(movie_data);

  const onSearch = text => {
    const filteredList = movie_data.filter(movie => {
      const searchedText = text.toLowerCase();
      const currentTitle = movie.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(false);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0b0d15', '#292c3c', '#292c3c', '#0b0d15']}
        start={{x: 0, y: 0}}
        style={{flex: 1}}>
        <TextInput
          placeholder="Search"
          style={styles.search}
          onChangeText={onSearch}
          onChange={toggleShow}
        />
        {show ? <ShowExplore /> : <MovieData data={list} />}
      </LinearGradient>
    </SafeAreaView>
  );
}

export default SearchScreen;
