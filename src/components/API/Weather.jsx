import axios from 'axios';

const API_KEY = '22989a7a40e1e4b06faded737d5b0288';

const fetchData = async (inputValue = "Chicago") => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`
    ) .catch(function (error) {
      if (error.response) {
        // Запит було зроблено, і сервер відповів кодом стану, який 
        // виходить за межі 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Запит було зроблено, але відповіді не отримано 
        // `error.request` - це екземпляр XMLHttpRequest у браузері та екземпляр 
        // http.ClientRequest у node.js
        console.log(error.request);
      } else {
        // Щось сталося під час налаштування запиту, що викликало помилку
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

    return data;
  } catch (error) {
    throw new Error('Error fetching weather data:', error);
  }
};

export default fetchData;
