import { Navigation, View, Section, HeroSection, BenefitSection, MitraSection, CollabSection } from 'components';
import { React } from 'libraries';

const App = () => {
  document.title = 'LatihID - Kolaborasi'
  return (
    <View className="App">
      <Navigation />
      <View className="main-apps" style={{paddingBottom: '2rem'}}>
        <HeroSection />
        <BenefitSection />
        <MitraSection />
        <CollabSection />
      </View>
    </View>
  );
}

export default App;
