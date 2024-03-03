// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import developers from './developers.json';

const openSocialMedia = (socialLink) => {
  window.open(socialLink, '_blank');
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {developers.map((developer, index) => (

        <div key={index} className="carousel-card flex flex-col min-h-screen bg-gradient-to-r from-teal-400 to-teal-600">
          <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-md">
            <img
              className="w-full h-auto"
              src={developer.image}
              alt={developer.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold developer-name">{developer.name}</h3>
              <p className="text-gray-500 mb-2">{developer.area}</p>
              <p className="text-gray-700">{developer.bio}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => openSocialMedia(developer.social)}
              >
                Visitar Redes Sociales
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
