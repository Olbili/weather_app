import Container from "./Container/Container";
import Header from "./header/Header";
import { request } from "./API/imagesRequest";
import { useEffect, useState } from "react";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";

export const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);


  const fetchNews = async (page) => {
    try {
    const fetchedNews = await newsRequest(page)
    setNews((prevNews) =>[...prevNews, ...fetchedNews])
    } catch (error) {
      console.log('error', error)
      toast.error("Not found")
    }
   

  }

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleSeeMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  

  return (

    <>
    <Container>
      <Header/>
      <News news={news} handleSeeMore={handleSeeMore}/>
    </Container>
    
    {/* <ToastContainer
  position="top-right"
  autoClose={5000}
  toastClassName="toast-container"
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable={false}
  pauseOnHover
  theme="dark"
/> */}
    
    </>
    
  );
};
