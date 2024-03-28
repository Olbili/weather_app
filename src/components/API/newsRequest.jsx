import axios from 'axios';

const API_KEY = '1455a1a4f4fd48da9542fefc2fad7cfa';

export const newsRequest = async (dataInput, page) => {
  try {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const localeString = date.toLocaleString('uk-UA', options);
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${dataInput}&apiKey=${API_KEY}&pageSize=4&sortBy=publishedAt&from=${localeString}&page=${page}`
    );
    if (response.data.totalResults === 0) {
      throw new Error('Limit reached');
    }

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
