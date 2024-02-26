import axios from 'axios';

const API_KEY = "1769e5a8ac1a4bc080e6908d078b790e";

export const newsRequest = async (page) => {
  try {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const localeString = date.toLocaleString('uk-UA', options);
    const response = await axios.get(`https://newsapi.org/v2/everything?q=car&apiKey=${API_KEY}&pageSize=4&sortBy=publishedAt&from=${localeString}&page=${page}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// import axios from 'axios';

// const API_KEY = "1769e5a8ac1a4bc080e6908d078b790e"

// const date = new Date();
// const options = {
// year: 'numeric',
// month: 'numeric',
// day: 'numeric',
// };
// const localeString = date.toLocaleString('uk-UA', options);
// console.log(localeString);



// export const newsRequest = async () => {
//     try {
//         const fetch = await axios.get(`https://newsapi.org/v2/everything?q=car&apiKey=${API_KEY}&pageSize=4&sortBy=publishedAt&from=${localeString}`);
//         const data = fetch.data.articles;
//         if (data.length === 0) {
//             throw new Error("Not found")
//         }

//         return data
//     } catch (error) {
//         throw error
//     }
  
// }
