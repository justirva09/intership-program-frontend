import { React } from 'libraries';
import { Section, View} from 'components/atoms';


const CollabSection = () => (
    <Section id="collabs" className="section-container">
    <View className="container">
      <View className="o-collabSection">
        <h2 className="o-collabSection__title">Ayo Kolaborasi</h2>
        <View className='o-collabSection__desc'>
          <p>Silahkan isi dan lengkapi data berikut ini. LatihID akan segera menghubungi Anda!</p>
        </View>
        <View className="row">
          <View className="o-collabSection__seperator">
            <View className="form-group">
              <label>Kerja Sama yang Diingankan <span>*</span></label>
              <select className="form-control">
                <option value="Media Partner">Media Partner</option>
                <option value="Pemateri LatihID Modul">Pemateri LatihID Modul</option>
                <option value="Key Speaker LatihID Talks">Key Speaker LatihID Talks</option>
                <option value="Pembicara LatihID PETA">Pembicara LatihID PETA</option>
                <option value="Mitra Lainnya">Mitra Lainnya</option>
              </select>
            </View>
            <View className="form-group">
              <label>Nama<span>*</span></label>
              <input className="form-control" type="text" name="name" />
            </View>
            <View className="form-group">
              <label>Email<span>*</span></label>
              <input className="form-control"  type="email" name="email" />
            </View>
            <View className="form-group">
              <label>Nomor Telepon<span>*</span></label>
              <input className="form-control"  type="number" name="number_phone" />
            </View>
          </View>
          <View className="o-collabSection__seperator">
            <View className="form-group">
              <label>Upload CV<span>*</span></label>
              <input className="form-control"  type="file" name="number_phone" />
            </View>
            <View className="form-group">
              <label>Upload Portofolio atau Proposal Kerjasama<span>*</span></label>
              <input className="form-control"  type="file" name="number_phone" />
            </View>
            <View className="form-group">
              <label>Topik yang diajukan<span>*</span></label>
              <textarea className="form-control" resize="none" name="number_phone" />
            </View>
          </View>
          <View className="o-collabSection__submit">
            <button className="btn-submit">Submit</button>
          </View>
        </View>
      </View>
    </View>
  </Section>
);


export default CollabSection;
