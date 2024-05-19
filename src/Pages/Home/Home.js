// src/pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import Article from '../../components/Article/Article';
import { fetchNews } from '../../services/api';
import './Home.css';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setArticles(news);
    };
    getNews();
  }, []);

  return (
    <div className="home-container">
        <h1 className='title'>News App</h1>
        <ul className='article-item'>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          summary={article.description}
          image={article.urlToImage}
        />
      ))}
      </ul>
    </div>
  );
};

export default Home;
