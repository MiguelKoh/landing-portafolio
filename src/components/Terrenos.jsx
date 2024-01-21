import React, { useState } from 'react';

const Terrenos = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? totalSlides : currentSlide - 1);
  };

  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}
      >
        <img
          src="https://daisyui.com/images/stock/photo-1.jpg"
          className="w-full"
        />
        {/* Botones de navegación */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>
      {/* Repite el bloque anterior para cada diapositiva */}
      {/* Diapositiva 2 */}
      <div
        id="slide2"
        className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}
      >
        <img
          src="https://daisyui.com/images/stock/photo-2.jpg"
          className="w-full"
        />
        {/* Botones de navegación */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>
      {/* Continúa con las diapositivas 3 y 4 de la misma manera */}
    </div>
  );
};

export default Terrenos;
