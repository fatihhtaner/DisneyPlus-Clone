import React from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';
import styles from './PlayButton.style'

function PlayButton(props) {
  return (
    <TouchableWithoutFeedback style={{backgroundColor: 'white'}}>
      <Text style={{color: 'white'}}>{props.text}</Text>
    </TouchableWithoutFeedback>
  );
}

export default PlayButton;