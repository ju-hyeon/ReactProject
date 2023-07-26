import React from 'react';
import styles from './MainContents.module.css';

const MainContents = () => {
  return (
    <section>
        <div class={styles.sectionContents}>
          <div>
            <img src="http://placehold.it/112X112" alt="이미지 1" />
            <img src="http://placehold.it/112X112" alt="이미지 2" />
            <img src="http://placehold.it/112X112" alt="이미지 3" />
            <img src="http://placehold.it/112X112" alt="이미지 4" />
            <img src="http://placehold.it/112X112" alt="이미지 5" />
            <img src="http://placehold.it/112X112" alt="이미지 6" />
          </div>
          <div>
            <img src="http://placehold.it/112X112" alt="이미지 7" />
            <img src="http://placehold.it/112X112" alt="이미지 8" />
            <img src="http://placehold.it/112X112" alt="이미지 9" />
            <img src="http://placehold.it/112X112" alt="이미지 10" />
            <img src="http://placehold.it/112X112" alt="이미지 11" />
            <img src="http://placehold.it/112X112" alt="이미지 12" /> 
          </div>
        </div>
  </section>
  );
};


export default MainContents;