import axios from 'axios';

const API_KEY = '22989a7a40e1e4b06faded737d5b0288';

const fetchData = async (q = 'Chicago') => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`
    );
    // console.log('data', data);
    // return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export default fetchData;
