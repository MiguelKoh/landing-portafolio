// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={15}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
     loop={true}
     breakpoints={{
        // Cuando la pantalla es mayor a 640px, se muestra 2 slide
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }}


    >
      <SwiperSlide><img src={uno} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={dos} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={tres} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={cuatro} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={cinco} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={seis} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={siete} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={ocho} alt="imagen" /></SwiperSlide>
      <SwiperSlide><img src={nueve} alt="imagen" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel