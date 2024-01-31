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

const slides = [
  { id: 1, src: uno },
  { id: 2, src: dos },
  { id: 3, src: tres },
  { id: 4, src: cuatro },
  { id: 5, src: cinco },
  { id: 6, src: seis },
  { id: 7, src: siete },
  { id: 8, src: ocho },
  { id: 9, src: nueve }
];
 
function Carousel () {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} loading="lazy" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      
      </Swiper>
    </>
  );
}

export default Carousel