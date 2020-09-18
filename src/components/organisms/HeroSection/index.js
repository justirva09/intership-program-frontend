import {React} from 'libraries';
import { Section, View } from 'components/atoms';
import wave1 from 'assets/images/mergeWave.png';
import teams from 'assets/images/connect-teams.png';

const HeroSection = () => {
  return(
    <Section id="hero" className="section-container" style={{backgroundImage: `url(${wave1})`, backgroundRepeat: 'no-repeat',}}>
      <View className="container">
        <View className="m-breadcrumbs">
          <span><a href="#home">Home</a></span> / <span>Kolaborasi</span>
        </View>
        <View className="row hero__height">
          <View className="hero__description">
            <h2 className="hero__titleText">Ayo Kolaborasi</h2>
            <View className="hero__descText">
              <p>Mari beri kontribusi terbaik dalam meningkatkan kualitas sumber daya manusia Indonesia dalam mengembangkan UMKM dengan menjadi <a href="#mitra">Mitra LatihID.</a></p>
            </View>
          </View>
          <View className="hero__rightSection">
            <img src={teams} alt="connecting teams" width="100%" />
          </View>
        </View>
      </View>
    </Section>
  )
}

export default HeroSection;
