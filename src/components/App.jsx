import { useState, useEffect, createContext } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./Modal/Modal";
import { imagesRequest } from "./API/imagesRequest";
import SliderImages from "./sliderImages/SliderImages";

import fetchData from "./API/Weather";
import { CardsList } from "./cards/cardsList/CardsList";
import HeroWrapper from "./heroWrapper/HeroWrapper";
export const contextInput = createContext(null);

const DEFAULT_IMAGE_URL = "./img/default-placeholder.png";


export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    if (inputValue) {
      fetchData(inputValue).then(data => setWeatherData([data, ...weatherData]));
      localStorage.setItem("weatherCards", JSON.stringify(weatherData))
    }
  }, [inputValue]);

  const delCard = (cardName) => {
    setWeatherData(weatherData.filter(card => card.name !== cardName));
    localStorage.removeItem("weatherCards")
    // localStorage.removeItem("weatherCards",
    //   JSON.stringify(weatherData.filter(card => card.name !== cardName)))
    // localStorage.setItem(
    //   "weatherCards",
    //   JSON.stringify(weatherData.filter(card => card.name !== cardName))
    // );
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

  return (
    <Container>
      <Header setModalIsOpen={setModalIsOpen} />
      <Modal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <contextInput.Provider value={{ plusInputValue }}>
        <HeroWrapper />
      </contextInput.Provider>
      {weatherData.length === 0 ? null : 
    <CardsList data={weatherData}  delCard={delCard}/>
}
       <News news={news} handleSeeMore={handleSeeMore} defaultImg={DEFAULT_IMAGE_URL}/>
      <SliderImages images={images}/>
    </Container>
  );
};

export default App;
