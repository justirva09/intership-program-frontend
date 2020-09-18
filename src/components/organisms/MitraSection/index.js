import { React } from 'libraries';
import { Section, View } from 'components/atoms';
import { CardMitra } from 'components/molecules';
import collab from 'assets/images/collab.png';
import talks from 'assets/images/pembicaraTalks.png';
import peta from 'assets/images/peta.png';
import lainnya from 'assets/images/mitralain.png';

const MitraSection = () => (
  <Section id="mitra" className="section-container">
  <View className="container">
    <View className="o-mitraSection">
      <h2 className="o-mitraSection__title">Jenis - Jenis Kemitraan</h2>
    </View>
    <View className="row">
      <CardMitra
        imgSrc={collab}
        title="Pemateri Modul"
        desc="Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Modul, dengan menyediakan beberapa courses di dalam satu modul pembelajaran."
      />
      <CardMitra 
        imgSrc={talks}
        title="Pembicara Talks"
        desc="Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Talks, yang membahas topik seputar UMKM melalui webinar live atau tatap muka yang interaktif."
      />
      <CardMitra 
        imgSrc={peta}
        title="Pembicara PETA"
        desc="Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID PETA, yang menceritakan pengalaman tentang UMKM dalam video singkat."
      />
      <CardMitra 
        imgSrc={lainnya}
        title="Mitra Lainnya"
        desc="Individu/Lembaga dapat mengajukan berbagai jenis kemitraan lainnya, seperti Media partner."
      />
    </View>
  </View>
</Section>
);


export default MitraSection;
