import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>안녕하세요, 저는 [이름]입니다!</h1>
        <p>저에 대해 더 알아보세요!</p>
      </header>

      <section className="about-me">
        <h2>자기소개</h2>
        <p>
          안녕하세요! 저는 [이름]이고, [직업/학문]에 관심이 많은 사람입니다.
          [취미/특기]를 좋아하고, 항상 새로운 도전과 배움을 즐깁니다.
        </p>
      </section>

      <section className="skills">
        <h2>나의 기술</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Python, Django</li>
        </ul>
      </section>

      <section className="contact">
        <h2>연락처</h2>
        <p>저와 연락하고 싶으시면, 아래 이메일로 연락 주세요:</p>
        <p>
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
      </section>

      <footer>
        <p>© 2025 [이름]. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
