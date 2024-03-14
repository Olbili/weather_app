import { useState, useEffect } from 'react';
import Container from './Container/Container';
import Header from './header/Header';
import News from './news/News';
import { newsRequest } from './API/newsRequest';
import { toast } from 'react-toastify';
import Modal from './Modal/Modal';
import { imagesRequest } from './API/imagesRequest';
import SliderImages from './sliderImages/SliderImages';
import fetchData from './API/weatherRequest';
import weekWeatherAPI from './API/weekWeather';

const DEFAULT_IMAGE_URL = './img/default-placeholder.png';

export const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [weatherWeek, setWeatherWeek] = useState([]);

  const fetchNews = async page => {
    try {
      const fetchedNews = await newsRequest(page);
      setNews(fetchedNews);
    } catch (error) {
      console.log('error', error);
      toast.error('Not found');
    }
  };

  const fetchedImages = async page => {
    try {
      const fetchedImages = await imagesRequest();
      setImages(fetchedImages);
    } catch (error) {
      console.log('error', error);
      toast.error('Not found');
    }
  };

  const fetchWeekWeather = async () => {
    // Removed unnecessary parameter
    try {
      const weekWeatherData = await weekWeatherAPI(); // Changed variable name to avoid confusion
      setWeatherWeek(weekWeatherData);
    } catch (error) {
      console.log('error', error);
      toast.error('Not found');
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchedImages();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchWeekWeather();
  }, []);

  const handleSeeMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Header setModalIsOpen={setModalIsOpen} />
      <Modal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      {/* <News
        news={news}
        handleSeeMore={handleSeeMore}
        defaultImg={DEFAULT_IMAGE_URL}
      /> */}
      <SliderImages images={images} />
    </Container>
  );
};

export default App;
