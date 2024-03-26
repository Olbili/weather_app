import { createContext, useEffect, useState } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import Modal from './Modal/Modal';
// import { request } from "./API/imagesRequest";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { imagesRequest } from "./API/imagesRequest";
import SliderImages from "./sliderImages/SliderImages";


// import data from 'data/chart.json';


import fetchData from "./API/Weather";
import { CardsList } from "./cards/cardsList/CardsList";
import HeroWrapper from "./heroWrapper/HeroWrapper";
import { Charted } from "./Chart/Charted";
import Footer from "./footer/Footer";
export const contextInput = createContext(null);


const DEFAULT_IMAGE_URL = "./img/default-placeholder.png";


export const App = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('Menu');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isChartedVisible, setIsChartedVisible] = useState(false)


  useEffect(() => {
    const storageData = localStorage.getItem("weatherCards");
    const parsedStorageData = JSON.parse(storageData);
    if (parsedStorageData) {
      setWeatherData(
        parsedStorageData
      )
    }
  }, [])

  useEffect(() => {
    // if (inputValue) {
    //   fetchData(inputValue).then(data => setWeatherData([data, ...weatherData]));
    //   localStorage.setItem("weatherCards", JSON.stringify(weatherData))
    // }

    if (inputValue) {
      fetchData(inputValue).then(data => {
        setWeatherData(prevData => {
          const newData = [data, ...prevData];
          console.log(newData)
          localStorage.setItem("weatherCards", JSON.stringify(newData));
          return newData;
        });
      }).catch (error => toast("Uncorrect sity"))
    }
  
  }, [inputValue]);


  // const notify = () => toast("Wow so easy!");
  const delCard = (cardName) => {
    setWeatherData(weatherData.filter(card => card.name !== cardName));
    JSON.stringify(weatherData.filter(card => card.name !== cardName))
    localStorage.setItem(
      "weatherCards",
      JSON.stringify(weatherData.filter(card => card.name !== cardName))
    );
    setIsChartedVisible(false);
    // localStorage.getItem("weatherCards");
    // const parsedStorageData = JSON.parse(storageData);
    // localStorage.removeItem("weatherCards")
    // localStorage.setItem("weatherCards", JSON.stringify(weatherData))
    
   
  };
  

  const plusInputValue = (value) => {
    setInputValue(value);
  };

  const fetchNews = async (page) => {
    try {
      const fetchedNews = await newsRequest(page);
      setNews(fetchedNews);
    } catch (error) {
      console.log("error", error);
      toast.error("Not found");
    }
  };

  const fetchedImages = async (page) => {
    try {
      const fetchedImages = await imagesRequest()
      setImages(fetchedImages)
    } catch (error) {
      console.log("error", error);
      toast.error("Not found");
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchedImages()
  }, []);

  const handleSeeMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setUsername('Menu');

    signUp();
  };

  const signUp = () => {
    setIsUserLoggedIn ((prev) => !prev)
  };

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setIsUserLoggedIn(true);
      setUsername(localStorage.getItem('name'));
    }
  }, []);

  
  return (
    <>
    <Container>
      <div>
        {/* <button onClick={notify}>Notify!</button> */}
      </div>
      <Header  setModalIsOpen={setModalIsOpen} username={username} onLogout={handleLogout} isUserLoggedIn={isUserLoggedIn} signUp={signUp}/>
      <Modal modalIsOpen={modalIsOpen} setUsername={setUsername}handleLogout={handleLogout} signUp={signUp} onClose={() => setModalIsOpen(false) }/>
      <contextInput.Provider value={{ plusInputValue }}>
        <HeroWrapper />
      </contextInput.Provider>
      {weatherData.length === 0 ? null : 
    <CardsList data={weatherData}  delCard={delCard} setIsChartedVisible={setIsChartedVisible} isChartedVisible={isChartedVisible}/>
}
      {/* <News news={news} handleSeeMore={handleSeeMore} defaultImg={DEFAULT_IMAGE_URL}/> */}
      {/* <SliderImages images={images}/> */}
      {isChartedVisible === true && ( <Charted />)}
      
      <ToastContainer />
    </Container>
    <Footer />
    </>
  );
};
