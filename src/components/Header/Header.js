import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.menu}>
        <a href="/">Gmail</a>&nbsp;&nbsp;
        <a href="/">이미지</a>&nbsp;&nbsp;
        <a href="/"><img className={styles.menubar} src="/images/icon/menubar.svg" alt="bar"></img></a>&nbsp;&nbsp;
        <a href="/">정보</a>&nbsp;&nbsp;
      </div>
      <div className={styles.header}>
        <a href="/"><img className={styles.logo} src="/images/logo/logo_google.jpg" alt="Google 로고"></img></a>
      </div>
    </header>
  );
};


export default Header;