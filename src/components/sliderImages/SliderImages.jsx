// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Pagination,
} from 'swiper/modules';

const SliderImages = ({ images }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {images.map(({ webformatURL }) => (
          <SwiperSlide>
            <img src={webformatURL} />
          </SwiperSlide>
          // <SliderItems webformatURL={webformatURL} />
        ))}
      </Swiper>
    </>
  );
};

export default SliderImages;

// import SliderItems from './sliderItems/SliderItems';
// import React, { Component } from 'react';
// import s from './sliderImages.module.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderImages = ({ images }) => {
//   const settings = {
//     className: 'center',
//     centerMode: true,
//     infinite: true,
//     centerPadding: '5px',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//     ],
//   };
//   return (
//     <div className={s.sliderContainer}>
//       <Slider {...settings}>
//         {images.map(({ webformatURL }) => (
//           <SliderItems webformatURL={webformatURL} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderImages;
