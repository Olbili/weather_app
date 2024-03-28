import { createContext, useEffect, useRef, useState } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import Modal from './Modal/Modal';
import { request } from "./API/imagesRequest";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { imagesRequest } from './API/imagesRequest';
import SliderImages from './sliderImages/SliderImages';
import fetchData from './API/Weather';
import { CardsList } from './cards/cardsList/CardsList';
import HeroWrapper from './heroWrapper/HeroWrapper';

export const contextInput = createContext(null);

const DEFAULT_IMAGE_URL = './img/default-placeholder.png';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isChartedVisible, setIsChartedVisible] = useState(false);

  useEffect(() => {
    const storageData = localStorage.getItem('weatherCards');
    const parsedStorageData = JSON.parse(storageData);
    if (parsedStorageData) {
      setWeatherData(parsedStorageData);
    }
  }, []);

  useEffect(() => {
    if (inputValue) {
      fetchData(inputValue)
        .then(data => {
          setWeatherData(prevData => {
            const newData = [data, ...prevData];
            localStorage.setItem('weatherCards', JSON.stringify(newData));
            return newData;
          });
        })
        .catch(error => toast('Incorrect city'));
    }
  }, [inputValue]);

  const delCard = cardName => {
    setWeatherData(prevData => prevData.filter(card => card.name !== cardName));
    localStorage.setItem(
      'weatherCards',
      JSON.stringify(weatherData.filter(card => card.name !== cardName))
    );
    setIsChartedVisible(false);
  };

  const plusInputValue = value => {
    setInputValue(value);
  };

  const fetchNews = async page => {
    try {
      const fetchedNews = await newsRequest(inputValue, page);
      setNews(fetchedNews);
    } catch (error) {
      console.log('error', error);
      toast.error('Not found');
    }
  };

  const fetchedImages = async page => {
    try {
      const fetchedImages = await imagesRequest(inputValue, page);
      setImages(fetchedImages);
    } catch (error) {
      console.log('error', error);
      toast.error('Not found');
    }
  };

  useEffect(() => {
    if (inputValue) {
      fetchNews(currentPage);
    }
  }, [currentPage, inputValue]);

  useEffect(() => {
    fetchedImages(1);
  }, [inputValue]);

  const handleSeeMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleLogout = e => {
    e.preventDefault();

    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    // setUsername('Menu'); // Uncomment if setUsername is defined
    // signUp(); // Uncomment if signUp is defined
  };

  const signUp = () => {
    // setIsUserLoggedIn(prev => !prev); // Uncomment if setIsUserLoggedIn is defined
  };

  useEffect(() => {
    // if (localStorage.getItem('name')) {
    //   setIsUserLoggedIn(true); // Uncomment if setIsUserLoggedIn is defined
    //   setUsername(localStorage.getItem('name')); // Uncomment if setUsername is defined
    // }
  }, []);

  return (
    <>
    <Container>
      <div>{/* <button onClick={notify}>Notify!</button> */}</div>
      {/* <Header  setModalIsOpen={setModalIsOpen} username={username} onLogout={handleLogout} isUserLoggedIn={isUserLoggedIn} signUp={signUp}/> */}
      {/* <Modal
        modalIsOpen={modalIsOpen}
        setUsername={setUsername}
        handleLogout={handleLogout}
        signUp={signUp}
        onClose={() => setModalIsOpen(false)}
      /> */}
      <contextInput.Provider value={{ plusInputValue }}>
        <HeroWrapper />
      </contextInput.Provider>
      {weatherData.length === 0 ? null : 
    <CardsList data={weatherData}  delCard={delCard} setIsChartedVisible={setIsChartedVisible} isChartedVisible={isChartedVisible}/>
}
      <News news={news} handleSeeMore={handleSeeMore} defaultImg={DEFAULT_IMAGE_URL}/>
      <SliderImages images={images}/>
      {isChartedVisible === true && ( <Charted />)}
      <Footer />
      <ToastContainer />
    </Container>
    <Footer />
    </>
  );
};
