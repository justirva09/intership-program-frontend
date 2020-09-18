import { React, PropTypes } from 'libraries';
import {View} from 'components/atoms';

const CardMitra = ({imgSrc, title, desc}) => {
  return(
    <View className="m-cardMitra">
    <View className="m-cardMitra__inner">
      <View className="m-cardMitra__inner--header">
        <img src={imgSrc} alt="mitra-icon" />
      </View>
      <View className="m-cardMitra__inner--body">
        <h5 className="m-cardMitra__title">{title}</h5>
        <p className="m-cardMitra__desc">{desc}</p>
      </View>
    </View>
  </View>
  )
}

CardMitra.propTypes = {
  imgSrc: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.string
};


export default CardMitra;
