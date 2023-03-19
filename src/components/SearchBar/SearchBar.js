import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchBar.style'

function SearchBar(props) {
  return (
    <TextInput
      placeholder="Search"
      style={styles.search}
      onChangeText={props.onSearch}
    />
  );
}

export default SearchBar