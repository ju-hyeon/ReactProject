import React from 'react';
import styles from './WindowSearch.module.css'

const WindowSearch = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.formBar}>
          <a href="/"><img className={styles.magnifying} src="/images/icon/magnifying-glass-solid.svg" alt="bar"></img></a>
          <input type="text" className={styles.search} name="search-bar" placeholder="Google 검색 또는 URL 입력" />
          <a href="/"><img className={styles.microphone} src="/images/icon/microphone-lines-solid.svg" alt="bar"></img></a>
        </div>
      </div>
    </section>
  );
};


export default WindowSearch;