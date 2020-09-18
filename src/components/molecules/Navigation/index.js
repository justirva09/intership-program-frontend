import { React, useState } from 'libraries';
import brandLogo from 'assets/images/logo.png';
import { View } from 'components/atoms';

const Navigation = () => {
  const [isShow, show] = useState(false);

  const toggleMobile = () => {
    show(!isShow);
  };
  return(
    <header id="header">
      <nav className="m-nav">
        <View className="container m-nav--row">
        <a className="m-nav__brandTitle" href="#testoooo"><img src={brandLogo} alt="brandTitle" width="100%" /></a>
        <View className="m-nav__humbergerIcon" onClick={toggleMobile}>
            <span></span>
            <span></span>
            <span></span>
          </View>
        <View className={`overlay-mobile ${isShow ? 'overlay-mobile--active' : ''}`} onClick={toggleMobile} />
        <View className={`m-nav__navigate ${isShow ? 'm-nav__navigate--show' : ''}`}>
          <a className="m-nav__navigate--link" href="#program">Program</a>
          <a className="m-nav__navigate--link" href="#artikel">Artikel</a>
          <a className="m-nav__navigate--link" href="#about">Tentang Kami</a>
          <a className="m-nav__navigate--link" href="#about">Kolaborasi</a>
          <a className="m-nav__navigate--link" href="#help">Bantuan</a>
          <View className="m-nav__auth">
            <button className="m-nav__btnAuth m-nav__btnAuth--signIn">Masuk</button>
            <button className="m-nav__btnAuth m-nav__btnAuth--register">Daftar</button>
          </View>
        </View>
        </View>
      </nav>
    </header>
  )
}

export default Navigation;