import React, { useState } from 'react';

const Header = () => {
  return (
    <header>
      <h1>나의 웹사이트</h1>
      <nav>
        <ul>
          <li><a href="#home">홈</a></li>
          <li><a href="#about">소개</a></li>
          <li><a href="#contact">연락처</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 나의 웹사이트</p>
    </footer>
  );
};

const Sidebar = () => {
  return (
    <aside>
      <h3>사이드바</h3>
      <ul>
        <li><a href="#link1">링크 1</a></li>
        <li><a href="#link2">링크 2</a></li>
        <li><a href="#link3">링크 3</a></li>
      </ul>
    </aside>
  );
};

const Article = ({ article, onClick, author, date }) => {
  return (
    <div onClick={() => onClick(article)} className="article">
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <p>작성자: {author}</p>
      <p>작성일: {date}</p>
    </div>
  );
};

const ArticleList = ({ articles, onArticleClick }) => {
  return (
    <section>
      <h2>기사 목록</h2>
      <div className="articles">
        {articles.map((article, index) => (
          <Article
            key={index}
            article={article}
            onClick={onArticleClick}
            author={article.author}    
            date={article.date}        
          />
        ))}
      </div>
    </section>
  );
};

const ArticleDetail = ({ article }) => {
  if (!article) {
    return <p>기사를 선택해주세요.</p>;
  }
  return (
    <section>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </section>
  );
};

const App = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const articles = [
    {
      title: '기사 1',
      excerpt: '기사 1의 요약 내용',
      content: '기사 1의 내용',
      author: '홍길동',
      date: '2025-03-31',
    },
    {
      title: '기사 2',
      excerpt: '기사 2의 요약 내용',
      content: '기사 2의 내용',
      author: '김철수',
      date: '2025-03-30',
    },
    {
      title: '기사 3',
      excerpt: '기사 3의 요약 내용',
      content: '기사 3의 내용',
      author: '이영희',
      date: '2025-03-29',
    },
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <ArticleList articles={articles} onArticleClick={handleArticleClick} />
          <ArticleDetail article={selectedArticle} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
