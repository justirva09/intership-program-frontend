import {PropTypes, React} from 'libraries';
import { View } from 'components/atoms';

const MitraContent = ({className, imgSrc, title, desc}) => {
  return(
    <View className={className}>
      <View className="benefit__contentInner">
        <View className="benefit__contentInner--header">
          <img src={imgSrc} alt="icon-bisnisCard" />
        </View>
        <View className="benefit__contentInner--body">
          <h5>{title}</h5>
          <p>{desc}</p>
        </View>
      </View>
    </View> 
  )
}


MitraContent.propTypes = {
  className: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.any,
  imgSrc: PropTypes.any
};


export default MitraContent;
