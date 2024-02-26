import { useState, useEffect } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./Modal/Modal";

export const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchNews = async (page) => {
    try {
      const fetchedNews = await newsRequest(page);
      setNews((prevNews) => [...prevNews, ...fetchedNews]);
    } catch (error) {
      console.log("error", error);
      toast.error("Not found");
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleSeeMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Container>
      <Header setModalIsOpen={setModalIsOpen} />
      <Modal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <News news={news} handleSeeMore={handleSeeMore} />
    </Container>
  );
};

export default App;
