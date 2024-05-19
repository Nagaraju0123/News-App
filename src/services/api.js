// src/services/api.js
import axios from 'axios';

const API_KEY = '19191408adf14cd3a4f2bae3972cb8f7';  // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    console.log(response.data)
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
