import React from 'react';
import {View} from 'react-native';
import styles from './Studios.style';
import disney_logo from '../../assets/images/logo/disney.png';
import marvel_logo from '../../assets/images/logo/marvel.png';
import ng_logo from '../../assets/images/logo/national-geographic.png';
import pixar_logo from '../../assets/images/logo/pixar.png';
import star_wars_logo from '../../assets/images/logo/star-wars.png';
import StudioBox from '../StudioBox/StudioBox';
import movies_data from '../../../data/disneyPlusMoviesData.json';
import disney_background from '../../assets/images/background/disney.jpg';
import pixar_background from '../../assets/images/background/pixar.png';
import marvel_background from '../../assets/images/background/marvel.jpg';
import star_wars_background from '../../assets/images/background/star_wars.jpg';
import ng_background from '../../assets/images/background/national_geographic.jpg';

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
      <StudioBox logo={pixar_logo} data={pixar} background={pixar_background} />
      <StudioBox
        logo={marvel_logo}
        data={marvel}
        background={marvel_background}
      />
      <StudioBox logo={star_wars_logo} background={star_wars_background} />
      <StudioBox logo={ng_logo} background={ng_background} />
    </View>
  );
}

export default Studios;
