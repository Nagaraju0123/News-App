// src/components/Article.js
import React from 'react';
import './Article.css';

const Article = ({ title, summary, image }) => (
  <div className="article-container">
    <img src={image} alt={title} className="article-image" />
    <h2 className="article-title">{title}</h2>
    <p className="article-summary">{summary}</p>
  </div>
);

export default Article;
