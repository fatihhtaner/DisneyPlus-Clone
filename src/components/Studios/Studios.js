import React from 'react';
import {View} from 'react-native';
import styles from './Studios.style';
import disney_logo from '../../assets/images/logo/disney.png';
import marvel_logo from '../../assets/images/logo/marvel.png';
import ng_logo from '../../assets/images/logo/national-geographic.png';
import pixar_logo from '../../assets/images/logo/pixar.png';
import star_wars_logo from '../../assets/images/logo/star-wars.png';
import StudioBox from '../StudioBox/StudioBox'
import movies_data from '../../disneyPlusMoviesData.json'
import disney_background from '../../assets/images/background/disney.jpg'

var disney = movies_data.filter(obj => {
  return obj.studio === 'Disney';
});

var marvel = movies_data.filter(obj => {
  return obj.studio === 'Marvel';
});

var pixar = movies_data.filter(obj => {
  return obj.studio === 'Pixar';
});

function Studios() {
  return (
    <View style={styles.logo_container}>
      <StudioBox
        logo={disney_logo}
        data={disney}
        background={disney_background}
      />
      <StudioBox logo={pixar_logo} data={pixar}/>
      <StudioBox logo={marvel_logo} data={marvel}/>
      <StudioBox logo={star_wars_logo} />
      <StudioBox logo={ng_logo} /> 
    </View>
  );
}

export default Studios;
