// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//imagenes
import uno from '../assets/images/galeria-opt/1.jpg'
import dos from '../assets/images/galeria-opt/2.jpg'
import tres from '../assets/images/galeria-opt/3.jpg'
import cuatro from '../assets/images/galeria-opt/4.jpg'
import cinco from '../assets/images/galeria-opt/5.jpg'
import seis from '../assets/images/galeria-opt/6.jpg'
import siete from '../assets/images/galeria-opt/7.jpg'
import ocho from '../assets/images/galeria-opt/8.jpg'
import nueve from '../assets/images/galeria-opt/9.jpg'


 function Carousel () {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        lazy="true"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={uno}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={dos}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={tres}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cuatro}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cinco}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={seis}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={siete}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ocho}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={nueve}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel