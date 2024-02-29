import { useState, useEffect } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./Modal/Modal";
import { imagesRequest } from "./API/imagesRequest";
import SliderImages from "./sliderImages/SliderImages";

const DEFAULT_IMAGE_URL = "./img/default-placeholder.png";


export const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
       <News news={news} handleSeeMore={handleSeeMore} defaultImg={DEFAULT_IMAGE_URL}/>
      <SliderImages images={images}/>
    </Container>
  );
};

export default App;
