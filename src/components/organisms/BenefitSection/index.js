import { React } from 'libraries';
import {  View, Section } from 'components/atoms';
import { MitraContent } from 'components/molecules';
import line from 'assets/images/line-wave.png';
import bisnisCard from 'assets/images/bisnis.png';
import certificate from 'assets/images/certificate.png';
import money from 'assets/images/carbon_money.png';
import house from 'assets/images/houes.png';

const BenefitSection = () => (
  <Section id="benefit" className="section-container" style={{backgroundImage: `url(${line})`, paddingBottom: '30%', backgroundRepeat:'no-repeat'}}>
    <View className="benefit">
      <View className="benefit__wrapper">
        <h2 className="benefit__Title">Keuntungan Menjadi Mitra Kami</h2>
        <View className="benefit__isMobileRow">
          <MitraContent className={`benefit__content benefit__content--business`} imgSrc={bisnisCard}  title="Jejaring Bisnis" desc="Kesempatan untuk menjangkau 865 pengguna kami" />
          <MitraContent className={`benefit__content benefit__content--intesive`} imgSrc={money}  title="Intensif" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pellentesque elit tellus feugiat malesuada faucibus." />
          <MitraContent className={`benefit__content benefit__content--experience`} imgSrc={house} title="Pengalaman"  desc="Berbagi cerita, motivasi, dan pengalaman menarik dengan menjadi pembicara pada LatihID Talks maupun PETA" />
          <MitraContent className={`benefit__content benefit__content--certificate`} imgSrc={certificate} title="Sertifikat" desc="Dokumentasi sebagai pembicara dalam acara LatihID" />
        </View>
      </View>
    </View> 
  </Section>
);


export default BenefitSection;
