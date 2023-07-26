import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="menu">
        <a href="/">Gmail</a>&nbsp;&nbsp;
        <a href="/">이미지</a>&nbsp;&nbsp;
        <a href="/"><i className="fa-solid fa-bars" style={{ color: '#676565' }}></i></a>&nbsp;&nbsp;
        <a href="/">정보</a>&nbsp;&nbsp;
      </div>
      <div className="header">
        <a href="/"><img src="https://user-images.githubusercontent.com/62934706/255794815-6c10fcc0-a960-4e19-b04e-6a400e0c4174.jpg" alt="Google 로고"></img></a>
      </div>
    </header>
  );
};

const WindowSearch = () => {
  return (
    <section>
      <div className="section">
        <div className="form-bar">
          <a href="/"><i className="fa-solid fa-bars" style={{ color: '#676565' }}></i></a>
          <input type="text" className="search" name="search-bar" placeholder="Google 검색 또는 URL 입력" />
        </div>
      </div>
    </section>
  );
};

const Contents = () => {
  return (
    <section>
        <div class="section-contents">
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

const Footer = () => {
  return (
    <footer>
      <div className="footer">
      </div>
    </footer>
  );
};

const Google = () => {
  return (
    <div className="container">
      <Header />
      <WindowSearch />
      <Contents />
      <Footer />
    </div>
  );
};


export default Google;